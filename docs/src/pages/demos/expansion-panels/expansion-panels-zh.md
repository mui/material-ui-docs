---
title: 扩展面板 React 组件
components: ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary
---
# 扩展面板

<p class="description">扩展面板包含创建流程，允许轻量编辑元素。</p>

[扩展面板](https://material.io/archive/guidelines/components/expansion-panels.html)是一个轻量级容器，既可以单独使用，也可以和卡片这样更大的平面相结合。

> **注意：** 材料设计文档中不再记录扩展面板。

## 无障碍功能

For optimal accessibility we recommend setting `id` and `aria-controls` on the `ExpansionPanelSummary`. The `ExpansionPanel` will derive the necessary `aria-labelledby` and `id` for the content region of the panel.

## 简单的扩展面板

{{"demo": "pages/demos/expansion-panels/SimpleExpansionPanel.js"}}

## 受控手风琴

扩展默认面板行为以使用` ExpansionPanel `组件创建手风琴。

{{"demo": "pages/demos/expansion-panels/ControlledExpansionPanels.js"}}

## 次要标题和列

可以使用多列来构造内容，并且可以将辅助文本添加到面板以帮助用户。

{{"demo": "pages/demos/expansion-panels/DetailedExpansionPanel.js"}}

## Customized Expansion Panel

If you have been reading the [overrides documentation page](/customization/overrides/) but you are not confident jumping in, here is one example of how you can customize the background color of the `ExpansionPanelSummary` and padding of `ExpansionPanelDetails`.

⚠️虽然材料设计规范鼓励主题，但这些例子是不合适的。

{{"demo": "pages/demos/expansion-panels/CustomizedExpansionPanel.js"}}