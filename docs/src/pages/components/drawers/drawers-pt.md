---
title: Componente React para Drawer
components: Drawer, SwipeableDrawer
---

# Drawer

<p class="description">A navegação por drawers fornece acessos para destinos dentro de sua aplicação. As folhas laterais são locais contendo o conteúdo suplementar que é ancorado do lado esquerdo ou direito da tela.</p>

[Navegação por drawers](https://material.io/design/components/navigation-drawer.html) dá acesso a destinos e funcionalidades do aplicativo, como por exemplo, a mudança de usuário. Eles podem estar permanentemente na tela ou controlados por um ícone de menu de navegação.

[Folhas laterais](https://material.io/design/components/sheets-side.html) são superfícies complementares usadas principalmente em tablets e computadores.

## Drawer temporário

Drawers de navegação temporária podem alternar entre aberto ou fechado. Por padrão fechado, o drawer abre temporariamente acima de todo o conteúdo até que uma seção seja selecionada.

O Drawer pode ser cancelado clicando fora de seu conteúdo ou pressionando a tecla Esc. Fecha quando um item é selecionado, ou manipulado pela propriedade `open`.

{{"demo": "pages/components/drawers/TemporaryDrawer.js"}}

## Drawer temporário deslizável (Swipeable)

Voê pode fazer um drawer deslizável (swipeable) com o componente `SwipeableDrawer`.

Este componente vem sobrecarregado com 2 kB gzipped de utilidades. Alguns dispositivos móveis de baixo custo podem não ser capazes de seguir os dedos a 60 FPS. Você pode usar a propriedade `disableBackdropTransition` para ajudar.

{{"demo": "pages/components/drawers/SwipeableTemporaryDrawer.js"}}

Estamos usando o seguinte conjunto de propriedades nesta documentação para otimizar a usabilidade do componente: - o iOS é hospedado em dispositivos de última geração. Podemos ativar a transição backdrop sem perder quadros. O desempenho será suficientemente bom. - iOS tem um recurso "deslize para voltar" que bagunça com o recurso de descoberta. Tivemos que desativá-lo.

```jsx
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
```

## Drawer responsivo

O componente responsivo `Hidden` auxilia na exibição de diferentes tipos de drawer, dependendo da largura da tela. Um drawer `temporary` é exibido para telas pequenas enquanto um drawer `permanent` é exibido para telas maiores.

{{"demo": "pages/components/drawers/ResponsiveDrawer.js", "iframe": true}}

## Drawer persistente

Drawers de navegação persistente podem alternar entre aberto ou fechado. O drawer, quando exibido, fica no mesmo plano (superfície) que o conteúdo. Ele é fechado por padrão e aberto quando selecionado por um ícone de menu e permanecendo aberto até ser fechado pelo usuário. O estado do drawer é lembrado de ação para ação e de sessão para sessão.

Quando o drawer está fora da grade da página e se abre, o drawer força o outro conteúdo a alterar o tamanho e a adaptar-se à janela de visualização (viewport).

Drawers de navegação persistente são aceitáveis para todos os tamanhos maiores que os móveis (mobile). Eles não são recomendados para aplicativos com vários níveis de hierarquia que exigem o uso de uma seta para navegação.

{{"demo": "pages/components/drawers/PersistentDrawerLeft.js", "iframe": true}}

{{"demo": "pages/components/drawers/PersistentDrawerRight.js", "iframe": true}}

## Mini variant drawer

In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar. When expanded, it appears as the standard persistent navigation drawer.

The mini variant is recommended for apps sections that need quick selection access alongside content.

{{"demo": "pages/components/drawers/MiniDrawer.js", "iframe": true}}

## Permanent drawer

Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.

Permanent navigation drawers are the **recommended default for desktop**.

### Full-height navigation

Apps focused on information consumption that use a left-to-right hierarchy.

{{"demo": "pages/components/drawers/PermanentDrawerLeft.js", "iframe": true}}

{{"demo": "pages/components/drawers/PermanentDrawerRight.js", "iframe": true}}

### Clipped under the app bar

Apps focused on productivity that require balance across the screen.

{{"demo": "pages/components/drawers/ClippedDrawer.js", "iframe": true}}