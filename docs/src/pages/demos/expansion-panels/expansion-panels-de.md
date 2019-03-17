---
title: Erweiterungspanel React-Komponente
components: ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary
---
# Erweiterungspanel

<p class="description">Erweiterungspanels (Tafeln) enthalten Erstellungsabläufe und ermöglichen die einfache Bearbeitung eines Elements.</p>

[Ein Erweiterungspanel](https://material.io/archive/guidelines/components/expansion-panels.html) ist ein leichter Behälter, der entweder alleine stehen kann oder mit einer größeren Oberfläche verbunden ist, beispielsweise einer Karte.

> **Hinweis:** Erweiterungspanele sind nicht mehr in der Material Design-Dokumentation dokumentiert.

## Barrierefreiheit

Für eine optimale Erreichbarkeit empfehlen wir die Einstellung `id` und `aria-controls` in der `ExpansionPanelSummary`. Das `ExpansionPanel` leitet die notwendigen `aria-labelledby` und `id` für den Inhaltsbereich des Panels ab.

## Einfaches Erweiterungspanel

{{"demo": "pages/demos/expansion-panels/SimpleExpansionPanel.js"}}

## Kontrolliertes Akkordeon

Erweitern Sie das Standardbedienfeldverhalten, um ein Akkordeon mit der Komponente `ExpansionPanel` zu erstellen.

{{"demo": "pages/demos/expansion-panels/ControlledExpansionPanels.js"}}

## Sekundäre Überschrift und Spalten

Zur Strukturierung des Inhalts können mehrere Spalten verwendet werden. Dem Bedienfeld kann ein Hilfetext hinzugefügt werden, welches den Benutzer unterstützt.

{{"demo": "pages/demos/expansion-panels/DetailedExpansionPanel.js"}}

## Performance

The content of ExpansionPanels is mounted by default even if the panel is not expanded. This default behavior has server-side rendering and SEO in mind. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the `unmountOnExit` in `TransitionProps`: `<ExpansionPanel TransitionProps={{ unmountOnExit: true }} />`. As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies.

## Individuelles Erweiterungspanel

Wenn du die [Overrides Dokumentationsseite](/customization/overrides/) gelesen hast, aber dich noch nicht sicher genug fühlst, um direkt loszulegen, ist hier noch ein Beispiel, wie du die Hintergrundfarbe des `ExpansionPanelSummary` und den Abstand des `ExpansionPanelDetails` anpassen könntest.

⚠️ Auch wenn die material design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/expansion-panels/CustomizedExpansionPanel.js"}}