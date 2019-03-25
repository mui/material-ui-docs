# Anzeige

<p class="description">Wechseln Sie mit unseren Anzeigekomponenten schnell und ansprechend den Anzeigewert von Komponenten und mehr. Unterstützt einige der gebräuchlichsten Werte sowie einige Extras zur Steuerung der Anzeige beim Drucken.</p>

## Beispiele

```jsx
<Box component="div" display="inline">inline</Box>
<Box component="div" display="inline">inline</Box>
```

{{"demo": "pages/system/display/Inline.js"}}

```jsx
<Box component="span" display="block">block</Box>
<Box component="span" display="block">block</Box>
```

{{"demo": "pages/system/display/Block.js"}}

## Elemente verstecken

Verwenden Sie für eine schnellere, mobilere Entwicklung responsive Anzeigeklassen zum Anzeigen und Ausblenden von Elementen nach Gerätetypen. Erstellen Sie keine völlig unterschiedlichen Versionen derselben Seite, sondern blenden Sie Elemente für jede Bildschirmgröße entsprechend aus.

| Screen Size        | Klasse                                               |
|:------------------ |:---------------------------------------------------- |
| Hidden on all      | `display="none"`                                     |
| Hidden only on xs  | `display={{ xs: 'none', sm: 'block' }}`              |
| Hidden only on sm  | `display={{ xs: 'block', sm: 'none', md: 'block' }}` |
| Hidden only on md  | `display={{ xs: 'block', md: 'none', lg: 'block' }}` |
| Hidden only on lg  | `display={{ xs: 'block', lg: 'none', xl: 'block' }}` |
| Hidden only on xl  | `display={{ xs: 'block', xl: 'none' }}`              |
| Visible only on xs | `display={{ xs: 'block', sm: 'none' }}`              |
| Visible only on sm | `display={{ xs: 'none', sm: 'block', md: 'none' }}`  |
| Visible only on md | `display={{ xs: 'none', md: 'block', lg: 'none' }}`  |
| Visible only on lg | `display={{ xs: 'none', lg: 'block', xl: 'none' }}`  |
| Visible only on xl | `display={{ xs: 'none', xl: 'block' }}`              |

```jsx
<Box display={{ xs: 'block', md: 'none' }}>
  hide on screens wider than md
</Box>
<Box display={{ xs: 'none', md: 'block' }}>
  hide on screens smaller than md
</Box>
```

{{"demo": "pages/system/display/Hiding.js"}}

## Display in print

```jsx
<Box display="block" displayPrint="none">
  Screen Only (Hide on print only)
</Box>
<Box display="none" displayPrint="block">
  Print Only (Hide on screen only)
</Box>
```

{{"demo": "pages/system/display/Print.js"}}

## API

```js
import { display } from '@material-ui/system';
```

| Inportname     | Eigenschaften  | CSS-Eigenschaft | Theme-Schlüssel |
|:-------------- |:-------------- |:--------------- |:--------------- |
| `displayRaw`   | `display`      | `display`       | none            |
| `displayPrint` | `displayPrint` | `display`       | none            |