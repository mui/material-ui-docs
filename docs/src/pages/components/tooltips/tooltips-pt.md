---
title: Componente React para Dicas
components: Tooltip
---

# Dicas

<p class="description">Dicas exibem texto informativo quando os usuários passam o mouse, focalizam ou tocam em um elemento.</p>

Quando ativada, [dicas](https://material.io/design/components/tooltips.html) exibem um rótulo de texto identificando o elemento, como uma descrição de sua função.

## Dicas simples

{{"demo": "pages/components/tooltips/SimpleTooltips.js"}}

## Posicionamento de dicas

A dica (`Tooltip`) tem 12 **locais de posicionamento** para escolha. Elas não têm setas direcionais; em vez disso, elas dependem do movimento sobre a fonte para se exibirem na posição configurada.

{{"demo": "pages/components/tooltips/PositionedTooltips.js"}}

## Dicas customizadas

Aqui estão alguns exemplos de customização do componente. Você pode aprender mais sobre isso na [página de documentação de sobrescrita](/customization/components/).

{{"demo": "pages/components/tooltips/CustomizedTooltips.js"}}

## Elemento filho customizado

A dica precisa aplicar eventos DOM do tipo "listeners" para seu elemento filho. Se o filho for um elemento React customizado, você precisa garantir que ele estenda suas propriedades para o elemento DOM subjacente.

```jsx
function MyComponent (props) {
  // Distribuímos as propriedades para o elemento DOM subjacente.
  return <div {...props}>Bin</div>
}

// ...

<Tooltip title="Excluir">
  <MyComponent>
</Tooltip>
```

Você pode encontrar um conceito similar no guia de [componentes de encapsulamento](/guides/composition/#wrapping-components).

## Gatilhos

Você pode definir os tipos de eventos que fazem com que uma dica seja exibida.

{{"demo": "pages/components/tooltips/TriggersTooltips.js"}}

## Dicas Controladas

You can use the `open`, `onOpen` and `onClose` properties to control the behavior of the tooltip.

{{"demo": "pages/components/tooltips/ControlledTooltips.js"}}

## Largura Variável

The `Tooltip` wraps long text by default to make it readable.

{{"demo": "pages/components/tooltips/VariableWidth.js"}}

## Interativo

A tooltip can be interactive. It won't close when the user hovers over the tooltip before the `leaveDelay` is expired.

{{"demo": "pages/components/tooltips/InteractiveTooltips.js"}}

## Elementos Desativados

By default disabled elements like `<button>` do not trigger user interactions so a `Tooltip` will not activate on normal events like hover. To accommodate disabled elements, add a simple wrapper element like a `span`.

{{"demo": "pages/components/tooltips/DisabledTooltips.js"}}

## Transições

Use uma transição diferente.

{{"demo": "pages/components/tooltips/TransitionsTooltips.js"}}

## Mostrando e ocultando

The tooltip is normally shown immediately when the user's mouse hovers over the element, and hides immediately when the user's mouse leaves. A delay in showing or hiding the tooltip can be added through the properties `enterDelay` and `leaveDelay`, as shown in the Controlled Tooltips demo above.

On mobile, the tooltip is displayed when the user longpresses the element and hides after a delay of 1500ms. You can disable this feature with the `disableTouchListener` property.

{{"demo": "pages/components/tooltips/DelayTooltips.js"}}