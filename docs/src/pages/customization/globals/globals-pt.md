# Globais

<p class="description">A sobrescrita de chaves permite que você customize a aparência de todas as instâncias de um tipo de componente, enquanto a propriedade chave permite que você altere os valores padrão das propriedades de um componente.</p>

## CSS

Quando as variáveis de configuração não são poderosas o suficiente, você pode tirar vantagem das `sobrescritas` da chave do `tema` para potencialmente alterar **cada estilo único** injetado por Material-UI no DOM. Esse é um recurso realmente poderoso.

```js
const theme = createMuiTheme({
  overrides: {
    MuiButton: { // Nome do componente ⚛️ / folha de estilo
      text: { // Nome da regra
        color: 'white', // Um pouco de CSS
      },
    },
  },
});
```

{{"demo": "pages/customization/globals/GlobalCss.js"}}

The list of these customization points for each component is documented under the **Component API** section. For instance, you can have a look at the [Button](/api/button/#css). Alternatively, you can always have a look at the [implementation](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Button/Button.js).

## Propriedades padrão

You can change the default props of all the Material-UI components. We expose a `props` key in the `theme` for this use case.

```js
const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});
```

{{"demo": "pages/customization/globals/DefaultProps.js"}}