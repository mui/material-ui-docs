---
title: Snackbar React-Komponente
components: Snackbar, SnackbarContent
---
# Snackbars

<p class="description">Snackbars liefern kurze Nachrichten zu App-Prozessen - normalerweise am unteren Bildschirmrand</p>

[Snackbars](https://material.io/design/components/snackbars.html) informieren Benutzer über einen Prozess, den eine App ausgeführt hat oder ausführen wird. Sie erscheinen vorübergehend am unteren Rand des Bildschirms. Sie sollten die Benutzererfahrung nicht unterbrechen und erfordern keine Benutzereingaben, um verschwinden zu können.

Snackbars enthalten eine einzelne Textzeile, die sich direkt auf die ausgeführte Operation bezieht. Sie können eine Textaktion enthalten, jedoch keine Symbole. Sie können sie verwenden, um Benachrichtigungen anzuzeigen.

#### Häufigkeit

Es kann immer nur eine Snackbar angezeigt werden.

## Einfach

Eine einfache Snackbar, die das Verhalten der Snackbar von Google Keep reproduzieren soll.

{{"demo": "pages/demos/snackbars/SimpleSnackbar.js"}}

## Benutzerdefinierte Snackbars

Wenn du die [Überschreibungs Dokumentationsseite](/customization/overrides/) gelesen hast, aber dich noch nicht sicher genug fühlst, um direkt loszulegen, ist hier noch ein Beispiel, wie du das Design der Snackbar anpassen könntest.

⚠️ Auch wenn die material design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/snackbars/CustomizedSnackbars.js"}}

## Positioniert

Es kann Situationen geben, in denen die Anordnung der Snackbar flexibler sein muss.

{{"demo": "pages/demos/snackbars/PositionedSnackbar.js"}}

## Nachrichtenlänge

Einige Snackbars mit unterschiedlicher Nachrichtenlänge.

{{"demo": "pages/demos/snackbars/LongTextSnackbar.js"}}

## Übergänge

### Aufeinanderfolgende Snackbars

Nach den [Richtlinien Googles](https://material.io/design/components/snackbars.html#snackbars-toasts-usage), wenn eine zweite Snackbar ausgelöst wird, während die erste angezeigt wird, sollte die erste eine Kontraktionsbewegung nach unten beginnen, bevor die zweite nach oben animiert wird.

{{"demo": "pages/demos/snackbars/ConsecutiveSnackbars.js"}}

### Blockieren Sie nicht die Floating Action Buttons

Bewegen Sie den floating action button vertikal, um die Höhe der Snackbar anzupassen.

{{"demo": "pages/demos/snackbars/FabIntegrationSnackbar.js"}}

### Steuerungsrichtung

Ändern Sie die Richtung des Übergangs. Gleiten ist der Standardübergang.

{{"demo": "pages/demos/snackbars/DirectionSnackbar.js"}}

### Übergang ändern

Verwenden Sie einen anderen Übergang.

{{"demo": "pages/demos/snackbars/FadeSnackbar.js"}}

## Ergänzende Projekte

Für fortgeschrittenere Anwendungsfälle können Ihnen folgende Projekte helfen:

### notistack

![stars](https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/notistack.svg)

Im folgenden Beispiel demonstrieren wir, wie man [notistack](https://github.com/iamhosseindhv/notistack) benutzt. Notistack macht es einfach, Snackbars anzuzeigen (damit Sie sich nicht mit dem Öffnen / Schließen-Status befassen müssen). Außerdem können Sie sie übereinander stapeln.

{{"demo": "pages/demos/snackbars/IntegrationNotistack.js"}}