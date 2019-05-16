---
title: Componente Menu React
components: Menu, MenuItem, MenuList, ClickAwayListener, Popover, Popper
---

# Menus

<p class="description">Os menus exibem uma lista de opções em superfícies temporárias.</p>

Um [Menu](https://material.io/design/components/menus.html) exibe uma lista de opções em uma superfície temporária. Elas aparecem quando os usuários interagem com um botão, ou outro controle.

## Menu simples

Menus simples abrem sobre o elemento âncora por padrão (esta opção pode ser alterada via props). Quando estão perto de uma borda da tela, menus simples realinham verticalmente para garantir que todos os itens do menu fiquem completamente visíveis.

Escolhendo imediadamente uma opção confirmando a opção e fechando o menu.

**Disambiguation**: In contrast to simple menus, simple dialogs can present additional detail related to the options available for a list item or provide navigational or orthogonal actions related to the primary task. Although they can display the same content, simple menus are preferred over simple dialogs because simple menus are less disruptive to the user’s current context.

{{"demo": "pages/components/menus/SimpleMenu.js"}}

## Menus Selecionados

Se usado para a seleção de itens, quando abertos, menus simples tentam alinhar verticalmente o item de menu atualmente selecionado com o elemento de âncora, e o foco inicial será colocado no item de menu selecionado. O item de menu atualmente selecionado é definido usando a propriedade</code>selected`(de <a href="/api/list-item/">ListItem</a>).
To use a selected menu item without impacting the initial focus or the vertical positioning of the menu, set the <code>variant` property to `menu`.

{{"demo": "pages/components/menus/SimpleListMenu.js"}}

## Composição de MenuList

O componente `Menu` usa o componente `Popover` internamente. No entanto, você pode querer usar uma estratégia de posicionamento diferente ou não bloquear a rolagem. Para responder a essas necessidades, expomos um componente `MenuList` que você pode compor, com `Popper` neste exemplo.

A principal responsabilidade do componente `MenuList` é manipular o foco.

{{"demo": "pages/components/menus/MenuListComposition.js"}}

## Menus Customizados

Aqui está um exemplo de personalização do componente. Você pode aprender mais sobre isso na [página de documentação de substituições](/customization/components/).

{{"demo": "pages/components/menus/CustomizedMenus.js"}}

The `MenuItem` is a wrapper around `ListItem` with some additional styles. You can use the same list composition features with the `MenuItem` component:

## Max height menus

If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.

{{"demo": "pages/components/menus/LongMenu.js"}}

## Limitações

There is [a flexbox bug](https://bugs.chromium.org/p/chromium/issues/detail?id=327437) that prevents `text-overflow: ellipsis` from working in a flexbox layout. You can use the `Typography` component with `noWrap` to workaround this issue:

{{"demo": "pages/components/menus/TypographyMenu.js"}}

## Change transition

Use uma transição diferente.

{{"demo": "pages/components/menus/FadeMenu.js"}}

## Projetos Complementares

Para caso de usos mais avançados, você é capaz de aproveitar de:

### PopupState helper

There is a 3rd party package [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) that takes care of menu state for you in most cases.

{{"demo": "pages/components/menus/MenuPopupState.js"}}