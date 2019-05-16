---
title: Popper React component
components: Popper
---

# Popper

<p class="description">O Popper pode ser usado para exibir algum conteúdo em cima do outro. É uma alternativa para react-popper.</p>

Algumas características importantes do componente `Popper`:

- 
- 
- 
- As crianças são [`Portal`](/components/portal/) para o corpo do documento para evitar problemas de renderização. Você pode desativar esse comportamento com `disablePortal`.
- O deslocamento não é bloqueado como no componente [`Popover`](/components/popover/). O posicionamento do popper é atualizado com a área disponível na viewport.
- Clicar fora não oculta o componente `Popper`. Se você precisar desse comportamento, você pode usar [`ClickAwayListener`](/components/click-away-listener/) - veja o exemplo na [seção documentação do menu](/components/menus/#menulist-composition).
- O `anchorEl` é passado como o objeto de referência para criar uma nova instância `Popper.js`.

## Simples Popper

{{"demo": "pages/components/popper/SimplePopper.js" }}

## Minimalista Popper

Você pode usar o componente com zero dependências extras.

{{"demo": "pages/components/popper/MinimalPopper.js" }}

## Scroll playground

{{"demo": "pages/components/popper/ScrollPlayground.js", "hideHeader": true}}

## Posicionado Popper

{{"demo": "pages/components/popper/PositionedPopper.js"}}

## Popper sem transição

{{"demo": "pages/components/popper/NoTransitionPopper.js"}}

## Objeto de referência falsificado

A propriedade `anchorEl` pode ser uma referência a um elemento DOM falso. Você só precisa criar um objeto com o formato [`ReferenceObject`](https://github.com/FezVrasta/popper.js/blob/0642ce0ddeffe3c7c033a412d4d60ce7ec8193c3/packages/popper/index.d.ts#L118-L123).

Destaque parte do texto para ver o popper:

{{"demo": "pages/components/popper/FakedReferencePopper.js"}}

## Projetos Complementares

Para caso de usos mais avançados, você é capaz de aproveitar de:

### PopupState helper

Existe um pacote de terceiros [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) que cuida do estado popover para você na maioria dos casos.

{{"demo": "pages/components/popper/PopperPopupState.js"}}