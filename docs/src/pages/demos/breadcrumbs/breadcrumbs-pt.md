---
title: Componente React Breadcrumbs
components: Breadcrumbs, Link, Typography
---

# Breadcrumbs

<p class="description">Breadcrumbs permitem aos usuários fazer seleções em uma gama de valores.</p>

## Breadcrumbs simples

{{"demo": "pages/demos/breadcrumbs/SimpleBreadcrumbs.js"}}

## Separador personalizado

No exemplo a seguir, nós usamos duas strings separadoras, e um ícone SVG.

{{"demo": "pages/demos/breadcrumbs/CustomSeparator.js"}}

## Breadcrumbs com ícones

{{"demo": "pages/demos/breadcrumbs/IconBreadcrumbs.js"}}

## Breadcrumbs colapsado

{{"demo": "pages/demos/breadcrumbs/CollapsedBreadcrumbs.js"}}

## Breadcrumbs personalizado

Here is an example of customizing the component. You can learn more about this in the [overrides documentation page](/customization/overrides/).

{{"demo": "pages/demos/breadcrumbs/CustomizedBreadcrumbs.js"}}

## Acessibilidade

Esteja certo de adicionar uma descrição `aria-label` no componente `Breadcrumbs`.

A acessibilidade neste componente conta:

- O conjunto dos links são estruturados usando uma lista ordenada (elemento `<ol>`).
- Para prevenir que os leitores de tela pronunciem os separadores visuais entre os links, eles são escondidos com `aria-hidden`.
- Um elemento nav rotulado com `aria-label` identifica a estrutura como uma trilha breadcrumb e faz dela uma referência de navegação para facilitar a localização.

## Integração com react-router

{{"demo": "pages/demos/breadcrumbs/RouterBreadcrumbs.js"}}