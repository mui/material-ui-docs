# Grundlegendes

<p class="description">Layouts für Materialdesigns fördern die Konsistenz über Plattformen, Umgebungen und Bildschirmgrößen hinweg, indem einheitliche Elemente und Abstände verwendet werden.</p>

## Responsive UI

[Responsive Layouts](https://material.io/design/layout/responsive-layout-grid.html) passen sich in Material Design an jede mögliche Bildschirmgröße an. Wir bieten die folgenden Helfer, um die Benutzeroberfläche ansprechbar zu machen:

- Das [Grid](/layout/grid/) sorgt für visuelle Konsistenz zwischen Layouts und ermöglicht Flexibilität bei einer Vielzahl von Designs.
- [ Rasterpunkte ](/layout/breakpoints/): Wir bieten eine API auf niedriger Ebene, die die Verwendung von Rasterpunkten in einer Vielzahl von Kontexten ermöglicht.
- [useMediaQuery](/layout/use-media-query/): This is a CSS media query hook for React.
- [Hidden](/layout/hidden/): The hidden component can be used to change the visibility of the elements.

## z-index

Several Material-UI components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Material-UI that's been designed to properly layer drawers, modals, snackbars, tooltips, and more.

[These values](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/zIndex.js) start at an arbitrary number, high and specific enough to ideally avoid conflicts.

- mobile stepper: 1000
- app bar: 1100
- drawer: 1200
- modal: 1300
- snackbar: 1400
- tooltip: 1500

These values can always be customized. You will find them in the theme under the [`zIndex`](/customization/default-theme/?expend-path=$.zIndex) key. We don’t encourage customization of individual values; should you change one, you likely need to change them all.