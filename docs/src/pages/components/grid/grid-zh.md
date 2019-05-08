---
title: React 栅格(Grid)组件
components: 栅格(Grid)
---

# 栅格(Grid)

<p class="description">Material Design 响应式布局的栅格可适应屏幕大小和方向，确保布局之间的一致性。</p>

[Grid](https://material.io/design/layout/responsive-layout-grid.html): 栅格(Grid)组件能确保不同布局间的视觉一致性，同时在众多不同设计中保持灵活性。 Material Design 的响应式 UI 是基于12列的栅格布局。

## 它是如何工作的

栅格系统使用 `Grid` 组件实现：

- 为了达到高度的灵活性，它运用了用 [CSS 的 Flexible Box 模块](https://www.w3.org/TR/css-flexbox-1/) 。
- 它有两种类型的布局： *containers* ， *items*。
- 项目宽度以百分比设置，因此它们总是相对于其父元素是流动的和大小的。
- 项目具有填充以创建单个项目之间的间距。
- 有五个网格断点：xs，sm，md，lg和xl。

如果你**对flexbox不熟悉**，我们建议你阅读：[CSS-Tricks flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)手册。

## 间距

响应式栅格侧重于一致的间距宽度，而不是列宽。 Material design 外边距和列遵循** 8dp **方形基线栅格。 spacing属性是0到10之间的整数，包括0和10。 默认情况下，两个网格项之间的间距遵循线性函数： `output(spacing) = spacing * 8px`，例如 `spacing = {2}` 创建16px宽间距。

该输出变换函数可定制 [使用中的主题](/customization/spacing/)。

{{"demo": "pages/components/grid/SpacingGrid.js"}}

## 流体栅格

Fluid grids use columns that scale and resize content. A fluid grid’s layout can use breakpoints to determine if the layout needs to change dramatically.

### 基本栅格

列宽适用于所有断点（即` xs `及以上）。

{{"demo": "pages/components/grid/CenteredGrid.js"}}

### 有断点的栅格

一些列定义有多种宽度，定义断点之后布局会根据不同宽度改变。

{{"demo": "pages/components/grid/FullWidthGrid.js"}}

## 交互

下面是一个交互式演示，可让您探索不同设置的可视结果：

{{"demo": "pages/components/grid/InteractiveGrid.js", "hideHeader": true}}

## 自动布局

The Auto-layout makes the *items* equitably share the available space. That also means you can set the width of one *item* and the others will automatically resize around it.

{{"demo": "pages/components/grid/AutoGrid.js"}}

## 复杂栅格

以下演示不遵循Material Design规范，但说明了如何使用栅格构建复杂的布局。

{{"demo": "pages/components/grid/ComplexGrid.js"}}

## 嵌套栅格

The `container` and `item` properties are two independent booleans. They can be combined.

> flex **容器** 是由具有 `flex` 或 `inline-flex`的计算显示的元素生成的框。 Flex容器的流入子容器称为flex **items** 并使用flex布局模型进行布局。

https://www.w3.org/TR/css-flexbox-1/#box-model

{{"demo": "pages/components/grid/NestedGrid.js"}}

## 局限性

### 负边距

我们使用负边距来实现项目之间的间距有一个缺点。 如果负边距超出`<body>`元素，则会出现水平滚动。 There are 3 available workarounds:

1. 不使用spacing特性并且设置成默认的`spacing={0}`
2. 将填充应用于父级元素，并且至少将一半的间距值应用于子级元素：

```jsx
  <body>
    <div style={{ padding: 20 }}>
      <Grid container spacing={5}>
        //...
      </Grid>
    </div>
  </body>
```

3. 在父元素上设置`overflow-x: hidden;`

### white-space: nowrap;

The initial setting on flex items is `min-width: auto`. It's causing a positioning conflict when the children is using `white-space: nowrap;`. You can experience the issue with:

```jsx
<Grid item xs>
  <Typography noWrap>
```

In order for the item to stay within the container you need to set `min-width: 0`. In practice, you can set the `zeroMinWidth` property:

```jsx
<Grid item xs zeroMinWidth>
  <Typography noWrap>
```

{{"demo": "pages/components/grid/AutoGridNoWrap.js"}}

### direction: column | column-reverse

虽然`Grid`组件有`direction`属性，此属性有`row`，`row-reverse`，`column`，和`column-reverse`选项，但是有些功能是不支持`column`和`column-reverse`容器的。 The properties which define the number of grids the component will use for a given breakpoint (`xs`, `sm`, `md`, `lg`, and `xl`) are focused on controlling width and do **not** have similar effects on height within `column` and `column-reverse` containers. If used within `column` or `column-reverse` containers, these properties may have undesirable effects on the width of the `Grid` elements.

## CSS栅格布局

Material-UI doesn't provide any CSS Grid functionality itself, but as seen below you can easily use CSS Grid to layout your pages.

{{"demo": "pages/components/grid/CSSGrid.js"}}