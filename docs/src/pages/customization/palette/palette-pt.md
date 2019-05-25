# Paleta de Cores

<p class="description">A paleta permite modificar a cor dos componentes para se adequarem à sua marca.</p>

## Intenções

Uma intenção de cor é um mapeamento de uma paleta para uma determinada intenção dentro da sua aplicação.

O tema expõe as seguintes intenções de cores:

- primário - usado para representar os elementos de interface primários para um usuário.
- secundário - usado para representar os elementos de interface secundários para um usuário.
- erro - usado para representar os elementos de interface dos quais o usuário deve estar ciente.

A paleta padrão usa as sombras prefixadas com `A` (`A200`, etc.) para a intenção secundária, e as cores não pré-fixadas para as outras intenções.

Se você quiser aprender mais sobre cor, você pode conferir [a seção de cores](/customization/color/).

## Paleta personalizada

Você pode sobrescrever os valores padrão da paleta incluindo um objeto `palette` como parte do seu tema.

Se algum dos objetos de intenção [`palette.primary`](/customization/default-theme/?expend-path=$.palette.primary), [`palette.secondary`](/customization/default-theme/?expend-path=$.palette.secondary) ou [`palette.error`](/customization/default-theme/?expend-path=$.palette.error) forem fornecidos, eles sobrescreverão os padrões.

O valor da intenção pode ser um objeto [cor](/customization/color/), ou um objeto com uma ou mais das chaves especificadas pela seguinte interface TypeScript:

```ts
interface PaletteIntention {
  light?: string;
  main: string;
  dark?: string;
  contrastText?: string;
};
```

**Usando um objeto de cor**

The simplest way to customize an intention is to import one or more of the provided colors and apply them to a palette intention:

```js
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});
```

If the intention key receives a color object as in the example above, the following mapping is used to populate the required keys:

```js
palette: {
  primary: {
    light: palette.primary[300],
    main: palette.primary[500],
    dark: palette.primary[700],
    contrastText: getContrastText(palette.primary[500]),
  },
  secondary: {
    light: palette.secondary.A200,
    main: palette.secondary.A400,
    dark: palette.secondary.A700,
    contrastText: getContrastText(palette.secondary.A400),
  },
  error: {
    light: palette.error[300],
    main: palette.error[500],
    dark: palette.error[700],
    contrastText: getContrastText(palette.error[500]),
  },
},
```

Este exemplo ilustra como você pode recriar os valores padrão da paleta:

```js
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';

// Todas as chaves a seguir são opcionais.
// Nós tentamos nosso melhor para fornecer um ótimo valor padrão.
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: 3,
    // Used to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
```

**Fornecendo as cores diretamente**

If you wish to provide more customized colors, you can either create your own color object, or directly supply colors to some or all of the intention's keys:

```js
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#ff4400',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#0044ff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    // error: will use the default color
  },
});
```

As in the example above, if the intention object contains custom colors using any of the `main`, `light`, `dark` or `contrastText` keys, these map as follows:

- If the `dark` and / or `light` keys are omitted, their value(s) will be calculated from `main`, according to the `tonalOffset` value.

- If `contrastText` is omitted, its value will be calculated to contrast with `main`, according to the`contrastThreshold` value.

Both the `tonalOffset` and `contrastThreshold` values may be customized as needed. A higher value for `tonalOffset` will make calculated values for `light` lighter, and `dark` darker. A higher value for `contrastThreshold` increases the point at which a background color is considered light, and given a dark `contrastText`.

Observe que `contrastThreshold ` segue uma curva não linear.

## Exemplo

{{"demo": "pages/customization/palette/Palette.js"}}

## Ferramenta de cor

Precisa de inspiração? A equipe do Material Design construiu uma incrível [ferramenta de configuração de paleta](/customization/color/#color-tool) para te ajudar.

## Tipo (Tema claro / escuro)

O Material-UI vem com duas variantes de temas, claro (padrão) e escuro.

Você pode aplicar o tema escuro definindo `type` como `dark`. Embora seja apenas uma alteração no valor de uma única propriedade, internamente ela altera as seguintes chaves:

- `palette.text`
- `palette.divider`
- `palette.background`
- `palette.action`

```js
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
```

{{"demo": "pages/customization/palette/DarkTheme.js", "hideEditButton": true}}