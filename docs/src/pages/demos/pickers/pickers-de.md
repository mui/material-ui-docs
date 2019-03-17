---
title: Datums-Auswahl, Zeit-Auswahl React Komponenten
components: TextField
---
# Pickers

<p class="description">Pickers bieten eine einfache Möglichkeit, um einen einzelnen Wert aus einem vorher festgelegten Satz auszuwählen.</p>

- Auf dem Handy sind Pcikers am besten für die Anzeige im Bestätigungsdialogfeld geeignet.
- Für die Inline-Anzeige, z. B. in einem Formular, sollten Sie kompakte Steuerelemente wie segmentierte Dropdown-Schaltflächen verwenden.

#### Benachrichtigung

Wir greifen auf **native Eingabesteuerelemente** zurück.

⚠️ Unterstützung von systemeigenen Eingabesteuerelementen durch Browser [ist nicht perfekt](https://caniuse.com/#feat=input-datetime). Sehen Sie sich die [ergänzenden Projekte](#complementary-projects) an, um bessere Lösungen zu erhalten.

## Datums-Auswahl

Ein natives Datumsauswahlbeispiel mit `type="date"`, es kann auch als Kalender verwendet werden.

{{"demo": "pages/demos/pickers/DatePickers.js"}}

## Datum & Zeitauswahl

A native date & time picker example with `type="datetime-local"`.

{{"demo": "pages/demos/pickers/DateAndTimePickers.js"}}

## Time pickers

A native time picker example with `type="time"`.

{{"demo": "pages/demos/pickers/TimePickers.js"}}

## Complementary projects

For more advanced use cases you might be able to take advantage of.

### material-ui-pickers

![stars](https://img.shields.io/github/stars/dmtrKovalenko/material-ui-pickers.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-ui-pickers.svg)

[material-ui-pickers](https://material-ui-pickers.firebaseapp.com/) provides date and time controls that follow the Material Design spec.

{{"demo": "pages/demos/pickers/MaterialUIPickers.js"}}

### Sonstiges

- [material-ui-time-picker](https://github.com/TeamWertarbyte/material-ui-time-picker): time pickers.
- [material-ui-next-pickers](https://github.com/chingyawhao/material-ui-next-pickers): date pickers and time pickers.