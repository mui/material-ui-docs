---
title: Popover React component
components: Grow, Popover
---

# Popover

<p class="description">Um Popover pode ser usado para exibir algum conteúdo em cima do outro.</p>

Coisas para saber ao usar o componente `Popover`:

- O componente é construído sobre o componente [`Modal`](/components/modal/).
- The scroll and click away are blocked unlike with the [`Popper`](/components/popper/) component.

## Simples Popover

{{"demo": "pages/components/popover/SimplePopover.js" }}

## Anchor playground

Use os botões de opção para ajustar as posições `anchorOrigin` e `transformOrigin`. Você também pode definir `anchorReference` para `anchorPosition` ou `anchorEl`. When it is `anchorPosition`, the component will, instead of `anchorEl`, refer to the `anchorPosition` prop which you can adjust to set the position of the popover.

{{"demo": "pages/components/popover/AnchorPlayground.js", "hideHeader": true}}

## Interação sobre o mouse

Demonstramos como usar o componente `Popover` para implementar um comportamento popover baseado no evento mouse over.

{{"demo": "pages/components/popover/MouseOverPopover.js"}}

## Projetos Complementares

Para caso de usos mais avançados, você é capaz de aproveitar de:

### PopupState helper

Existe um pacote de terceiros [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) que cuida do estado popover para você na maioria dos casos.

{{"demo": "pages/components/popover/PopoverPopupState.js"}}