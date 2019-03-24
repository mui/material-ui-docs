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

Per [Google's guidelines](https://material.io/design/components/snackbars.html#snackbars-toasts-usage), when a second snackbar is triggered while the first is displayed, the first should start the contraction motion downwards before the second one animates upwards.

{{"demo": "pages/demos/snackbars/ConsecutiveSnackbars.js"}}

### Don't block the floating action button

Move the floating action button vertically to accommodate the snackbar height.

{{"demo": "pages/demos/snackbars/FabIntegrationSnackbar.js"}}

### Control Direction

Change the direction of the transition. Slide is the default transition.

{{"demo": "pages/demos/snackbars/DirectionSnackbar.js"}}

### Change Transition

Verwenden Sie einen anderen Übergang.

{{"demo": "pages/demos/snackbars/FadeSnackbar.js"}}

## Complementary projects

For more advanced use cases you might be able to take advantage of:

### notistack

![stars](https://img.shields.io/github/stars/iamhosseindhv/notistack.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/notistack.svg)

In the following example, we demonstrate how to use [notistack](https://github.com/iamhosseindhv/notistack). notistack makes it easy to display snackbars (so you don't have to deal with open/close state of them). It also enables you to stack them on top of one another.

{{"demo": "pages/demos/snackbars/IntegrationNotistack.js"}}