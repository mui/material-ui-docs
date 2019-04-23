---
title: Switch React component
components: Switch, FormControl, FormGroup, FormLabel, FormControlLabel
---

# Switch (переключатели)

<p class="description">Switches toggle the state of a single setting on or off.</p>

They are the preferred way to adjust settings on mobile.

Опция которую контролирует переключатель, вместе с ее состоянием должны быть четко описаны в соответствующей метке.

{{"demo": "pages/demos/switches/Switches.js"}}

## Переключатели с FormControlLabel

`Переключатель` также можно использовать с меткой благодаря компоненту `FormControlLabel`.

{{"demo": "pages/demos/switches/SwitchLabels.js"}}

## Переключатели с FormGroup

`FormGroup` - это полезная обертка, используемая для группировки компонентов элементов управления выбором, она предоставляет более простой API. However, we encourage you to use a [Checkbox](#checkboxes) instead.

{{"demo": "pages/demos/switches/SwitchesGroup.js"}}

## Кастомизированные переключатели

Если вы читали [документацию по переопределениям](/customization/overrides/), но все еще не до конца уверены как будет выглядеть компонент, вот пример того, как изменить цвет переключателя или сделать его в стиле IOS.

⚠️ Хотя спецификации материал дизайна поощряют использование тем, эти примеры не соответствуют требованиям.

{{"demo": "pages/demos/switches/CustomizedSwitches.js"}}

## Расположение метки

Расположение метки можно изменить:

{{"demo": "pages/demos/switches/FormControlLabelPosition.js"}}

## Доступность

Все элементы формы должны иметь метки, в том числе радиокнопки, переключатели и чекбоксы. В большинстве случаев это делается с помощью элемента `<label>` ([FormControlLabel](/api/form-control-label/)).

Когда метка не может быть использована, необходимо добавить атрибут непосредственно на поле ввода. В этом случае можно применить дополнительный атрибут (например, `aria-label`, `aria-labelledby`, `title`) через свойство `inputProps`.

```jsx
<Switch
  value="checkedA"
  inputProps={{ 'aria-label': 'Switch A' } }
/>
```