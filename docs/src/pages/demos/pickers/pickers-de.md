---
title: Datums-Auswahl, Zeit-Auswahl React Komponenten
components: TextField
---
# Pickers

<p class="description">Pickers bieten eine einfache Möglichkeit, um einen einzelnen Wert aus einem vorher festgelegten Satz auszuwählen.</p>

- Auf dem Handy sind Pcikers am besten für die Anzeige im Bestätigungsdialogfeld geeignet.
- Für die Inline-Anzeige, z. B. in einem Formular, sollten Sie kompakte Steuerelemente wie segmentierte Dropdown-Schaltflächen verwenden.

## Native pickers

⚠️ Native input controls support by browsers [isn't perfect](https://caniuse.com/#feat=input-datetime). Have a look at the [complementary projects](#complementary-projects) for a richer solution.

### Date pickers

A native date picker example with `type="date"`, it can be used as a calendar too.

{{"demo": "pages/demos/pickers/DatePickers.js"}}

### Date & Time pickers

A native date & time picker example with `type="datetime-local"`.

{{"demo": "pages/demos/pickers/DateAndTimePickers.js"}}

### Time pickers

A native time picker example with `type="time"`.

{{"demo": "pages/demos/pickers/TimePickers.js"}}

## Complementary projects

For more advanced use cases you might be able to take advantage of.

### material-ui-pickers

![stars](https://img.shields.io/github/stars/dmtrKovalenko/material-ui-pickers.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-ui-pickers.svg)

[material-ui-pickers](https://material-ui-pickers.firebaseapp.com/) provides date and time controls that follow the Material Design spec.

{{"demo": "pages/demos/pickers/MaterialUIPickers.js"}}

### Other

- [material-ui-time-picker](https://github.com/TeamWertarbyte/material-ui-time-picker): Zeitauswahl.
- [material-ui-next-pickers](https://github.com/chingyawhao/material-ui-next-pickers): Datums- und Zeitauswahl.