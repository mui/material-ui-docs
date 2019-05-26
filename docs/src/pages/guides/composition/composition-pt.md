# Composição

<p class="description">Material-UI tenta tornar a composição o mais fácil possível.</p>

## Encapsulando componentes

Para fornecer o máximo de flexibilidade e desempenho, precisamos de uma maneira de conhecer a natureza dos elementos filhos que um componente recebe. Para resolver este problema, marcamos alguns de nossos componentes, quando necessário com uma propriedade estática `muiName`.

Você pode, no entanto, precisar encapsular um componente para melhorá-lo, que pode entrar em conflito com a solução `muiName`. Se você encapsular um componente, verifique se este tem um conjunto de propriedades estáticas.

Se você encontrar esse problema, precisará usar a mesma propriedade `muiName` do componente que será encapsulado no seu componente encapsulado. Além disso, você deve encaminhar as propriedades, já que o componente pai pode precisar controlar as propriedades do componente encapsulado.

Vamos ver um exemplo:

```jsx
const WrappedIcon = props => <Icon {...props} />;
WrappedIcon.muiName = Icon.muiName;
```

{{"demo": "pages/guides/composition/Composition.js"}}

## Propriedade component

Material-UI permite que você altere o nó raiz que será renderizado por meio de uma propriedade chamada `component`.

### Como é que funciona?

O componente será renderizado assim:

```js
return React.createElement(this.props.component, props)
```

Por exemplo, por padrão um componente `List` irá renderizar um elemento `<ul>`. Isso pode ser alterado passando um [componente React](https://reactjs.org/docs/components-and-props.html#function-and-class-components) para a propriedade `component`. O exemplo a seguir irá renderizar o componente `List` com um elemento `<nav>` como nó raiz:

```jsx
<List component="nav">
  <ListItem>
    <ListItemText primary="Trash" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Spam" />
  </ListItem>
</List>
```

Esse padrão é muito poderoso e permite uma grande flexibilidade, bem como uma maneira de interoperar com outras bibliotecas, como [`react-router`](#react-router-demo) ou sua biblioteca de formulários favorita. Mas também **vem com uma pequena advertência!**

### Advertência com o uso de funções inline

Usando uma função inline como um argumento para a propriedade `component`, pode resultar em uma **montagem inesperada**, usando dessa forma, um novo componente será passado para a propriedade `component` toda vez que o React renderizar. Por exemplo, se você quiser cria um `ListItem` customizado que atua como link, você poderia fazer o seguinte:

```jsx
import { Link } from 'react-router-dom';

const ListItemLink = ({ icon, primary, secondary, to }) => (
  <li>
    <ListItem button component={props => <Link to={to} {...props} />}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText inset primary={primary} secondary={secondary} />
    </ListItem>
  </li>
);
```

⚠️ No entanto, como estamos usando uma função inline para alterar o componente renderizado, o React desmontará o link toda vez que o `ListItemLink` é renderizado. Não só irá o React atualizar o DOM desnecessariamente, como o efeito cascata do `ListItem` também não funcionará corretamente.

The solution is simple: **avoid inline functions and pass a static component to the `component` property** instead. Let's change our `ListItemLink` to the following:

```jsx
import { Link } from 'react-router-dom';

class ListItemLink extends React.Component {
  renderLink = React.forwardRef((itemProps, ref) => (
    // com react-router-dom@^5.0.0 use `ref` ao invés de `innerRef`
    <RouterLink to={this.props.to} {...itemProps} innerRef={ref} />
  ));

  render() {
    const { icon, primary, secondary, to } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText inset primary={primary} secondary={secondary} />
        </ListItem>
      </li>
    );
  }
}
```

`renderLink` will now always reference the same component.

### Caveat with shorthand

You can take advantage of the properties forwarding to simplify the code. In this example, we don't create any intermediary component:

```jsx
import { Link } from 'react-router-dom';

<ListItem button component={Link} to="/">
```

⚠️ However, this strategy suffers from a little limitation: properties collision. The component providing the `component` property (e.g. ListItem) might not forward all its properties to the root element (e.g. dense).

### React Router Demo

Here is a demo with [React Router DOM](https://github.com/ReactTraining/react-router):

{{"demo": "pages/guides/composition/ComponentProperty.js"}}

### With TypeScript

You can find the details in the [TypeScript guide](/guides/typescript/#usage-of-component-property).

## Caveat with refs

This section covers caveats when using a custom component as `children` or for the `component` prop.

Some of the components need access to the DOM node. This was previously possible by using `ReactDOM.findDOMNode`. This function is deprecated in favor of `ref` and ref forwarding. However, only the following component types can be given a `ref`:

- Any Material-UI component
- class components i.e. `React.Component` or `React.PureComponent`
- DOM (or host) components e.g. `div` or `button`
- [React.forwardRef components](https://reactjs.org/docs/react-api.html#reactforwardref)
- [React.lazy components](https://reactjs.org/docs/react-api.html#reactlazy)
- [React.memo components](https://reactjs.org/docs/react-api.html#reactmemo)

If you don't use one of the above types when using your components in conjunction with Material-UI, you might see a warning from React in your console similar to:

> Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?

Be aware that you will still get this warning for `lazy` and `memo` components if their wrapped component can't hold a ref.

In some instances we issue an additional warning to help debugging, similar to:

> Invalid prop `component` supplied to `ComponentName`. Expected an element type that can hold a ref.

We will only cover the two most common use cases. For more information see [this section in the official React docs](https://reactjs.org/docs/forwarding-refs.html).

```diff
- const MyButton = props => <div role="button" {...props} />;
+ const MyButton = React.forwardRef((props, ref) => <div role="button" {...props} ref={ref} />);
<Button component={MyButton} />;
```

```diff
- const SomeContent = props => <div {...props}>Hello, World!</div>;
+ const SomeContent = React.forwardRef((props, ref) => <div {...props} ref={ref}>Hello, World!</div>);
<Tooltip title="Hello, again."><SomeContent /></Tooltip>;
```

To find out if the Material-UI component you're using has this requirement, check out the the props API documentation for that component. If you need to forward refs the description will link to this section.

### Caveat with StrictMode or unstable_ConcurrentMode

If you use class components for the cases described above you will still see warnings in `React.StrictMode` and `React.unstable_ConcurrentMode`. We use `ReactDOM.findDOMNode` internally for backwards compatibility. You can use `React.forwardRef` and a designated prop in your class component to forward the `ref` to a DOM component. Doing so should not trigger any more warnings related to the deprecation of `ReactDOM.findDOMNode`.

```diff
class Component extends React.Component {
  render() {
-   const { props } = this;
+   const { forwardedRef, ...props } = this.props;
    return <div {...props} ref={forwardedRef} />;
  }
}

-export default Component;
+export default React.forwardRef((props, ref) => <Component {...props} forwardedRef={ref} />);
```