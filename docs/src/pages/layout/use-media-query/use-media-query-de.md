---
title: Medienanfragen in React für Responsive Design
---
# useMediaQuery

<p class="description">Dies ist ein CSS-Media-Abfrage-Hook für React. Es wartet auf Übereinstimmungen mit einer CSS-Medienabfrage. Es ermöglicht das Rendern von Komponenten basierend darauf, ob die Abfrage übereinstimmt oder nicht.</p>

Einige der wichtigsten Funktionen:

- ⚛️ Es verfügt über eine idiomatische React-API.
- 🚀 Es ist performant. Es observiert das Dokument, welches erkennt, wenn sich die Medienabfragen ändern, anstatt die Werte regelmäßig abzufragen.
- 📦 [ kB](/size-snapshot) gzipped.
- 💄 Es ist eine Alternative zu react-responsive und react-media, die auf Einfachheit abzielen.
- 🤖 Es unterstützt serverseitiges Rendering.

## Einfache Medienabfrage

Sie sollten eine Medienabfrage für das erste Argument des Hooks bereitstellen. Die Medienabfragezeichenfolge kann durch jede gültige CSS-Medienabfrage erfolgen, z.B. `'print'`.

```jsx
import useMediaQuery from '@material-ui/core/useMediaQuery';

function MyComponent() {
  const matches = useMediaQuery('(min-width:600px)');

  return <span>{`(min-width:600px) entspricht: ${matches}`}</span>;
}
```

{{"demo": "pages/layout/use-media-query/SimpleMediaQuery.js"}}

## Verwenden der Haltepunkt-Helfer der Material-UI

Sie können die Material-UI [Haltepunkt-Helfer](/layout/breakpoints/) wie folgt verwenden:

```jsx
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function MyComponent() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return <span>{`theme.breakpoints.up('sm') entspricht: ${matches}`}</span>;
}
```

{{"demo": "pages/layout/use-media-query/ThemeHelper.js"}}

## Server-Rendering

An implementation of [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) is required on the server, we recommend using [css-mediaquery](https://github.com/ericf/css-mediaquery). We also encourage the usage of the `useMediaQueryTheme` version of the hook that fetches properties from the theme. This way, you can provide a `ssrMatchMedia` option once for all your React tree.

{{"demo": "pages/layout/use-media-query/ServerSide.js"}}

## Migrating from `withWidth()`

The `withWidth()` higher-order component injects the screen width of the page. You can reproduce the same behavior as follow:

```jsx
function MyComponent() {
  const theme = useTheme();
  const width =
    [...theme.breakpoints.keys].reverse().reduce((output, key) => {
      const matches = useMediaQuery(theme.breakpoints.only(key));

      return !output && matches ? key : output;
    }, null) || 'xs';

  return <span>{width}</span>;
}
```

{{"demo": "pages/layout/use-media-query/UseWidth.js"}}

## API

### `useMediaQuery(query, [options]) => matches`

#### Arguments

1. `query` (*String*): A string representing the media query to handle.
2. `Optionen` (*Object* [optional]): 
    - `options.defaultMatches` (*Boolean* [optional]): As `window.matchMedia()` is unavailable on the server, we return a default matches during the first mount. The default value is `false`.
    - `options.noSsr` (*Boolean* [optional]): Defaults to `false`. Um den serverseitigen Renderingabgleich durchzuführen, muss er zweimal gerendert werden. Ein erstes Mal mit nichts und ein zweites Mal mit den Kind-Elementen. Dieser Zyklus mit zwei Durchgängen ist mit einem Nachteil verbunden. It's slower. You can set this flag to `true` if you are **not doing server-side rendering**.
    - `options.ssrMatchMedia` (*Function* [optional]) You might want to use an heuristic to approximate the screen of the client browser. For instance, you could be using the user-agent or the client-hint https://caniuse.com/#search=client%20hint. You can provide a global ponyfill using [`custom properties`](/customization/themes/#properties) on the theme. Check the [server-side rendering example](#server-side-rendering).

#### Rückgabewerte

`matches`: Matches is `true` if the document currently matches the media query and `false` when it does not.

#### Beispiele

```jsx
import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function SimpleMediaQuery() {
  const matches = useMediaQuery('print');

  return <span>{`@media (min-width:600px) matches: ${matches}`}</span>;
}
```