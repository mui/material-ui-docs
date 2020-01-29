---
title: 'Компонент React: Скелет'
components: Скелет
---

# Скелет

<p class="description">Отображайте макет вашего приложения перед загрузкой данных, чтобы уменьшить дискомфорт от загрузки.</p>

Данные ваших компонентов могут не быть доступны сразу. Вы можете увеличить предполагаемую производительность для пользователей с помощью скелетов. Кажется, что все происходит мгновенно, затем информация постепенно отображается на экране. (см. [Avoid The Spinner](https://www.lukew.com/ff/entry.asp?1797)).

The component is designed to be used **directly in your components**. For instance:

```jsx
{item ? (
  <img style={{ width: 210, height: 118 }} alt={item.title} src={item.src} />
) : (
  <Skeleton variant="rect" width={210} height={118} />
)}
```

## Variants

The component supports 3 shape variants.

{{"demo": "pages/components/skeleton/Variants.js"}}

## Animations

By default, the skeleton pulsate, but you can change the animation for a wave or disable it entirely.

{{"demo": "pages/components/skeleton/Animations.js"}}

## YouTube example

{{"demo": "pages/components/skeleton/YouTube.js", "defaultCodeOpen": false}}

## Facebook example

{{"demo": "pages/components/skeleton/Facebook.js", "defaultCodeOpen": false, "bg": true}}