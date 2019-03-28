# Tema Padrão

<p class="description">Veja como o objeto tema se parece com os valores padrão.</p>

## Explorar

Explore a documentação do objeto tema:

{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideEditButton": true}}

> Dica: você pode trabalhar com a documentação do objeto tema em **seu console**. Expomos uma variável `tema` de documentação em todas as páginas de documentação. Por favor, note que o site de documentação está usando um tema personalizado.

Se você quiser aprender mais sobre como o tema é montado, dê uma olhada em [`material-ui/style/createMuiTheme.js`](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/createMuiTheme.js), e as importações relacionadas que `createMuiTheme` usa.

## @material-ui/core/styles vs @material-ui/styles

Material-UI styles are powered by the [@material-ui/styles](/css-in-js/basics/) npm package. It's a styling solution for React. This solution is [isolated](https://bundlephobia.com/result?p=@material-ui/styles), it has has no knowledge of the default Material-UI theme. To remove the need for injecting a theme in the React's context **systematically**, we are wrapping the style modules (`makeStyles`, `withStyles` and `styled`) with the default Material-UI theme:

- `@material-ui/core/styles/makeStyles` wraps `@material-ui/styles/makeStyles`.
- `@material-ui/core/styles/withStyles` wraps `@material-ui/styles/withStyles`.
- `@material-ui/core/styles/styled` wraps `@material-ui/styles/styled`.