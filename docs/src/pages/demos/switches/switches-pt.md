---
title: Switch React component
components: Switch, FormControl, FormGroup, FormLabel, FormControlLabel
---

# Opções

<p class="description">Switches alternam o estado de uma única configuração ligado ou desligado.</p>

[Switches](https://material.io/design/components/selection-controls.html#switches) são a forma preferida de ajustes de configuração em mobile. A opção que o switch controla, juntamente com o estado atual, deve ser claramente explícita na label correspondente.

{{"demo": "pages/demos/switches/Switches.js"}}

## Switches com FormControlLabel

`Switch` também pode ser utilizado com uma descrição de label graças ao componente `FormControlLabel`.

{{"demo": "pages/demos/switches/SwitchLabels.js"}}

## Switches with FormGroup

`FormGroup` is a helpful wrapper used to group selection controls components that provides an easier API. However, we encourage you to use a [Checkbox](#checkboxes) instead.

{{"demo": "pages/demos/switches/SwitchesGroup.js"}}

## Customized Switches

If you have been reading the [overrides documentation page](/customization/overrides/) but you are not confident jumping in, here's an example of how you can change the color of a Switch, and an iOS style Switch.

⚠️ Uma vez que a especificação do material design incentiva customização, estes exemplos diferem do design usual.

{{"demo": "pages/demos/switches/CustomizedSwitches.js"}}

## Label placement

You can change the placement of the label:

{{"demo": "pages/demos/switches/FormControlLabelPosition.js"}}

## Acessibilidade

All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element ([FormControlLabel](/api/form-control-label/)).

When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` property.

```jsx
<Switch
  value="checkedA"
  inputProps={{ 'aria-label': 'Switch A' } }
/>
```