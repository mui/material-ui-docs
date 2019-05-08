---
title: Tabs React component
components: Tabs, Tab
---

# Tabs (Abas)

<p class="description">As guias facilitam a exploração e alternam entre diferentes visualizações.</p>

[Tabs](https://material.io/design/components/tabs.html) organizam e permitem a navegação entre grupos de conteúdo relacionados o no mesmo nível hierárquico.

## Guias Simples

Um exemplo simples sem frescuras.

{{"demo": "pages/components/tabs/SimpleTabs.js"}}

### Etiquetas embrulhadas

Long labels will automatically wrap on tabs. If the label is too long for the tab, it will overflow and the text will not be visible.

{{"demo": "pages/components/tabs/TabsWrappedLabel.js"}}

### Guia desativado

A Tab can be disabled by setting `disabled` property.

{{"demo": "pages/components/tabs/DisabledTabs.js"}}

## Corrigido Tabs

As guias fixas devem ser usadas com um número limitado de guias e quando o posicionamento consistente ajudar a memória muscular.

### Full width

A propriedade `variant="fullWidth"` deve ser usada em views menores. Esta demo também usa [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) para animar a transição de Guias e permite que estas sejam trocadas ao toque nos dispositivos.

{{"demo": "pages/components/tabs/FullWidthTabs.js"}}

### Centered

A propriedade `centered` deve ser usada para views maiores.

{{"demo": "pages/components/tabs/CenteredTabs.js"}}

## Guias Roláveis

### Botões de Rolagem Automática

Left and right scroll buttons will automatically be presented on desktop and hidden on mobile. (based on viewport width)

{{"demo": "pages/components/tabs/ScrollableTabsButtonAuto.js"}}

### Botões de Rolagem Forçados

Botões de rolagem para esquerda e direita serão apresentados independente da largura de exibição do dispositivo.

{{"demo": "pages/components/tabs/ScrollableTabsButtonForce.js"}}

### Oculta Botões de Rolagem

Left and right scroll buttons will never be presented. All scrolling must be initiated through user agent scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)

{{"demo": "pages/components/tabs/ScrollableTabsButtonPrevent.js"}}

## Customized tabs

Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](/customization/components/).

{{"demo": "pages/components/tabs/CustomizedTabs.js"}}

👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/tabs).

## Guias Nav

By default tabs use a `button` element, but you can provide your own custom tag or component. Here's an example of implementing tabbed navigation:

{{"demo": "pages/components/tabs/NavTabs.js"}}

## Guias de ícones

Os rótulos de guias podem ser todos os ícones ou todo o texto.

{{"demo": "pages/components/tabs/IconTabs.js"}}

{{"demo": "pages/components/tabs/IconLabelTabs.js"}}