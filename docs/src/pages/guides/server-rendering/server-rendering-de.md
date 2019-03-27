# Server-Rendering

<p class="description">Der gebräuchlichste Anwendungsfall für das serverseitige Rendern ist das anfängliche Rendern, wenn ein Benutzer (oder Suchmaschinen-Crawler) Ihre App zum ersten Mal anfordert.</p>

Wenn der Server die Anforderung empfängt, stellt er die erforderlichen Komponenten in einem HTML-String dar und sendet sie als Antwort an den Client. Ab diesem Zeitpunkt übernimmt der Client die Rendering-Aufgaben.

## Material-UI auf dem Server

Die Material-UI wurde von Grund auf mit der Möglichkeit des Renderns auf dem Server entwickelt. Sie müssen jedoch sicherstellen, dass sie korrekt integriert ist. Es ist wichtig, die Seite mit dem erforderlichen CSS zu versehen, andernfalls wird die Seite nur mit HTM-Code gerendert und dann darauf gewartet, dass der Client das CSS einfügt was zu flackern führt (FOUC). Um den Stil in den Client zu injizieren, müssen wir:

1. Eine neue [`ServerStyleSheets`](/css-in-js/api/#serverstylesheets) Instanz bei jede Anfrage erstellen.
2. Den React-Baum mit dem serverseitigen Collector rendern.
3. Das CSS herausziehen.
4. Das CSS zum Client weiterleiten.

Auf der Clientseite wird das CSS ein zweites Mal eingefügt, bevor das serverseitige injizierte CSS entfernt wird.

## Installation

Im folgenden Rezept wird beschrieben, wie das serverseitige Rendering eingerichtet wird.

### Die Server-Seite

Im Folgenden wird beschrieben, wie unsere Serverseite aussehen wird. Wir werden eine[ Express-Middleware](http://expressjs.com/en/guide/using-middleware.html) mit [ app.use ](http://expressjs.com/en/api.html) einrichten, um alle Anfragen zu bearbeiten, die auf unserem Server eingehen. Wenn Sie mit Express oder Middleware nicht vertraut sind, sollten Sie wissen, dass unsere handleRender-Funktion jedes Mal aufgerufen wird, wenn der Server eine Anfrage erhält.

`server.js`

```js
import express from 'express';
import React from 'react';
import App from './App';

// Diese werden in den folgenden Abschnitten gefüllt.
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

### Verarbeiten der Anfrage

Als Erstes müssen wir bei jeder Anfrage ein neues `ServerStyleSheets` erstellen.

Beim Rendern wickeln wir die `App`, unsere Wurzelkomponente, in einem [`StylesProvider`](/css-in-js/api/#stylesprovider) und [`ThemeProvider`](/css-in-js/api/#themeprovider) ein, um die Stilkonfiguration und das `Theme` für alle Komponenten im Komponentenbaum verfügbar zu machen.

Der wichtigste Schritt beim serverseitigen Rendern ist das Rendern des ursprünglichen HTM-Codes unserer Komponente **bevor** wir es an den Kunden senden. Dazu verwenden wir [ReactDOMServer.renderToString()](https://reactjs.org/docs/react-dom-server.html).

Wir erhalten dann das CSS aus unsere `Sheets` mit `sheets.toString()`. Wir werden sehen, wie dies in unserer ` enderFullPage`-Funktion weitergegeben wird.

```jsx
import ReactDOMServer from 'react-dom/server';
import { createMuiTheme } from '@material-ui/core/styles';
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

// Erstellen des Theme Objekts.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
  },
});

function handleRender(req, res) {
  const sheets = new ServerStyleSheets();

  // Rednern des Komponenten als String.
  const html = ReactDOMServer.renderToString(
    sheets.collect(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    ),
  );

  // Entnahme des CSS aus dem Sheet.
  const css = sheets.toString();

  // Zurücksenden der gerenderten Seite an den Client.
  res.send(renderFullPage(html, css));
}
```

### Inject Initial Component HTML and CSS

The final step on the server-side is to inject our initial component HTML and CSS into a template to be rendered on the client side.

```js
function renderFullPage(html, css) {
  return `
    <!doctype html>
    <html>
      <head>
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
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import App from './App';

function Main() {
  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return <App />;
}

// Ein Theme Objekt wird erstellt.
const theme = createMuiTheme({
  palette: {
    primary: green,
    accent: red,
  },
});

ReactDOM.hydrate(
  <ThemeProvider theme={theme}>
    <Main />
  </ThemeProvider>,
  document.querySelector('#root'),
);
```

## Reference implementations

We host different reference implementations which you can find in the [GitHub repository](https://github.com/mui-org/material-ui) under the [`/examples`](https://github.com/mui-org/material-ui/tree/next/examples) folder:

- [The reference implementation of this tutorial](https://github.com/mui-org/material-ui/tree/next/examples/ssr-next)
- [Gatsby](https://github.com/mui-org/material-ui/tree/next/examples/gatsby-next)
- [Next.js](https://github.com/mui-org/material-ui/tree/next/examples/nextjs-next)

## Troubleshooting

If it doesn't work, in 99% of cases it's a configuration issue. A missing property, a wrong call order, or a missing component. We are very strict about configuration, and the best way to find out what's wrong is to compare your project to an already working setup, check out our [reference implementations](#reference-implementations), bit by bit.

### CSS works only on first load then is missing

The CSS is only generated on the first load of the page. Then, the CSS is missing on the server for consecutive requests.

#### Action to Take

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

#### Action to Take

The class names value relies on the concept of [class name generator](/css-in-js/advanced/#class-names). The whole page needs to be rendered with **a single generator**. This generator needs to behave identically on the server and on the client. Zum Beispiel:

- You need to provide a new class name generator for each request. But you might share a `createGenerateClassName()` between different requests:

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

- You need to verify that your client and server are running the **exactly the same version** of Material-UI. It is possible that a mismatch of even minor versions can cause styling problems. To check version numbers, run `npm list @material-ui/core` in the environment where you build your application and also in your deployment environment.
    
    You can also ensure the same version in different environments by specifying a specific MUI version in the dependencies of your package.json.

*beispiel für fix (package.json):*

```diff
  "dependencies": {
    ...

-   "@material-ui/core": "^4.0.0",
+   "@material-ui/core": "4.0.0",
    ...
  },
```

- Sie müssen sicherstellen, dass Server und Client denselben `process.env.NODE_ENV verwenden` Wert haben.