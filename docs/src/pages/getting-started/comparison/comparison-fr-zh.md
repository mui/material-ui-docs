# Comparaison avec d'autres bibliothèques

<p class="description">Si vous êtes ici pour savoir si Material-UI peut aider à mieux résoudre certains de vos problème. Vous êtes sur la bonne page.</p>

C’est certainement l’une des pages les plus difficiles à écrire du guide, mais nous pensons que c’est important. Les chances sont que vous avez eu des problèmes que vous avez essayé de résoudre et vous avez utilisé une autre bibliothèque pour les résoudre.

我们希望您的帮助使这份文档保持更新, 因为 Javascript 一直都在推陈出新 ！ If you notice an inaccuracy or something that doesn’t seem quite right, please let us know by [opening an issue](https://github.com/mui-org/material-ui/issues/new?title=[docs]+Inaccuracy+in+comparison+guide).

我们介包含了以下的一些库:

- [Material-UI](#material-ui)
- [Material Design Lite (MDL)](#material-design-lite-mdl)
- [Material Components Web (MDC-web)](#material-components-web-mdc-web)
- [Materialize](#materialize)
- [React Toolbox](#react-toolbox)

## Material-UI

![stars](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)

我们会尽可能地避免偏见, 但是作为核心团队, 我们显然是非常喜欢Material-UI ️❤️的。 There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

我们想尽可能的公平和精确，所以无论其他库有什么显著的优势，我们都会尽量列出他们的。

## Material Design Lite (MDL)

![stars](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite, while a very well-thought-out Material Design implementation, was primarily maintained by Developer Relations at Google. 目前，**该项目已无人维护**， 所以，到底发生了什么呢？

The Material Components Web team started out building MDC-web as "MDL v2", but, after collaborating on it for a few months, both teams felt it best to bring the project under the Material Design team's purview. This shift meant a re-orientation of goals away from simply "adding a Material Design look and feel" to websites, and towards the goal of a canonical Material Design implementation for the entire web platform.

## Material Components Web (MDC-web)

![stars](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-components-web.svg)

我们很高兴看到 Google 及其设计团队支持该项目。 It sends a clear signal that the [Material Design specification](https://material.io/design/) is here to stay, as they continue to invest in it.

### 框架和库

Material-UI focuses exclusively on the React library, although, given that Preact supports the very same API, we hope to soon support it too. 仅支持一种框架，意味着我们会有更少的工作量，但更高的质量。

这也可以从多个角度来理解：

- 有了更少的约束条件，我们可以针对我们的目标框架做出具体的调整。 我们需要考虑的特殊情况也比较少。
- 我们也能够花更多时间优化 React 的应用场景。

MDC-web 从一开始就被设计为完全兼容第三方 JS 框架和库。 关于 MDC-web 与第三方库集成的项目，请参考 Github上 的[README](https://github.com/material-components/material-components-web/#material-components-for-the-web)文档。

### 样式调整解决方案

[Material-UI尝试过多种样式调整的解决方案。](https://github.com/oliviertassinari/a-journey-toward-better-style) Our very first release was using LESS, but seeing the limitation of this solution, we quickly started looking into alternatives. 我们在第一次迁移后使用的是内联样式的解决方案。 这个方案有很多优点：

- 它使我们能够移除用户对 LESS 工具链的依赖。 我们清除了在安装过程中的一个重要的麻烦。 （**更简便**）
- 它使我们能够在运行时更改主题，嵌套不同的主题，并且动态地更改样式。 （**更强大**）
- 它使我们能够将一个巨无霸 CSS 文件分成多个小文件，实现代码拆分，从而降低缩短页面的加载时间。 （**更快速**）
- 由于我们不需要处理 CSS 具体性问题，各样式表之间覆盖的结果也变得更加直观。 （**更简便**）

Eventually, we reached the limitations of inline-styles and moved toward a CSS-in-JS solution. This transition was made without losing the enhancements the first migration introduced **We strongly think that CSS-in-JS is the future of the web platform**. 您可以在文档中[了解更多关于我们的新的样式表的解决方案](/customization/css-in-js/)。

MDC-web 作为 Bootstrap v4 依赖于 SCSS。 The SCSS architecture is pretty close to LESS - a technology we replaced for its limitations.

### 愿景

我们的愿景是提供一份关于实施 Material Design 的优雅的指南，以及**和更多**。

> Les recommandation material design sont un point de départ incroyable, mais elles ne fournissent aucune indication sur tous les aspects ou besoins d'une application. 除遵循指南精心打造各类组件以外，我们还希望 Material-UI 秉着 Material Design 的设计精神，努力成为那个软件UI开发的‘百宝箱’。
> 
> *[从文档的[远景部分](/discover-more/vision/)摘录。]*

We want to see businesses succeeding in taking advantage of Material-UI to ship an awesome UI to their users while having it match their brand, so we have invested a lot in the customization capabilities of Material-UI.

MDC-Web 的只旨在在 Web 平台上实现 Material Design。 **不多也不少**。 他们并不会考虑到对组件进行更改 - 尤其是UX的变更 - 这会以牺牲核心 Material Design 系统为代价来增加额外的弹性，而这并不是这个项目的主要目标。 *[来源](https://github.com/mui-org/material-ui/issues/6799#issuecomment-299925174)*

### 测试

这两个项目都在测试中投入了巨大的精力。 在撰写本文时，两个项目的测试覆盖率均超过99％：

- Material-UI 在Chrome 49，Firefox 45，Safari 10和Edge 14上运行了1200多个单元测试。
- MDC-web 在所有主流浏览器上运行1200多个单元测试。

Still, there is one thing that sets Material-UI apart and it's key: We have [hundreds of visual regression tests](https://www.argos-ci.com/mui-org/material-ui) when MDC-web doesn't have any. 通过视觉回归测试，您无需进行任何权衡：

- 您不会浪费时间来担心新的组件贡献会带来意想不到的回归麻烦。 你花在一个单一贡献上的时间 **越少**, 你能接受的贡献 **越多** 。
- 你可以合并新的贡献，而不需要深究太多。 实际上，您不用等待用户报告回归。 这个特点非常 **有效** ，它还**提高了整个库的质量**。

## Materialize

![stars](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/materialize-css.svg)

### 浏览器支持

Materialize supports a wider range of browsers than Material-UI does, for instance, they support IE 10 while [we only support IE 11](/getting-started/supported-platforms/). 我们只支持IE 11的原因是想充分利用 flexbox 布局。 IE 10 一直 和flexbox 有很多兼容问题。

### 样式调整解决方案

Materialise 使用了 SCSS 样式架构，而 Material-UI 在2年前就摈弃了。 我们在以上[MDC-web部分](#styling-solution)解释过。

## React Toolbox

![stars](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/react-toolbox.svg)

### 样式调整解决方案

虽然 React Toolbox 和 Material-UI 都在侧重于 CSS-in-JS，但我们采取了不同折中方案。 Material-UI选择了**JSS**而 React Toolbox 开始用 **styled-components**重新编写他们的库。 我们在styled-components 和 JSS中选择了后者，原因如下：

- JSS 公开了一个低级别的 API： 
  - 我们可以根据我们的独特的需求进行建模，这样能够构建最高级的机制之一，而这机制拥有最先进的覆盖和主题选择特性。
  - 它没有像 `styled-components` 那样耦合到 React 中。 在覆盖任何第三方 JS 框架和库上它有极高的潜力。 这些相似之处可以用 SCSS 进行。 SCSS 与任何J avaScript 框架和库兼容，这样让它在社区中受到瞩目。
- 在所有优化开启的状态下， JSS插入组件的速度比styled-components[快两倍](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md)。

这并不是说 Material-UI 在用户如何编写样式表上一意孤行。 如果您愿意的话，您还是可以使用 styled-components。