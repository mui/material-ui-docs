---
title: Панель расширения (Компонент React)
components: ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary
---
# Expansion panels (Раскрывающиеся панели)

<p class="description">Панель расширения содержит потоки создания и позволяет легко редактировать элементы.</p>

[Expansion panel](https://material.io/archive/guidelines/components/expansion-panels.html) это простой контейнер, который может использоваться отдельно, либо как часть более крупного компонента, такого как Card (карточка).

> **Примечание:** компонента Expansion panel больше нет в документации по Material Design.

## Простая Expansion Panel

{{"demo": "pages/demos/expansion-panels/SimpleExpansionPanel.js"}}

## Контролируемый "Аккордеон"

Используя компонент `ExpansionPanel`, расширив его поведение по умолчанию, можно получить "аккордеон".

{{"demo": "pages/demos/expansion-panels/ControlledExpansionPanels.js"}}

## Secondary heading and Columns

Multiple columns can be used to structure the content, and a helper text may be added to the panel to assist the user.

{{"demo": "pages/demos/expansion-panels/DetailedExpansionPanel.js"}}

## Customized Expansion Panel

If you have been reading the [overrides documentation page](/customization/overrides/) but you are not confident jumping in, here is one example of how you can customize the background color of the `ExpansionPanelSummary` and padding of `ExpansionPanelDetails`.

⚠️ Хотя спецификации материал дизайна поощряют использование тем, эти примеры не соответствуют требованиям.

{{"demo": "pages/demos/expansion-panels/CustomizedExpansionPanel.js"}}