# 为什么要服务端渲染？

<p class="description">服务器端呈现的最常见用例是在用户（或搜索引擎爬虫）首次请求您的应用时处理初始呈现。</p>

当服务器收到请求时，它会将所需的组件呈现为HTML字符串，然后将其作为响应发送给客户端。 从那时起，客户接管渲染职责。

## Material-UI on the server

Material-UI was designed from the ground-up with the constraint of rendering on the server, but it's up to you to make sure it's correctly integrated. It's important to provide the page with the required CSS, otherwise the page will render with just the HTML then wait for the CSS to be injected by the client, causing it to flicker (FOUC). 要将样式注入客户端，我们需要：

1. Create a fresh, new [`ServerStyleSheets`](/css-in-js/api/#serverstylesheets) instance on every request.
2. Render the React tree with the server-side collector.
3. Pull the CSS out.
4. 将CSS传递给客户端。

在客户端，在删除服务器端注入的CSS之前，将第二次注入CSS。

## 配置

在下面的配方中，我们将了解如何设置服务器端呈现。

### The theme

We create a theme that will be shared between the client and the server.

`theme.js`

```js
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
```

### The server-side

The following is the outline for what our server-side is going to look like. We are going to set up an [Express middleware](http://expressjs.com/en/guide/using-middleware.html) using [app.use](http://expressjs.com/en/api.html) to handle all requests that come in to our server. If you're unfamiliar with Express or middleware, just know that our handleRender function will be called every time the server receives a request.

`server.js`

```js
import express from 'express';

// We are going to fill these out in the sections to follow.
function renderFullPage(html, css) {
  /* ... */
}

function handleRender(req, res) {
  /* ... */
}

const app = express();

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port);
```

### Handling the Request

The first thing that we need to do on every request is create a new `ServerStyleSheets`.

When rendering, we will wrap `App`, our root component, inside a [`StylesProvider`](/css-in-js/api/#stylesprovider) and [`ThemeProvider`](/css-in-js/api/#themeprovider) to make the style configuration and the `theme` available to all components in the component tree.

The key step in server-side rendering is to render the initial HTML of our component **before** we send it to the client side. To do this, we use [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html).

We then get the CSS from our `sheets` using `sheets.toString()`. We will see how this is passed along in our `renderFullPage` function.

```jsx
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    ),
  );

  // Grab the CSS from our sheets.
  const css = sheets.toString();

  // Send the rendered page back to the client.
  res.send(renderFullPage(html, css));
}

const app = express();

app.use('/build', express.static('build'));

// This is fired every time the server-side receives a request.
app.use(handleRender);

const port = 3000;
app.listen(port);
```

### Inject Initial Component HTML and CSS

The final step on the server-side is to inject our initial component HTML and CSS into a template to be rendered on the client side.

```js
function renderFullPage(html, css) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My page</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
}
```

### The Client Side

The client side is straightforward. All we need to do is remove the server-side generated CSS. Let's take a look at our client file:

`client.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import App from './App';
import theme from './theme';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

ReactDOM.hydrate(<Main />, document.querySelector('#root'));
```

## 参考实现

We host different reference implementations which you can find in the [GitHub repository](https://github.com/mui-org/material-ui) under the [`/examples`](https://github.com/mui-org/material-ui/tree/next/examples) folder:

- [本教程的参考实现](https://github.com/mui-org/material-ui/tree/next/examples/ssr-next)
- [Gatsby](https://github.com/mui-org/material-ui/tree/next/examples/gatsby-next)
- [Next.js](https://github.com/mui-org/material-ui/tree/next/examples/nextjs-next)

## 故障排除

If it doesn't work, in 99% of cases it's a configuration issue. A missing property, a wrong call order, or a missing component. We are very strict about configuration, and the best way to find out what's wrong is to compare your project to an already working setup, check out our [reference implementations](#reference-implementations), bit by bit.

### CSS works only on first load then is missing

The CSS is only generated on the first load of the page. Then, the CSS is missing on the server for consecutive requests.

#### 要采取的行动

We rely on a cache, the sheets manager, to only inject the CSS once per component type (if you use two buttons, you only need the CSS of the button one time). You need to create **a new `sheets` for each request**.

*example of fix:*

```diff
-// Create a sheets instance.
-const sheets = new ServerStyleSheets();

function handleRender(req, res) {

+ // Create a sheets instance.
+ const sheets = new ServerStyleSheets();

  //…

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
```

### React class name hydration mismatch

There is a class name mismatch between the client and the server. It might work for the first request. Another symptom is that the styling changes between initial page load and the downloading of the client scripts.

#### 要采取的行动

The class names value relies on the concept of [class name generator](/css-in-js/advanced/#class-names). The whole page needs to be rendered with **a single generator**. This generator needs to behave identically on the server and on the client. 例如：

- 您需要为每个请求提供一个新的类名生成器。 但是您可以在不同的请求之间共享 `createGenerateClassName()`：

*example of fix:*

```diff
-// Create a new class name generator.
-const generateClassName = createGenerateClassName();

function handleRender(req, res) {

+ // Create a new class name generator.
+ const generateClassName = createGenerateClassName();

  //…

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
```

- 您需要验证您的客户端和服务器是否正在运行 **与Material-UI完全相同的版本**。 即使是次要版本的不匹配也可能导致样式问题。 要检查版本号，请在构建应用程序的环境中以及部署环境中运行 `npm list @material-ui/core`。
    
    您还可以通过在package.json的依赖项中指定特定的MUI版本来确保不同环境中的相同版本。

*example of fix (package.json):*

```diff
  "dependencies": {
    ...

-   "@material-ui/core": "^4.0.0",
+   "@material-ui/core": "4.0.0",
    ...
  },
```

- 您需要确保服务器和客户端共享相同的 `process.env.NODE_ENV` 值。