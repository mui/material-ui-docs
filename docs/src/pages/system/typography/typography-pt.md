# Tipografia

<p class="description">Documentation and examples for common text utilities to control alignment, wrapping, weight, and more.</p>

## Alinhamento do texto

```jsx
<Box textAlign="left">…
<Box textAlign="center">…
<Box textAlign="right">…
```

{{"demo": "pages/system/typography/TextAlignment.js"}}

## Peso da fonte

```jsx
<Box fontWeight="fontWeightLight">…
<Box fontWeight="fontWeightRegular">…
<Box fontWeight="fontWeightMedium">…
<Box fontWeight={600}>…
```

{{"demo": "pages/system/typography/FontWeight.js"}}

## Tamanho da fonte

```jsx
<Box fontSize="fontSize">…
<Box fontSize="h6.fontSize">…
<Box fontSize={16}>…
```

{{"demo": "pages/system/typography/FontSize.js"}}

## Família da fonte

```jsx
<Box fontFamily="fontFamily">…
<Box fontFamily="Monospace">…
```

{{"demo": "pages/system/typography/FontFamily.js"}}

## API

```js
import { typography } from '@material-ui/system';
```

| Nome da importação | Prop         | Propriedade CSS | Chave do tema                       |
|:------------------ |:------------ |:--------------- |:----------------------------------- |
| `fontFamily`       | `fontFamily` | `font-family`   | [`typography`](/system/typography/) |
| `fontSize`         | `fontSize`   | `font-size`     | [`typography`](/system/typography/) |
| `fontWeight`       | `fontWeight` | `font-weight`   | [`typography`](/system/typography/) |
| `textAlign`        | `textAlign`  | `text-align`    | none                                |