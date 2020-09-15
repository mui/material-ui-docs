---
title: Componente React para Lista de Grade
components: ImageList, ImageListItem, ImageListItemBar
materialDesign: https://material.io/components/image-lists
githubLabel:
  component: ImageList
---

# Lista de Grade

<p class="description">As listas de grade exibem uma coleção de imagens em uma grade de forma organizada.</p>

[Listas de Grade](https://material.io/design/components/image-lists.html) representam uma coleção de itens em um padrão repetido. Elas ajudam a melhorar a compreensão visual do conteúdo que elas contêm.

{{"component": "modules/components/ComponentLinkHeader.js"}}

## Standard image list

Standard image lists are best for items of equal importance. They have a uniform container size, ratio, and spacing.

{{"demo": "pages/components/image-list/StandardImageList.js"}}

## Quilted image list

Quilted image lists emphasize certain items over others in a collection. They create hierarchy using varied container sizes and ratios.

{{"demo": "pages/components/image-list/QuiltedImageList.js"}}

## Woven image list

Woven image lists use alternating container ratios to create a rhythmic layout. A woven image list is best for browsing peer content.

{{"demo": "pages/components/image-list/WovenImageList.js"}}

## Masonry image list

Masonry image lists use dynamically sized container heights that reflect the aspect ratio of each image. This image list is best used for browsing uncropped peer content.

{{"demo": "pages/components/image-list/MasonryImageList.js"}}

## Image list with title bars

This example demonstrates the use of the `ImageListItemBar` to add an overlay to each item. A sobreposição pode acomodar um `title`, `subtitle` e ação secundária - neste exemplo utilizamos um `IconButton`.

{{"demo": "pages/components/image-list/TitlebarImageList.js"}}

### Title bar below image (standard)

The title bar can be placed below the image.

{{"demo": "pages/components/image-list/TitlebarBelowImageList.js"}}

### Title bar below image (masonry)

{{"demo": "pages/components/image-list/TitlebarBelowMasonryImageList.js"}}

## Custom image list

In this example the items have a customized titlebar, positioned at the top and with a custom gradient `titleBackground`. A ação secundária `IconButton` está posicionada à esquerda. The `gap` prop is used to adjust the gap between items.

{{"demo": "pages/components/image-list/CustomImageList.js", "defaultCodeOpen": false}}
