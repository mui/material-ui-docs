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

Use the radio buttons to adjust the `anchorOrigin` and `transformOrigin` positions. You can also set the `anchorReference` to `anchorPosition` or `anchorEl`. When it is `anchorPosition`, the component will, instead of `anchorEl`, refer to the `anchorPosition` prop which you can adjust to set the position of the popover.

{{"demo": "pages/components/popover/AnchorPlayground.js", "hideHeader": true}}

## Interação sobre o mouse

Demonstramos como usar o componente `Popover` para implementar um comportamento popover baseado no evento mouse over.

{{"demo": "pages/components/popover/MouseOverPopover.js"}}

## Projetos Complementares

Para caso de usos mais avançados, você é capaz de aproveitar de:

### PopupState helper

There is a 3rd party package [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) that takes care of popover state for you in most cases.

{{"demo": "pages/components/popover/PopoverPopupState.js"}}