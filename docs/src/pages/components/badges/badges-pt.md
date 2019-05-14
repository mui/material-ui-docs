---
title: Componente React para Emblemas
components: Badge
---

# Emblemas

<p class="description"><code>Badge</code> gera um pequeno emblema no canto superior direito de seu(s) filho(s).</p>

## Emblemas Simples

Exemplos de emblemas contendo texto, usando cores primárias e secundárias. O emblema é aplicado em seus filhos.

{{"demo": "pages/components/badges/SimpleBadge.js"}}

## Valor Máximo

Você pode usar a propriedade `max` para limitar o valor do conteúdo do selo.

{{"demo": "pages/components/badges/BadgeMax.js"}}

## Emblema com Ponto

A propriedade `ponto` altera um distintivo para um pequeno ponto. Isso pode ser usado como uma notificação de que algo mudou sem dar uma conta.

{{"demo": "pages/components/badges/DotBadge.js"}}

## Emblema visibilidade

A visibilidade dos emblemas pode ser controlada usando a propriedade `invisible`.

O emblema auto-esconde com badgeContent é zero. Você pode substituir isso com a propriedade `showZero`.

{{"demo": "pages/components/badges/BadgeVisibility.js"}}

## Customized badges

Aqui está um exemplo de personalização do componente. Você pode aprender mais sobre isso na [página de documentação de substituições](/customization/components/).

{{"demo": "pages/components/badges/CustomizedBadges.js"}}