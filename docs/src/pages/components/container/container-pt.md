---
title: Componente React Container
components: Container
---

# Container

<p class="description">O container centraliza seu conteúdo horizontalmente. É o elemento de leiaute mais básico.</p>

Enquanto os containers podem ser aninhados, a maioria dos leiautes não necessitam de um container aninhado.

## Fluído

A largura de um container fluído é limitada pelo valor da propriedade `maxWidth`.

```jsx
<Container maxWidth="sm">
```

{{"demo": "pages/components/container/SimpleContainer.js", "iframe": true}}

## Fixo

If you prefer to design for a fixed set of sizes instead of trying to accommodate a fully fluid viewport, you can set the `fixed` property. The max-width matches the min-width of the current breakpoint.

```jsx
<Container fixed>
```

{{"demo": "pages/components/container/FixedContainer.js", "iframe": true}}