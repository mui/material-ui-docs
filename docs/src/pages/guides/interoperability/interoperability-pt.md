# Interoperabilidade da Biblioteca de Estilo

<p class="description">Embora seja simples usar a solução de estilo baseada em JSS fornecida pelo Material-UI para estilizar sua aplicação, é possível usar qualquer solução de estilo que você preferir, do CSS puro a qualquer número de bibliotecas CSS-in-JS.</p>

Este guia tem como objetivo documentar as alternativas mais populares, mas você deve descobrir que os princípios aplicados aqui podem ser adaptados para outras bibliotecas. Nós fornecemos exemplos para as seguintes soluções de estilo:

- [CSS puro](#plain-css)
- [CSS global](#global-css)
- [Styled Components](#global-css)
- [Módulos CSS](#styled-components)
- [Emotion](#css-modules)
- [React JSS](#react-jss)
- [CSS to MUI webpack Loader](#css-to-mui-webpack-loader)
- [Glamor](#glamor)

## CSS puro

Nada extravagante, simplesmente o bom e velho CSS. Por que reinventar a roda quando ela já funciona há décadas?

**PlainCssButton.css**

```css
.button {
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
}
```

**PlainCssButton.js**

```jsx
import React from 'react';
import { Button } from '@material-ui/core';

export default function PlainCssButton() {
  return (
    <div>
      <Button>Material-UI</Button>
      <Button className="button">CSS puro</Button>
    </div>
  );
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/l5qv4y57vl)

**Nota:** O JSS injeta seus estilos na parte inferior do `<head>`. Se você não quiser marcar atributos de estilo com **!important**, você precisa alterar [a ordem de injeção do CSS](/styles/advanced/#css-injection-order), como na demonstração.

## CSS global

Fornecer explicitamente os nomes das classes ao componente é um esforço excessivo? [Você pode segmentar os nomes de classe gerados por Material-UI](/styles/advanced/#with-material-ui-core).

**GlobalCssButton.css**

```css
.MuiButton-root {
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
}
```

**GlobalCssButton.js**

```jsx
import React from 'react';
import { Button } from '@material-ui/core';

export default function GlobalCssButton() {
  return (
    <div>
      <Button>Global CSS</Button>
    </div>
  );
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/9yxopv4vmp)

**Nota:** O JSS injeta seus estilos na parte inferior do `<head>`. Se você não quiser marcar atributos de estilo com **!important**, você precisa alterar [a ordem de injeção do CSS](/styles/advanced/#css-injection-order), como na demonstração.

## Styled Components

![estrelas](https://img.shields.io/github/stars/styled-components/styled-components.svg?style=social&label=Star) ![npm](https://img.shields.io/npm/dm/styled-components.svg?)

O método `styled()` funciona perfeitamente em todos os nossos componentes.

```jsx
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(Button)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`;

export default function StyledComponents() {
  return (
    <div>
      <Button>Material-UI</Button>
      <StyledButton>Styled Components</StyledButton>
    </div>
  );
}
```

{{"demo": "pages/guides/interoperability/StyledComponents.js", "hideHeader": true}}

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/k553lz1qrv)

### Controlar Prioridade

Ambos styled-components e JSS, injetam seus estilos na parte inferior `<head>`. A melhor abordagem para garantir que os estilos do styled-components sejam carregados por último, é alterar [a ordem de injeção do CSS](/styles/advanced/#css-injection-order), como na demonstração:

```jsx
import { StylesProvider } from '@material-ui/styles';

<StylesProvider injectFirst>
  {/* Sua árvore de componentes.
      Componentes com estilo podem sobrescrever os estilos de Material-UI. */}
</StylesProvider>
```

Outra abordagem é usar os caracteres `&&` em styled-components para [aumentar a especificidade](https://www.styled-components.com/docs/advanced#issues-with-specificity) repetindo o nome da classe. Você deve evitar o uso de `!imporant`.

### Elementos mais profundos

Se você tentar estilizar um Drawer com variante permanente, provavelmente precisará afetar o elemento Paper, elemento filho do Drawer. No entanto, o paper não é o elemento raiz do Drawer e, portanto, a customização de styled-components como acima não funcionará. Você precisa usar a API [`classes`](/styles/advanced/#overriding-styles-classes-prop) do Material-UI.

O exemplo a seguir sobrescreve o estilo de `label` e `Button`, além dos estilos customizados no próprio botão. Também funciona como solução de contorno [para este problema com styled-components](https://github.com/styled-components/styled-components/issues/439), por "consumir" propriedades que não devem ser passadas para o componente subjacente.

```jsx
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(({ color, ...other }) => <Button {...other} />)`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  & .MuiButton-label {
    color: ${props => props.color};
  }
`;

export default function StyledComponentsDeep() {
  return (
    <div>
      <Button>Material-UI</Button>
      <StyledButton color="papayawhip">Styled Components</StyledButton>
    </div>
  );
}
```

{{"demo": "pages/guides/interoperability/StyledComponentsDeep.js", "hideHeader": true}}

A demonstração acima depende [doa valores padrão de `classes`](/styles/advanced/#with-material-ui-core), mas você pode fornecer seu próprio nome de classe: `.label`.

```jsx
import React from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';

const StyledButton = styled(({ color, ...other }) => (
  <Button classes={{ label: 'label' }} {...other} />
))`
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);

  & .label {
    color: ${props => props.color};
  }
`;

export default function StyledComponentsDeep() {
  return (
    <div>
      <Button>Material-UI</Button>
      <StyledButton color="papayawhip">Styled Components</StyledButton>
    </div>
  );
}
```

### ThemeProvider

Material-UI tem uma estrutura de tema rica, que você pode aproveitar para manipulações de cores, transições, consultas de mídia e muito mais.

{{"demo": "pages/guides/interoperability/StyledComponentsTheme.js"}}

### Portal

O [Portal](/components/portal/) fornece uma maneira de primeira classe para renderizar filhos em um nó DOM que existe fora da hierarquia DOM do componente pai. Because of the way styled-components scopes its CSS, you may run into issues where styling is not applied.

For example, if you attempt to style the [Menu](/components/menus/) of a [Select](/components/selects/) component using the property `MenuProps`, you will need to pass along the `className` property to the element being rendered outside of it's DOM hierarchy. The following example shows a workaround:

```jsx
import React from 'react';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const StyledMenu = styled(({ className, ...props }) => (
  <Menu {...props} classes={{ paper: className }} />
))`
  box-shadow: none;
  border: 1px solid #d3d4d5;

  li {
    padding-top: 8px;
    padding-bottom: 8px;
  }
`;
```

{{"demo": "pages/guides/interoperability/StyledComponentsPortal.js"}}

## CSS Modules

![estrelas](https://img.shields.io/github/stars/css-modules/css-modules.svg?style=social&label=Star)

It's hard to know the market share of [this styling solution](https://github.com/css-modules/css-modules) as it's dependent on the bundling solution people are using.

**CssModulesButton.css**

```css
.button {
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
}
```

**CssModulesButton.js**

```jsx
import React from 'react';
// webpack, parcel ou qualquer outro irá injetar o CSS na página
import styles from './CssModulesButton.css';
import { Button } from '@material-ui/core';

export default function CssModulesButton() {
  return (
    <div>
      <Button>Material-UI</Button>
      <Button className={styles.button}>CSS Modules</Button>
    </div>
  );
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/5km241l9xn)

**Nota:** O JSS injeta seus estilos na parte inferior do `<head>`. Se você não quiser marcar atributos de estilo com **!important**, você precisa alterar [a ordem de injeção do CSS](/styles/advanced/#css-injection-order), como na demonstração.

## Emotion

![estrelas](https://img.shields.io/github/stars/emotion-js/emotion.svg?style=social&label=Star) ![npm](https://img.shields.io/npm/dm/emotion.svg?)

### The `css` prop

Emotion's **css()** method works seamlessly with Material-UI.

```jsx
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { Button } from '@material-ui/core';

// We just assign them the Button's className attribute
export default function EmotionButton() {
  return (
    <div>
      <Button>Material-UI</Button>
      <Button
        css={css`
          background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
          border-radius: 3px;
          border: 0;
          color: white;
          height: 48px;
          padding: 0 30px;
          box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
        `}
      >
        Emotion
      </Button>
    </div>
  );
}
```

{{"demo": "pages/guides/interoperability/EmotionCSS.js", "hideHeader": true}}

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/yw93kl7y0j)

**Nota:** O JSS injeta seus estilos na parte inferior do `<head>`. Se você não quiser marcar atributos de estilo com **!important**, você precisa alterar [a ordem de injeção do CSS](/styles/advanced/#css-injection-order), como na demonstração.

### The `styled()` API

It works exactly like styled components. You can [use the same guide](/guides/interoperability/#styled-components).

## React JSS

![estrelas](https://img.shields.io/github/stars/cssinjs/jss.svg?style=social&label=Star) ![npm](https://img.shields.io/npm/dm/react-jss.svg?)

Material-UI's styling solution shares many building blocks with [react-jss](https://github.com/cssinjs/react-jss). We went ahead and forked the project in order to handle our unique needs, but we're working to merge the changes and fixes from Material-UI back to react-jss.

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Button } from '@material-ui/core';

const styles = {
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
};

function ReactJssButton(props) {
  return (
    <div>
      <Button>Material-UI</Button>
      <Button className={props.classes.button}>react-jss</Button>
    </div>
  );
}

ReactJssButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default injectSheet(styles)(ReactJssButton);
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/24kllqxvmp)

## Glamor

![estrelas](https://img.shields.io/github/stars/threepointone/glamor.svg?style=social&label=Star) ![npm](https://img.shields.io/npm/dm/glamor.svg?)

A good way to apply styles with Glamor is using the **css()** function and then **classnames** to get them as strings:

```jsx
import React from 'react';
import { css } from 'glamor';
import { Button } from '@material-ui/core';

const buttonStyles = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  borderRadius: 3,
  border: 0,
  color: "white",
  height: 48,
  padding: "0 30px",
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .30)"
};

// Então apenas atribuímos o className do Botão
export default function GlamorButton() {
  return (
    <div>
      <Button>Material-UI</Button>
      <Button {...css(buttonStyles)}>Glamor</Button>
    </div>
  );
}
```

[![Edit Button](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/vp2znmj40)

**Note:** Both Glamor and JSS inject their styles at the bottom of the `<head>`. Se você não quiser marcar atributos de estilo com **!important**, você precisa alterar [a ordem de injeção do CSS](/styles/advanced/#css-injection-order), como na demonstração.