---
title: Checkbox React component
components: Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel
---

# 复选框

<p class="description">Checkboxes allow the user to select one or more items from a set.</p>

复选框可用于打开或关闭选项。

如果列表中有多个选择项, 则可以使用复选框替代开关控件来节省空间。 如果只有单个选择项, 请避免使用复选框, 改用开关控件。

{{"demo": "pages/demos/checkboxes/Checkboxes.js"}}

通过 `FormControlLabel` 组件, `复选框` 也可与标签描述一起使用。

{{"demo": "pages/demos/checkboxes/CheckboxLabels.js"}}

## 使用FromGroup控制多个Checkbox

`FormGroup`提供相对简单的 API 对选择控件进行分组。

{{"demo": "pages/demos/checkboxes/CheckboxesGroup.js"}}

## 标签放置

你可以更改标签放置的位置:

{{"demo": "pages/demos/checkboxes/FormControlLabelPosition.js"}}

## 无障碍功能

所有表单控件都应该有标签，这包括单选按钮，复选框和开关。 在大多数情况下，这是通过使用 `<label>` 元素（[FormControlLabel](/api/form-control-label/)）完成的。

如果无法使用标签，则必须直接向输入组件添加属性。 在这种情况下，可以应用附加的属性（例如 `arial-label`， `aria-labelledby`， `title`）经由 `inputProps` 属性。

```jsx
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': '复选框 A' }}
/>
```

## Guidance

- [Checkboxes vs. 单选按钮](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)