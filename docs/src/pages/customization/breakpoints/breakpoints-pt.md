# Pontos de quebra (Breakpoints)

<p class="description">API que permite o uso de pontos de quebra em uma ampla variedade de contextos.</p>

Para uma experiência de usuário ideal, as interfaces do material design precisam adaptar seu layout em vários pontos de quebra. Material-UI usa uma implementação **simplificada** da [especificação](https://material.io/design/layout/responsive-layout-grid.html#breakpoints) original.

Cada ponto de quebra (uma chave) corresponde a uma largura de tela *fixa* (um valor):

- **xs,** extra-pequeno: 0px
- **sm,** pequeno: 600px
- **md,** médio: 960px
- **lg,** grande: 1280px
- **xl,** extra-grande: 1920px

Estes [valores de ponto de quebra](/customization/default-theme/?expend-path=$.breakpoints.values) são usados para determinar intervalos de ponto de quebra. Um intervalo inicia a partir do valor do ponto de quebra, incluindo seu valor inicial, até o próximo valor de ponto de quebra menos um:

```js
value         |0px     600px    960px    1280px   1920px
key           |xs      sm       md       lg       xl
screen width  |--------|--------|--------|--------|-------->
range         |   xs   |   sm   |   md   |   lg   |   xl
```

These values can always be customized. You will find them in the theme, in the [`breakpoints.values`](/customization/default-theme/?expend-path=$.breakpoints.values) object.

The breakpoints are used internally in various components to make them responsive, but you can also take advantage of them for controlling the layout of your application through the [Grid](/components/grid/) and [Hidden](/components/hidden/) components.

## CSS Media Queries

CSS media queries is the idiomatic approach to make your UI responsive. We provide four styles helpers to do so:

- [theme.breakpoints.up(key)](#theme-breakpoints-up-key-media-query)
- [theme.breakpoints.down(key)](#theme-breakpoints-down-key-media-query)
- [theme.breakpoints.only(key)](#theme-breakpoints-only-key-media-query)
- [theme.breakpoints.between(start, end)](#theme-breakpoints-between-start-end-media-query)

In the following demo, we change the background color (red, blue & green) based on the screen width.

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

{{"demo": "pages/customization/breakpoints/MediaQuery.js"}}

## JavaScript Media Queries

Sometimes, using CSS isn't enough. You might want to change the React rendering tree based on the breakpoint value, in JavaScript.

### useMediaQuery hook

You can learn more on the [useMediaQuery](/components/use-media-query/) page.

### withWidth()

> ⚠️ This higher-order component will be deprecated for the [useMediaQuery](/components/use-media-query/) hook when the React's hooks are released as stable.

```jsx
import withWidth from '@material-ui/core/withWidth';

function MyComponent(props) {
  return <div>{`Current width: ${props.width}`}</div>;
}

export default withWidth()(MyComponent);
```

In the following demo, we change the rendered DOM element (*em*, <u>u</u>, ~~del~~ & span) based on the screen width.

{{"demo": "pages/customization/breakpoints/WithWidth.js"}}

## API

### `theme.breakpoints.up(key) => media query`

#### Argumentos

1. `key` (*String* | *Number*): A breakpoint key (`xs`, `sm`, etc.) or a screen width number in pixels.

#### Retornos

`media query`: A media query string ready to be used with JSS.

#### Exemplos

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

#### Argumentos

1. `key` (*String* | *Number*): A breakpoint key (`xs`, `sm`, etc.) or a screen width number in pixels.

#### Retornos

`media query`: A media query string ready to be used with JSS, which matches screen widths less than and including the screen size given by the breakpoint key.

#### Exemplos

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

#### Argumentos

1. `key` (*String*): A breakpoint key (`xs`, `sm`, etc.).

#### Retornos

`media query`: A media query string ready to be used with JSS, which matches screen widths greater than and including the screen size given by the breakpoint key.

#### Exemplos

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

#### Argumentos

1. `start` (*String*): A breakpoint key (`xs`, `sm`, etc.).
2. `end` (*String*): A breakpoint key (`xs`, `sm`, etc.).

#### Retornos

`media query`: A media query string ready to be used with JSS, which matches screen widths greater than the screen size given by the breakpoint key in the first argument and less than the the screen size given by the breakpoint key in the second argument.

#### Exemplos

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

Alguns detalhes de implementação que podem ser interessantes para estar ciente:

- Ele encaminha as propriedades *non React static* para que este HOC seja mais "transparente". Por exemplo, pode ser usado para definir um método estático (next.js) `getInitialProps()`.

#### Argumentos

1. `options` (*Object* [optional]): 
    - `options.withTheme` (*Boolean* [opcional]): Padrão `false`. Fornecer o objeto `theme` para o componente como uma propriedade.
    - `options.noSSR` (*Boolean* [optional]): Defaults to `false`. In order to perform the server-side rendering reconciliation, it needs to render twice. A first time with nothing and a second time with the children. This double pass rendering cycle comes with a drawback. The UI might blink. You can set this flag to `true` if you are not doing server-side rendering.
    - `options.initialWidth` (*Breakpoint* [optional]): As `window.innerWidth` is unavailable on the server, we default to rendering an empty component during the first mount. You might want to use an heuristic to approximate the screen width of the client browser screen width. For instance, you could be using the user-agent or the client-hints. https://caniuse.com/#search=client%20hint, we also can set the initial width globally using [`custom properties`](/customization/globals/#default-props) on the theme. In order to set the initialWidth we need to pass a custom property with this shape:

```js
const theme = createMuiTheme({
  props: {
    // withWidth component ⚛️
    MuiWithWidth: {
      // Initial width property
      initialWidth: 'lg', // Breakpoint being globally set 🌎!
    },
  },
});
```

- `options.resizeInterval` (*Number* [optional]): Defaults to 166, corresponds to 10 frames at 60 Hz. Number of milliseconds to wait before responding to a screen resize event.

#### Retornos

`higher-order component`: Should be used to wrap a component.

#### Exemplos

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