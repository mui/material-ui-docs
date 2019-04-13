# API-Design-Ansatz

<p class="description">Wir haben viel über die Verwendung von Material-UI gelernt, und durch das Umschreiben von Version 1 konnten wir die Komponenten-API vollständig überdenken.</p>

> Das API-Design ist schwierig, weil man es einfach erscheinen lassen kann, aber es ist tatsächlich täuschend komplex ist, oder man macht die API einfach, aber die Umsetzung komplex.

[@sebmarkbage](https://twitter.com/sebmarkbage/status/728433349337841665)

Wie Sebastian Markbage [sagt](https://2014.jsconf.eu/speakers/sebastian-markbage-minimal-api-surface-area-learning-patterns-instead-of-frameworks.html): Keine Abstraktion ist falschen Abstraktionen überlegen. Wir bieten Komponenten auf niedriger Ebene an, um die Kompositionsfähigkeiten zu maximieren.

## Komposition

Möglicherweise haben Sie bei der Erstellung von Komponenten Inkonsistenzen in der API festgestellt. Um für mehr Transparenz zu sorgen, haben wir beim Entwurf der API die folgenden Regeln verwendet:

1. Verwenden der `children` Eigenschaft ist der idiomatische Weg, um mit React zu komponieren.
2. Manchmal benötigen wir nur eine eingeschränkte Zusammensetzung von Kidnern, zum Beispiel, wenn wir keine Permutationen für untergeordnete Elemente zulassen müssen. In diesem Fall macht die Angabe expliziter Eigenschaften die Implementierung einfacher und performanter. Zum Beispiel nimmt ein `Tab` ein `icon` und `label` als Eigenschaft an.
3. Die API-Konsistenz ist wichtig.

## Regeln

Abgesehen von den oben genannten Kompensationsregeln setzen wir die folgenden Regeln durch:

### Verteilt

Nicht dokumentierte Eigenschaften werden auf das Stammelement verteilt. zum Beispiel wird die `className`Eigenschaft auf die Wurzel angewendet.

Angenommen, Sie möchten die Wellen im `Menüelement` deaktivieren. Sie können das Ausbreitungsverhalten nutzen:

```jsx
<MenuItem disableRipple />
```

Die Eigenschaft `disableRipple` wird folgendermaßen weitergegeben: [`MenuItem`](/api/menu-item/) > [`ListItem`](/api/list-item/) > [`ButtonBase`](/api/button-base/).

### Native Eigenschaften

Wir vermeiden, die vom DOM unterstützten nativen Eigenschaften wie [`className`](/customization/overrides/#overriding-with-class-names) zu dokumentieren.

### CSS Classes

All the components accept a [`classes`](/customization/overrides/#overriding-with-classes) property to customize the styles. The classes design answers two constraints: to make the classes structure as simple as possible, while sufficient to implement the Material Design specification.

- The class applied to the root element is always called `root`.
- All the default styles are grouped in a single class.
- The classes applied to non-root elements are prefixed with the name of the element, e.g. `paperWidthXs` in the Dialog component.
- The variants applied by a boolean property **aren't** prefixed, e.g. the `rounded` class applied by the `rounded` property.
- The variants applied by an enum property **are** prefixed, e.g. the `colorPrimary` class applied by the `color="primary"` property.
- A variant has **one level of specificity**. The `color` and `variant` properties are considered a variant. The lower the style specificity is, the simpler it is to override.
- We increase the specificity for a variant modifier. We already **have to do it** for the pseudo-classes (`:hover`, `:focus`, etc.). It allows much more control at the cost of more boilerplate. Hopefully, it's also more intuitive.

```js
const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};
```

### Nested components

Nested components inside a component have:

- their own flattened properties when these are key to the top level component abstraction, for instance and `id` property for the `Input` component.
- their own `xxxProps` property when users might need to tweak the internal render method's sub-components, for instance, exposing the `inputProps` and `InputProps` properties on components that use `Input` internally.
- their own `xxxComponent` property for performing component injection.
- their own `xxxRef` property when user might need to perform imperative actions, for instance, exposing a `inputRef` property to access the native `input` on the `Input` component. This helps answer the question ["How can I access the DOM element?"](/getting-started/faq/#how-can-i-access-the-dom-element)

### Property naming

The name of a boolean property should be chosen based on the **default value**. For example, the `disabled` attribute on an input element, if supplied, defaults to `true`. This choice allows the shorthand notation:

```diff
-<Input enabled={false} />
+<Input disabled />
```

### Controlled components

Most of the controlled component are controlled via the `value` and the `onChange` properties, however, the `open` / `onClose` / `onOpen` combination is used for display related state.

### boolean vs enum

There are two options to design the API for the variations of a component: with a *boolean*; or with an *enum*. For example, let's take a button that has different types. Each option has its pros and cons:

- Option 1 *boolean*:
    
    ```tsx
    type Props = {
    contained: boolean;
    fab: boolean;
    };
    ```
    
    This API enabled the shorthand notation: `<Button>`, `<Button contained />`, `<Button fab />`.

- Option 2 *enum*:
    
    ```tsx
    type Props = {
    variant: 'text' | 'contained' | 'fab';
    }
    ```
    
    This API is more verbose: `<Button>`, `<Button variant="contained">`, `<Button variant="fab">`.
    
    However it prevents an invalid combination from being used, bounds the number of properties exposed, and can easily support new values in the future.

The Material-UI components use a combination of the two approaches according to the following rules:

- A *boolean* is used when **2** degrees of freedom are required.
- An *enum* is used when **> 2** degrees of freedom are required, or if there is the possibility that additional degrees of freedom may be required in the future.

Going back to the previous button example; since it requires 3 degrees of freedom, we use an *enum*.