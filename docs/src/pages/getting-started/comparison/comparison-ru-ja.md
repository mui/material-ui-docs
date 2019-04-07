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

![Stars](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![npmダウンロード](https://img.shields.io/npm/dm/@material-ui/core.svg)

Мы очень постараемся избежать предвзятости, хотя нам, как основной команде, очень нравится Material-UI ❤️. There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

Мы хотим быть честными и точными, поэтому, когда другие библиотеки предлагают значительные преимущества, мы также стараемся перечислить их.

## Material Design Lite (MDL)

![Stars](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![npmダウンロード](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite, будучи очень хорошо продуманной реализацией Material Design, в основном поддерживался разработчиками Google. Сегодня **проект больше не поддерживается**. Так что же случилось?

Команда разработчиков Material Components начали строить MDC-сеть «MDL v2», но после совместной работы над ним в течение нескольких месяцев, обе команды решили, что будет лучше, если проект будет полностью под руководством команды Material Design. Этот сдвиг означал переориентацию целей с простого «добавления стилей Material Design» на веб-сайты в сторону канонической реализации Material Design для всей веб-платформы в целом.

## Material Components Web (MDC-web)

![Stars](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![npmダウンロード](https://img.shields.io/npm/dm/material-components-web.svg)

Мы очень рады, что этот проект поддерживается Google и его командой дизайнеров. Это четко дает понять, что [спецификация Material Design](https://material.io/design/) будет существовать, пока Google продолжает в нее инвестировать.

### Фреймворки и библиотеки

Material-UI ориентирован исключительно на библиотеку React, хотя, учитывая, что Preact поддерживает тот же API, мы надеемся, что скоро тоже будем его поддерживать. Поддержка одного фреймворка позволяет нам делать меньше, но делать это лучше.

Это происходит в различных вариантах:

- Имея меньше ограничений, мы можем идти на компромиссы, характерные для нашего целевого фреймворка. У нас меньше граничных случаев, которые нужно принимать во внимание.
- Мы можем потратить больше времени на разработку и оттачивание использования React.

MDC-webは、サードパーティのJSフレームワークおよびライブラリと完全に互換性があるようにゼロから設計されました。 彼らは、githubの[README](https://github.com/material-components/material-components-web/#material-components-for-the-web)にサードパーティーのフレームワーク統合プロジェクトをリストしています。

### Стилевое решение

[Material-UI несет тяжелое наследие со стилями](https://github.com/oliviertassinari/a-journey-toward-better-style). Our very first release was using LESS, but seeing the limitation of this solution, we quickly started looking into alternatives. 最初の移行は、inline-styleで解決することでした。 これは有望でした：

- それは私達が私達のユーザーのためのLESSツールチェーンへの依存を取り除くことを可能にしました。 私達は取付けプロセスの1つの重要な摩擦を取り除きました。 （**シンプルに** ）
- 実行時にテーマを変更したり、さまざまなテーマをネストしたり、動的なスタイルを設定したりすることができました。 （**よりパワフルに** ）
- コード分割を可能にするために、大きなモノリシックCSSファイルを分割することでロード時間を短縮しました。 （**より速く** ）
- CSSの特定性の問題から解放されたので、スタイルのオーバーライドの方式はより直感的になりました。 （**シンプルに** ）

Eventually, we reached the limitations of inline-styles and moved toward a CSS-in-JS solution. This transition was made without losing the enhancements the first migration introduced **We strongly think that CSS-in-JS is the future of the web platform**. ドキュメントで私たちの[新しいスタイリングソリューションについてもっと学ぶことができます](/customization/css-in-js/)。

MDC-webはBootstrap v4としてSCSSに依存しています。 The SCSS architecture is pretty close to LESS - a technology we replaced for its limitations.

### Видение

Наше видение заключается в том, чтобы обеспечить элегантную реализацию рекомендаций по Material Design **и более**.

> Material Designのガイドラインは信じられない出発点ですが、アプリケーションのすべての側面やニーズに関するガイダンスを提供するわけではありません。 В дополнение к реализации, ориентированной на конкретные рекомендации, мы хотим, чтобы Material-UI стал тем, что обычно полезно для разработки приложений и все это в духе рекомендаций Material Design.
> 
> *[Выдержка из раздела [видение](/discover-more/vision/) документации.]*

We want to see businesses succeeding in taking advantage of Material-UI to ship an awesome UI to their users while having it match their brand, so we have invested a lot in the customization capabilities of Material-UI.

Единственная цель MDC-Web - реализация Material Design для веб-платформы. **それ以上、それ以下でもありません** 。 彼らは、マテリアルデザインのコアな部分を壊すことを犠牲にして追加の柔軟性を促進するであろうコンポーネントへの変更、特にUXの変更を行うことは考えていません、それはプロジェクトの目標ではないからです。 *[ソース](https://github.com/mui-org/material-ui/issues/6799#issuecomment-299925174)*

### Тесты

Оба проекта покрываются множеством тестов. На момент написания статьи, оба проекта покрыты тестами более чем на 99%:

- Material-UI содержит 1200+ юнит тестов запускаемых в Chrome 49, Firefox 45, Safari 10 и Edge 14.
- MDC-web содержит 1200+ юнит тестов запускаемых во всех основных браузерах.

Still, there is one thing that sets Material-UI apart and it's key: We have [hundreds of visual regression tests](https://www.argos-ci.com/mui-org/material-ui) when MDC-web doesn't have any. 視覚的回帰テストでは、トレードオフをする必要はありません。

- 全てのコントリビューションが予想外のデグレを招く時間を短縮することができます。 1回のコントリビューションに費やす時間が**少なければ少ない**ほど、受け入れることができるコントリビューションは**より多く**なります。
- あなたは多くの労力をかけることなく新しいコントリビューションを享受することができます。 事実上、あなたはユーザーがデグレを報告するのを待つ必要がありません。 それは**効率的**で、**ライブラリの品質を向上させます** 。

## Materialize

![Stars](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![npmダウンロード](https://img.shields.io/npm/dm/materialize-css.svg)

### Поддержка браузеров

Materialize поддерживает более широкий диапазон браузеров, чем Material-UI, например, они поддерживают IE 10, а [мы поддерживаем только IE 11](/getting-started/supported-platforms/). Только поддержка IE 11 позволяет нам в полной мере использовать макет flexbox. IE 10 имеет много проблем с flexbox.

### Стилевое решение

Materialize использует SCSS, стилевую архитектуру Material-UI, от которой отказались 2 года назад. Мы объясняем почему в [секции MDC-web](#styling-solution) выше.

## React Toolbox

![Stars](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![npmダウンロード](https://img.shields.io/npm/dm/react-toolbox.svg)

### Стилевое решение

В то время как и React Toolbox, и Material-UI делают ставки на CSS-in-JS, мы приняли другой компромисс. Material-UI выбрал **JSS** в то время как React Toolbox начал переписывать свою библиотеку с помощью **styled-components**. Мы выбрали JSS вместо styled-components по следующей причине:

- JSS предоставляет API низкого уровня: 
  - Мы можем моделировать его в соответствии с нашими уникальными потребностями, что позволило нам создать один из самых совершенных механизмов переопределения и создания тем.
  - Он не связан с React, как `styled-components`. サードパーティのJSフレームワークやライブラリに統合する可能性があります。 Параллели могут быть сделаны с помощью SCSS. SCSS совместим с любыми JavaScript-фреймворками и библиотеками, что помогает ему развиваться в сообществе.
- JSS [в два раза быстрее](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md) чем подключение компонентов через styled-components, при всей включенной оптимизации.

Это не означает, что Material-UI думает о том, как пользователи пишут свои стили. Вы можете использовать styled-components, если хотите.