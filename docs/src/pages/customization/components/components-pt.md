# Sobrescrevendo

<p class="description">Como os componentes podem ser usados em diferentes contextos, o Material-UI suporta diferentes níveis de personalização, desde os mais específicos até os mais genéricos.</p>

1. [Variação específica para uma situação única](#1-specific-variation-for-a-one-time-situation)
2. [Variação dinâmica para uma situação única](#2-dynamic-variation-for-a-one-time-situation)
3. [Variação específica de um componente](#3-specific-variation-of-a-component) reutilizado em contextos diferentes
4. [Variações do Material Design](#4-material-design-variations) tal como com o componente botão
5. [Variação do tema global](#5-global-theme-variation)

## 1. Variação específica para uma situação única

Pode ser necessário alterar o estilo de um componente em alguma implementação específica, para a qual você tem as seguintes soluções disponíveis:

### Sobrescrever usando nomes de classes

A primeira maneira de sobrescrever o estilo de um componente é usar **nomes de classe**. Cada componente provê uma propriedade `className` no qual é sempre aplicada ao elemento raiz.

Este exemplo usa o [`withStyles()`](/css-in-js/basics/#higher-order-component-api) high-order componente para injetar estilos customizados no DOM, e passar o nome da classe para o componente `ClassNames` através da propriedade `classes`. Você pode escolher [qualquer outra solução de estilo](/guides/interoperability/), ou até mesmo CSS puro para criar os estilos, mas certifique-se de considerar a [ordem de injeção do CSS](/css-in-js/advanced/#css-injection-order), como o CSS é injetado no DOM pelo Material-UI para estilizar o componente, ele tem a maior especificidade possível, uma vez que o `<link>` é injetado na parte inferior do `<head />` para garantir que os componentes sejam sempre renderizados.

{{"demo": "pages/customization/overrides/ClassNames.js"}}

### Sobrescrever usando classes

Quando a propriedade `className` não é suficiente, e você precisa acessar elementos mais profundos, você pode tirar proveito da propriedade do tipo objeto `classes`, com ela podemos customizar todo o CSS injetado pelo Material-UI para um determinado componente. A lista de classes para cada componente está documentada na seção **API do componente**. Por exemplo, você pode dar uma olhada na [API CSS do botão](/api/button/#css). Como alternativa, você pode usar as [ferramentas de desenvolvimento do navegador](#using-the-dev-tools).

Este exemplo também usa `withStyles()` (como acima), mas aqui, `ClassesNesting` está usando a propriedade `classes` do `Botão` para fornecer um objeto que mapeia os **nomes das classes para sobrescrever** (regras de estilo) para **os nomes de classes CSS a serem aplicados** (valores). As classes existentes do componente continuarão a ser injetadas, portanto, é necessário apenas fornecer os estilos específicos que você deseja adicionar ou sobrescrever.

Observe que, além do estilo do botão, a capitalização do rótulo do botão foi alterada:

{{"demo": "pages/customization/overrides/ClassesNesting.js"}}

### Usando as ferramentas de desenvolvimento

As ferramentas de desenvolvimento do navegador podem poupar muito tempo. Os nomes das classes do Material-UI's [seguem um padrão simples](/css-in-js/advanced/#class-names) no modo de desenvolvimento: `Mui[component name]-[style rule name]-[UUID]`.

Vamos voltar para a demonstração acima. Como você pode substituir o rótulo do botão?

![dev-tools](/static/images/customization/dev-tools.png)

Usando as ferramentas de desenvolvimento, você sabe que precisa direcionar a regra de estilo do componente `Button` e `label`:

```jsx
<Button classes={{ label: 'my-class-name' }} />
```

### Forma abreviada

The above code example can be condensed by using **the same CSS API** as the child component. In this example, the `withStyles()` higher-order component is injecting a `classes` property that is used by the [`Button` component](/api/button/#css).

```jsx
const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);
```

{{"demo": "pages/customization/overrides/ClassesShorthand.js"}}

### Estados internos

The components internal states, like *hover*, *focus*, *disabled* and *selected*, are styled with a higher CSS specificity. [Specificity is a weight](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) that is applied to a given CSS declaration.

In order to override the components internal states, **you need to increase specificity**. Here is an example with the *disable* state and the button component using a **pseudo-class** (`:disabled`):

```css
.MuiButton {
  color: black;
}
/* We increase the specificity */
.MuiButton:disabled {
  color: white;
}
```

```jsx
<Button disabled className="MuiButton">
```

Sometimes, you can't use a **pseudo-class** as the state doesn't exist in the platform. Let's take the menu item component and the *selected* state as an example. Aside from accessing nested elements, the `classes` property can be used to customize the internal states of Material-UI components:

```css
.MuiMenuItem {
  color: black;
}
/* We increase the specificity */
.MuiMenuItem.selected {
  color: blue;
}
```

```jsx
<MenuItem selected classes={{ root: 'MuiMenuItem', selected: 'selected' }}>
```

#### Why do I need to increase specificity to override one component state?

By design, the CSS specification makes the pseudo-classes increase the specificity. For consistency, Material-UI increases the specificity of its custom states. This has one important advantage, it's allowing you to cherry-pick the state you want to customize.

### Use `$ruleName` to reference a local rule within the same style sheet

The [jss-nested](https://github.com/cssinjs/jss-nested) plugin (available by default) can make the process of increasing specificity easier.

```js
const styles = {
  root: {
    '&$disabled': {
      color: 'white',
    },
  },
  disabled: {},
};
```

compiles to:

```css
.root-x.disable-x {
  color: white;
}
```

⚠️ You need to apply the two generated class names (`root` & `disabled`) to the DOM to make it work.

```jsx
<Button
  disabled
  classes={{
    root: classes.root, // class name, e.g. `root-x`
    disabled: classes.disabled, // class name, e.g. `disabled-x`
  } }
>
```

{{"demo": "pages/customization/overrides/ClassesState.js"}}

### Substituir usando estilos inline

The second way to override the style of a component is to use the **inline-style** approach. Every component provides a `style` property. These properties are always applied to the root element.

You don't have to worry about CSS specificity as the inline-style takes precedence over the regular CSS.

{{"demo": "pages/customization/overrides/InlineStyle.js"}}

[When should I use inline-style vs classes?](/getting-started/faq/#when-should-i-use-inline-style-vs-classes)

## 2. Variação dinâmica para uma situação única

Você aprendeu a substituir o estilo dos componentes do Material-UI nas seções anteriores. Now, let's see how we can make these overrides dynamic. We demonstrate 5 alternatives, each has it's pros and cons.

### CSS Dinâmico

{{"demo": "pages/customization/overrides/DynamicCSS.js"}}

### Class name branch

{{"demo": "pages/customization/overrides/DynamicClassName.js"}}

### CSS variables

{{"demo": "pages/customization/overrides/DynamicCSSVariables.js"}}

### Estilo Inline

{{"demo": "pages/customization/overrides/DynamicInlineStyle.js"}}

### Theme nesting

{{"demo": "pages/customization/overrides/DynamicThemeNesting.js"}}

## 3. Variação específica de um componente

You might need to create a variation of a component and use it in different contexts, for instance a colorful button on your product page, however you probably want to keep your code [*DRY*](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

The best approach is to follow option 1 and then take advantage of the composition power of React by exporting your customized component to use wherever you need it.

{{"demo": "pages/customization/overrides/Component.js", "hideEditButton": true}}

## 4. Variações de material design

The Material Design specification documents different variations of certain components, such as how buttons come in different shapes: [text](https://material.io/design/components/buttons.html#text-button) (formerly "flat"), [contained](https://material.io/design/components/buttons.html#contained-button) (formerly "raised"), [FAB](https://material.io/design/components/buttons-floating-action-button.html) and more.

Material-UI attempts to implement all of these variations. Please refer to the [Supported Components](/getting-started/supported-components/) documentation to find out the current status of all supported Material Design components.

## 5. Variação do tema global

### Theme variables

In order to promote consistency between components, and manage the user interface appearance as a whole, Material-UI provides a mechanism to apply global changes by adjusting the [theme configuration variables](/customization/themes/#theme-configuration-variables).

### Global CSS override

You can also customize all instances of a component with CSS. We expose [global class names](/css-in-js/advanced/#with-material-ui-core) to do so. It's very similar to how you would customize Bootstrap.

### Global theme override

You can take advantage of the `overrides` key of the `theme` to potentially change every single style injected by Material-UI into the DOM. Learn more about it in the [themes section](/customization/themes/#customizing-all-instances-of-a-component-type) of the documentation.