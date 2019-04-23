---
title: Switch React component
components: Switch, FormControl, FormGroup, FormLabel, FormControlLabel
---

# 开关控件

<p class="description">Switches toggle the state of a single setting on or off.</p>

They are the preferred way to adjust settings on mobile.

开关控制的选项，以及它当前所处的状态都应该从相应的描述标签中明确说明。

{{"demo": "pages/demos/switches/Switches.js"}}

## 多个 Switch 和 FormControlLabel 的使用

通过使用` FormControlLabel ` 组件, ` Switch ` 也可与标签描述一起使用。

{{"demo": "pages/demos/switches/SwitchLabels.js"}}

## 多个 Switch 情况下使用 FormGroup

`FormGroup`提供相对简单的 API 对选择控件进行分组。 However, we encourage you to use a [Checkbox](#checkboxes) instead.

{{"demo": "pages/demos/switches/SwitchesGroup.js"}}

## 自定义 Switch

如果您有阅读[覆盖样式文档](/customization/overrides/)，但你还没有完全掌握方法，可以查看以下这个更改一个输入的主要颜色的示例，包括如何更改 Switch 的样式和自定义出一个 iOS 风格的 Switch

⚠️虽然Material Desig规范鼓励主题，但这些例子是不合适的。

{{"demo": "pages/demos/switches/CustomizedSwitches.js"}}

## 标签放置

你可以更改标签放置的位置:

{{"demo": "pages/demos/switches/FormControlLabelPosition.js"}}

## 无障碍功能

所有表单控件都应该有标签，这包括单选按钮，复选框和开关。 在大多数情况下，这是通过使用 `<label>` 元素（[FormControlLabel](/api/form-control-label/)）完成的。

如果无法使用标签，则必须直接向输入组件添加属性。 在这种情况下，可以应用附加的属性（例如 `arial-label`， `aria-labelledby`， `title`）经由 `inputProps` 属性。

```jsx
<Switch
  value="checkedA"
  inputProps={{ 'aria-label': 'Switch A' } }
/>
```