# Häufige Fragen

<p class="description">Festgefahren bei einem bestimmten Problem? Sehen Sie sich zuerst einige dieser häufig vorkommenden Probleme in unseren FAQ an.</p>

If you still can't find what you're looking for, you can ask the community in [Spectrum](https://spectrum.chat/material-ui). Verwenden Sie für Fragen zur Vorgehensweise und zu anderen Problemen [StackOverflow](https://stackoverflow.com/questions/tagged/material-ui) anstelle von Github-Problemen. Es gibt ein StackOverflow-Tag namens `material-ui` welchen Sie verwenden können, um Ihre Fragen zu kennzeichnen.

## Warum werden meine Komponenten in Produktions-Builds nicht richtig gerendert?

Dies ist wahrscheinlich ein Problem, das aufgrund von Klassennamenskonflikten auftritt, wenn sich Ihr Code in einem Produktionspaket befindet. Damit die Material-UI funktioniert, muss der `Klassenname` die Werte aller Komponenten auf einer Seite von einer einzigen Instanz des [Klassennamensgenerators](/css-in-js/advanced/#class-names) generiert werden.

Um dieses Problem zu beheben, müssen alle Komponenten auf der Seite so initialisiert werden, dass es immer nur **einen Klassennamensgenerator gibt**.

In einer Reihe von Szenarien könnten Sie versehentlich zwei Klassennamengeneratoren verwenden:

- Sie **bündeln**versehentlich zwei Versionen von Material-UI. Möglicherweise hat eine Abhängigkeit die Material-UI nicht korrekt als Peer-Abhängigkeit.
- Sie verwenden den `StylesProvider` für eine **Teilmenge** von deinem React Tree.
- Sie verwenden einen Bundler und der Code wird so aufgeteilt, dass mehrere Klassennamengenerator-Instanzen erstellt werden.

> Wenn Sie Webpack mit dem [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) verwenden, versuchen Sie, den [`RuntimeChunk` Einstellung unter `Optimierungen`](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) zu konfigurieren.

Im Allgemeinen ist es einfach, dieses Problem zu beheben, indem jede Material-UI-Anwendung mit [` StylesProvider`](/css-in-js/api/#stylesprovider) Komponenten oben in ihren Komponentenbäumen verpackt wird **und verwenden einen einzigen Klassennamengenerator, der von ihnen genutzt wird **.

## Warum bewegen sich die fest positionierten Elemente, wenn ein Modal geöffnet wird?

We block the scroll as soon as a modal is opened. This prevents interacting with the background when the modal should be the only interactive content, however, removing the scrollbar can make your **fixed positioned elements** move. In this situation, you can apply a global `.mui-fixed` class name to tell Material-UI to handle those elements.

## Wie kann ich den Ripple-Effekt global deaktivieren?

The ripple effect is exclusively coming from the `BaseButton` component. You can disable the ripple effect globally by providing the following in your theme:

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 
    },
  },
});
```

## Wie kann ich Übergänge global deaktivieren?

You can disable transitions globally by providing the following in your theme:

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  transitions: {
    // Jetzt haven wir überall `transition: none;`
    create: () => 'none',
  },
});
```

Sometimes you will want to enable this behavior conditionally, for instance during testing or on low-end devices, in these cases, you can dynamically change the theme value.

You can go one step further by disabling all the transitions, animations and the ripple effect:

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  transitions: {
    // Jetzt haben wir überall 'transition: none'
    create: () => 'none',
  },
  overrides: {
    // Name der Komponente ⚛️
    CssBasline: {
      // Name der Regel
      '@global': {
        '*, *::before, *::after': {
          transition: 'none !important',
          animation: 'none !important',
        },
      },
    },
  },
  props: {
    // Name der Komponente ⚛️
    MuiButtonBase: {
      // Die Eigenschaften, die angewandt werden sollen
      disableRipple: true, // Keine Welleneffekte in der ganzen Applikation!
    },
  },
});
```

## Muss ich JSS verwenden, um meine App zu stylen?

It's recommended:

- Es wird eingebaut geliefert, so dass keine zusätzlichen Paketgrößen anfallen.
- Es ist schnell & speichereffizient.
- Es verfügt über eine saubere, konsistente API.
- Es unterstützt eine Reihe von erweiterten Funktionen, entweder nativ oder durch Plugins.

However perhaps you're adding some Material-UI components to an app that already uses another styling solution, or are already familiar with a different API, and don't want to learn a new one? In that case, head over to the [Style Library Interoperability](/guides/interoperability/) section, where we show how simple it is to restyle Material-UI components with alternative style libraries.

## When should I use inline-style vs CSS?

As a rule of thumb, only use inline-style for dynamic style properties. The CSS alternative provides more advantages, such as:

- Auto-Präfixe
- Besseres debuggen
- Medien-Anfragen
- Keyframes

## Wie verwende ich den react-router?

We have documented how to use a [third-party routing library](/demos/buttons/#third-party-routing-library) with the `ButtonBase` component. A lot of our interactive components use it internally: `Link`, `Button`, `MenuItem`, `<ListItem button />`, `Tab`, etc. You can use the same solution with them.

## Wie kann ich auf das DOM-Element zugreifen?

All Material-UI components that should render something in the DOM forward their ref to the underlying DOM component. This means that you can get DOM elements by reading the ref attached to Material-UI components:

```jsx
// oder eine Ref-Setter-Funktion
const ref = React.createRef ();
// Rendern
<0 />;
// Verwendung
const Element = ref.current;
```

If you're not sure if the Material-UI component in question forwards its ref you can check the API documentation under "Props" e.g. the [/api/button/#props](Button API) includes

> Der ref wird an das Wurzelelement weitergeleitet.

indicating that you can access the DOM element with a ref.

## I have several instances of styles on the page

If you are seeing a warning message in the console like the one below, you probably have several instances of `@material-ui/styles` initialized on the page.

> It looks like there are several instances of `@material-ui/styles` initialized in this application. This may cause theme propagation issues, broken class names and makes your application bigger without a good reason.

### Possible reasons

There are several common reasons for this to happen:

- You have another `@material-ui/styles` library somewhere in your dependencies.
- You have a monorepo structure for your project (e.g, lerna, yarn workspaces) and `@material-ui/styles` module is a dependency in more than one package (this one is more or less the same as the previous one).
- You have several applications that are using `@material-ui/styles` running on the same page (e.g., several entry points in webpack are loaded on the same page).

### Duplicated module in node_modules

If you think that the issue is in duplicated @material-ui/styles module somewhere in your dependencies, there are several ways to check this. You can use `npm ls @material-ui/styles`, `yarn list @material-ui/styles` or `find -L ./node_modules | grep /@material-ui/styles/package.json` commands in your application folder.

If none of these commands identified the duplication, try analyzing your bundle for multiple instances of @material-ui/styles. You can just check your bundle source, or use a tool like [source-map-explorer](https://github.com/danvk/source-map-explorer) or [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer).

If you identified that duplication is the issue that you are encountering there are several things you can try to solve it:

If you are using npm you can try running `npm dedupe`. This command searches the local dependencies and tries to simplify the structure by moving common dependencies further up the tree.

If you are using webpack, you can change the way it will [resolve](https://webpack.js.org/configuration/resolve/#resolve-modules) the @material-ui/styles module. You can overwrite the default order in which webpack will look for your dependencies and make your application node_modules more prioritized than default node module resolution order:

```diff
  resolve: {
+   alias: {
+     "@material-ui/styles": path.resolve(appFolder, "node_modules", "@material-ui/styles"),
+   }
  }
```

### Usage with Lerna

One possible fix to get @material-ui/styles to run in a Lerna monorepo across packages, is to [hoist](https://github.com/lerna/lerna/blob/master/doc/hoist.md) shared dependencies to the root of your monorepo file. Try running the bootstrap option with the --hoist flag.

```sh
lerna bootstrap --hoist
```

Alternatively, you can remove @material-ui/styles from your package.json file and hoist it manually to your top-level package.json file.

Example of a package.json file in a Lerna root folder

```json
{
  "name": "my-monorepo",
  "devDependencies": {
    "lerna": "latest"
  },
  "dependencies": {
    "@material-ui/styles": "^4.0.0"
  },
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "clean": "lerna clean",
    "start": "lerna run start",
    "build": "lerna run build"
  }
}
```

### Running multiple applications on one page

If you have several applications running on one page, consider using one @material-ui/styles module for all of them. If you are using webpack, you can use [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/) to create an explicit [vendor chunk](https://webpack.js.org/plugins/commons-chunk-plugin/#explicit-vendor-chunk), that will contain the @material-ui/styles module:

```diff
  module.exports = {
    entry: {
+     vendor: ["@material-ui/styles"],
      app1: "./src/app.1.js",
      app2: "./src/app.2.js",
    },
    plugins: [
+     new webpack.optimize.CommonsChunkPlugin({
+       name: "vendor",
+       minChunks: Infinity,
+     }),
    ]
  }
```

## My App doesn't render correctly on the server

If it doesn't work, in 99% of cases it's a configuration issue. A missing property, a wrong call order, or a missing component. We are very strict about configuration, and the best way to find out what's wrong is to compare your project to an already working setup, check out our [reference implementations](/guides/server-rendering/#reference-implementations), bit by bit.

### CSS funktioniert nur beim ersten Laden, dann fehlt es

The CSS is only generated on the first load of the page. Then, the CSS is missing on the server for consecutive requests.

#### Zu ergreifende Maßnahmen

We rely on a cache, the sheets manager, to only inject the CSS once per component type (if you use two buttons, you only need the CSS of the button one time). You need to create **a new `sheets` instance for each request**.

*example of fix:*

```diff
- // Eine Sheet Instanz erstellen.
-const sheets = new ServerStyleSheets();

function handleRender(req, res) {

+ // Eine Sheet Instanz erstellen.
+ const sheets = new ServerStyleSheets();

  //…

  // Rendern des Komponenten als String.
  const html = ReactDOMServer.renderToString(
```

### React Klassenname Hydratation Nichtübereinstimmung

There is a class name mismatch between the client and the server. It might work for the first request. Another symptom is that the styling changes between initial page load and the downloading of the client scripts.

#### Zu ergreifende Maßnahmen

The class names value relies on the concept of [class name generator](/css-in-js/advanced/#class-names). The whole page needs to be rendered with **a single generator**. This generator needs to behave identically on the server and on the client. Zum Beispiel:

- Sie müssen für jede Anforderung einen neuen Klassennamengenerator bereitstellen. But you shouldn't share a `createGenerateClassName()` between different requests:

*example of fix:*

```diff
- // Erstellen Sie einen neuen Klassennamengenerator.
-const generateClassName = createGenerateClassName();

function handleRender(req, res) {

+ // Erstellt einen neuen Klassennamengenerator.
+ const generateClassName = createGenerateClassName();

  //…

  // Render der Komponente als String.
  const html = ReactDOMServer.renderToString(
```

- Sie müssen sicherstellen, dass auf Ihrem Client und Server die **exakt dieselbe Version** von Material-UI ausführen. Es kann vorkommen, dass eine Nichtübereinstimmung von selbst kleinerer Versionen zu Stilproblemen führen kann. Um die Versionsnummern zu überprüfen, führen Sie `npm list@material-ui/core` in der Umgebung aus, in der Sie Ihre Anwendung erstellen, und in Ihrer Implementierungsumgebung.
    
    Sie können die gleiche Version in verschiedenen Umgebungen festlegen, indem Sie in den Abhängigkeiten Ihrer package.json eine bestimmte MUI-Version angeben.

*example of fix (package.json):*

```diff
  "dependencies": {
    ...

-   "@material-ui/core": "^4.0.0",
+   "@material-ui/core": "4.0.0",
    ...
  },
```

- Sie müssen sicherstellen, dass Server und Client denselben `process.env.NODE_ENV verwenden` Wert haben.

## Warum unterscheiden sich die Farben, die ich sehe, von denen, die ich hier sehe?

The documentation site is using a custom theme. Hence, the color palette is different from the default theme that Material-UI ships. Please refer to [this page](/customization/themes/) to learn about theme customization.

## Material-UI ist großartig. Wie kann ich das Projekt unterstützen?

There are many ways to support Material-UI:

- Verbessern Sie [die Dokumentation](https://github.com/mui-org/material-ui/tree/next/docs).
- Helfen Sie anderen, loszulegen.
- [Verbreiten Sie Material-Ui](https://twitter.com/MaterialUI).
- Beantworten Sie die Fragen auf [StackOverflow](https://stackoverflow.com/questions/tagged/material-ui) oder auf [Spectrum](https://spectrum.chat/material-ui).

If you use Material-UI in a commercial project and would like to support its continued development by becoming a **Sponsor**, or in a side or hobby project and would like to become a backer, you can do so through [OpenCollective](https://opencollective.com/material-ui).

All funds raised are managed transparently, and Sponsors receive recognition in the README and on the Material-UI home page.

## Why does component X require a DOM node in a prop instead of a ref object?

Components like the [Portal](/api/Portal/#props) or [Popper](/api/Popper/#props) require a DOM node in the `container` or `anchorEl` prop respectively. It seems convenient to simply pass a ref object in those props and let Material-UI access the current value. This works in a simple scenario:

```jsx
function App() {
  const container = React.useRef(null);

  return (
    <div className="App">
      <Portal container={container}>
        <span>portaled children</span>
      </Portal>
      <div ref={container} />
    </div>
  );
}
```

where `Portal` would only mount the children into the container when `container.current` is available. Here is a naive implementation of Portal:

```jsx
function Portal({ children, container }) {
  const [node, setNode] = React.useState(null);

  React.useEffect(() => {
    setNode(container.current);
  }, [container]);

  if (node === null) {
    return null;
  }
  return ReactDOM.createPortal(children, node);
}
```

With this simple heuristic `Portal` might re-render after it mounts because refs are up-to-date before any effects run. However, just because a ref is up-to-date doesn't mean it points to a defined instance. If the ref is attached to a ref forwarding component it is not clear when the DOM node will be available. In the above example the `Portal` would run run an effect once but might not re-render because `ref.current` is still `null`. This is especially apparent for React.lazy components in Suspense. The above implementation could also not account for a change in the DOM node.

This is why we require a prop with the actual DOM node so that React can take care of determining when the `Portal` should re-render:

```jsx
function App() {
  const [container, setContainer] = React.useState(null);
  const handleRef = React.useCallback(instance => setContainer(instance), [setContainer])

  return (
    <div className="App">
      <Portal container={container}>
        <span>Portaled</span>
      </Portal>
      <div ref={handleRef} />
    </div>
  );
}
```