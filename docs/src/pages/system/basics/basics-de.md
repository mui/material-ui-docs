# @material-ui/system

<p class="description">Gestylte System- und Stilfunktionen zum Erstellen leistungsstarker Design-Systeme.</p>

## Erste Schritte

`@material-ui/system` bietet Hilfsfunktionen auf niedriger Ebene, die als "*Style Funktionen*" bezeichnet werden für den Aufbau leistungsstarker Konstruktionssysteme. Einige der wichtigsten Funktionen:

- ⚛️ Greifen Sie über die Komponentenrequisiten direkt auf die Themewerte zu.
- 🦋 Konsistenz der Benutzeroberfläche fördern.
- 🌈 Schreibe mühelos responsive Styles.
- 🦎 Arbeiten Sie mit beliebigen Themeobjekten.
- 💅 Arbeite mit den bekanntesten CSS-in-JS Lösungen.
- 📦 Weniger als [4 KB gzipped](https://bundlephobia.com/result?p=@material-ui/system).
- 🚀 [ Schnell genug ](https://github.com/mui-org/material-ui/blob/next/packages/material-ui-benchmark/README.md#material-uisystem) kein Flaschenhals zur Laufzeit zu sein.

Es ist wichtig zu verstehen, dass dieses Paket mit dieser Signatur reine (nebenwirkungsfreie) Stilfunktionen bereitstellt: `({ theme, ...style }) => style` ** das ist alles** .

### Demo

Im Rest dieses *Erste Schritte* Abschnitts verwenden wir **styled-components** als Referenzbeispiel (um die Universalität dieses Pakets zu betonen). Alternativ können Sie [JSS verwenden](#interoperability). Die Demos basieren ebenfalls auf der **Standardeinstellung** des Material-UI [Themeobjekt](/customization/default-theme/).

```jsx
import { palette, spacing, typography } from '@material-ui/system';
import styled from 'styled-components';

const Box = styled.div`${palette}${spacing}${typography}`;
// oder importiere Box von'@material-ui/core/Box';

<Box
  color="primary.main"
  bgcolor="background.paper"
  fontFamily="h6.fontFamily"
  fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' } }
  p={{ xs: 2, sm: 3, md: 4} }
>
  @material-ui/system
</Box>
```

{{"demo": "pages/system/basics/Demo.js"}}

### Installation

```jsx
// usando npm
npm install @material-ui/system

// usando yarn
yarn add @material-ui/system
```

### Komponent erstellen

Um die `Box` Komponente zu verwenden, müssen Sie diese zuerst erstellen. Fügen Sie zunächst eine `Abstand` und eine `Palette ` Funktion zum Stilargument hinzu.

```jsx
import styled from 'styled-components';
import { spacing, palette } from '@material-ui/system';

const Box = styled.div`${spacing}${palette}`;

export default Box;
```

Diese Box-Komponente unterstützt jetzt neue [Abstandseigenschaften](/system/spacing/#api) und [Farbeigenschaften](/system/palette/#api). Zum Beispiel können Sie eine Padding-Eigenschaft angeben: `p` und eine Farbeigenschaft: `color`.

```jsx
<Box p="1rem" color="grey">Gib mir etwas Platz!</Box>
```

Die Komponente kann mit beliebigen gültigen CSS-Werten gestaltet werden.

### Theming

Die meiste Zeit möchten Sie sich jedoch auf die Werte eines Themas verlassen, um die Konsistenz der Benutzeroberfläche zu erhöhen. Es ist besser einen vorgegebenen Satz von Paddings und Farbwerten zu haben. Importieren Sie den theme provider Ihrer Styling-Lösung.

```jsx
import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  spacing: 4,
  palette: {
    primary: '#007bff',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* children */}
    </ThemeProvider>
  )
}

export default App
```

Jetzt können Sie einen Abstandsmultiplikatorwert angeben:

```jsx
<Box p={1}>4px</Box>
<Box p={2}>8px</Box>
<Box p={-1}>-4px</Box>
```

und eine Grundfarbe:

```jsx
<Box color="primary">blue</Box>
```

### Alles inklusive

Um die Box-Komponente noch nützlicher zu machen, haben wir eine Sammlung von Stilfunktionen erstellt. Hier ist eine vollständige Liste:

- [borders](/system/borders/#api)
- [display](/system/display/#api)
- [flexbox](/system/flexbox/#api)
- [palette](/system/palette/#api)
- [positions](/system/positions/#api)
- [shadows](/system/shadows/#api)
- [sizing](/system/sizing/#api)
- [spacing](/system/spacing/#api)
- [typography](/system/typography/#api)

Wenn Sie bereits `@material-ui/core` verwenden, können Sie unsere [vorgefertigte Box](/utils/box/) Komponente verwenden (intern mit JSS):

```jsx
import Box from '@material-ui/core/Box';
```

## Interoperabilität

`@material-ui/system` arbeitet mit den meisten CSS-in-JS-Bibliotheken, einschließlich JSS, Stilkomponenten und Emotionen.

Wenn Sie bereits `@material-ui/core` verwenden, empfehlen wir Ihnen, mit der **JSS** zur Minimierung der Paketgröße zu beginnen.

### JSS

```jsx
import { palette, spacing, compose } from '@material-ui/system';
import { styled } from '@material-ui/styles';

const Box = styled(compose(spacing, palette));
```

{{"demo": "pages/system/basics/JSS.js"}}

### Styled components

```jsx
import { palette, spacing } from '@material-ui/system';
import styled from 'styled-components';

const Box = styled.div`${palette}${spacing}`;
```

{{"demo": "pages/system/basics/StyledComponents.js"}}

### Emotion

```jsx
import { spacing, palette } from '@material-ui/system';
import styled from '@emotion/styled';

const Box = styled.div`${palette}${spacing}`;
```

{{"demo": "pages/system/basics/Emotion.js"}}

## Reaktionsfähig

**All** the properties are responsive, we support 3 different APIs. It uses this default, but customizable, breakpoints theme structure:

```js
const values = {
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920,
};

const theme = {
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    up: key => `@media (min-width:${values[key]}px)`,
  },
};
```

### Array

```jsx
<Box p={[2, 3, 4]} />

/**
 * Outputs:
 *
 * padding: 16px;
 * @media (min-width: 600px) {
 *   padding: 24px;
 * }
 * @media (min-width: 960px) {
 *   padding: 32px;
 * }
 */
```

### Object

```jsx
<Box p={{ xs: 2, sm: 3, md: 4 }} />

/**
 * Outputs:
 *
 * padding: 16px;
 * @media (min-width: 600px) {
 *   padding: 24px;
 * }
 * @media (min-width: 960px) {
 *   padding: 32px;
 * }
 */
```

### Collocation

If you want to group the breakpoint values, you can use our `breakpoints()` helper.

```jsx
import { compose, spacing, palette, breakpoints } from '@material-ui/system';
import styled from 'styled-components';

const Box = styled.div`
  ${breakpoints(
    compose(
      spacing,
      palette,
    ),
  )}
`;

<Box
  p={2}
  sm={{ p: 3 } }
  md={{ p: 4 } }
/>

/**
 * Saídas:
 *
 * padding: 16px;
 * @media (min-width: 600px) {
 *   padding: 24px;
 * }
 * @media (min-width: 960px) {
 *   padding: 32px;
 * }
 */
```

## Custom style props

### `style(options) => style function`

Use this helper to create your own style function.

We don't support all the CSS properties. It's possible that you want to support new ones. It's also possible that you want to change the theme path prefix.

#### Arguments

1. `Optionen` (*Object*): 
  - `options.prop` (*String*): The property the style function will be triggered on.
  - `options.cssProperty` (*String|Boolean* [optional]): Defaults to `options.prop`. The CSS property used. You can disabled this option by providing `false`. When disabled, the property value will handle as a style object on it's own. It can be used for [rendering variants](#variants).
  - `options.themeKey` (*String* [optional]): The theme path prefix.
  - `options.transform` (*Function* [optional]): Apply a transformation before outputing a CSS value.

#### Rückgabewerte

`style function`: The style function created.

#### Beispiele

```js
import { style } from '@material-ui/system'

const borderColor = style({
  prop: 'bc',
  cssProperty: 'borderColor',
  themeKey: 'palette',
  transform: value => `${value} !important`,
});
```

### `compose(...style functions) => style function`

Merge multiple style functions into one.

#### Rückgabewerte

`style function`: The style function created.

#### Beispiele

```js
import { style, compose } from '@material-ui/system'

export const textColor = style({
  prop: 'color',
  themeKey: 'palette',
});

export const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
});

const palette = compose(textColor, bgcolor);
```

## Variants

The `style()` helper can also be used to maps properties to style objects in a theme. In this example, the `variant` property supports all the keys present in `theme.typography`.

```jsx
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { style, typography } from '@material-ui/system';

const variant = style({
  prop: 'variant',
  cssProperty: false,
  themeKey: 'typography',
});

// ⚠ Text is already defined in the global context:
// https://developer.mozilla.org/en-US/docs/Web/API/Text/Text.
const Text = styled.span`
  font-family: Helvetica;
  ${variant}
  ${typography}
`;

const theme = {
  typography: {
    h1: {
      fontSize: 30,
      lineHeight: 1.5,
    },
    h2: {
      fontSize: 25,
      lineHeight: 1.5,
    },
  },
};

// Renders the theme.typography.h1 style object.
<Text variant="h1">variant=h1</Text>
```

{{"demo": "pages/system/basics/Variant.js"}}

## CSS-Eigenschaft

If you want to support custom CSS values, you can use our `css()` helper. It will process the `css` property.

```jsx
import { compose, spacing, palette, css } from '@material-ui/system';
import styled from 'styled-components';

const Box = styled.div`
  ${css(
    compose(
      spacing,
      palette,
    ),
  )}
`;

<Box color="white" css={{ bgcolor: 'palevioletred', p: 1, textTransform: 'uppercase' }}>
  CssProp
</Box>
```

{{"demo": "pages/system/basics/CssProp.js"}}

## So funktioniert es

styled-system has done a great job at [explaining how it works](https://github.com/jxnblk/styled-system/blob/master/docs/how-it-works.md#how-it-works). It can help building a mental model for this "style function" concept.

## Real-world use case

In practice, a Box component can save you a lot of time. In this example, we demonstrate how to reproduce a Banner component.

{{"demo": "pages/system/basics/RealWorld.js"}}

## Prior art

`@material-ui/system` synthesizes ideas & APIs from several different sources:

- [Tachyons](https://tachyons.io/) was one of the first (2014) CSS libraries to promote the [Atomic CSS pattern](https://css-tricks.com/lets-define-exactly-atomic-css/) (or Functional CSS).
- Tachyons was later on (2017) followed by [Tailwind CSS](https://tailwindcss.com/). They have made Atomic CSS more popular.
- [Twitter Bootstrap](https://getbootstrap.com/docs/4.1/utilities/borders/) has slowly introduced atomic class names in v2, v3, and v4. We have used the way they group their "Helper classes" as inspiration.
- In the React world, [Styled System](https://github.com/jxnblk/styled-system) was one of the first (2017) to promote the style functions. It can be used as a generic Box component replacing the atomic CSS helpers as well as helpers to write new components.
- Large companies such as Pinterest, GitHub, and Segment.io are using the same approach in different flavours: 
  - [Evergreen Box](https://evergreen.segment.com/components/layout-primitives)
  - [Gestalt Box](https://pinterest.github.io/gestalt/#/Box)
  - [Primer Box](https://primer.style/components/docs/Box)
- The actual implementation and the object responsive API was inspired by the [Smooth-UI's system](https://smooth-ui.smooth-code.com/docs-basics-system).