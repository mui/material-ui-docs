---
title: Checkbox React component
components: Checkbox, FormControl, FormGroup, FormLabel, FormControlLabel
---

# Чекбоксы

<p class="description">Checkboxes allow the user to select one or more items from a set.</p>

Также они используются чтобы включить или выключить опцию.

Если у вас есть несколько опций, отображаемых в списке, вы можете сохранить пространство, используя чекбоксы вместо переключателей. Если у вас есть только один вариант, лучше не использовать чекбокс, вместо него используйте переключатель включения / выключения.

{{"demo": "pages/demos/checkboxes/Checkboxes.js"}}

`Чекбокс` также можно использовать с описанием метки благодаря компоненту `FormControlLabel`.

{{"demo": "pages/demos/checkboxes/CheckboxLabels.js"}}

## Чекбоксы с FormGroup

`FormGroup` - это полезная обертка, используемая для группировки компонентов элементов управления выбором, она предоставляет более простой API.

{{"demo": "pages/demos/checkboxes/CheckboxesGroup.js"}}

## Расположение метки

Расположение метки можно изменить:

{{"demo": "pages/demos/checkboxes/FormControlLabelPosition.js"}}

## Доступность

Все элементы формы должны иметь метки, в том числе радиокнопки, переключатели и чекбоксы. В большинстве случаев это делается с помощью элемента `<label>` ([FormControlLabel](/api/form-control-label/)).

Когда метка не может быть использована, необходимо добавить атрибут непосредственно на поле ввода. В этом случае можно применить дополнительный атрибут (например, `aria-label`, `aria-labelledby`, `title`) через свойство `inputProps`.

```jsx
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' } }
/>
```

## Guidance

- [Checkboxes vs. Radio Buttons (радиокнопки)](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)