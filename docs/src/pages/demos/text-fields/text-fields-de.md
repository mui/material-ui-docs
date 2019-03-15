---
title: Textfeld React-Komponente
components: FilledInput, FormControl, FormHelperText, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField
---
# Text Felder

<p class="description">Text Felder lassen Nutzer Text eingeben und bearbeiten.</p>

[Text Felder](https://material.io/design/components/text-fields.html) erlauben Nutzern, Text in eine Benutzeroberfläche einzugeben. Sie erscheinen typischerweise in Formen und Dialogen.

## TextField

Die `TextField` Wrapper-Komponente ist ein vollständiges Formularsteuerelement, das eine Beschriftung, Eingabe und Hilfetext enthält.

{{"demo": "pages/demos/text-fields/TextFields.js"}}

> **Hinweis:** Diese Version des Textfelds ist nicht mehr in der Material Design-Dokumentation dokumentiert.

## Umrandung

`TextField` unterstützt Umrandungen.

{{"demo": "pages/demos/text-fields/OutlinedTextFields.js"}}

## Gefüllt

`TextField` unterstützt Füllung.

{{"demo": "pages/demos/text-fields/FilledTextFields.js"}}

## Komponenten

Das `Textfeld` besteht aus kleineren Komponenten ( [`FormControl`](/api/form-control/), [`Input`](/api/input/), [`FilledInput`](/api/filled-input/), [`InputLabel`](/api/input-label/), [`OutlinedInput`](/api/outlined-input/), und [`FormHelperText`](/api/form-helper-text/) ) welche Sie direkt nutzen können, um Ihre Formulareingaben erheblich anzupassen.

Möglicherweise haben Sie auch festgestellt, dass einige native HTML-Eingabeeigenschaften in der Komponente `TextField` fehlen. Das war Absicht. Die Komponente kümmert sich um die am häufigsten verwendeten Eigenschaften. Anschließend muss der Benutzer die darunter liegende Komponente verwenden, die in der folgenden Demo gezeigt wird. Sie können jedoch `inputProps` (und `InputProps`, `InputLabelProps` Eigenschaften) verwenden, wenn Sie einiges an Boilerplate vermeiden möchten.

{{"demo": "pages/demos/text-fields/ComposedTextField.js"}}

## Eingaben

{{"demo": "pages/demos/text-fields/Inputs.js"}}

## Benutzerdefinierte Eingabe

Wenn du die [Überschreibungs Dokumentationsseite](/customization/overrides/) gelesen hast, aber dich noch nicht sicher genug fühlst, um direkt loszulegen, ist hier noch ein Beispiel, wie du die Farbe der Eingabe ändern kannst.

⚠️ Auch wenn die material design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/text-fields/CustomizedInputs.js"}}

Die Anpassung endet nicht bei CSS. Sie können Komposition verwenden, um benutzerdefinierte Komponenten zu erstellen und Ihrer App ein einzigartiges Gefühl zu verleihen. Nachfolgend ein Beispiel mit der [`InputBase`](/api/input-base/) Komponente, die von Google Maps inspiriert wurde.

{{"demo": "pages/demos/text-fields/CustomizedInputBase.js"}}

## Eingabeverzierungen

`Input` ermöglicht die Bereitstellung von `InputAdornment`. Diese können verwendet werden, um einer Eingabe ein Präfix, ein Suffix oder eine Aktion hinzuzufügen. Sie können beispielsweise eine Symbolschaltfläche verwenden, um das Kennwort ein- oder auszublenden.

{{"demo": "pages/demos/text-fields/InputAdornments.js"}}

### Mit Symbol

Symbole können vorangestellt oder angehängt werden.

{{"demo": "pages/demos/text-fields/InputWithIcon.js"}}

### Ausgefüllte Eingabeverzierungen

{{"demo": "pages/demos/text-fields/FilledInputAdornments.js"}}

### Umrahmte Eingabeverzierungen

{{"demo": "pages/demos/text-fields/OutlinedInputAdornments.js"}}

## Layout

`TextField`, `FormControl` ermöglicht die Angabe von `Abständen (Margin)`, um den vertikalen Abstand der Eingaben zu ändern. Bei Verwendung von `none` (Standard) werden keine Ränder für das `FormControl` angewendet, wohingegen `dense (dicht)` und `normal` sowie andere Stile angegeben werden können, um die Spezifikation zu erfüllen.

{{"demo": "pages/demos/text-fields/TextFieldMargins.js"}}

## Einschränkungen

The input label "shrink" state isn't always correct. The input label is supposed to shrink as soon as the input is displaying something. In some circumstances, we can't determine the "shrink" state (number input, datetime input, Stripe input). You might notice an overlap.

![Schrumpfen](/static/images/text-fields/shrink.png)

To workaround the issue, you can force the "shrink" state of the label.

```jsx
<TextField InputLabelProps={{ shrink: true }} />
```

oder

```jsx
<InputLabel shrink>Contagem</InputLabel>
```

## Formatted inputs

You can use third-party libraries to format an input. You have to provide a custom implementation of the `<input>` element with the `inputComponent` property. The provided input component should handle the `inputRef` property. The property should be called with a value implementing the [`HTMLInputElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement) interface.

The following demo uses the [react-text-mask](https://github.com/text-mask/text-mask) and [react-number-format](https://github.com/s-yadav/react-number-format) libraries.

{{"demo": "pages/demos/text-fields/FormattedInputs.js"}}

## Accessibility

In order for the text field to be accessible, **the input should be linked to the label and the helper text**. The underlying DOM nodes should have this structure.

```jsx
<div class="form-control">
  <label for="my-input">Email address</label>
  <input id="my-input" aria-describedby="my-helper-text" />
  <span id="my-helper-text">We'll never share your email.</span>
</div>
```

- If you are using the `TextField` component, you just have to provide a unique `id`.
- If you are composing the component:

```jsx
<FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
</FormControl>
```

## Complementary projects

For more advanced use cases you might be able to take advantage of:

- [redux-form-material-ui](https://github.com/erikras/redux-form-material-ui) A set of wrapper components to facilitate using Material UI with Redux Form.
- [formik-material-ui](https://github.com/stackworx/formik-material-ui) Bindings for using Material-UI with formik.
- [final-form-material-ui](https://github.com/Deadly0/final-form-material-ui) A set of wrapper components to facilitate using Material UI with Final Form.
- [uniforms-material](https://github.com/vazco/uniforms/tree/master/packages/uniforms-material) Material-UI wrapper components for Uniforms, a set of React libraries for building forms.