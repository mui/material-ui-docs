---
title: Checkbox React component
components: Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel
---

# Checkbox

<p class="description">Checkboxes permitem o usuário selecionar um ou mais itens de um conjunto.</p>

[Checkboxes](https://material.io/design/components/selection-controls.html#checkboxes) podem ser usados para deixar uma opção disponível ou indisponível.

Se você tem várias opções aparecendo na lista, você pode economizar espaço usando checkbox ao invés de on/off switches. Se você tem uma única opção, evite usar um checkbox e use um on/off switch.

{{"demo": "pages/demos/checkboxes/Checkboxes.js"}}

`Checkbox` também podem ser usadas com uma `label` graças ao `FormControlLabel` componente.

{{"demo": "pages/demos/checkboxes/CheckboxLabels.js"}}

## Checkboxes with FormGroup

`FormGroup` é usado para agrupar componentes seletores para facilitar o uso da API.

{{"demo": "pages/demos/checkboxes/CheckboxesGroup.js"}}

## Label placement

You can change the placement of the label:

{{"demo": "pages/demos/checkboxes/FormControlLabelPosition.js"}}

## Acessibilidade

All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element ([FormControlLabel](/api/form-control-label/)).

When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` property.

```jsx
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Caixa de seleção A' } }
/>
```

## Guidance

- [Checkboxes vs. Butões de Rádio](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)