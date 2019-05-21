# Переопределение

<p class="description">Поскольку компоненты могут использоваться в разных контекстах, Material-UI поддерживает различные способы настройки, от самых специфичных до самых обобщенных.</p>

1. [Конкретное изменение для единичного случая](#1-specific-variation-for-a-one-time-situation)
2. [Динамическое изменение для единичного случая](#2-dynamic-variation-for-a-one-time-situation)
3. [Особый вариант компонента](#3-specific-variation-of-a-component) использумый в различных контекстах
4. [Material Design варианты](#4-material-design-variations) как у компонента кнопка
5. [Глобальное изменение темы](#5-global-theme-variation)

## 1. Конкретное изменение для единичного случая

Возможно, вам придется изменить стиль компонента в конкретном месте. Для этого вам предоставляются следующие методы:

### Переопределение через имена классов

Первый способ переопределения стиля компонента - использовать **имена классов**. Каждый компонент предоставляет свойство `className` которое всегда применяется к корневому элементу.

В этом примере компонент высшего-порядка [`withStyles()`](/css-in-js/basics/#higher-order-component-api) используется для внедрения пользовательских стилей в DOM и передачи имени класса компоненту `ClassNames` через его свойство `classes`. Для создания стилей вы можете воспользоваться [любым доступным стилевым решением](/guides/interoperability/), вплоть до обычного CSS, но вы обязаны принимать во внимание [порядок внедрения CSS](/css-in-js/advanced/#css-injection-order), поскольку CSS внедренный в DOM через Material-UI имеет максимально возможную специфичность, так как `<link>` внедряется в самом конце раздела `<head />` для гарантии корректного отображения компонентов.

{{"demo": "pages/customization/overrides/ClassNames.js"}}

### Переопределение через классы

Когда ` className ` свойства недостаточно, и вам нужен доступ ко вложенным элементам, вы можете воспользоваться свойством объекта `classes` для настройки всех CSS, внедренных через Material-UI для данного компонента. Список классов для каждого компонента описан в разделе **Компонент API**. Для примера можете взглянуть на [Button CSS API](/api/button/#css). Кроме того, вы можете воспользоваться [встроенными в браузер инструментами разработчика](#using-the-dev-tools).

В этом примере также используется ` withStyles() ` (см. выше), но теперь ` ClassesNesting ` присваивает свойству `classes` компонета `Button` обьект сопоставляющий **имена переопределяемых классов** (стилевые правила) с **именам использумых классов CSS ** (значениями). Существующие классы компонента будут по прежнему внедряться, поэтому необходимо указать только те стили, которые вы хотите добавить или переопределить.

Обратите внимание, что в дополнение к стилю кнопки, стиль текста кнопки был изменен на стиль с заглавными буквами:

{{"demo": "pages/customization/overrides/ClassesNesting.js"}}

### Использование инструментов разработчика

Инструменты разработчика браузера могут сэкономить вам много времени. Material-UI's class names [follow a simple pattern](/css-in-js/advanced/#class-names) in development mode: `Mui[component name]-[style rule name]-[UUID]`.

Let's go back to the above demo. Как вы можете переопределить метку кнопки?

![dev-tools](/static/images/customization/dev-tools.png)

Using the dev tools, you know that you need to target the `Button` component and the `label` style rule:

```jsx
<Button classes={{ label: 'my-class-name' }} />
```

### Краткая запись

Приведенный выше пример кода может быть сокращен за счет использования **того же CSS API ** в качестве дочернего компонента. In this example, the `withStyles()` higher-order component is injecting a `classes` property that is used by the [`Button` component](/api/button/#css).

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

### Внутренние состояния

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

### Переопределение с помощью встраиваемого стиля

The second way to override the style of a component is to use the **inline-style** approach. Every component provides a `style` property. These properties are always applied to the root element.

You don't have to worry about CSS specificity as the inline-style takes precedence over the regular CSS.

{{"demo": "pages/customization/overrides/InlineStyle.js"}}

[When should I use inline-style vs classes?](/getting-started/faq/#when-should-i-use-inline-style-vs-classes)

## 2. Динамическое изменение для единичного случая

You have learned how to override the style of the Material-UI components in the previous sections. Now, let's see how we can make these overrides dynamic. We demonstrate 5 alternatives, each has it's pros and cons.

### Dynamic CSS

{{"demo": "pages/customization/overrides/DynamicCSS.js"}}

### Class name branch

{{"demo": "pages/customization/overrides/DynamicClassName.js"}}

### CSS variables

{{"demo": "pages/customization/overrides/DynamicCSSVariables.js"}}

### Inline-style

{{"demo": "pages/customization/overrides/DynamicInlineStyle.js"}}

### Theme nesting

{{"demo": "pages/customization/overrides/DynamicThemeNesting.js"}}

## 3. Особый вариант компонента

You might need to create a variation of a component and use it in different contexts, for instance a colorful button on your product page, however you probably want to keep your code [*DRY*](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself).

The best approach is to follow option 1 and then take advantage of the composition power of React by exporting your customized component to use wherever you need it.

{{"demo": "pages/customization/overrides/Component.js", "hideEditButton": true}}

## 4. Material Design варианты

The Material Design specification documents different variations of certain components, such as how buttons come in different shapes: [text](https://material.io/design/components/buttons.html#text-button) (formerly "flat"), [contained](https://material.io/design/components/buttons.html#contained-button) (formerly "raised"), [FAB](https://material.io/design/components/buttons-floating-action-button.html) and more.

Material-UI attempts to implement all of these variations. Please refer to the [Supported Components](/getting-started/supported-components/) documentation to find out the current status of all supported Material Design components.

## 5. Глобальное изменение темы

### Theme variables

In order to promote consistency between components, and manage the user interface appearance as a whole, Material-UI provides a mechanism to apply global changes by adjusting the [theme configuration variables](/customization/themes/#theme-configuration-variables).

### Global CSS override

You can also customize all instances of a component with CSS. We expose [global class names](/css-in-js/advanced/#with-material-ui-core) to do so. It's very similar to how you would customize Bootstrap.

### Global theme override

You can take advantage of the `overrides` key of the `theme` to potentially change every single style injected by Material-UI into the DOM. Learn more about it in the [themes section](/customization/themes/#customizing-all-instances-of-a-component-type) of the documentation.