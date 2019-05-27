# Da direita para a esquerda

<p class="description">Para alterar a direção dos componentes de Material-UI, você deve seguir as etapas a seguir. As interfaces de usuário para idiomas lidos da direita para a esquerda (RTL), como árabe e hebraico, devem ser espelhadas.</p>

## Passos

### 1. HTML

Certifique-se de que o atributo `dir` é definido no corpo (body), caso contrário, os componentes nativos serão quebrados:

```html
<body dir="rtl">
```

### 2. Tema

Defina a direção no seu tema customizado:

```js
const theme = createMuiTheme({
  direction: 'rtl',
});
```

### 3. jss-rtl

Você precisa deste plugin JSS para mudar os estilos: [jss-rtl](https://github.com/alitaheri/jss-rtl).

```sh
npm install jss-rtl
```

Tendo instalado o plugin em seu projeto, os componentes de Material-UI ainda exigem que ele seja carregado pela instância do jss, conforme descrito abaixo. Internally, withStyles is using this JSS plugin when `direction: 'rtl'` is set on the theme. Head to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.

Once you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree. We have a [`StylesProvider`](/styles/api/#stylesprovider) component for this:

```jsx
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}
```

## Demonstração

*Use the direction toggle button on the top right corner to flip the whole documentation*

{{"demo": "pages/guides/right-to-left/Direction.js"}}

## Opting out of rtl transformation

If you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning.

*Use the direction toggle button on the top right corner to see the effect.*

{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}