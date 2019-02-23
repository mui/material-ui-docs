---
title: React-компонент Grid List
components: GridList, GridListTile, GridListTileBar, ListSubheader, IconButton
---
# Grid List

<p class="description">Grid Lists отображают коллекцию изображений в упорядоченной сетке.</p>

[Grid lists](https://material.io/design/components/image-lists.html) являются коллекцией элементов в повторяющемся шаблоне. Они помогают улучшить визуальное восприятие своего содержания.

## Grid List только для изображений

Простой пример прокручиваемого изображения `GridList`.

{{"demo": "pages/demos/grid-list/ImageGridList.js", "hideEditButton": true}}

## Grid list с заголовками

This example demonstrates the use of the `GridListTileBar` to add an overlay to each `GridListTile`. The overlay can accommodate a `title`, `subtitle` and secondary action - in this example an `IconButton`.

{{"demo": "pages/demos/grid-list/TitlebarGridList.js", "hideEditButton": true}}

## Однострочный Grid List

This example demonstrates a horizontal scrollable single-line grid list of images. Horizontally scrolling grid lists are discouraged because the scrolling interferes with typical reading patterns, affecting comprehension. One notable exception is a horizontally-scrolling, single-line grid list of images, such as a gallery.

{{"demo": "pages/demos/grid-list/SingleLineGridList.js", "hideEditButton": true}}

## Advanced Grid list

This example demonstrates "featured" tiles, using the `rows` and `cols` props to adjust the size of the tile, and the `padding` prop to adjust the spacing. The tiles have a customized titlebar, positioned at the top and with a custom gradient `titleBackground`. The secondary action `IconButton` is positioned on the left.

{{"demo": "pages/demos/grid-list/AdvancedGridList.js", "hideEditButton": true}}