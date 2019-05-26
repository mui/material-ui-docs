# Renderização no servidor

<p class="description">O caso de uso mais comum para a renderização do lado do servidor, é manipular a renderização inicial quando um usuário (ou rastreador do mecanismo de pesquisa) solicita sua aplicação.</p>

Quando o servidor recebe a solicitação, ele renderiza o componente(s) requerido em uma cadeia HTML e o envia como uma resposta ao cliente. A partir desse momento, o cliente assume as funções de renderização.

## Material-UI no servidor

O Material-UI foi desenhado da base com as limitações de renderizar no servidor, mas você pode se certificar que será integrado corretamente. É importante fornecer a página com o CSS necessário, caso contrário a página irá renderizar somente o HTML até o CSS ser injetado pelo cliente, causando uma tremulação (FOUC). Para injetar o estilo no cliente, precisamos:

1. Cria uma instância nova e fresca do [`ServerStyleSheets`](/styles/api/#serverstylesheets) em cada requisição.
2. Renderize a árvore React com o coletor do lado do servidor.
3. Puxe o CSS para fora.
4. Passe o CSS junto ao cliente.

No lado do cliente, o CSS será injetado uma segunda vez antes de remover o CSS injetado no lado do servidor.

## Configurando

Na receita a seguir, vamos ver como configurar a renderização do lado do servidor.

### O tema

Criamos um tema que será compartilhado entre o cliente e o servidor.

`theme.js`

```js
import { createMuiTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

// Cria a instância do tema.
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

### O lado do servidor

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

// Isso é acionado toda vez que o servidor recebe uma solicitação.
app.use(handleRender);

const port = 3000;
app.listen(port);
```

### Handling the Request

The first thing that we need to do on every request is create a new `ServerStyleSheets`.

When rendering, we will wrap `App`, our root component, inside a [`StylesProvider`](/styles/api/#stylesprovider) and [`ThemeProvider`](/styles/api/#themeprovider) to make the style configuration and the `theme` available to all components in the component tree.

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

  // Renderiza o componente para string.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    ),
  );

  // Pega o CSS de nossas folhas.
  const css = sheets.toString();

  // Envia a página renderizada de volta ao cliente.
  res.send(renderFullPage(html, css));
}

const app = express();

app.use('/build', express.static('build'));

// Isso é acionado toda vez que o servidor recebe uma solicitação.
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

## Reference implementations

We host different reference implementations which you can find in the [GitHub repository](https://github.com/mui-org/material-ui) under the [`/examples`](https://github.com/mui-org/material-ui/tree/master/examples) folder:

- [The reference implementation of this tutorial](https://github.com/mui-org/material-ui/tree/master/examples/ssr)
- [Gatsby](https://github.com/mui-org/material-ui/tree/master/examples/gatsby)
- [Next.js](https://github.com/mui-org/material-ui/tree/master/examples/nextjs)

## Troubleshooting

Check out our FAQ answer: [My App doesn't render correctly on the server](/getting-started/faq/#my-app-doesnt-render-correctly-on-the-server).