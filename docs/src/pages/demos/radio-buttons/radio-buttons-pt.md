---
title: Radio buttons React component
components: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel
---

# Radio buttons

<p class="description">Radio buttons allow the user to select one option from a set.</p>

Use [radio buttons](https://material.io/design/components/selection-controls.html#radio-buttons) when the user needs to see all available options. If available options can be collapsed, consider using a dropdown menu because it uses less space.

Radio buttons should have the most commonly used option selected by default.

`RadioGroup` is a helpful wrapper used to group `Radio` components that provides an easier API, and proper keyboard accessibility to the group.

{{"demo": "pages/demos/radio-buttons/RadioButtonsGroup.js"}}

## Standalone Radio Buttons

`Radio` can also be used standalone, without the wrapper.

{{"demo": "pages/demos/radio-buttons/RadioButtons.js"}}

## Posicionamento do Label

Você pode alterar o posicionamento do label:

{{"demo": "pages/demos/radio-buttons/FormControlLabelPosition.js"}}

## Acessibilidade

Todos os form controls devem ter labels, e isso inclui radio buttons, checkboxes e switches. Na maioria dos casos, isso é feito usando `<label>` ([FormControlLabel](/api/form-control-label/)).

Quando uma label não pode ser usada, é necessário adicionar um atributo diretamente no componente de input. Nesse caso você pode aplicar um atributo adicional (e.g.`aria-label`,`aria-labelledby`, `title`) através do `inputProps`.

```jsx
<RadioButton
  value="radioA"
  inputProps={{ 'aria-label': 'Radio A' } }
/>
```

## Orientação

- [Checkboxes vs. Butões de Rádio](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)