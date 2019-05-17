---
title: Componente React Circular Progress, Linear Progress
components: CircularProgress, LinearProgress
---

# Progresso

<p class="description">Os indicadores de progresso expressam um tempo de espera não especificado ou exibem a duração de um processo.</p>

[Indicadores de progresso](https://material.io/design/components/progress-indicators.html) informam aos usuários sobre o estado de processos em progresso, como o carregamento de um aplicativo, envio de um formulário, ou atualizações. Eles comunicam o estado do aplicativo e indicam ações disponíveis, tal como, se o usuário pode sair da página atual.

Indicador **determinado** mostra quanto tempo uma operação vai demorar.

Indicador **indeterminado** demonstra um tempo de espera não especificado.

#### Conjunto de progressos

Ao exibir o progresso de uma seqüência de processos, indique o progresso geral em vez do progresso de cada atividade.

## Circular

[Progresso circular](https://material.io/design/components/progress-indicators.html#circular-progress-indicators) suporta ambos, processos determinados e indeterminados.

- O indicador circular **determinado** preenche a faixa circular invisível com cor, a medida que o indicador se move de 0 a 360 graus.
- O indicador circular **indeterminado** crescem e diminuem em tamanho enquanto se movem de forma circular na faixa invisível.

### Circular Indeterminado

{{"demo": "pages/components/progress/CircularIndeterminate.js"}}

### Integração Interativa

{{"demo": "pages/components/progress/CircularIntegration.js"}}

### Circular Determinado

{{"demo": "pages/components/progress/CircularDeterminate.js"}}

### Circular estático

{{"demo": "pages/components/progress/CircularStatic.js"}}

## Linear

Indicadores de [progresso linear](https://material.io/design/components/progress-indicators.html#linear-progress-indicators).

### Linear Indeterminado

{{"demo": "pages/components/progress/LinearIndeterminate.js"}}

### Linear Determinado

{{"demo": "pages/components/progress/LinearDeterminate.js"}}

### Buffer Linear

{{"demo": "pages/components/progress/LinearBuffer.js"}}

### Consulta Linear

{{"demo": "pages/components/progress/LinearQuery.js"}}

## Intervalo não-padrão

Os componentes de progresso aceitam um valor no intervalo de 0 a 100. Isso simplifica as coisas para os usuários de leitores de tela, onde estes são os valores padrão mínimos / máximos. Às vezes, no entanto, você pode estar trabalhando com uma fonte de dados onde os valores ficam de fora deste intervalo. Veja como você pode transformar facilmente um valor em qualquer intervalo em uma escala de 0 a 100:

```jsx
// MIN = Valor mínimo esperado
// MAX = Valor máximo esperado
// Função para normalizar os valores (MIN / MAX pode ser integrado)
const normalise = value => (value - MIN) * 100 / (MAX - MIN);

// Exemplo de componente que utiliza a função `normalise` no ponto de renderização.
function Progress(props) {
  return (
    <React.Fragment>
      <CircularProgress variant="determinate" value={normalise(props.value)} />
      <LinearProgress variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
  )
}
```

## Barra de progresso customizada

Aqui está um exemplo de customização do componente. Você pode aprender mais sobre isso na [página de documentação de sobrescrita](/customization/components/).

{{"demo": "pages/components/progress/CustomizedProgressBars.js"}}

## Aparência atrasada

Existem [3 limites importantes](https://www.nngroup.com/articles/response-times-3-important-limits/) para saber sobre o tempo de resposta. O efeito cascata do componente `ButtonBase` garante que o usuário experimente um sistema de feedback em tempo real. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0 second. After 1.0 second, you can display a loader to keep user's flow of thought uninterrupted.

{{"demo": "pages/components/progress/DelayingAppearance.js"}}

## Limitações

Under heavy load, you might lose the stroke dash animation or see random CircularProgress ring widths. You should run processor intensive operations in a web worker or by batch in order not to block the main rendering thread.

![heavy load](/static/images/progress/heavy-load.gif)

When it's not possible, you can leverage the `disableShrink` property to mitigate the issue. See [this issue](https://github.com/mui-org/material-ui/issues/10327).

{{"demo": "pages/components/progress/CircularUnderLoad.js"}}