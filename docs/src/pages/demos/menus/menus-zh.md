---
title: React Menu（菜单）组件
components: Menu, MenuItem, MenuList, ClickAwayListener, Popover, Popper
---

# Menus（菜单）

<p class="description">菜单在临时出现的位置上展示一系列的选项列表。</p>

一个[菜单](https://material.io/design/components/menus.html)在临时的界面上列出了一系列的选项。当用户和按钮，或其他控件交互的时候，菜单会再次出现。

## 简单菜单

默认情况下，简单菜单在锚元素上打开（此选项可以通过 props 更改）。 当靠近屏幕边缘时，简单菜单会在垂直方向上重新对齐，以确保所有菜单子项都完全可见。

理想状态下，选择一个选项会出发即刻提交该选项并且关闭整个菜单。

**解疑**: 与简单菜单相比，基本对话框可以显示与一个列表项相关的其他选项的详细信息，或者提供与主要任务相关的导航类的或垂直的操作。 虽然它们可以显示相同的内容，但相对于基本对话框，我们更推荐简单菜单，因为它对用户的当前上下文干预更少。

{{"demo": "pages/demos/menus/SimpleMenu.js"}}

## 选择菜单

若用于选项的选择，当打开简单菜单的时候，它会通过一个锚元素来尝试与当前被选择的菜单的选择项垂直对齐，而初始的焦点将放置于此被选项。 通过`selected`属性（在[ListItem](/api/list-item/)中），我们设置当前的被选项。 若想要使用一个被选菜单项且不影响初始的焦点或者菜单的垂直位置，您可以设置一下`菜单`的`variant`属性。

{{"demo": "pages/demos/menus/SimpleListMenu.js"}}

## MenuList 组件

`Menu`组件内部使用`Popver`组件 但是，您可能想药使用不同的定位策略，或者你不想禁止滚动。 为了满足这些需求，我们公开了一个`MenuList`组件，让你可以像下面例子中这样组合`Popper`来编写自己的菜单组件。

`MenuList`组件的主要职责是处理焦点。

{{"demo": "pages/demos/menus/MenuListComposition.js"}}

## 定制菜单项

如果您一直在阅读 [覆盖文档页面](/customization/overrides/) 但是您没有信心跳入， 这里是一个如何自定义 `MenuItem`示例。

⚠️虽然材料设计规范鼓励主题，但这个例子是不合适的。

{{"demo": "pages/demos/menus/ListItemComposition.js"}}

`MenuItem`实际上是在`ListItem`之上增加了一些样式的封装。 所以你可以靠`MenuItem`来使用相同的列表组合特性：

## 限高菜单

如果菜单的最大高度仍无法显示所有菜单项，则菜单可以在内部滚动。

{{"demo": "pages/demos/menus/LongMenu.js"}}

## 局限性

有 [一个 flexbox 的 bug](https://bugs.chromium.org/p/chromium/issues/detail?id=327437)，使 `text-overflow: ellipsis` 在 Flexbox 布局中不工作。 您可以使用 `Typography` 组件和 `noWrap` 来解决此问题：

{{"demo": "pages/demos/menus/TypographyMenu.js"}}

## 更改过渡动画

使用不同的过渡动画。

{{"demo": "pages/demos/menus/FadeMenu.js"}}

## 补充项目

对于更高级的用例，您可以利用：

### PopupState helper

这里有一个第三方包 [`material-ui-popup-state`](https://github.com/jcoreio/material-ui-popup-state) 在大部分情况下，它都能帮你处理好菜单状态

{{"demo": "pages/demos/menus/MenuPopupState.js"}}