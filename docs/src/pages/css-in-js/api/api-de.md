# API

<p class="description">The API reference of the @material-ui/styles package.</p>

## `createGenerateClassName([options]) => class name generator`

A function which returns [a class name generator function](http://cssinjs.org/jss-api/#generate-your-class-names).

#### Argumente

1. `Optionen` (*Object* [optional]): 
    - `options.dangerouslyUseGlobalCSS ` (*Boolean* [optional]): Standardeinstellung ist `false`. Makes the Material-UI class names deterministic.
    - `options.productionPrefix` (*String* [optional]): Defaults to `'jss'`. The string used to prefix the class names in production.
    - `options.seed` (*String* [optional]): Defaults to `''`. The string used to uniquely identify the generator. It can be used to avoid class name collisions when using multiple generators.

#### Rückgabewerte

`class name generator`: The generator should be provided to JSS.

#### Beispiele

```jsx
import React from 'react';
import { StylesProvider, createGenerateClassName } from '@material-ui/styles';

const generateClassName = createGenerateClassName({
  dangerouslyUseGlobalCSS: true,
  productionPrefix: 'c',
});

export default function App() {
  return (
    <StylesProvider generateClassName={generateClassName}>...</StylesProvider>
  );
}
```

## `createStyles(styles) => styles`

This function doesn't really "do anything" at runtime, it's just the identity function. Sein einziger Zweck ist es, **TypeScript** Typverbreiterung zu verhindern, wenn Style-Regeln für `makeStyles`/`withStyles` bereitgestellt werden, welche eine Funktion des `Themes` sind.

#### Argumente

1. `styles` (*Function | Object*): A function generating the styles or a styles object.

#### Rückgabewerte

`styles`: A function generating the styles or a styles object.

#### Beispiele

```jsx
import { makeStyles, createStyles } from '@material-ui/styles';

const styles = makeStyles((theme: Theme) => createStyles({
  root: {
    backgroundColor: theme.color.red,
  },
}));

function MyComponent {
  const classes = useStyles();
  return <div className={classes.root} />;
}

export default MyComponent;
```

## `makeStyles(styles, [options]) => hook`

Link a style sheet with a function component using the **hook** pattern.

#### Argumente

1. `styles` (*Function | Object*): A function generating the styles or a styles object. It will be linked to the component. Use the function signature if you need to have access to the theme. It's provided as the first argument.
2. `Optionen` (*Object* [optional]): 
    - `options.defaultTheme` (*Object* [optional]): The default theme to use if a theme isn't supplied through a Theme Provider.
    - `options.withTheme ` (*Boolean* [optional]): Standardeinstellung ist `false`. Übergeben Sie das `Theme` Objekt als Eigenschaft an die Komponente.
    - `options.name` (*String* [optional]): The name of the style sheet. Useful for debugging. If the value isn't provided, it will try to fallback to the name of the component.
    - `options.flip` (*Boolean* [optional]): When set to `false`, this sheet will opt-out the `rtl` transformation. When set to `true`, the styles are inversed. When set to `null`, it follows `theme.direction`.
    - The other keys are forwarded to the options argument of [jss.createStyleSheet([styles], [options])](http://cssinjs.org/jss-api/#create-style-sheet).

#### Rückgabewerte

`hook`: A hook. This hook can be used in a function component. It accepts one argument: the properties that will be used for "interpolation" in the style sheet.

#### Beispiele

```jsx
import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: 'red',
  },
});

export default function MyComponent() {
  const classes = useStyles();
  return <div className={classes.root} />;
}
```

## `styled(Component)(styles, [options]) => Component`

Link a style sheet with a function component using the **styled components** pattern.

#### Argumente

1. `Component`: The component that will be wrapped.
2. `styles` (*Function | Object*): A function generating the styles or a styles object. It will be linked to the component. Use the function signature if you need to have access to the theme. It's provided as the first argument.
3. `Optionen` (*Object* [optional]): 
    - `options.defaultTheme` (*Object* [optional]): The default theme to use if a theme isn't supplied through a Theme Provider.
    - `options.withTheme ` (*Boolean* [optional]): Standardeinstellung ist `false`. Übergeben Sie das `Theme` Objekt als Eigenschaft an die Komponente.
    - `options.name` (*String* [optional]): The name of the style sheet. Useful for debugging. If the value isn't provided, it will try to fallback to the name of the component.
    - `options.flip` (*Boolean* [optional]): When set to `false`, this sheet will opt-out the `rtl` transformation. When set to `true`, the styles are inversed. When set to `null`, it follows `theme.direction`.
    - The other keys are forwarded to the options argument of [jss.createStyleSheet([styles], [options])](http://cssinjs.org/jss-api/#create-style-sheet).

#### Rückgabewerte

`Component`: The new component created.

#### Beispiele

```jsx
import React from 'react';
import { styled } from '@material-ui/styles';

const MyComponent = styled('div')({
  backgroundColor: 'red',
});

export default function StyledComponents() {
  return <MyComponent />;
}
```

## `StylesProvider`

This component allows you to change the behavior of the styling solution. Durch den Kontext werden die Optionen im React-Baum verfügbar.

It should preferably be used at **the root of your component tree**.

#### EigenschaftenBy default, the styles are injected last in the 

<head>
  element of your page. Sie erhalten mehr Details als jedes andere Stylesheet auf Ihrer Seite, z.B. CSS-Module oder StilKomponenten. Wenn Sie die Stile der Material-UI überschreiben möchten, setzen Sie diese Option.</td> </tr> 
  
  <tr>
    <td align="left">
      <span class="prop-name">jss</span>
    </td>
    
    <td align="left">
      <span class="prop-type">object</span>
    </td>
    
    <td align="left">
      
    </td>
    
    <td align="left">
      JSS-Instanz.
    </td>
  </tr></tbody> </table> 
  
  <h4>
    Beispiele
  </h4>
  
  <pre><code class="jsx">import React from 'react';
import ReactDOM from 'react-dom';
import { StylesProvider } from '@material-ui/styles';

function App() {
  return (
    &lt;StylesProvider jss={jss}&gt;...&lt;/StylesProvider&gt;
  );
}

ReactDOM.render(&lt;App /&gt;, document.querySelector('#app'));
</code></pre>
  
  <h2>
    <code>ThemeProvider</code>
  </h2>
  
  <p>
    Diese Komponente hat eine <code>Theme</code> Eigenschaft. Diese wird durch den Kontext in der React-Struktur verfügbar gemacht. It should preferably be used at <strong>the root of your component tree</strong>.
  </p>
  
  <h4>
    Eigenschaften
  </h4>
  
  <table>
    <tr>
      <th align="left">
        Name
      </th>
      
      <th align="left">
        Typ
      </th>
      
      <th align="left">
        Standard
      </th>
      
      <th align="left">
        Beschreibung
      </th>
    </tr>
    
    <tr>
      <td align="left">
        <span class="prop-name required">children *</span>
      </td>
      
      <td align="left">
        <span class="prop-type">node</span>
      </td>
      
      <td align="left">
         
      </td>
      
      <td align="left">
        Ihr Komponentenbaum.
      </td>
    </tr>
    
    <tr>
      <td align="left">
        <span class="prop-name required">theme *</span>
      </td>
      
      <td align="left">
        <span class="prop-type">union:&nbsp;object&nbsp;&#124;&nbsp;func</span>
      </td>
      
      <td align="left">
        
      </td>
      
      <td align="left">
        Ein Themeobjekt. You can provide a function to extend the outer theme.
      </td>
    </tr>
  </table>
  
  <h4>
    Beispiele
  </h4>
  
  <pre><code class="jsx">import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';

const theme = {};

function App() {
  return (
    &lt;ThemeProvider theme={theme}&gt;...&lt;/ThemeProvider&gt;
  );
}

ReactDOM.render(&lt;App /&gt;, document.querySelector('#app'));
</code></pre>
  
  <h2>
    <code>useTheme() =&gt; theme</code>
  </h2>
  
  <p>
    This hook returns the <code>theme</code> object so it can be used inside a function component.
  </p>
  
  <h4>
    Rückgabewerte
  </h4>
  
  <p>
    <code>Theme</code>: Das Themenobjekt, das zuvor in den Kontext eingefügt wurde.
  </p>
  
  <h4>
    Beispiele
  </h4>
  
  <pre><code class="jsx">import React from 'react';
import { useTheme } from '@material-ui/styles';

export default function MyComponent() {
  const theme = useTheme();

  return &lt;div&gt;{`spacing ${theme.spacing}`}&lt;/div&gt;;
}
</code></pre>
  
  <h2>
    <code>withStyles(styles, [options]) =&gt; higher-order component</code>
  </h2>
  
  <p>
    Link a style sheet with a component using the <strong>higher-order component</strong> pattern. It does not modify the component passed to it; instead, it returns a new component with a <code>classes</code> property. This <code>classes</code> object contains the name of the class names injected in the DOM.
  </p>
  
  <p>
    Einige Implementierungsdetails, die interessant sein könnten:
  </p>
  
  <ul>
    <li>
      It adds a <code>classes</code> property so you can override the injected class names from the outside.
    </li>
    <li>
      It forwards refs to the inner component.
    </li>
    <li>
      The <code>innerRef</code> prop is deprecated. Use <code>ref</code> instead.
    </li>
    <li>
      It does <strong>not</strong> copy over statics. Es kann zum Beispiel verwendet werden, um eine <code>getInitialProps()</code> als statische Methode zu definieren (next.js).
    </li>
  </ul>
  
  <h4>
    Argumente
  </h4>
  
  <ol start="1">
    <li>
      <code>styles</code> (<em>Function | Object</em>): A function generating the styles or a styles object. It will be linked to the component. Use the function signature if you need to have access to the theme. It's provided as the first argument.
    </li>
    
    <li>
      <code>Optionen</code> (<em>Object</em> [optional]): <ul>
        <li>
          <code>options.defaultTheme</code> (<em>Object</em> [optional]): The default theme to use if a theme isn't supplied through a Theme Provider.
        </li>
        <li>
          <code>options.withTheme </code> (<em>Boolean</em> [optional]): Standardeinstellung ist <code>false</code>. Übergeben Sie das <code>Theme</code> Objekt als Eigenschaft an die Komponente.
        </li>
        <li>
          <code>options.name</code> (<em>String</em> [optional]): The name of the style sheet. Useful for debugging. If the value isn't provided, it will try to fallback to the name of the component.
        </li>
        <li>
          <code>options.flip</code> (<em>Boolean</em> [optional]): When set to <code>false</code>, this sheet will opt-out the <code>rtl</code> transformation. When set to <code>true</code>, the styles are inversed. When set to <code>null</code>, it follows <code>theme.direction</code>.
        </li>
        <li>
          The other keys are forwarded to the options argument of <a href="http://cssinjs.org/jss-api/#create-style-sheet">jss.createStyleSheet([styles], [options])</a>.
        </li>
      </ul>
    </li>
  </ol>
  
  <h4>
    Rückgabewerte
  </h4>
  
  <p>
    <code>Komponente höherer Ordnung</code>: Sollte zum Umwickeln einer Komponente verwendet werden.
  </p>
  
  <h4>
    Beispiele
  </h4>
  
  <pre><code class="jsx">import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'red',
  },
};

class MyComponent extends React.Component {
  render () {
    return &lt;div className={this.props.classes.root} /&gt;;
  }
}

export default withStyles(styles)(MyComponent);
</code></pre>
  
  <p>
    Also, you can use as <a href="https://babeljs.io/docs/en/babel-plugin-proposal-decorators">decorators</a> like so:
  </p>
  
  <pre><code class="jsx">import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    backgroundColor: 'red',
  },
};

@withStyles(styles)
class MyComponent extends React.Component {
  render () {
    return &lt;div className={this.props.classes.root} /&gt;;
  }
}

export default MyComponent
</code></pre>
  
  <h2>
    <code>withTheme(Component) =&gt; Component</code>
  </h2>
  
  <p>
    Provide the <code>theme</code> object as a property of the input component so it can be used in the render method.
  </p>
  
  <h4>
    Argumente
  </h4>
  
  <ol start="1">
    <li>
      <code>Component</code>: The component that will be wrapped.
    </li>
  </ol>
  
  <h4>
    Rückgabewerte
  </h4>
  
  <p>
    <code>Component</code>: The new component created. Does forward refs to the inner component.
  </p>
  
  <h4>
    Beispiele
  </h4>
  
  <pre><code class="jsx">import React from 'react';
import { withTheme } from '@material-ui/styles';

function MyComponent(props) {
  return &lt;div&gt;{props.theme.direction}&lt;/div&gt;;
}

export default withTheme(MyComponent);
</code></pre>