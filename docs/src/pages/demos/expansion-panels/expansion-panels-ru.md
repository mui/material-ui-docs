---
title: Панель расширения (Компонент React)
components: ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary
---

# Expansion panels (Раскрывающиеся панели)

<p class="description">Панель расширения содержит потоки создания и позволяет легко редактировать элементы.</p>

[Expansion panel](https://material.io/archive/guidelines/components/expansion-panels.html) это простой контейнер, который может использоваться отдельно, либо как часть более крупного компонента, такого как Card (карточка).

> **Примечание:** компонента Expansion panel больше нет в документации по Material Design.

## Доступность

For optimal accessibility we recommend setting `id` and `aria-controls` on the `ExpansionPanelSummary`. The `ExpansionPanel` will derive the necessary `aria-labelledby` and `id` for the content region of the panel.

## Простая Expansion Panel

{{"demo": "pages/demos/expansion-panels/SimpleExpansionPanel.js"}}

## Управляемый "Аккордеон"

Используя компонент `ExpansionPanel`, расширив его поведение по умолчанию, можно получить "аккордеон".

{{"demo": "pages/demos/expansion-panels/ControlledExpansionPanels.js"}}

## Подзаголовок и столбцы

Содержимое панели можно структурировать, сгруппировав его в отдельные столбцы, кроме того можно добавить подзаголовок и подсказки для пользователя.

{{"demo": "pages/demos/expansion-panels/DetailedExpansionPanel.js"}}

## Производительность

Содержимое ExpansionPanels монтируется по умолчанию, даже если панель не развернута. Это предопределенное поведение подразумевает рендеринг на стороне сервера и SEO. Если вы отображаете обширные деревья компонентов внутри ваших панелей или просто отображаете много панелей, было бы неплохо изменить это поведение по умолчанию, включив `unmountOnExit` в `TransitionProps`: `<ExpansionPanel TransitionProps={{ unmountOnExit: true }} />`. Как и при любой оптимизации производительности, не стоит переоценивать её. Сначала идентифицируйте узкие места и лишь затем пытайтесь применить эти стратегии.

## Изменение стилей Expansion Panel

Если Вы читали [страницу документации переопределение стилей](/customization/overrides/), но недостаточно уверены в себе, чтобы попробовать самостоятельно, посмотрите на пример того, как можно изменить цвет фона компонента `ExpansionPanelSummary` и отступы `ExpansionPanelDetails`.

⚠️ Хотя спецификации материал дизайна поощряют использование тем, эти примеры не соответствуют требованиям.

{{"demo": "pages/demos/expansion-panels/CustomizedExpansionPanel.js"}}