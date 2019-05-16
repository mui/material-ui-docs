---
title: Componente React para Lista de Grade
components: GridList, GridListTile, GridListTileBar, ListSubheader, IconButton
---

# Lista de grade

<p class="description">As listas de grade exibem uma coleção de imagens em uma grade de forma organizada.</p>

[Listas de Grade](https://material.io/design/components/image-lists.html) representam uma coleção de itens em um padrão repetido. Elas ajudam a melhorar a compreensão visual do conteúdo que elas contêm.

## Lista de grade com imagens

Um exemplo simples de uma `GridList` com imagens.

{{"demo": "pages/components/grid-list/ImageGridList.js", "hideEditButton": true}}

## Lista de grade com barras de título

Este exemplo demonstra o uso do `GridListTileBar` para adicionar uma sobreposição a cada `GridListTile`. A sobreposição pode acomodar um `title`, `subtitle` e ação secundária - neste exemplo utilizamos um `IconButton`.

{{"demo": "pages/components/grid-list/TitlebarGridList.js", "hideEditButton": true}}

## Lista de grade de linha única

Este exemplo demonstra uma lista de grade com imagens, em linha unica e rolável horizontalmente. As listas de grade de rolagem horizontal não são recomendadas porque a rolagem interfere nos padrões de leitura típicos, afetando a compreensão. Uma exceção notável para rolagem horizontal, seria uma lista de grade com imagens em linha única, como uma galeria.

{{"demo": "pages/components/grid-list/SingleLineGridList.js", "hideEditButton": true}}

## Lista de grade avançada

This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile, and the `padding` prop to adjust the spacing. The tiles have a customized titlebar, positioned at the top and with a custom gradient `titleBackground`. The secondary action `IconButton` is positioned on the left.

{{"demo": "pages/components/grid-list/AdvancedGridList.js", "hideEditButton": true}}