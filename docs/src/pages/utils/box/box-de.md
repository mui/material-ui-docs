---
title: Box React Komponente
---
# Box

<p class="description">Die Box-Komponente dient als Wrapper-Komponente für die meisten Anforderungen des CSS-Dienstprogramms.</p>

Die Box-Komponenten packt [alle Stilfunktionen](/system/basics/#all-inclusive), die in `@material-ui/system` verfügbar sind. Es wurde mit der Funktion [`styled()`](/css-in-js/api/#styled-style-function-component) von `@material-ui/styles` erstellt.

## Beispiel

Die Style-Funktion der [Palette](/system/palette/).

## Material-UI-Komponenten überschreiben

Die Box-Komponente umschließt Ihre Komponente. Es erstellt ein neues DOM-Element, standardmäßig `<div>`, das mit der Eigenschaft `component` geändert werden kann. Let's say you want to use a `<span>` instead:

```jsx
<Box component="span" m={1}>
  <Button />
</Box>
```

This works great when the changes can be isolated to a new DOM element. For instance, you can change the margin this way.

However, sometimes you have to target the underlying DOM element. For instance, you want to change the text color of the button. The Button component defines its own color. CSS inheritance doesn't help. To workaround the problem, you have two options:

1. Use [`React.cloneElement()`](https://reactjs.org/docs/react-api.html#cloneelement)

The Box component has a `clone` property to enable the usage of the clone element method of React.

```jsx
<Box color="text.primary" clone>
  <Button />
</Box>
```

1. Use render props

The Box children accepts a render props function. You can pull out the `className`.

```jsx
<Box color="text.primary">
  {props => <Button {...props} />}
</Box>
```

> ⚠️ The CSS specificity relies on the import order. If you want the guarantee that the wrapped component's style will be overridden, you need to import the Box last.

## API

```jsx
import Box from '@material-ui/core/Box';
```

| Name                                               | Typ                                                                                                               | Standard                                | Beschreibung                                                                                                               |
|:-------------------------------------------------- |:----------------------------------------------------------------------------------------------------------------- |:--------------------------------------- |:-------------------------------------------------------------------------------------------------------------------------- |
| <span class="prop-name required">children *</span> | <span class="prop-type">union:&nbsp;node&nbsp;&#124;<br />&nbsp;func<br /></span>                                 |                                         | Box Render-Funktion oder Knoten.                                                                                           |
| <span class="prop-name">clone</span>               | <span class="prop-type">bool</span>                                                                               | <span class="prop-default">false</span> | Wenn `true`, werden die untergeordnete DOM-Elemente der Box recycelt. Es verwendet intern `React.cloneElement`.            |
| <span class="prop-name">component</span>           | <span class="prop-type">union:&nbsp;string&nbsp;&#124;<br />&nbsp;func&nbsp;&#124;<br />&nbsp;object<br /></span> | <span class="prop-default">'div'</span> | Die für den Wurzelknoten verwendete Komponente. Entweder ein String, um ein DOM-Element zu verwenden oder eine Komponente. |

Alle anderen angegebenen Eigenschaften werden von [der Stilfunktionen](/system/basics/#all-inclusive) benutzt oder auf das Wurzelelement verteilt.