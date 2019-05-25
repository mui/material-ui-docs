# @material-ui/styles

<p class="description">Você pode usar a solução de estilo do Material-UI na sua aplicação, esteja ou não usando componentes de Material-UI.</p>

Material-UI, tem como objetivo fornecer uma base sólida para a criação de interfaces de usuário dinâmicas. Por uma questão de simplicidade, **expomos a solução de estilo usada nos componentes de Material-UI** como pacote, `@material-ui/styles`. Você pode usá-lo, mas você não precisa, já que Material-UI também é [ interoperável com](/guides/interoperability/) todas as outras soluções de estilo principais.

## Por que usar a solução de estilo do Material-UI?

Nas versões anteriores, o Material-UI usava o LESS, e em seguida, uma solução customizada no estilo inline para escrever os estilos dos componentes, mas essas abordagens provaram ser limitadas. Nós [adotamos a solução *CSS-in-JS*](https://github.com/oliviertassinari/a-journey-toward-better-style). Ela **desbloqueia muitos ótimos recursos** (aninhamento de temas, estilos dinâmicos, auto-suporte, etc.). Nós pensamos que este é o futuro:

- [Um idioma de estilo unificado](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660)
- [Converter SCSS (Sass) para CSS-in-JS](https://egghead.io/courses/convert-scss-sass-to-css-in-js)

A solução de estilo do Material-UI é inspirada em muitas outras bibliotecas de estilo, como [styled-components](https://www.styled-components.com/) e [emotion](https://emotion.sh/).

- 💅 Você pode esperar [as mesmas vantagens](https://www.styled-components.com/docs/basics#motivation) que styled-components.
- 🚀 Está [super rápida](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-benchmark/README.md#material-uistyles).
- 🧩 É extensível através de uma API de [plugin](https://github.com/cssinjs/jss/blob/next/docs/plugins.md).
- ⚡️Ela usa [JSS](https://github.com/cssinjs/jss) em seu núcleo – um [alto desempenho](https://github.com/cssinjs/jss/blob/next/docs/performance.md) JavaScript para o compilador CSS, que funciona em tempo de execução e no lado do servidor.
- 📦 Menor que [15 KB gzipped](https://bundlephobia.com/result?p=@material-ui/styles); e nenhum aumento no tamanho do pacote se usado juntamente com o Material-UI.

## Instalação

Para instalar e salvar em suas dependências do `package.json`, execute:

```sh
// utilizando o npm
npm install @material-ui/styles

// utilizando o yarn
yarn add @material-ui/styles
```

## Como começar

Fornecemos três APIs diferentes para gerar e aplicar estilos, mas todas compartilham a mesma lógica subjacente.

### Hook API

```jsx
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
});

export default function Hook() {
  const classes = useStyles();
  return <Button className={classes.root}>Hook</Button>;
}
```

{{"demo": "pages/styles/basics/Hook.js"}}

### Styled components API

Nota: isso se aplica somente para a sintaxe de chamada – definições de estilo de ainda usam um objeto JSS. Você também pode [alterar esse comportamento](/styles/advanced/#string-templates), com algumas limitações.

```jsx
import React from 'react';
import { styled } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});

export default function StyledComponents() {
  return <MyButton>Styled Components</MyButton>;
}
```

{{"demo": "pages/styles/basics/StyledComponents.js"}}

### Higher-order component API

```jsx
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

const styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
};

function HigherOrderComponent(props) {
  const { classes } = props;
  return <Button className={classes.root}>Higher-order component</Button>;
}

HigherOrderComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);
```

{{"demo": "pages/styles/basics/HigherOrderComponent.js"}}

## Aninhamento de seletores

Você pode aninhar seletores para segmentar elementos dentro da classe ou componente atual. O exemplo a seguir usa a Hook API, mas funciona da mesma maneira com as outras APIs.

```js
const useStyles = makeStyles({
  root: {
    padding: 16,
    color: 'red',
    '& p': {
      color: 'green',
      '& span': {
        color: 'blue'
      }
    }
  },
});
```

{{"demo": "pages/styles/basics/NestedStylesHook.js"}}

## Adaptando-se com base em props

You can pass a function to `makeStyles` ("interpolation") in order to adapt the generated value based on the component's props. The function can be provided at the style rule level, or at the CSS property level:

```jsx
const useStyles = makeStyles({
  // style rule
  foo: props => ({
    backgroundColor: props.backgroundColor,
  }),
  bar: {
    // CSS property
    color: props => props.color,
  },
});

function MyComponent() {
  // Simulated props for the purpose of the example
  const props = { backgroundColor: 'black', color: 'white' };
  // Pass the props as the first argument of useStyles()
  const classes = useStyles(props);

  return <div className={`${classes.foo} ${classes.bar}`} />
}
```

This button component has a color property that changes its color:

### Adapting the hook API

{{"demo": "pages/styles/basics/AdaptingHook.js", "react":"next"}}

### Adapting the styled components API

{{"demo": "pages/styles/basics/AdaptingStyledComponents.js"}}

### Adapting the higher-order component API

{{"demo": "pages/styles/basics/AdaptingHOC.js"}}

## Stress test

In the following stress test, you can update the *theme color* and the *background-color property* live:

```js
const useStyles = makeStyles(theme => ({
  root: props => ({
    backgroundColor: props.backgroundColor,
    color: theme.color,
  }),
}));
```

{{"demo": "pages/styles/basics/StressTest.js"}}