---
title: Componente React Badge
components: Badge
---

# Badges (Emblemas)

<p class="description">Emblema gera um pequeno emblema para o canto superior direito do seu filho(s).</p>

## Emblemas Simples

Examples of badges containing text, using primary and secondary colors. The badge is applied to its children.

{{"demo": "pages/components/badges/SimpleBadge.js"}}

## Valor Máximo

Você pode usar a propriedade `max` para limitar o valor do conteúdo do selo.

{{"demo": "pages/components/badges/BadgeMax.js"}}

## Ponto Emblema

The `dot` property changes a badge into a small dot. This can be used as a notification that something has changed without giving a count.

{{"demo": "pages/components/badges/DotBadge.js"}}

## Emblema visibilidade

A visibilidade dos emblemas pode ser controlada usando a propriedade `invisible`.

The badge auto hides with badgeContent is zero. You can override this with the `showZero` property.

{{"demo": "pages/components/badges/BadgeVisibility.js"}}

## Customized badges

Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](/customization/components/).

{{"demo": "pages/components/badges/CustomizedBadges.js"}}