---
title: Snackbar React component
components: Snackbar, SnackbarContent
---

# Snackbar

<p class="description">Snackbars fornecem mensagens breves sobre processos de aplicativos por meio de uma mensagem - normalmente na parte inferior da tela</p>

[Snackbars](https://material.io/design/components/snackbars.html) inform users of a process that an app has performed or will perform. Eles aparecem temporariamente, na parte inferior da tela. Eles não devem interromper a experiência do usuário e não exigem ação do usuário para que desapareça.

Snackbars contêm uma única linha de texto diretamente relacionada à operação realizada. Eles podem conter uma ação de texto, mas não ícones. Você pode usá-los para exibir notificações.

#### Frequência

Apenas um snackbar pode ser exibido por vez.

## Simples

Um snackbar básico que tem como objetivo reproduzir o comportamento do Google Keep's snackbar.

{{"demo": "pages/demos/snackbars/SimpleSnackbar.js"}}

## Snackbars personalizados

Aqui estão alguns exemplos de personalização do componente. Você pode aprender mais sobre isso na [página de documentação de substituições](/customization/overrides/).

{{"demo": "pages/demos/snackbars/CustomizedSnackbars.js"}}

## Positioned

There may be circumstances when the placement of the snackbar needs to be more flexible.

{{"demo": "pages/demos/snackbars/PositionedSnackbar.js"}}

## Comprimento da Mensagem

Alguns snackbars com tamanho variável de mensagem.

{{"demo": "pages/demos/snackbars/LongTextSnackbar.js"}}

## Transições

### Snackbars Consecutivos

When multiple snackbar updates are necessary, they should appear one at a time.

{{"demo": "pages/demos/snackbars/ConsecutiveSnackbars.js"}}

### Snackbars and floating action buttons (FABs)

Snackbars should appear above FABs (on mobile).

{{"demo": "pages/demos/snackbars/FabIntegrationSnackbar.js", "iframe": true, "maxWidth": 500}}

### Change Transition

[Grow](/utils/transitions/#grow) is the default transition but you can use a different one.

{{"demo": "pages/demos/snackbars/TransitionsSnackbar.js"}}

### Control Slide direction

You can change the direction of the [Slide](/utils/transitions/#slide) transition.

{{"demo": "pages/demos/snackbars/DirectionSnackbar.js"}}

## Projetos Complementares

Para caso de usos mais avançados, você é capaz de aproveitar de:

### notistack

![estrelas](https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/notistack.svg)

No exemplo a seguir, demonstramos como usar [downshift](https://github.com/iamhosseindhv/notistack). o notistack facilita a exibição das barras de snackbars (para que você não tenha que lidar com o estado de abertura / fechamento delas). Também permite empilhá-los uns sobre os outros (mas desencorajados pela especificação).

{{"demo": "pages/demos/snackbars/IntegrationNotistack.js"}}