---
title: Switch React component
components: Switch, FormControl, FormGroup, FormLabel, FormControlLabel
---

# 开关控件

<p class="description">Switches toggle the state of a single setting on or off.</p>

[Switches](https://material.io/design/components/selection-controls.html#switches) are the preferred way to adjust settings on mobile. The option that the switch controls, as well as the state it’s in, should be made clear from the corresponding inline label.

{{"demo": "pages/demos/switches/Switches.js"}}

## 多个 Switch 和 FormControlLabel 的使用

`Switch` can also be used with a label description thanks to the `FormControlLabel` component.

{{"demo": "pages/demos/switches/SwitchLabels.js"}}

## 多个 Switch 情况下使用 FormGroup

`FormGroup`提供相对简单的 API 对选择控件进行分组。 However, we encourage you to use a [Checkbox](#checkboxes) instead.

{{"demo": "pages/demos/switches/SwitchesGroup.js"}}

## 自定义 Switch

If you have been reading the [overrides documentation page](/customization/overrides/) but you are not confident jumping in, here's an example of how you can change the color of a Switch, and an iOS style Switch.

⚠️虽然 Material design 规范鼓励样式化，但这些例子是不合适的。

{{"demo": "pages/demos/switches/CustomizedSwitches.js"}}

## 标签放置

你可以更改标签的位置:

{{"demo": "pages/demos/switches/FormControlLabelPosition.js"}}

## 无障碍功能

所有表单控件都应该带有标签，而这包括了单选按钮，复选框和开关。 在大多数情况下，这是通过使用一个`<label>`元素（[FormControlLabel](/api/form-control-label/)）实现的。

如果无法使用标签，则必须直接在输入组件中添加属性。 在这种情况下，您可以通过`inputProps` 属性，来附着一些附加的属性（例如 `arial-label`，`aria-labelledby`，`title`）。

```jsx
<Switch
  value="checkedA"
  inputProps={{ 'aria-label': 'Switch A' } }
/>
```