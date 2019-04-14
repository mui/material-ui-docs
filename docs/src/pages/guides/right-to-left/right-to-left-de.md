# Rechts nach links

<p class="description">Um die Richtung der Material-UI-Komponenten zu ändern, müssen Sie die folgenden Schritte ausführen. Benutzeroberflächen für Sprachen, die von rechts nach links (RTL) gelesen werden, wie Arabisch und Hebräisch, sollten gespiegelt werden.</p>

## Schritte

### 1. HTML

Stellen Sie sicher, dass das `dir` Attribut in body gesetzt wird, sonst werden native Komponenten beschädigt:

```html
<body dir="rtl">
```

### 2. Theme

Legen Sie die Richtung in Ihrem benutzerdefinierten Theme fest:

```js
const theme = createMuiTheme({
  direction: 'rtl',
});
```

### 3. jss-rtl

Sie benötigen dieses JSS-Plugin, um die Styles umzudrehen: [jss-rtl](https://github.com/alitaheri/jss-rtl).

```sh
npm install jss-rtl
```

Having installed the plugin in your project, Material-UI components still require it to be loaded by the jss instance, as described below. Internally, withStyles is using this JSS plugin when `direction: 'rtl'` is set on the theme. Head to the [plugin README](https://github.com/alitaheri/jss-rtl) to learn more about it.

Once you have created a new JSS instance with the plugin, you need to make it available to all the components in the component tree. We have a [`StylesProvider`](/css-in-js/api/#stylesprovider) component for this:

```jsx
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/styles';

// Konfiguriere JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function RTL(props) {
  return (
    <StylesProvider jss={jss}>
      {props.children}
    </StylesProvider>
  );
}
```

## Demo

*Use the direction toggle button on the top right corner to flip the whole documentation*

{{"demo": "pages/guides/right-to-left/Direction.js"}}

## Opting out of rtl transformation

If you want to prevent a specific rule-set from being affected by the `rtl` transformation you can add `flip: false` at the beginning:

*Use the direction toggle button on the top right corner to see the effect*

{{"demo": "pages/guides/right-to-left/RtlOptOut.js", "hideEditButton": true}}