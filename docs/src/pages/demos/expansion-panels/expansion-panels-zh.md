---
title: React Expansion Panel（扩展面板）组件
components: ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary
---

# Expansion Panels（扩展面板）

<p class="description">扩展面板包含了创建流程和轻量地编辑元素。</p>

[扩展面板](https://material.io/archive/guidelines/components/expansion-panels.html)是一个轻量级容器，既可以单独使用，也可以和卡片这样更大的平面相结合。

> **请注意：** Material Design 文档中不再记录扩展面板。

## 可及性

如果想要得到最佳辅助，我们建议您在`ExpansionPanelSummary`中配置 `id` 和 `aria-controls` 。 `ExpansionPanel` 将为面板的内容区域导出必要的 `aria-labelledby`和`id`。

## 简单的扩展面板

{{"demo": "pages/demos/expansion-panels/SimpleExpansionPanel.js"}}

## 可控制的折叠面板

默认情况下，面板会使用`ExpansionPanel`组件创建一个折叠面板。

{{"demo": "pages/demos/expansion-panels/ControlledExpansionPanels.js"}}

## 次级标题和列

您可以使用多列来创建内容，并且可以将辅助文本添加到面板。

{{"demo": "pages/demos/expansion-panels/DetailedExpansionPanel.js"}}

## 性能

默认情况下，即使在面板没被展开的情况下，扩展面板的内容也会被注入到页面中。 这样的默认情况是是考虑到了 server-side rendering（服务端渲染）和 SEO（搜索引擎优化）。 但如果你要在扩展面板中渲染开销很大的组件树或者只是单纯要渲染很多扩展面板,覆盖掉插入到页面的默认行为或许是个好主意.你可以通过在`TransitionProps`设置`unmountOnExit`为true来达到此目的: `<ExpansionPanel TransitionProps={{ unmountOnExit: true }} />`. 不过这并不是对所有情况下的性能优化来说都是灵丹妙药. 务必先确定性能的瓶颈所在再考虑这些优化策略.

## 定制扩展面板

如果您已经在阅读 [组件覆写文档页面](/customization/overrides/) 但是您没有信心进入， 这里是一个关于如何自定义`ExpansionPanelSummary`组件背景自然色和给`ExpansionPanelDetails`组件添加填充的示例。

⚠️虽然 Material design 规范鼓励样式化，但这些例子是不合适的。

{{"demo": "pages/demos/expansion-panels/CustomizedExpansionPanel.js"}}