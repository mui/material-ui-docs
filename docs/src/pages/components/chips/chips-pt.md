---
title: Componente React Chip (Fatias)
components: Chip
---

# Chips (Lascas)

<p class="description">Chips são elementos compactos que representam uma entrada, atributo ou ação.</p>

[Chips](https://material.io/design/components/chips.html) permitirá que usuários insiram informações, façam seleções, filtrem conteúdo ou acionem gatilhos.

Embora incluído aqui como um componente independente, o uso mais comum será em alguma forma de entrada, portanto, alguns dos comportamentos demonstrados aqui não são mostrados no contexto.

## Chip

Exemplo de Chips, usando uma imagem de Avatar, Ícone SVG, "Letra" e Avatar (texto).

- Chips com a propriedade `onClick` definida, mudará a aparência do foco, ao passar por cima (hover) e clique.
- Chips com a propriedade `onDelete` definida irá exibir um ícone de remoção no qual modificará a aparência ao passar por cima (hover).

{{"demo": "pages/components/chips/Chips.js"}}

### Outlined Chips

Chips delineados oferecem uma alternativa de estilo.

{{"demo": "pages/components/chips/OutlinedChips.js"}}

## Chip array

Um exemplo de renderização de múltiplos Chips de uma matriz de valores. Deletando um chip removerá da matriz. Observe que uma vez nenhuma propriedade `onClick` definida, o Chip pode ser focado, mas não terá ganhos profundos quando clicado ou tocado.

{{"demo": "pages/components/chips/ChipsArray.js"}}

## Chip Playground

{{"demo": "pages/components/chips/ChipsPlayground.js", "hideHeader": true}}