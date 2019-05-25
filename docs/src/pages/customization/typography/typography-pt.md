# Tipografia

<p class="description">O tema fornece um conjunto de tamanhos de tipos que funcionam bem juntos e também com a grade de leiaute.</p>

O exemplo a seguir demonstra como alterar os valores padrão da tipografia - nesse caso, a família da fonte. Se você quiser aprender mais sobre tipografia, você pode conferir a seção do [componente tipografia](/components/typography/).

{{"demo": "pages/customization/typography/TypographyTheme.js"}}

## Família da fonte

Você pode usar fonte do sistema em vez da fonte Roboto padrão.

```js
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});
```

## Fontes próprias

Para utilizar fontes próprias, baixe os arquivos de fonte em formatos `ttf`, `woff`, e/ou `woff2` e importe-os em seu código.

⚠️ Isso requer que você tenha um plugin ou loader em seu processo de compilação que possa manipular o carregamento de arquivos `ttf`, `woff` e `woff2`. Fontes *não* serão embutidas dentro do seu pacote. Elas serão carregadas de seu servidor da Web em vez de uma CDN.

```js
import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

const raleway = {
  fontFamily: 'Raleway',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Raleway'),
    local('Raleway-Regular'),
    url(${RalewayWoff2}) format('woff2')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};
```

Então, você pode alterar o tema para usar essa nova fonte. Isso requer o uso do componente [`CssBaseline`](/components/css-baseline/) para definir globalmente Raleway como a família da fonte.

```js
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-family': [raleway],
      },
    },
  },
});
```

## Tamanho da fonte

Material-UI usa a unidade `rem` para o tamanho da fonte. O tamanho da fonte padrão do elemento `<html>` do navegador é `16px`, mas os navegadores têm a opção de alterar esse valor, a unidade `rem` nos permite acomodar as configurações do usuário, resultando em uma experiência de usuário muito melhor. Os usuários alteram as configurações de tamanho da fonte por vários motivos, desde problemas de visão, até a escolha de configurações ideais para dispositivos que podem ser muito diferentes em tamanho e distância de visualização.

Para alterar o tamanho da fonte do Material-UI, você pode definir a propriedade `fontSize`. O valor padrão é `14px`.

```js
const theme = createMuiTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});
```

The computed font size by the browser follows this mathematical equation:

![font-size](/static/images/font-size.gif) <!-- https://latex.codecogs.com/gif.latex?computed&space;=&space;specification&space;\frac{typography.fontSize}{14}&space;\frac{html&space;font&space;size}{typography.htmlFontSize} -->

## HTML font size

You might want to change the `<html>` element default font size. For instance, when using the [10px simplification](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/). We provide a `htmlFontSize` theme property for this use case. It's telling Material-UI what's the font-size on the `<html>` element is. It's used to adjust the `rem` value so the calculated font-size always match the specification.

```js
const theme = createMuiTheme({
  typography: {
    // Tell Material-UI what's the font-size on the html element is.
    htmlFontSize: 10,
  },
});
```

```css
html {
  font-size: 62.5%; /* 62.5% of 16px = 10px */
}
```

*You need to apply the above CSS on the html element of this page to see the below demo rendered correctly*

{{"demo": "pages/customization/typography/FontSizeTheme.js"}}

## Responsive font sizes

The typography variants properties map directly to the generated CSS. You can use [media queries](/customization/breakpoints/#api) inside them:

```js
const theme = createMuiTheme();

theme.typography.h1 = {
  fontSize: '3rem',
  '@media (min-width:600px)': {
    fontSize: '4.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
};
```

To automate this setup, you can use the [`responsiveFontSizes()`](/customization/themes/#responsivefontsizes-theme-options-theme) helper to make Typography font sizes in the theme responsive.

{{"demo": "pages/customization/typography/ResponsiveFontSizesChart.js", "hideHeader": true}}

You can see this in action in the example below. adjust your browser's window size, and notice how the font size changes as the width crosses the different [breakpoints](/customization/breakpoints/):

{{"demo": "pages/customization/typography/ResponsiveFontSizes.js"}}

## Fluid font sizes

To be done: [#15251](https://github.com/mui-org/material-ui/issues/15251).