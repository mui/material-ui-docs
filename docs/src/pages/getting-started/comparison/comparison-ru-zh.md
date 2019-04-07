# Сравнение с другими библиотеками

<p class="description">Вы здесь, потому что хотите знать, сможет ли Material-UI помочь решить ваши конкретные проблемы. Вот что мы надеемся ответить вам здесь.</p>

Это определенно одна из самых сложных страниц в руководстве, но мы считаем, что это важно. Скорее всего, у вас были проблемы, которые вы пытались решить, и вы использовали другую библиотеку для их решения.

Мы хотели бы, чтобы вы помогли обновить этот документ, потому что мир JavaScript движется быстро! Если вы заметили неточность или что-то, что кажется вам не совсем правильным, сообщите нам об этом через [opening an issue](https://github.com/mui-org/material-ui/issues/new?title=[docs]+Inaccuracy+in+comparison+guide).

Мы покрываем следующие библиотеки:

- [Material-UI](#material-ui)
- [Material Design Lite (MDL)](#material-design-lite-mdl)
- [Material Components Web (MDC-web)](#material-components-web-mdc-web)
- [Materialize](#materialize)
- [React Toolbox](#react-toolbox)

## Material-UI

![stars](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)

Мы очень постараемся избежать предвзятости, хотя нам, как основной команде, очень нравится Material-UI ❤️. There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

Мы хотим быть честными и точными, поэтому, когда другие библиотеки предлагают значительные преимущества, мы также стараемся перечислить их.

## Material Design Lite (MDL)

![stars](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite, будучи очень хорошо продуманной реализацией Material Design, в основном поддерживался разработчиками Google. Сегодня **проект больше не поддерживается**. Так что же случилось?

Команда разработчиков Material Components начали строить MDC-сеть «MDL v2», но после совместной работы над ним в течение нескольких месяцев, обе команды решили, что будет лучше, если проект будет полностью под руководством команды Material Design. Этот сдвиг означал переориентацию целей с простого «добавления стилей Material Design» на веб-сайты в сторону канонической реализации Material Design для всей веб-платформы в целом.

## Material Components Web (MDC-web)

![评星](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-components-web.svg)

Мы очень рады, что этот проект поддерживается Google и его командой дизайнеров. Это четко дает понять, что [спецификация Material Design](https://material.io/design/) будет существовать, пока Google продолжает в нее инвестировать.

### Фреймворки и библиотеки

Material-UI ориентирован исключительно на библиотеку React, хотя, учитывая, что Preact поддерживает тот же API, мы надеемся, что скоро тоже будем его поддерживать. Поддержка одного фреймворка позволяет нам делать меньше, но делать это лучше.

Это происходит в различных вариантах:

- Имея меньше ограничений, мы можем идти на компромиссы, характерные для нашего целевого фреймворка. У нас меньше граничных случаев, которые нужно принимать во внимание.
- Мы можем потратить больше времени на разработку и оттачивание использования React.

MDC-web 从一开始就被设计为完全兼容第三方 JS 框架和库。 关于 MDC-web 与第三方库集成的项目，请参考 Github上 的[README](https://github.com/material-components/material-components-web/#material-components-for-the-web)文档。

### Стилевое решение

[Material-UI несет тяжелое наследие со стилями](https://github.com/oliviertassinari/a-journey-toward-better-style). Our very first release was using LESS, but seeing the limitation of this solution, we quickly started looking into alternatives. 我们在第一次迁移后使用的是内联样式的解决方案。 这个方案有很多优点：

- 它使我们能够移除用户对 LESS 工具链的依赖。 我们清除了在安装过程中的一个重要的麻烦。 （**更简便**）
- 它使我们能够在运行时更改主题，嵌套不同的主题，并且动态地更改样式。 （**更强大**）
- 它使我们能够将一个巨无霸 CSS 文件分成多个小文件，实现代码拆分，从而降低缩短页面的加载时间。 （**更快速**）
- 由于我们不需要处理 CSS 具体性问题，各样式表之间覆盖的结果也变得更加直观。 （**更简便**）

Eventually, we reached the limitations of inline-styles and moved toward a CSS-in-JS solution. This transition was made without losing the enhancements the first migration introduced **We strongly think that CSS-in-JS is the future of the web platform**. 您可以在文档中[了解更多关于我们的新的样式表的解决方案](/customization/css-in-js/)。

MDC-web 作为 Bootstrap v4 依赖于 SCSS。 The SCSS architecture is pretty close to LESS - a technology we replaced for its limitations.

### Видение

Наше видение заключается в том, чтобы обеспечить элегантную реализацию рекомендаций по Material Design **и более**.

> Material Design 的设计原则是一个很棒的出发点，但是它并没有由为一款应用的不同诉求给出完整的答案。 В дополнение к реализации, ориентированной на конкретные рекомендации, мы хотим, чтобы Material-UI стал тем, что обычно полезно для разработки приложений и все это в духе рекомендаций Material Design.
> 
> *[Выдержка из раздела [видение](/discover-more/vision/) документации.]*

We want to see businesses succeeding in taking advantage of Material-UI to ship an awesome UI to their users while having it match their brand, so we have invested a lot in the customization capabilities of Material-UI.

Единственная цель MDC-Web - реализация Material Design для веб-платформы. **不多也不少**。 他们并不会考虑到对组件进行更改 - 尤其是UX的变更 - 这会以牺牲核心 Material Design 系统为代价来增加额外的弹性，而这并不是这个项目的主要目标。 *[来源](https://github.com/mui-org/material-ui/issues/6799#issuecomment-299925174)*

### Тесты

Оба проекта покрываются множеством тестов. На момент написания статьи, оба проекта покрыты тестами более чем на 99%:

- Material-UI содержит 1200+ юнит тестов запускаемых в Chrome 49, Firefox 45, Safari 10 и Edge 14.
- MDC-web содержит 1200+ юнит тестов запускаемых во всех основных браузерах.

Still, there is one thing that sets Material-UI apart and it's key: We have [hundreds of visual regression tests](https://www.argos-ci.com/mui-org/material-ui) when MDC-web doesn't have any. 通过视觉回归测试，您无需进行任何权衡：

- 您不会浪费时间来担心新的组件贡献会带来意想不到的回归麻烦。 你花在一个单一贡献上的时间 **越少**, 你能接受的贡献 **越多** 。
- 你可以合并新的贡献，而不需要深究太多。 实际上，您不用等待用户报告回归。 这个特点非常 **有效** ，它还**提高了整个库的质量**。

## Materialize

![stars](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/materialize-css.svg)

### Поддержка браузеров

Materialize поддерживает более широкий диапазон браузеров, чем Material-UI, например, они поддерживают IE 10, а [мы поддерживаем только IE 11](/getting-started/supported-platforms/). Только поддержка IE 11 позволяет нам в полной мере использовать макет flexbox. IE 10 имеет много проблем с flexbox.

### Стилевое решение

Materialize использует SCSS, стилевую архитектуру Material-UI, от которой отказались 2 года назад. Мы объясняем почему в [секции MDC-web](#styling-solution) выше.

## React Toolbox

![stars](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/react-toolbox.svg)

### Стилевое решение

В то время как и React Toolbox, и Material-UI делают ставки на CSS-in-JS, мы приняли другой компромисс. Material-UI выбрал **JSS** в то время как React Toolbox начал переписывать свою библиотеку с помощью **styled-components**. Мы выбрали JSS вместо styled-components по следующей причине:

- JSS предоставляет API низкого уровня: 
  - Мы можем моделировать его в соответствии с нашими уникальными потребностями, что позволило нам создать один из самых совершенных механизмов переопределения и создания тем.
  - Он не связан с React, как `styled-components`. 在覆盖任何第三方 JS 框架和库上它有极高的潜力。 Параллели могут быть сделаны с помощью SCSS. SCSS совместим с любыми JavaScript-фреймворками и библиотеками, что помогает ему развиваться в сообществе.
- JSS [в два раза быстрее](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md) чем подключение компонентов через styled-components, при всей включенной оптимизации.

Это не означает, что Material-UI думает о том, как пользователи пишут свои стили. Вы можете использовать styled-components, если хотите.