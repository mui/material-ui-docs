---
title: Tabs React-Komponente
components: Tabs, Tab
---
# Tabs

<p class="description">Tabs erleichtern das Erkunden und Wechseln zwischen verschiedenen Ansichten.</p>

[Tabs](https://material.io/design/components/tabs.html) organisieren und ermöglichen die Navigation zwischen zusammengehörigen Inhaltsgruppen auf derselben Hierarchieebene.

## Einfache Tabs

Ein einfaches Beispiel ohne Verzierungen.

{{"demo": "pages/demos/tabs/SimpleTabs.js"}}

### Umwickelte Tabs

Lange Tab-Beschriftungen werden automatisch umgebrochen. Sollte die Beschriftung für den Tab zu lang sein, läuft sie über und der Text ist nicht sichtbar.

{{"demo": "pages/demos/tabs/TabsWrappedLabel.js"}}

### Deaktivierter Tab

Ein Tab kann durch die Eigenschaft `disabled` deaktiviert werden.

{{"demo": "pages/demos/tabs/DisabledTabs.js"}}

## Feste Tabs

Feste Tabs sollten mit einer begrenzten Anzahl von Tabs verwendet werden, und wenn eine gleichmäßige Platzierung das Muskelgedächtnis verbessert.

### Gesamte Breite

Die Eigenschaft `variant="fullWidth"` sollte für kleinere Ansichten verwendet werden. Diese Demo verwendet auch [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views), um den Tab-Übergang zu animieren und Tabs auf Touch-Geräten zu ziehen.

{{"demo": "pages/demos/tabs/FullWidthTabs.js"}}

### Zentriert

Die Eigenschaft `centered` sollte für kleinere Ansichten verwendet werden.

{{"demo": "pages/demos/tabs/CenteredTabs.js"}}

## Scrollbare Tabs

### Automatische Scroll-Tasten

Die linken und rechten Bildlauftasten werden automatisch auf dem Desktop angezeigt und auf dem Handy ausgeblendet. (basierend auf der Breite des Ansichtsfensters)

{{"demo": "pages/demos/tabs/ScrollableTabsButtonAuto.js"}}

### Erzwungene Bildlaufschaltflächen

Die linken und rechten Bildlauftasten werden unabhängig von der Breite des Ansichtsfensters angezeigt.

{{"demo": "pages/demos/tabs/ScrollableTabsButtonForce.js"}}

### Scrolltasten verhindern

Left and right scroll buttons will never be presented. All scrolling must be initiated through user agent scrolling mechanisms (e.g. left/right swipe, shift-mousewheel, etc.)

{{"demo": "pages/demos/tabs/ScrollableTabsButtonPrevent.js"}}

## Customized Tabs

If you have read the [overrides documentation page](/customization/overrides/) but aren't confident jumping in, here's an example of how you can change the main color of the Tabs.

⚠️ Auch wenn die Material-Design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/tabs/CustomizedTabs.js"}}

## Nav-Tabs

By default tabs use a `button` element, but you can provide your own custom tag or component. Here's an example of implementing tabbed navigation:

{{"demo": "pages/demos/tabs/NavTabs.js"}}

## Icon Tabs

Tab labels may be either all icons or all text.

{{"demo": "pages/demos/tabs/IconTabs.js"}}

{{"demo": "pages/demos/tabs/IconLabelTabs.js"}}