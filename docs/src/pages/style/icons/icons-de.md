---
components: Icon, SvgIcon
---
# Icons

<p class="description">Anleitungen und Vorschläge für die Verwendung von Symbolen mit der Material-UI.</p>

Ein [-Systemsymbol](https://material.io/design/iconography/system-icons.html) oder ein UI-Symbol symbolisiert einen Befehl, eine Datei, ein Gerät oder ein Verzeichnis. Systemsymbole werden auch verwendet, um gemeinsame Aktionen wie Müll, drucken und speichern und sind häufig in App Leisten, Symbolleisten, Schaltflächen und Listen. Google hat eine Reihe von [Materialsymbolen](https://material.io/tools/icons/?style=baseline) bereitgestellt, die diesen Richtlinien entsprechen.

Material-UI bietet zwei Komponenten um Icons darzustellen: `SvgIcon` für die Darstellung von SVG - Pfaden und `Icon` für die Darstellung von Schrift - Symbolen.

## SVG Symbole

Die `SvgIcon` Komponente nimmt ein SVG-`Pfad`-Element als untergeordnetes Element an und konvertiert es in eine React-Komponente, die den Pfad anzeigt. Dadurch kann das Symbol formatiert werden und auf Mausereignisse reagieren. SVG-Elemente sollten für ein 24x24px-Ansichtsfenster skaliert werden.

Das resultierende Symbol kann so wie es ist, oder als untergeordnetes Element für andere Material-UI-Komponenten, die Symbole verwenden, verwendet werden. Standardmäßig erbt ein Symbol die aktuelle Textfarbe. Optional können Sie die Farbe des Symbols mithilfe einer der Designfarbeneigenschaften festlegen: `primary`, `secondary`, `action`, `error` & `disabled`.

{{"demo": "pages/style/icons/SvgIcons.js"}}

### SVG Material Symbole

Es ist interessant, über die Bausteine zu verfügen, die zum Implementieren von benutzerdefinierten Symbolen erforderlich sind, aber was ist mit den Voreinstellungen? Wir bieten ein separates npm-Paket an,[@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons), das die über 1.000 offiziellen [Material-Icons](https://material.io/tools/icons/?style=baseline) besitzt, die in `SvgIcon` Komponenten umgewandelt werden.

<a href="https://material.io/tools/icons/?icon=3d_rotation&style=baseline">
  <img src="/static/images/icons/icons.png" alt="Official material icons" style="width: 566px" />
</a>

#### Nutzung

Sie können [material.io/tools/icons](https://material.io/tools/icons/?style=baseline) benutzten, um ein bestimmtes Symbol zu finden. Beachten Sie beim Importieren eines Symbols, dass die Namen der Symbole `PascalCase` sind, zum Beispiel:

- [`delete`](https://material.io/tools/icons/?icon=delete&style=baseline) ist unter `@material-ui/icons/Delete` bereitgestellt
- [`delete forever`](https://material.io/tools/icons/?icon=delete_forever&style=baseline) ist unter `@material-ui/icons/DeleteForever` bereitgestellt

Hängen Sie bei *"themed"* Symbolen den Themenamen an den Symbolnamen an. Zum Beispiel

- Das umrahmte [`delete`](https://material.io/tools/icons/?icon=delete&style=outline) Symbol ist unter `@material-ui/icons/DeleteOutlined` bereitgestellt
- Das runde [`delete`](https://material.io/tools/icons/?icon=delete&style=rounded) Symbol ist unter `@material-ui/icons/DeleteRounded` bereitgestellt
- The Two Tone [`delete`](https://material.io/tools/icons/?icon=delete&style=twotone) icon is exposed as `@material-ui/icons/DeleteTwoTone`
- The Sharp [`delete`](https://material.io/tools/icons/?icon=delete&style=sharp) icon is exposed as `@material-ui/icons/DeleteSharp`

There are three exceptions to this rule:

- [`3d_rotation`](https://material.io/tools/icons/?icon=3d_rotation&style=baseline) is exposed as `@material-ui/icons/ThreeDRotation`
- [`4k`](https://material.io/tools/icons/?icon=4k&style=baseline) is exposed as `@material-ui/icons/FourK`
- [`360`](https://material.io/tools/icons/?icon=360&style=baseline) is exposed as `@material-ui/icons/ThreeSixty`

{{"demo": "pages/style/icons/SvgMaterialIcons.js"}}

#### Importe

- If your environment doesn't support tree-shaking, the **recommended** way to import the icons is the following:

```jsx
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
```

- If your environment support tree-shaking you can also import the icons this way:

```jsx
import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
```

Note: Importing named exports in this way will result in the code for *every icon* being included in your project, so is not recommended unless you configure [tree-shaking](https://webpack.js.org/guides/tree-shaking/). It may also impact Hot Module Reload performance.

### More SVG icons

Looking for even more SVG icons? There are a lot of projects out there, but [https://materialdesignicons.com](https://materialdesignicons.com/) provides over 2,000 official and community provided icons. [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) packages these icons as Material-UI SvgIcons in much the same way as [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons) does for the official icons.

## Schriftarten-Icons

The `Icon` component will display an icon from any icon font that supports ligatures. As a prerequisite, you must include one, such as the [Material icon font](http://google.github.io/material-design-icons/#icon-font-for-the-web) in your project, for instance, via Google Web Fonts:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```

`Icon` will set the correct class name for the Material icon font. For other fonts, you must supply the class name using the Icon component's `className` property.

To use an icon simply wrap the icon name (font ligature) with the `Icon` component, for example:

```jsx
import Icon from '@material-ui/core/Icon';

<Icon>star</Icon>
```

Standardmäßig erbt ein Symbol die aktuelle Textfarbe. Optional können Sie die Farbe des Symbols mithilfe einer der Designfarbeneigenschaften festlegen: `primary`, `secondary`, `action`, `error` & `disabled`.

### Font Material icons

{{"demo": "pages/style/icons/Icons.js"}}

### Font Awesome

[Font Awesome](https://fontawesome.com/icons) can be used with the `Icon` component as follow:

{{"demo": "pages/style/icons/FontAwesome.js", "hideEditButton": true}}

## Font vs SVG. Which approach to use?

Both approaches work fine, however, there are some subtle differences, especially in terms of performance and rendering quality. Whenever possible SVG is preferred as it allows code splitting, supports more icons, renders faster and better.

For more details, you can check out [why GitHub migrated](https://blog.github.com/2016-02-22-delivering-octicons-with-svg/) from font icons to SVG icons.

## Accessibility

Icons can convey all sorts of meaningful information, so it’s important that they reach the largest amount of people possible. There are two use cases you’ll want to consider: - **Decorative Icons** are only being used for visual or branding reinforcement. If they were removed from the page, users would still understand and be able to use your page. - **Semantic Icons** are ones that you’re using to convey meaning, rather than just pure decoration. This includes icons without text next to them used as interactive controls — buttons, form elements, toggles, etc.

### Decorative SVG Icons

If your icons are purely decorative, you’re already done! We add the `aria-hidden=true` attribute so that your icons are properly accessible (invisible).

### Semantic SVG Icons

If your icon has semantic meaning, all you need to do is throw in a `titleAccess="meaning"` property. We add the `role="img"` attribute and the `<title>` element so that your icons are properly accessible.

In the case of focusable interactive elements, like when used with an icon button, you can use the `aria-label` property:

```jsx
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

// ...

<IconButton aria-label="Delete">
  <SvgIcon>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </SvgIcon>
</IconButton>
```

### Decorative Font Icons

If your icons are purely decorative, you’re already done! We add the `aria-hidden=true` attribute so that your icons are properly accessible (invisible).

### Semantic Font Icons

If your icons have semantic meaning, you need to provide a text alternative only visible to assistive technologies.

```jsx
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

// ...

<Icon>add_circle</Icon>
<Typography variant="srOnly">Create a user</Typography>
```

### Reference

- https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/