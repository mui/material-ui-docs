---
title: Сеть изображений, компонент React
components: GridList, GridListTile, GridListTileBar, ListSubheader, IconButton
---
# Сеть изображений

<p class="description">Сеть изображений суть коллекция изображений на упорядоченной сетке.</p>

[Сеть изображений](https://material.io/design/components/image-lists.html) являются коллекцией элементов в повторяющемся шаблоне. Они помогают улучшить визуальное восприятие своего содержания.

## Простая сеть изображений

Простой пример прокручиваемой `Сети изображений`.

{{"demo": "pages/demos/grid-list/ImageGridList.js", "hideEditButton": true}}

## Сеть изображений с заголовками

Этот пример демонстрирует использование `Полосы заголовка сети изображений`, которую следует добавить в каждый `Заголовок сети изображений`. Мы можем указать `заголовок`, `подзаголовок` и дополнительное действие - в этом примере `кнопка-иконка`.

{{"demo": "pages/demos/grid-list/TitlebarGridList.js", "hideEditButton": true}}

## Сеть изображений в одну строку

Данный пример показывает сеть изображений в одну строку с горизонтальной прокруткой. Однако такие сети изображний лучше не использовать так как это может вызвать у пользователя чувство дискомфорта - обычно при чтении используется вертикальная прокрутка. One notable exception is a horizontally-scrolling, single-line grid list of images, such as a gallery.

{{"demo": "pages/demos/grid-list/SingleLineGridList.js", "hideEditButton": true}}

## Advanced Grid list

В этом примере демонстрирует «рекомендуемые» листы, в которых используются свойства `rows` и `cols` чтобы отрегулировать размер плитки, и свойство `padding` чтобы отрегулировать поля между плитками. The tiles have a customized titlebar, positioned at the top and with a custom gradient `titleBackground`. The secondary action `IconButton` is positioned on the left.

{{"demo": "pages/demos/grid-list/AdvancedGridList.js", "hideEditButton": true}}