# Farbe

<p class="description">Vermitteln Sie Bedeutung durch Farbe. Im Auslieferungszustand haben Sie Zugriff auf alle Farben in der Material Design-Spezifikation.</p>

Das Material Design [Farbsystem](https://material.io/design/color/) kann verwendet werden, um ein Farbschema zu erstellen, das Ihre Marke oder Ihren Stil widerspiegelt.

## Farbsystem

### Wichtige Begriffe

#### "Palette"

Eine Palette ist eine Sammlung von Farben, d.h. Farbtönen und deren Nuancen. Die Material-UI stellt alle Farben aus den Richtlinien für Material Design zur Verfügung. [Diese Farbpalette](#color-palette) wurden entwickelt, um harmonisch miteinander zu arbeiten.

#### "Farbton" & "Schatten"

Eine einzelne Farbe innerhalb der Palette besteht aus einem Farbton wie "Rot" und eine Schattierung wie "500". "Rot 50" ist der hellste Rotton (*Pink!*), während "Rot 900" am dunkelsten ist. Darüber hinaus enthalten die meisten Farbtöne Akzentfarben, denen ein `A` vorangestellt ist.

### Beispiele

Die Material Design-Farbpalette umfasst Primär- und Akzentfarben, die zur Illustration oder zur Entwicklung Ihrer Markenfarben verwendet werden können. Sie wurden entwickelt, um harmonisch miteinander zu arbeiten.

Sie können sich beispielsweise auf komplementäre Primär- und Akzentfarben beziehen (z. B. 'red 500' & 'purple A200'):

```js
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #F44336
const accent = purple['A200']; // #E040FB
const accent = purple.A200; // #E040FB (alternative Methode)
```

### Farbpalette

Wenn ein *Ton* (rot, pink usw.) und eine *Schattierung* (500, 600 usw.) gegeben sind, können Sie die Farbe folgendermaßen importieren:

```jsx
import HUE from '@material-ui/core/colors/HUE';

const color = HUE[SHADE];
```

{{"demo": "pages/style/color/Color.js", "hideHeader": true}}

## Farbwerkzeug

Um ein [ material.io/design/color ](https://material.io/design/color/) Farbschema mittels der Material-UI Dokumentation zu testen, wählen Sie die Farben mittels der Palette und der Regler weiter unten aus. Alternativ können Sie Hex-Werte in die Felder Primärer und Sekundärer Text eingeben.

{{"demo": "pages/style/color/ColorTool.js", "hideHeader": true}}

Die im Farbmuster angezeigte Ausgabe kann direkt in eine [`createMuiTheme()`](/customization/themes/#createmuitheme-options-theme) Funktion (zur Verwendung mit [` MuiThemeProvider`](/customization/themes/#theme-provider)) eingefügt werden:

```jsx
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
});
```

Nur die `Haupttöne` müssen bereitgestellt werden (es sei denn, Sie möchten `light`, `dark` oder `contrastText` weiter anpassen), da die anderen Farben von `createMuiTheme()` berechnet werden, wie in der Sektion [ Designanpassung ](/customization/themes/#palette) beschrieben.

If you are using the default primary and / or secondary shades then by providing the color object, `createMuiTheme()` will use the appropriate shades from the material color for main, light and dark.

### Official color tool

The Material Design team has also built an awesome palette configuration tool: [material.io/tools/color](https://material.io/tools/color/). This can help you create a color palette for your UI, as well as measure the accessibility level of any color combination.

<a href="https://material.io/tools/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336">
  <img src="/static/images/color/colorTool.png" alt="Official color tool" style="width: 574px" />
</a>

The output can be fed into `createMuiTheme()` function:

```jsx
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
```

### Tools by the community

- [create-mui-theme](https://react-theming.github.io/create-mui-theme/) Is an online tool for creating Material-UI themes via Material Design Color Tool.
- [material-ui-theme-editor](https://in-your-saas.github.io/material-ui-theme-editor/) A tool to generate themes for your Material-UI applications by just selecting the colors and having a live preview.
- [Material palette generator](https://material.io/inline-tools/color/): The Material palette generator can be used to generate a palette for any color you input.