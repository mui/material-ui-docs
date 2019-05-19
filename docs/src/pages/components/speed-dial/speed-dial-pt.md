---
title: Componente React para Acesso Rápido
components: SpeedDial, SpeedDialAction, SpeedDialIcon
---

# Acesso Rápido

<p class="description">Quando pressionado, um botão de ação flutuante pode exibir de três a seis ações relacionadas na forma de um acesso rápido.</p>

Se mais de seis ações forem necessárias, algo diferente de um BAF deve ser usado para apresentá-las.

## Acesso rápido simples

O botão de ação flutuante pode exibir ações relacionadas.

{{"demo": "pages/components/speed-dial/SpeedDials.js"}}

## Ícone de fechamento customizado

Você pode fornecer um ícone alternativo para os estados de aberto e fechado usando as propriedades `icon` e `openIcon` do componente `SpeedDialIcon`.

{{"demo": "pages/components/speed-dial/OpenIconSpeedDial.js"}}

## Sugestões de ação fixadas

The SpeedDialActions tooltips can be be displayed persistently so that users don't have to long-press in order to see the tooltip on touch devices.

It is enabled here across all devices for demo purposes, but in production it could use the `isTouch` logic to conditionally set the property.

{{"demo": "pages/components/speed-dial/SpeedDialTooltipOpen.js"}}