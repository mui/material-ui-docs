# Общая настройка

<p class="description">В то время как значение ключа 'overrides' позволяет вам переопределить внешний вид всех элементов определенного типа, значение ключа 'props' позволяет изменить их отдельные свойства.</p>

## CSS

When the configuration variables aren't powerful enough, you can take advantage of the `overrides` key of the `theme` to potentially change **every single style** injected by Material-UI into the DOM. Это действительно мощная штука.

```js
const theme = createMuiTheme({
  overrides: {
    MuiButton: { // Name of the component ⚛️ / style sheet
      text: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
});
```

{{"demo": "pages/customization/globals/GlobalCss.js"}}

The list of these customization points for each component is documented under the **Component API** section. For instance, you can have a look at the [Button](/api/button/#css). Alternatively, you can always have a look at the [implementation](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/Button/Button.js).

## Default props

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