---
title: React Select（选择器）组件
components: Select, NativeSelect
---

# Selects（选择器）

<p class="description">选择器组件能从一个选项列表中去获得用户所提供的信息。</p>

## 简单的选择器

菜单位于其所点击的元素上，这样能够保证当前选定的菜单项在点击元素之上显示。

{{"demo": "pages/demos/selects/SimpleSelect.js"}}

## 原生的选择器

由于可以使用平台的原生选择器在移动设备上改进用户体验，我们允许这种模式。

{{"demo": "pages/demos/selects/NativeSelects.js"}}

## 自定义选择

以下是自定义组件的一些示例。您可以在[重写文档页面](/customization/overrides/)中了解有关此内容的更多信息。

第一步是设置 `InputBase` 组件的样式。 一旦设置样式，您就可以直接将其用作文本字段，也可以将其提供给select `input` 属性作为可以选择的内容项。

{{"demo": "pages/demos/selects/CustomizedSelects.js"}}

## 多选

`Select`组件可以处理多个选择，可以使用`multiple` 属性启用

与单项选择一样，您可以通过访问` onChange `属性中的回调` event.target.value `来提取新值。它总是一个数组。

{{"demo": "pages/demos/selects/MultipleSelect.js"}}

## 受控的选择器

{{"demo": "pages/demos/selects/ControlledOpenSelect.js"}}

## 与对话框组件使用

虽然Material Design的规范不鼓励，但您可以在对话框组件中使用选择。

{{"demo": "pages/demos/selects/DialogSelect.js"}}

## 文本输入框

` TextField `包装器组件是一个完整的表单控件，包括标签，输入和帮助文本。 您可以在本节中找到具有[select模式](/demos/text-fields/#textfield)的示例