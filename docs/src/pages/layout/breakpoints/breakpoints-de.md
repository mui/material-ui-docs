# Haltepunkte

<p class="description">Ein Haltepunkt ist der Bereich vorbestimmter Bildschirmgrößen, für die bestimmte Layoutanforderungen gelten.</p>

Für eine optimale Benutzererfahrung müssen Materialdesign-Schnittstellen in der Lage sein, ihr Layout an verschiedenen Haltepunkten anzupassen. Material-UI verwendet eine **vereinfachte** Implementierung der ursprünglichen [Spezifikation](https://material.io/design/layout/responsive-layout-grid.html#breakpoints).

Jeder Haltepunkt (ein Schlüssel) stimmt mit einer *festen* Bildschirmbreite (ein Wert) überein:

- ** xs, ** extraklein: 0px
- ** sm, ** klein: 600px
- ** md, ** mittel: 960px
- ** lg, ** groß: 1280px
- ** xl ** extra groß: 1920px

Diese [ Haltepunktwerte](/customization/default-theme/?expend-path=$.breakpoints.values) werden zur Bestimmung von Haltepunktbereichen verwendet. Ein Bereich beginnt mit dem Haltepunktwert einschließlich bis zum nächsten Haltepunktwert:

```js
Wert          |0px     600px    960px    1280px   1920px
Schlüssel     |xs      sm       md       lg       xl
Breite        |--------|--------|--------|--------|-------->
Bereich       |   xs   |   sm   |   md   |   lg   |   xl
```

Diese Werte können immer angepasst werden. Sie finden sie im Theme unter dem [`breakpoints.values`](/customization/default-theme/?expend-path=$.breakpoints.values) Schlüssel.

Die Haltepunkte werden intern in verschiedenen Komponenten verwendet, um sie ansprechbar zu machen, Sie können sie jedoch auch benutzten, um das Layout Ihrer Anwendung über das [Grid](/layout/grid/) zu steuern und für [Hidden](/layout/hidden/) Komponenten.

## CSS-Medienabfragen

CSS-Medienabfragen sind der idiomatische Ansatz, um Ihre Benutzeroberfläche ansprechbar zu machen. Dafür bieten wir vier Stilhelfer an:

- [theme.breakpoints.up(key)](#theme-breakpoints-up-key-media-query)
- [theme.breakpoints.down(key)](#theme-breakpoints-down-key-media-query)
- [theme.breakpoints.only(key)](#theme-breakpoints-only-key-media-query)
- [theme.breakpoints.between(start, end)](#theme-breakpoints-between-start-end-media-query)

In der folgenden Demo ändern wir die Hintergrundfarbe (rot, blau & grün) basierend auf der Bildschirmbreite.

```jsx
const styles = theme => ({
  root: {
    padding: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: green[500],
    },
  },
});
```

{{"demo": "pages/layout/breakpoints/MediaQuery.js"}}

## JavaScript-Medienabfragen

Manchmal reicht die Verwendung von CSS nicht aus. Möglicherweise möchten Sie die React-Rendering-Struktur basierend auf dem Haltepunktwert in JavaScript ändern.

### useMediaQuery hook

Weitere Informationen finden Sie auf der [ useMediaQuery](/layout/use-media-query/) Seite.

### withWidth()

> ⚠️ Diese Komponente höherer Ordnung wird ist veraltet und wird durch den [useMediaQuery](/layout/use-media-query/) hook ersetzt, wenn die React hooks als stabil freigegeben werden.

```jsx
import withWidth from '@material-ui/core/withWidth';

function MyComponent(props) {
  return <div>{`Current width: ${props.width}`}</div>;
}

export default withWidth()(MyComponent);
```

In the following demo, we change the rendered DOM element (*em*, <u>u</u>, ~~del~~ & span) based on the screen width.

{{"demo": "pages/layout/breakpoints/WithWidth.js"}}

## API

### `theme.breakpoints.up(key) => media query`

#### Argumente

1. `key` (*String* | *Number*): A breakpoint key (`xs`, `sm`, etc.) or a screen width number in pixels.

#### Rückgabewerte

`media query`: A media query string ready to be used with JSS.

#### Beispiele

```js
const styles = theme => ({
  root: {
    backgroundColor: 'blue',
    // Match [md, ∞[
    //       [960px, ∞[
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'red',
    },
  },
});
```

### `theme.breakpoints.down(key) => media query`

#### Argumente

1. `key` (*String* | *Number*): A breakpoint key (`xs`, `sm`, etc.) or a screen width number in pixels.

#### Rückgabewerte

`media query`: A media query string ready to be used with JSS, which matches screen widths less than and including the screen size given by the breakpoint key.

#### Beispiele

```js
const styles = theme => ({
  root: {
    backgroundColor: 'blue',
    // Match [0, md + 1[
    //       [0, lg[
    //       [0, 1280px[
    [theme.breakpoints.down('md')]: {
      backgroundColor: 'red',
    },
  },
});
```

### `theme.breakpoints.only(key) => media query`

#### Argumente

1. `key` (*String*): A breakpoint key (`xs`, `sm`, etc.).

#### Rückgabewerte

`media query`: A media query string ready to be used with JSS, which matches screen widths greater than and including the screen size given by the breakpoint key.

#### Beispiele

```js
const styles = theme => ({
  root: {
    backgroundColor: 'blue',
    // Match [md, md + 1[
    //       [md, lg[
    //       [960px, 1280px[
    [theme.breakpoints.only('md')]: {
      backgroundColor: 'red',
    },
  },
});
```

### `theme.breakpoints.between(start, end) => media query`

#### Argumente

1. `start` (*String*): A breakpoint key (`xs`, `sm`, etc.).
2. `end` (*String*): A breakpoint key (`xs`, `sm`, etc.).

#### Rückgabewerte

`media query`: A media query string ready to be used with JSS, which matches screen widths greater than the screen size given by the breakpoint key in the first argument and less than the the screen size given by the breakpoint key in the second argument.

#### Beispiele

```js
const styles = theme => ({
  root: {
    backgroundColor: 'blue',
    // Match [sm, md + 1[
    //       [sm, lg[
    //       [600px, 1280px[
    [theme.breakpoints.between('sm', 'md')]: {
      backgroundColor: 'red',
    },
  },
});
```

### `withWidth([options]) => higher-order component`

Inject a `width` property. It does not modify the component passed to it; instead, it returns a new component. This `width` breakpoint property match the current screen width. It can be one of the following breakpoints:

```ts
type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
```

Some implementation details that might be interesting to being aware of:

- It forwards *non React static* properties so this HOC is more "transparent". For instance, it can be used to defined a `getInitialProps()` static method (next.js).

#### Argumente

1. `Optionen` (*Object* [optional]): 
    - `options.withTheme` (*Boolean* [optional]): Defaults to `false`. Provide the `theme` object to the component as a property.
    - `options.noSSR` (*Boolean* [optional]): Defaults to `false`. In order to perform the server-side rendering reconciliation, it needs to render twice. A first time with nothing and a second time with the children. This double pass rendering cycle comes with a drawback. The UI might blink. You can set this flag to `true` if you are not doing server-side rendering.
    - `options.initialWidth` (*Breakpoint* [optional]): As `window.innerWidth` is unavailable on the server, we default to rendering an empty component during the first mount. You might want to use an heuristic to approximate the screen width of the client browser screen width. For instance, you could be using the user-agent or the client-hints. https://caniuse.com/#search=client%20hint, we also can set the initial width globally using [`custom properties`](/customization/themes/#properties) on the theme. In order to set the initialWidth we need to pass a custom property with this shape:

```js
const theme = createMuiTheme({
  props: {
    // withWidth component ⚛️
    MuiWithWidth: {
      // Initial width property
      initialWidth: 'lg', // Breakpoint being globally set 
    },
  },
});
```

- `options.resizeInterval` (*Number* [optional]): Defaults to 166, corresponds to 10 frames at 60 Hz. Number of milliseconds to wait before responding to a screen resize event.

#### Rückgabewerte

`higher-order component`: Should be used to wrap a component.

#### Beispiele

```jsx
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

class MyComponent extends React.Component {
  render () {
    if (isWidthUp('sm', this.props.width)) {
      return <span />
    }

    return <div />;
  }
}

export default withWidth()(MyComponent);
```