---
title: React Text Field（文本框）组件
components: FilledInput, FormControl, FormHelperText, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField
---

# Text Fields（文本框）

<p class="description">用户可以在文本框内输入或编辑文字。</p>

[文本框](https://material.io/design/components/text-fields.html)允许用户在界面中输入文本。通常我们会在表单或者对话框中使用它们。

## TextField

`TextField` wrapper 组件是一个完整的表单控件，包括标签，输入和帮助文本。

{{"demo": "pages/demos/text-fields/TextFields.js"}}

> **注意：** Material Design 文档中不再记录此版本的文本框。

## Outlined（轮廓）

`TextField` 支持轮廓的样式。

{{"demo": "pages/demos/text-fields/OutlinedTextFields.js"}}

## Filled（填充）

`TextField` 支持轮廓的样式。

{{"demo": "pages/demos/text-fields/FilledTextFields.js"}}

## 组件

`TextField` 是由以下较小的组件组成的 ( [`FormControl`](/api/form-control/), [`Input`](/api/input/), [`FilledInput`](/api/filled-input/), [`InputLabel`](/api/input-label/), [`OutlinedInput`](/api/outlined-input/), and [`FormHelperText`](/api/form-helper-text/) )， 你可以直接利用这一点来自定义你的表单输入.

您可能注意到了， 和原生的 HTML input 组件相比，`TextField` 组件缺缺失了一些属性。 这是故意而为之的。 该组件只负责处理最常用的一些属性，如果有其他需求，用户可以自行使用下面 Demo 中演示的基础组件。 但是同时, 为了避免过于模版化，您仍然可以使用 `inputProps` (和 `inputProps`, `InputLabelProps` 属性) 来控制原生组件的属性。

{{"demo": "pages/demos/text-fields/ComposedTextField.js"}}

## Inputs（输入）

{{"demo": "pages/demos/text-fields/Inputs.js"}}

## 自定义输入

以下是自定义组件的一些示例。您可以在[重写文档页面](/customization/overrides/)中了解有关此内容的更多信息。

{{"demo": "pages/demos/text-fields/CustomizedInputs.js"}}

自定义不止于CSS，您可以使用组合来构建自定义组件，并给您的应用程序提供一种独特的感觉。 以下是使用受Google地图启发的 [`InputBase`](/api/input-base/) 组件的示例。

{{"demo": "pages/demos/text-fields/CustomizedInputBase.js"}}

## 修饰输入

`Input` 允许提供`InputAdornment`. 这些可用于向输入添加前缀、后缀或动作. 例如, 您可以使用图标按钮来隐藏或显示密码.

{{"demo": "pages/demos/text-fields/InputAdornments.js"}}

### 使用图标

图标可以指定为预置或追加。

{{"demo": "pages/demos/text-fields/InputWithIcon.js"}}

### 修饰输入框的填充内容

{{"demo": "pages/demos/text-fields/FilledInputAdornments.js"}}

### 修饰输入框的轮廓

{{"demo": "pages/demos/text-fields/OutlinedInputAdornments.js"}}

## 布局

`TextField`, `FormControl` 允许指定`margin`来改变输入的垂直间距。 使用`none` (默认), 将不会在`FormControl`添加margins, 而 `dense`和`normal`也会改变其他样式以符合规范.

{{"demo": "pages/demos/text-fields/TextFieldMargins.js"}}

## 局限性

输入标签 "shrink" 状态并不总是正确的。 输入标签应在输入显示内容时立即收缩。 在某些情况下, 我们无法确定 "shrink" 状态 (数字输入、日期时间输入、条带输入)。 您可能会注意到重叠。

![缩小](/static/images/text-fields/shrink.png)

若要解决此问题, 您可以强制标签的 "shrink" 状态。

```jsx
<TextField InputLabelProps={{ shrink: true }} />
```

或

```jsx
<InputLabel shrink>计数</InputLabel>
```

## 格式化输入

您可以使用第三方库格式化输入。 您必须提供一个带有 `inputComponent` 属性的 `<input>` 元素的自定义实现。 提供的输入组件应该处理 `inputRef` 属性。 应使用实现 [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) 接口的值调用该属性。

下面的演示使用 [react-text-mask](https://github.com/text-mask/text-mask)和 [react-number-format](https://github.com/s-yadav/react-number-format) 库。

{{"demo": "pages/demos/text-fields/FormattedInputs.js"}}

## 可访问性

为了使文本字段可访问， **输入要链接到标签和辅助文本**。底层DOM节点应具有此结构。

```jsx
<div class="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>
```

- 如果您使用的是 `TextField` 组件，则只需提供唯一的 `id`。
- 如果您正在编写组件：

```jsx
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
```

## 补充项目

对于更高级的用例，您可以利用：

- [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui)：一组用于更加方便地与 Redux Form 配搭来使用 Material UI 的封装组件。
- [formik-material-ui](https://github.com/stackworx/formik-material-ui)：用 formil 来绑定 Material-UI。
- [final-form-material-ui](https://github.com/Deadly0/final-form-material-ui)：一组配合 Final Form 和 Material UI 的封装组件。