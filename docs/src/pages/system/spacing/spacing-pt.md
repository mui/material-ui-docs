# Espaçamento

<p class="description">Uma ampla variedade de classes de utilitário responsivos de preenchimento e margem, para modificar a aparência de um elemento.</p>

## Notação

O utilitário de espaço converte margens e propriedades de preenchimento para margem e preenchimento de declarações CSS. As propriedades são nomeadas usando o formato `{property}{sides}`.

Onde a *propriedade* é um dos seguintes:

- `m` - para classes que definem *margin*
- `p` - para classes que definem *padding*

Onde o *sides* é um dos seguintes:

- `t` - para classes que configuram *margin-top* ou *padding-top*
- `b` - para classes que configuram *margin-bottom* ou *padding-bottom*
- `l` - para classes que configuram *margin-left* ou *padding-left*
- `r` - para classes que configuram *margin-right* ou *padding-right*
- `x` - para classes que configuram ambos **-left* e **-right*
- `y` - para classes que configuram **-top* e **-bottom*
- blank - for classes that set a margin or padding on all 4 sides of the element

## Transformação

Depending on the input and the theme configuration, the following transformation is applied:

- input: `number` & theme: `number`: the property is multiplied by the theme value.

```jsx
const theme = {
  spacing: 8,
}

<Box m={-2} /> // margin: -16px;
<Box m={0} /> // margin: 0px;
<Box m={0.5} /> // margin: 4px;
<Box m={2} /> // margin: 16px;
```

- input: `number` & theme: `array`: the property is value is used as the array index.

```jsx
const theme = {
  spacing: [0, 2, 3, 5, 8],
}

<Box m={-2} /> // margin: -3px;
<Box m={0} /> // margin: 0px;
<Box m={2} /> // margin: 3px;
```

- input: `number` & theme: `function`: the function is called with the property value.

```jsx
const theme = {
  spacing: value => value ** 2,
}

<Box m={0} /> // margin: 0px;
<Box m={2} /> // margin: 4px;
```

- input: `string`: the property is passed as raw CSS value.

```jsx
<Box m="2rem" /> // margin: 2rem;
<Box mx="auto" /> // margin-left: auto; margin-right: auto;
```

## Exemplo

```jsx
<Box p={1}>…
<Box m={1}>…
<Box p={2}>…
```

{{"demo": "pages/system/spacing/Demo.js"}}

## Horizontal centering

```jsx
<Box mx="auto">…
```

{{"demo": "pages/system/spacing/HorizontalCentering.js"}}

## API

```js
import { spacing } from '@material-ui/system';
```

| Nome da importação | Prop | Propriedade CSS                 | Chave do tema                                                    |
|:------------------ |:---- |:------------------------------- |:---------------------------------------------------------------- |
| `spacing`          | `m`  | `margin`                        | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `mt` | `margin-top`                    | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `mr` | `margin-right`                  | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `mb` | `margin-bottom`                 | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `ml` | `margin-left`                   | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `mx` | `margin-left`, `margin-right`   | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `my` | `margin-top`, `margin-bottom`   | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `p`  | `padding`                       | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `pt` | `padding-top`                   | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `pr` | `padding-right`                 | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `pb` | `padding-bottom`                | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `pl` | `padding-left`                  | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `px` | `padding-left`, `padding-right` | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |
| `spacing`          | `py` | `padding-top`, `padding-bottom` | [`spacing`](/customization/default-theme/?expend-path=$.spacing) |

*Some people find the property shorthand confusing, you can use the full version if you prefer:*

```diff
-<Box pt={2} />
+<Box paddingTop={2} />
```