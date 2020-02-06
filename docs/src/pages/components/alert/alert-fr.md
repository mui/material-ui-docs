---
title: Composant Alert React
components: Alert
---

# Alert

<p class="description">Une alerte affiche un message court et important d'une manière qui attire l'attention de l'utilisateur sans interrompre sa tâche.</p>

**Remarque :** Ce composant n'est pas documenté dans les [consignes de Material Design](https://material.io/), mais Material-UI le supporte.

## Alertes simples

L'alerte offre quatre niveaux de sévérité qui définissent une icône et une couleur distinctes.

{{"demo": "pages/components/alert/SimpleAlerts.js"}}

## Description

Vous pouvez utiliser le composant `AlertTitle` pour afficher un titre formaté au-dessus du contenu.

{{"demo": "pages/components/alert/DescriptionAlerts.js"}}

## Actions

Une alerte peut avoir une action, comme un bouton de fermeture ou d'annulation. Il est affiché après le message, à la fin de l'alerte.

Si une fonction de rappel `onClose` est fournie et qu'aucune propriété `action` n'est définie, une icône de fermeture s'affiche. La propriété `action` peut être utilisée pour fournir une action alternative, par exemple en utilisant un `Button` ou un `IconButton`.

{{"demo": "pages/components/alert/ActionAlerts.js"}}

### Transition

Vous pouvez utiliser un [composant de transition](/components/transitions/) tel que `Collapse` pour faire la transition de l'apparence de l'alerte.

{{"demo": "pages/components/alert/TransitionAlerts.js"}}

## Icônes

La propriété `icône` vous permet d'ajouter une icône au début du composant d'alerte. Cela remplacera l'icône par défaut pour la sévérité spécifiée.

You can change the default severity to icon mapping with the `iconMapping` prop. This can be defined globally using [theme customization](/customization/globals/#default-props).

Setting the icon prop to false will remove the icon altogether.

{{"demo": "pages/components/alert/IconAlerts.js"}}

## Variants

Two additional variants are available – outlined, and filled:

### Outlined

{{"demo": "pages/components/alert/OutlinedAlerts.js"}}

### Filled

{{"demo": "pages/components/alert/FilledAlerts.js"}}

## Toast

You can use the Snackbar to [display a toast](/components/snackbars/#customized-snackbars) with the Alert.

## Couleur

The `color` prop will override the default color for the specified severity.

{{"demo": "pages/components/alert/ColorAlerts.js"}}

## Accessibilité

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#alert)

When the component is dynamically displayed, the content is automatically announced by most screen readers. At this time, screen readers do not inform users of alerts that are present when the page loads.

Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (for example the visible text), or is included through alternative means, such as additional hidden text.

Actions must have a tab index of 0 so that they can be reached by keyboard-only users.
