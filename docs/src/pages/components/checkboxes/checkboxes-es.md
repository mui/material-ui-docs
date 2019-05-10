---
title: Checkbox React component
components: Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel
---

# Checkboxes

<p class="description">Los Checkbox permiten al usuario seleccionar uno o más elementos de un conjunto.</p>

[Checkboxes](https://material.io/design/components/selection-controls.html#checkboxes) se pueden usar para activar o desactivar una opción.

Si tienes varias opciones en una lista, puedes ahorrar espacio usando checkboxes en lugar de utilizar interruptores de encendedido/apagado. Si tienes una única opción, evita usar un checkbox y utiliza un interruptor de encendido/apagado en su lugar.

{{"demo": "pages/components/checkboxes/Checkboxes.js"}}

El `Checkbox` también puede ser usado con una etiqueta de descripción gracias al componente `FormControlLabel`.

{{"demo": "pages/components/checkboxes/CheckboxLabels.js"}}

## Checkboxes con FormGroup

`FormGroup` es un contenedor muy útil usado para agrupar componentes de controles de selección que proporciona una API más sencilla.

{{"demo": "pages/components/checkboxes/CheckboxesGroup.js"}}

## Ubicación de Etiqueta

Puede cambiar la ubicación de la etiqueta:

{{"demo": "pages/components/checkboxes/FormControlLabelPosition.js"}}

## Accesibilidad

Todos los controles de formulario deben tener etiquetas, y esto incluye radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element ([FormControlLabel](/api/form-control-label/)).

When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` property.

```jsx
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' } }
/>
```

## Guidance

- [Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)