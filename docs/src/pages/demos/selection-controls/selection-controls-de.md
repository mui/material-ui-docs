---
title: Checkbox, Radio, Switch React component
components: FormControl, FormGroup, FormLabel, FormControlLabel, RadioGroup, Checkbox, Radio, Switch
---
# Auswahlsteuerelemente

<p class="description">Auswahlsteuerungen ermöglichen dem Benutzer die Auswahl von Optionen.</p>

[Auswahlsteuerelemente](https://material.io/design/components/selection-controls.html) ermöglichen dem Benutzer das Ausführen von Aufgaben, bei denen eine Auswahl getroffen werden muss, z. B. Auswahl von Optionen oder Ein- und Ausschalten von Einstellungen. Auswahlbedienelemente befinden sich auf Bildschirmen, in denen Benutzer aufgefordert werden, Entscheidungen zu treffen oder Präferenzen wie Einstellungen oder Dialoge festzulegen.

In diesem Abschnitt werden drei Arten von Auswahlsteuerelementen behandelt:

- **[Optionsfelder](#radio-buttons)** ermöglichen die Auswahl einer einzelnen Option aus einem Set.
- **[Kontrollkästchen](#checkboxes)** ermöglichen die Auswahl mehrerer Optionen aus einem Satz.
- **[Schalter](#switches)** ermöglichen, eine Auswahl an oder aus zu schalten.

## Optionsfeld (Radio Buttons)

[Optionsfelder](https://material.io/design/components/selection-controls.html#radio-buttons) ermöglichen die Auswahl einer einzelnen Option aus einem Set. Verwenden Sie Optionsfelder, wenn dem Benutzer alle verfügbaren Optionen anzeigen werden müssen. Wenn verfügbare Optionen reduziert werden können, sollten Sie ein Dropdown-Menü in Betracht ziehen, da so weniger Platz benötigt wird.

Bei Optionsschaltflächen sollte die am häufigsten verwendete Option standardmäßig ausgewählt sein.

`RadioGroup` ist ein hilfreicher Wrapper zur Gruppierung von `Optionsfelder` Komponenten, der eine einfachere API und den richtigen Zugriff der Tastatur auf die Gruppe bietet.

{{"demo": "pages/demos/selection-controls/RadioButtonsGroup.js"}}

### Alleinstehende Schaltflächen

Ein `Optionsfeld` kann auch ohne Wrapper einzeln verwendet werden.

{{"demo": "pages/demos/selection-controls/RadioButtons.js"}}

## Kontrollkästchen

[Kontrollkästchen ](https://material.io/design/components/selection-controls.html#checkboxes) ermöglichen die Auswahl einer einzelnen Option aus einem Set. Kontrollkästchen können verwendet werden, um eine Option ein- oder auszuschalten.

Wenn in einer Liste mehrere Optionen erscheinen, können Sie durch Kontrollkästchen die Abstände erhalten statt Ein- / Aus - Schalter zu verwenden. Wenn Sie nur eine Option haben, vermeiden Sie die Verwendung eines Kontrollkästchens und verwenden Sie stattdessen einen Ein- / Ausschalter.

{{"demo": "pages/demos/selection-controls/Checkboxes.js"}}

Die `Checkbox` kann dank der `FormControlLabel` Komponente auch mit einer Etikettenbeschreibung verwendet werden.

{{"demo": "pages/demos/selection-controls/CheckboxLabels.js"}}

## Kontrollkästchen mit FormGroup

`FormGroup` ist ein hilfreicher Wrapper zum Gruppieren von Auswahlsteuerungskomponenten, welcher eine einfachere API bietet.

{{"demo": "pages/demos/selection-controls/CheckboxesGroup.js"}}

## Schalter

[Schalter](https://material.io/design/components/selection-controls.html#switches) wechseln den Status einer einzelnen Einstellung zwischen ein und aus. Sie sind die bevorzugte Methode zum Anpassen der Einstellungen auf dem Handy.

Die Option, die der Schalter steuert, sowie der Status, in dem er sich befindet, sollte aus dem entsprechenden Inline-Label hervorgehen.

{{"demo": "pages/demos/selection-controls/Switches.js"}}

### Schalter mit FormControlLabel

Ein `Schalter` kann dank der `FormControlLabel` Komponente auch mit einer Etikettenbeschreibung verwendet werden.

{{"demo": "pages/demos/selection-controls/SwitchLabels.js"}}

### Schalter mit FormGroup

`FormGroup` ist ein hilfreicher Wrapper zum Gruppieren von Auswahlsteuerungskomponenten, der eine einfachere API bietet. Wir empfehlen jedoch, stattdessen eine [Checkbox](#checkboxes) verwenden.

{{"demo": "pages/demos/selection-controls/SwitchesGroup.js"}}

### Anpasster Schalter

If you have been reading the [overrides documentation page](/customization/overrides/) but you are not confident jumping in, here's an example of how you can change the color of a Switch, and an iOS style Switch.

⚠️ Auch wenn die material design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/selection-controls/CustomizedSwitches.js"}}

## Label placement

You can change the placement of the label:

{{"demo": "pages/demos/selection-controls/FormControlLabelPosition.js"}}

## Barrierefreiheit

All form controls should have labels, and this includes radio buttons, checkboxes, and switches. In most cases, this is done by using the `<label>` element ([FormControlLabel](/api/form-control-label/)).

When a label can't be used, it's necessary to add an attribute directly to the input component. In this case, you can apply the additional attribute (e.g. `aria-label`, `aria-labelledby`, `title`) via the `inputProps` property.

```jsx
<Checkbox
  value="checkedA"
  inputProps={{ 'aria-label': 'Checkbox A' } }
/>
```

## Guidance

- [Checkboxes vs. Radio Buttons](https://www.nngroup.com/articles/checkboxes-vs-radio-buttons/)