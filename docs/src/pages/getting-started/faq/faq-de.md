# Häufige Fragen

<p class="description">Festgefahren bei einem bestimmten Problem? Sehen Sie sich zuerst einige dieser häufig vorkommenden Probleme in unseren FAQ an.</p>

Wenn Sie immer noch nicht finden, wonach Sie suchen, können Sie die Community auf [gitter](https://gitter.im/mui-org/material-ui) fragen. Verwenden Sie für Fragen zur Vorgehensweise und zu anderen Problemen [StackOverflow](https://stackoverflow.com/questions/tagged/material-ui) anstelle von Github-Problemen. Es gibt ein StackOverflow-Tag namens `material-ui` welchen Sie verwenden können, um Ihre Fragen zu kennzeichnen.

## Warum werden meine Komponenten in Produktions-Builds nicht richtig gerendert?

Dies ist wahrscheinlich ein Problem, das aufgrund von Klassennamenskonflikten auftritt, wenn sich Ihr Code in einem Produktionspaket befindet. Damit die Material-UI funktioniert, muss der `Klassenname` die Werte aller Komponenten auf einer Seite von einer einzigen Instanz des [Klassennamensgenerators](/css-in-js/advanced/#class-names) generiert werden.

Um dieses Problem zu beheben, müssen alle Komponenten auf der Seite so initialisiert werden, dass es immer nur **einen Klassennamensgenerator gibt**.

In einer Reihe von Szenarien könnten Sie versehentlich zwei Klassennamengeneratoren verwenden:

- Sie **bündeln**versehentlich zwei Versionen von Material-UI. Möglicherweise hat eine Abhängigkeit die Material-UI nicht korrekt als Peer-Abhängigkeit.
- Sie verwenden den `StylesProvider` für eine **Teilmenge** von deinem React Tree.
- Sie verwenden einen Bundler und der Code wird so aufgeteilt, dass mehrere Klassennamengenerator-Instanzen erstellt werden. > Wenn Sie Webpack mit dem [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) verwenden, versuchen Sie, den [`RuntimeChunk` Einstellung unter `Optimierungen`](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) zu konfigurieren.

Im Allgemeinen ist es einfach, dieses Problem zu beheben, indem jede Material-UI-Anwendung mit [` StylesProvider`](/css-in-js/api/#stylesprovider) Komponenten oben in ihren Komponentenbäumen verpackt wird **und verwenden einen einzigen Klassennamengenerator, der von ihnen genutzt wird **.

⚠️ Wenn Sie es eilig haben, bieten wir eine Option als schnelle Notlösung, um die Klassennamen **deterministisch** zu machen: [`gefährliche UseGlobalCSS `](/css-in-js/advanced/#deterministic-class-names).

## Warum bewegen sich die fest positionierten Elemente, wenn ein Modal geöffnet wird?

Wir blockieren die Blättern, sobald eine Modalität geöffnet ist. Dies verhindert die Interaktion mit dem Hintergrund, wenn der Modal der einzige interaktive Inhalt sein sollte. Wenn Sie jedoch die Bildlaufleiste entfernen, können Sie Ihre **fest positionierten Elemente ** bewegen. In dieser Situation können Sie einen globalen `.mui-fixed` Klassennamen anwenden, damit Material-UI mit diesen Elementen umgehen kann.

## Wie kann ich den Ripple-Effekt global deaktivieren?

Der Ripple-Effekt kommt ausschließlich von der `BaseButton` Komponente. Sie können den Ripple-Effekt global deaktivieren, indem Sie in Ihrem Theme folgendes angeben:

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    // Name des Komponenten ⚛️
    MuiButtonBase: {
      // The Eigenschaften, die angewendet werden soll
      disableRipple: true, // Kein Ripple-Effekt in der ganzen Applikation mehr 
    },
  },
});
```

## Wie kann ich Animationen global deaktivieren?

Sie können Animationen global deaktivieren, indem Sie in Ihrem Theme folgendes angeben:

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  transitions: {
    // So we have `transition: none;` everywhere
    create: () => 'none',
  },
});
```

Sometimes you will want to enable this behavior conditionally, for instance during testing or on low-end devices, in these cases, you can dynamically change the theme value.

## Do I have to use JSS to style my app?

It's highly recommended:

- It comes built in, so carries no additional bundle size overhead.
- It's fast & memory efficient.
- It has a clean, consistent [API](https://cssinjs.org/json-api/).
- It supports a number of advanced features, either natively, or through [plugins](https://cssinjs.org/plugins/).

However perhaps you're adding some Material-UI components to an app that already uses another styling solution, or are already familiar with a different API, and don't want to learn a new one? In that case, head over to the [Style Library Interoperability](/guides/interoperability/) section, where we show how simple it is to restyle Material-UI components with alternative style libraries.

## When should I use inline-style vs classes?

As a rule of thumb, only use inline-style for dynamic style properties. The CSS alternative provides more advantages, such as:

- auto-prefixing
- better debugging
- media queries
- keyframes

## How do I use react-router?

We have documented how to use a [third-party routing library](/demos/buttons/#third-party-routing-library) with the `ButtonBase` component. A lot of our interactive components use it internally: `Button`, `MenuItem`, `<ListItem button />`, `Tab`, etc. You can use the same solution with them.

## How do I combine the `withStyles()` and `withTheme` HOCs?

There are a number of different options:

**`withTheme` option:**

```js
export default withStyles(styles, { withTheme: true })(Modal);
```

**`compose()` helper function:**

```js
import { compose } from 'recompose';

export default compose(
  withTheme,
  withStyles(styles)
)(Modal);
```

**raw function chaining:**

```js
export default withTheme(withStyles(styles)(Modal));
```

## How can I access the DOM element?

Wrap the component with the [`RootRef`](/api/root-ref/) helper.

## Why are the colors I am seeing different from what I see here?

The documentation site is using a custom theme. Hence, the color palette is different from the default theme that Material-UI ships. Please refer to [this page](/customization/themes/) to learn about theme customization.

## Material-UI is awesome. How can I support the project?

There are many ways to support Material-UI:

- Improve [the documentation](https://github.com/mui-org/material-ui/tree/next/docs).
- Help others to get started.
- [Spread the word](https://twitter.com/MaterialUI).
- Answer questions on [StackOverflow](https://stackoverflow.com/questions/tagged/material-ui) or on [Spectrum](https://spectrum.chat/material-ui).

If you use Material-UI in a commercial project and would like to support its continued development by becoming a **Sponsor**, or in a side or hobby project and would like to become a backer, you can do so through [OpenCollective](https://opencollective.com/material-ui).

All funds raised are managed transparently, and Sponsors receive recognition in the README and on the Material-UI home page.