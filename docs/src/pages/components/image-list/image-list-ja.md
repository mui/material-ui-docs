---
title: Grid List React component
components: ImageList, ImageListItem, ImageListItemBar
materialDesign: https://material.io/components/image-lists
githubLabel:
  component: ImageList
---

# Grid List

<p class="description">グリッドリストは、整理されたグリッドで画像のコレクションを表示します。</p>

[グリッドリスト](https://material.io/design/components/image-lists.html) は、繰り返しパターンの項目の集まりを表します。 それらは、保持するコンテンツの視覚的理解を改善するのに役立ちます。

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

This example demonstrates the use of the `ImageListItemBar` to add an overlay to each item. オーバーレイには、 `title`, `subtitle` および副次的アクション例えば`IconButton`を含めることができます。

{{"demo": "pages/components/image-list/TitlebarImageList.js"}}

### Title bar below image (standard)

The title bar can be placed below the image.

{{"demo": "pages/components/image-list/TitlebarBelowImageList.js"}}

### Title bar below image (masonry)

{{"demo": "pages/components/image-list/TitlebarBelowMasonryImageList.js"}}

## Custom image list

In this example the items have a customized titlebar, positioned at the top and with a custom gradient `titleBackground`. セカンダリアクション `IconButton` は左側に配置されます。 The `gap` prop is used to adjust the gap between items.

{{"demo": "pages/components/image-list/CustomImageList.js", "defaultCodeOpen": false}}
