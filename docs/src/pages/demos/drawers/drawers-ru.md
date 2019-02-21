---
title: Панель, компонент React
components: Drawer, SwipeableDrawer
---
# Панель

<p class="description">Навигационные панели предназначены для предоставления ссылок на различные части вашего приложения. Боковые панели содержат дополнительную информацию и закрепляются по левую или правую сторону окна браузера.</p>

[Навигационные панели](https://material.io/design/components/navigation-drawer.html) позволяют легко получить доступ к основному функционалу вашего приложения, к примеру перейти в раздел смены аккаунта. Они могут либо находится всегда в открытом состоянии либо контролироватся с помощью навигационного меню.

[Боковые панели](https://material. io/design/components/sheets-side.html) являются дополнительными элементами, в основном используемыми на планшетах и ПК.

## Скрытая Панель

Скрытая навигационная панель может быть видна либо скрыта. По-умолчанию ее не видно, но ее можно открыть над остальным содержимым и выбрать нужный пункт, после чего панель снова переходит в скрытое состояние.

Также, панель может быть скрыта нажатем на фон или на клавишу Esc. При выборе пункта меню панель закрывается меняя значение свойства `open`.

{{"demo": "pages/demos/drawers/TemporaryDrawer.js"}}

## Скользящая скрытая панель

Вы можете сделать панель скользящей используя компонент `SwipeableDrawer`.

Этот комонент в сжатом виде добавляет 2 kB к загрузке. Некоторые бюджетные мобильные устройства не смогут отвечать на прикосновения с частотой 60 кадров в секунду. Используйте свойство `disableBackdropTransition` чтобы исправить ситуацию.

{{"demo": "pages/demos/drawers/SwipeableTemporaryDrawer.js"}}

Данный вебсайт использует следующие приемы для улучшения качества взаимодействия с пользователем данного компонента: - iOS является мощным устройством. Поэтому использование backdrop transition не вызывает пропуска кадров. Производительность достаточно хороша. - iOS предоставляет скользящий жест для возврата, который мешает использованию панелей. We have to disable it.

```jsx
const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

<SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS} />
```

## Responsive drawer

The `Hidden` responsive helper component allows showing different types of drawer depending on the screen width. A `temporary` drawer is shown for small screens while a `permanent` drawer is shown for wider screens.

{{"demo": "pages/demos/drawers/ResponsiveDrawer.js", "iframe": true}}

## Persistent drawer

Persistent navigation drawers can toggle open or closed. The drawer sits on the same surface elevation as the content. It is closed by default and opens by selecting the menu icon, and stays open until closed by the user. The state of the drawer is remembered from action to action and session to session.

When the drawer is outside of the page grid and opens, the drawer forces other content to change size and adapt to the smaller viewport.

Persistent navigation drawers are acceptable for all sizes larger than mobile. They are not recommended for apps with multiple levels of hierarchy that require using an up arrow for navigation.

{{"demo": "pages/demos/drawers/PersistentDrawerLeft.js", "iframe": true}}

{{"demo": "pages/demos/drawers/PersistentDrawerRight.js", "iframe": true}}

## Mini variant drawer

In this variation, the persistent navigation drawer changes its width. Its resting state is as a mini-drawer at the same elevation as the content, clipped by the app bar. When expanded, it appears as the standard persistent navigation drawer.

The mini variant is recommended for apps sections that need quick selection access alongside content.

{{"demo": "pages/demos/drawers/MiniDrawer.js", "iframe": true}}

## Permanent drawer

Permanent navigation drawers are always visible and pinned to the left edge, at the same elevation as the content or background. They cannot be closed.

Permanent navigation drawers are the **recommended default for desktop**.

### Full-height navigation

Apps focused on information consumption that use a left-to-right hierarchy.

{{"demo": "pages/demos/drawers/PermanentDrawerLeft.js", "iframe": true}}

{{"demo": "pages/demos/drawers/PermanentDrawerRight.js", "iframe": true}}

### Clipped under the app bar

Apps focused on productivity that require balance across the screen.

{{"demo": "pages/demos/drawers/ClippedDrawer.js", "iframe": true}}