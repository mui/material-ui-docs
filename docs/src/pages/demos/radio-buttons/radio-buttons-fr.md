---
title: Radio buttons React component
components: Radio, RadioGroup, FormControl, FormLabel, FormControlLabel
---

# Radio buttons

<p class="description">Radio buttons allow the user to select one option from a set.</p>

Utilisez les cases d’option lorsque l’utilisateur a besoin de voir toutes les options disponibles. Si les options disponibles peuvent être réduites, envisagez d'utiliser un menu déroulant, car il utilise moins d'espace.

Généralement, les cases d'option doivent avoir l'option la plus utilisée sélectionnée par défaut.

`RadioGroup` is a helpful wrapper used to group `Radio` components that provides an easier API, and proper keyboard accessibility to the group.

{{"demo": "pages/demos/radio-buttons/RadioButtonsGroup.js"}}

## Standalone Radio Buttons

`Radio` can also be used standalone, without the wrapper.

{{"demo": "pages/demos/radio-buttons/RadioButtons.js"}}

## Label placement

You can change the placement of the label:

{{"demo": "pages/demos/radio-buttons/FormControlLabelPosition.js"}}

## Accessibilité

All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element ([FormControlLabel](/api/form-control-label/)).

When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` property.

```jsx
<RadioButton
  value="radioA"
  inputProps={{ 'aria-label': 'Radio A' } }
/>
```

## Guidance

- [Checkboxes vs. Cases d’option](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)