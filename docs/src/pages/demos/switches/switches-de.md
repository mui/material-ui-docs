---
title: Switch React Komponente
components: Switch, FormControl, FormGroup, FormLabel, FormControlLabel
---

# Schalter (Switch)

<p class="description">Schalter ändern den Status einer einzelnen Einstellung ein oder aus.</p>

Sie sind die bevorzugte Methode, um Einstellungen auf dem Handy anzupassen.

Die Option, die der Schalter steuert, sowie der Status, in dem er sich befindet, sollte aus dem entsprechenden Inline-Label hervorgehen.

{{"demo": "pages/demos/switches/Switches.js"}}

## Schalter mit FormControlLabel

Ein `Schalter` kann dank der `FormControlLabel` Komponente auch mit einer Etikettenbeschreibung verwendet werden.

{{"demo": "pages/demos/switches/SwitchLabels.js"}}

## Schalter mit FormGroup

`FormGroup` ist ein hilfreicher Wrapper zum Gruppieren von Auswahlsteuerungskomponenten, welcher eine einfachere API bietet. Wir empfehlen Ihnen jedoch, stattdessen ein [Kontrollkästchen](#checkboxes) zu verwenden.

{{"demo": "pages/demos/switches/SwitchesGroup.js"}}

## Anpasster Schalter

Wenn du die [Überschreibungs Dokumentationsseite](/customization/overrides/) gelesen hast, aber dich noch nicht sicher genug fühlst, um direkt loszulegen, ist hier noch ein Beispiel, wie du die Farbe des Schalters ändern kannst, und ein iOS Schalter.

⚠️ Auch wenn die material design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/switches/CustomizedSwitches.js"}}

## Etikettenplatzierung

Sie können die Platzierung des Etiketts ändern:

{{"demo": "pages/demos/switches/FormControlLabelPosition.js"}}

## Barrierefreiheit

Alle Formularsteuerelemente sollten Beschriftungen haben. Dazu gehören Optionsfelder, Kontrollkästchen und Schalter. In den meisten Fällen wird dazu das Element `<label>` ([FormControlLabel](/api/form-control-label/)) verwendet.

Wenn ein Label nicht verwendet werden kann, muss der Eingabekomponente ein Attribut direkt hinzugefügt werden. In diesem Fall können Sie das zusätzliche Attribut (z. B. `aria-label`, `aria-labelby`, `title`) über die Eigenschaft `inputProps` anwenden.

```jsx
<Switch
  value="checkedA"
  inputProps={{ 'aria-label': 'Switch A' } }
/>
```