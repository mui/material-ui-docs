# Utilização

<p class="description">Comece com React e Material-UI em pouco tempo.</p>

Componentes do Material-UI funcionam isoladamente. **Eles são auto-suficientes**, e só irão injetar os estilos que eles precisam para exibir. Eles não contam com qualquer folha de estilo global como [normalize.css](https://github.com/necolas/normalize.css/).

Você pode usar qualquer um dos componentes conforme demonstrado na documentação. Por favor, consulte a [página de demonstração](/components/buttons/) de cada componente para ver como eles devem ser importados.

## Inicio rápido

Here's a quick example to get you started, **it's literally all you need**:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';

function App() {
  return (
    <Button variant="contained" color="primary">
      Olá Mundo
    </Button>
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
```

Yes, this really is all you need to get started, as you can see in this live and interactive demo:

{{"demo": "pages/getting-started/usage/Usage.js", "hideHeader": true}}

## Globais

Material-UI usage experience can be improved with a handful of important globals that you’ll need to be aware of.

### Responsive meta tag

Material-UI is developed mobile first, a strategy in which we first write code for mobile devices and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, add the responsive viewport meta tag to your `<head>` element.

```html
<meta
  name="viewport"
  content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
/>
```

### CssBaseline

Material-UI provides an optional [CssBaseline](/components/css-baseline/) component. It fixes some inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Versioned Documentation

This documentation always reflects the latest stable version of Material-UI. You can find older versions of the documentation on a [separate page](/versions/).

## Próximos passos

Now that you have an idea of the basic setup, it's time to learn more about:

- How to provide [the Material Design font and typography](/components/typography/).
- How to take advantage of the [theming solution](/customization/themes/).
- How to [override](/customization/components/) the look and feel of the components.