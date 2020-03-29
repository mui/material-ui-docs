---
title: React Select 选择器组件
components: Select, NativeSelect
---

# Select 选择器

<p class="description">选择器组件能从一个选项列表中去获得用户所提供的信息。</p>

## 简单的选择器

我们通常将菜单（Menus）放置在其所点击的元素上，这样的话能够确保当前选定的菜单项显示在点击的元素之上。

{{"demo": "pages/components/selects/SimpleSelect.js"}}

## 高级功能

Select 组件的设计原理是和一个原生的 `<select>` 元素能够互相替代。

若您需要一个更优雅的功能，譬如 combobox，multiselect，autocomplete，async 或者 creatable support，请查看 [`Autocomplete` 组件](/components/autocomplete/)。 此组件旨在改进 “react-select” 和 “downshift” 这两个包。

## Native Select 原生的选择器

为了提高用户体验，对于在移动设备上使用平台的原生选择器这样的模式，我们是支持的。

{{"demo": "pages/components/selects/NativeSelects.js"}}

## Text Fields 文本输入框

`TextField` wrapper 组件是一个完整的表单控件，它包括了标签，输入和帮助文本。 您可以在[在此章节中](/components/text-fields/#select)查看使用 select 模式的示例。

## 自定义选择器

以下是自定义组件的一些例子。 您可以在[重写文档页](/customization/components/)中了解有关此内容的更多信息。

第一步是设置 `InputBase` 组件的样式。 一旦设置好样式，您就可以直接将其用作文本字段，也可以将其提供给 select 组件的 `input` 属性作为一个 `select` 字段。

{{"demo": "pages/components/selects/CustomizedSelects.js"}}

## 多选

The `Select` component can handle multiple selections. It's enabled with the `multiple` property.

Like with the single selection, you can pull out the new value by accessing `event.target.value` in the `onChange` callback. It's always an array.

{{"demo": "pages/components/selects/MultipleSelect.js"}}

## 可控制地打开选择器

{{"demo": "pages/components/selects/ControlledOpenSelect.js"}}

## 与对话框组件使用

虽然Material Design的规范不鼓励，但您可以在对话框组件中使用选择。

{{"demo": "pages/components/selects/DialogSelect.js"}}

## Grouping

Display categories with the `ListSubheader` component or the native `<optgroup>` element.

{{"demo": "pages/components/selects/GroupedSelect.js"}}

## 可访问性

To properly label your `Select` input you need an extra element with an `id` that contains a label. That `id` needs to match the `labelId` of the `Select` e.g.

```jsx
<InputLabel id="label">Age</InputLabel>
<Select labelId="label" id="select" value="20">
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</Select>
```

Alternatively a `TextField` with an `id` and `label` creates the proper markup and ids for you:

```jsx
<TextField id="select" label="Age" value="20" select>
  <MenuItem value="10">Ten</MenuItem>
  <MenuItem value="20">Twenty</MenuItem>
</TextField>
```