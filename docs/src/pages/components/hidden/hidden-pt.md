---
title: Componente React Hidden
components: Hidden
---

# Hidden

<p class="description">Modifique rapidamente e de forma responsiva a visibilidade dos componentes e muito mais com nosso utilitário hidden.</p>

Todos os elementos são visíveis a menos que **estejam explicitamente ocultos**. Para facilitar a integração com [pontos de quebra (breakpoint) responsivos](/customization/breakpoints/) do Material-UI's, este componente pode ser utilizado, ou você pode usa-lo de forma conjunta com um componente [`Grid`](/components/grid/).

## Como funciona

Hidden trabalha com um intervalo de pontos de quebra (breakpoints), por exemplo, `xsUp` ou `mdDown`, ou com um ou mais pontos de quebra, por exemplo, `only='sm'` ou `only={['md', 'xl']}`. Intervalos e pontos de quebra individuais podem ser usados simultaneamente para obter um comportamento muito mais customizado. Os intervalos são inclusivos dos pontos de quebra especificados.

```js
innerWidth  |xs      sm       md       lg       xl
            |--------|--------|--------|--------|-------->
width       |   xs   |   sm   |   md   |   lg   |   xl

smUp        |   show | hide
mdDown      |                     hide | show

```

## Implementações

### js

Por padrão, a implementação `js` é usada, responsivamente escondendo conteúdo baseado no uso de [`withWidth()`](/customization/breakpoints/#withwidth), componente de ordem mais elevada (higher-order) que observa o tamanho da tela. Isso tem o benefício de não renderizar nenhum conteúdo, a menos que o ponto de quebra seja atingido.

### css

Se você estiver usando a renderização do lado do servidor, poderá definir `implementation = "css"` se não quer que o navegador reprocesse seu conteúdo na tela.

## Breakpoint up

Using any breakpoint `up` property, the given *children* will be hidden *at or above* the breakpoint.

{{"demo": "pages/components/hidden/BreakpointUp.js"}}

## Breakpoint down

Using any breakpoint `down` property, the given *children* will be hidden *at or below* the breakpoint.

{{"demo": "pages/components/hidden/BreakpointDown.js"}}

## Breakpoint only

Using the breakpoint `only` property, the given *children* will be hidden *at* the specified breakpoint(s).

The `only` property can be used in two ways:

- list a single breakpoint
- list an array of breakpoints

{{"demo": "pages/components/hidden/BreakpointOnly.js"}}

## Integration with Grid

It is quite common to alter `Grid` at different responsive breakpoints, and in many cases, you want to hide some of those elements.

{{"demo": "pages/components/hidden/GridIntegration.js"}}