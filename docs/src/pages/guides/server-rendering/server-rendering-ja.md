# サーバーサイドレンダリング

<p class="description">サーバーサイドレンダリングの最も一般的な使用例は、ユーザー（または検索エンジンのクローラー）が最初にアプリを要求した際に、最初に提示される画面を描画するのに使われます。</p>

サーバはリクエストを受け付けると、必要なコンポーネントをHTMLフォーマットの文字列として書き出し、クライアント側に送り返します。 そして、初回リクエスト以降のレンダリングはクライアント側で行います。

## Material-UIをサーバ上で使用する

Material-UIは、サーバーでのレンダリングの制約を考慮してゼロから設計されましたが、正しく統合されるかどうかはユーザー次第です。 サーバサイドレンダリングでは必要とされるCSSが正しく渡される必要があります。HTML要素だけを返しクライアントサイドでCSSが挿入されるのを待つようにコード書かれた場合、CSSが適用される前後でチラつき（俗にいうFOUC）が発生する場合があります。 クライアントにスタイルを注入するには、次のことが必要です。

1. 新しい[`ServerStyleSheets`](/styles/api/#serverstylesheets) のインスタンスを毎リクエストごとに作成する。
2. Server-side collectorを使用しReactのコンポーネントツリーを描画する。
3. コンポーネントツリーで必要となるCSSを読み込む
4. CSSをツリーと一緒にクライアント側へ渡す。

クライアントサイドでは上記のサーバサイドで書かれたCSSが取り除かれるより前に、本来のCSSが挿入されます。

## 設定する

ここからは、サーバーサイドレンダリングをどう設定するかについて見ていきます。

### テーマ

サーバー側とクライアント側で共有されるテーマを作成します。

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

### サーバーサイドの設定

サーバーサイドのコードは概ね次の様になります。 We are going to set up an [Express middleware](https://expressjs.com/en/guide/using-middleware.html) using [app.use](https://expressjs.com/en/api.html) to handle all requests that come in to the server. If you're unfamiliar with Express or middleware, just know that the handleRender function will be called every time the server receives a request.

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

// Isso é acionado toda vez que o servidor recebe uma solicitação.
app.use(handleRender);

const port = 3000;
app.listen(port);
```

### Handling the Request

The first thing that we need to do on every request is create a new `ServerStyleSheets`.

When rendering, we will wrap `App`, the root component, inside a [`StylesProvider`](/styles/api/#stylesprovider) and [`ThemeProvider`](/styles/api/#themeprovider) to make the style configuration and the `theme` available to all components in the component tree.

The key step in server-side rendering is to render the initial HTML of the component **before** we send it to the client side. To do this, we use [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html).

We then get the CSS from the `sheets` using `sheets.toString()`. We will see how this is passed along in the `renderFullPage` function.

```jsx
res.send(renderFullPage(html, css));
}

const app = express();

app.use('/build', express.static('build'));

// This is fired every time the server-side receives a request.
  const css = sheets.toString();

  // Send the rendered page back to the client.
  import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/core/styles';
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

  // Grab the CSS from the sheets.
app.use(handleRender);

const port = 3000;
app.listen(port);
```

### Inject Initial Component HTML and CSS

The final step on the server-side is to inject the initial component HTML and CSS into a template to be rendered on the client side.

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

The client side is straightforward. All we need to do is remove the server-side generated CSS. Let's take a look at the client file:

`client.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
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

## Reference implementations

We host different reference implementations which you can find in the [GitHub repository](https://github.com/mui-org/material-ui) under the [`/examples`](https://github.com/mui-org/material-ui/tree/master/examples) folder:

- [The reference implementation of this tutorial](https://github.com/mui-org/material-ui/tree/master/examples/ssr)
- [Gatsby](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
- [Next.js](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)

## Troubleshooting

Check out the FAQ answer: [My App doesn't render correctly on the server](/getting-started/faq/#my-app-doesnt-render-correctly-on-the-server).