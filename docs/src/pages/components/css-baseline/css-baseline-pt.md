---
components: CssBaseline
---

# CSS Baseline

<p class="description">Material-UI oferece um componente CSS Base a fim de inciar uma elegante, consistente e simples base para construir sobre.</p>

Você já deve estar familiarizado com [normalize.css](https://github.com/necolas/normalize.css), uma coleção de elementos HTML e normas de atributos de estilo.

```jsx
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* O resto de sua aplicação */}
    </React.Fragment>
  );
}

export default MyApp;
```

## Abordagem

### Página

Os elementos `<html>` e `<body>` são atualizados para fornecer melhores padrões para toda a página. Mais especificamente:

- The margin in all browsers is removed.
- A cor de fundo padrão do material design é aplicada. Isto usando [`theme.palette.background.default`](/customization/default-theme/?expend-path=$.palette.background) para dispositivos padrão e um fundo branco para dispositivos de impressão.

### Leiaute

- `box-sizing` é definido globalmente no elemento `<html>` para `border-box`. Every element—including `*::before` and `*::after` are declared to inherit this property, which ensures that the declared width of the element is never exceeded due to padding or border.

### Typography

- Font antialiasing is enabled for better display of the Roboto font.
- No base font-size is declared on the `<html>`, but 16px is assumed (the browser default). You can learn more about the implications of changing the `<html>` default font size in [the theme documentation](/customization/typography/#typography-html-font-size) page.