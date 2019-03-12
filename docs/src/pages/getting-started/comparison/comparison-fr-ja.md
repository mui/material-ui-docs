# Comparaison avec d'autres bibliothèques

<p class="description">Si vous êtes ici pour savoir si Material-UI peut aider à mieux résoudre certains de vos problème. Vous êtes sur la bonne page.</p>

C’est certainement l’une des pages les plus difficiles à écrire du guide, mais nous pensons que c’est important. Les chances sont que vous avez eu des problèmes que vous avez essayé de résoudre et vous avez utilisé une autre bibliothèque pour les résoudre.

JavaScriptの世界は急速に変わっていきます、このドキュメントを最新の状態に保てるようにご協力をお願いします。 If you notice an inaccuracy or something that doesn’t seem quite right, please let us know by [opening an issue](https://github.com/mui-org/material-ui/issues/new?title=[docs]+Inaccuracy+in+comparison+guide).

以下のライブラリについて記述しています。

- [Material-UI](#material-ui)
- [Material Design Lite (MDL)](#material-design-lite-mdl)
- [Material Components Web (MDC-web)](#material-components-web-mdc-web)
- [Materialize](#materialize)
- [React Toolbox](#react-toolbox)

## Material-UI

![stars](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)

バイアスがかかることを避けたいと思いますが、コアチームとしては明らかにMaterial-UIがとても好きです。❤️ There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

しかし、私たちは公平で正確であることを望んでいるので、他のライブラリが大きな利点として上げていることについて、記述しようとします。

## Material Design Lite (MDL)

![stars](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite, while a very well-thought-out Material Design implementation, was primarily maintained by Developer Relations at Google. 今日、**このプロジェクトはもはやメンテナンスされていません**。 何が起こったのでしょうか。

The Material Components Web team started out building MDC-web as "MDL v2", but, after collaborating on it for a few months, both teams felt it best to bring the project under the Material Design team's purview. This shift meant a re-orientation of goals away from simply "adding a Material Design look and feel" to websites, and towards the goal of a canonical Material Design implementation for the entire web platform.

## Material Components Web (MDC-web)

![stars](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-components-web.svg)

このプロジェクトがGoogleとそのデザインチームにサポートされていることを嬉しく思います。 It sends a clear signal that the [Material Design specification](https://material.io/design/) is here to stay, as they continue to invest in it.

### フレームワークとライブラリ

Material-UI focuses exclusively on the React library, although, given that Preact supports the very same API, we hope to soon support it too. 1つのフレームワークにサポートを注力することは作業量を減らすことができ、効果的です。

これにはさまざまなメリットがあります

- 制約が少ないので、対象のフレームワークに固有のトレードオフを作成できます。 考慮する局所的な問題は少なくなります。
- Reactのユースケースの課題解決にもっと時間をかけることができます。

MDC-webは、サードパーティのJSフレームワークおよびライブラリと完全に互換性があるようにゼロから設計されました。 彼らは、githubの[README](https://github.com/material-components/material-components-web/#material-components-for-the-web)にサードパーティーのフレームワーク統合プロジェクトをリストしています。

### スタイルの解決

[ Material-UIはスタイルを重視してきました](https://github.com/oliviertassinari/a-journey-toward-better-style) 。 Our very first release was using LESS, but seeing the limitation of this solution, we quickly started looking into alternatives. 最初の移行は、inline-styleで解決することでした。 これは有望でした：

- それは私達が私達のユーザーのためのLESSツールチェーンへの依存を取り除くことを可能にしました。 私達は取付けプロセスの1つの重要な摩擦を取り除きました。 （**シンプルに** ）
- 実行時にテーマを変更したり、さまざまなテーマをネストしたり、動的なスタイルを設定したりすることができました。 （**よりパワフルに** ）
- コード分割を可能にするために、大きなモノリシックCSSファイルを分割することでロード時間を短縮しました。 （**より速く** ）
- CSSの特定性の問題から解放されたので、スタイルのオーバーライドの方式はより直感的になりました。 （**シンプルに** ）

Eventually, we reached the limitations of inline-styles and moved toward a CSS-in-JS solution. This transition was made without losing the enhancements the first migration introduced **We strongly think that CSS-in-JS is the future of the web platform**. ドキュメントで私たちの[新しいスタイリングソリューションについてもっと学ぶことができます](/customization/css-in-js/)。

MDC-webはBootstrap v4としてSCSSに依存しています。 The SCSS architecture is pretty close to LESS - a technology we replaced for its limitations.

### ビジョン

私たちのビジョンは、** Material Designのガイドライン**をエレガントに実装することです。

> Les recommandation material design sont un point de départ incroyable, mais elles ne fournissent aucune indication sur tous les aspects ou besoins d'une application. ガイドライン特有の実装に加えて、Material-UIは、すべてMaterial Designガイドラインの準拠した基で、アプリケーション開発に一般的に役立つものになることを望んでいます。
> 
> *[ドキュメントの[ビジョンセクション](/discover-more/vision/)から抜粋したもの]*

We want to see businesses succeeding in taking advantage of Material-UI to ship an awesome UI to their users while having it match their brand, so we have invested a lot in the customization capabilities of Material-UI.

MDC-Webの唯一の目的は、Webプラットフォーム用のMaterial Design実装です。 **それ以上、それ以下でもありません** 。 彼らは、マテリアルデザインのコアな部分を壊すことを犠牲にして追加の柔軟性を促進するであろうコンポーネントへの変更、特にUXの変更を行うことは考えていません、それはプロジェクトの目標ではないからです。 *[ソース](https://github.com/mui-org/material-ui/issues/6799#issuecomment-299925174)*

### テスト

どちらのプロジェクトもテストに多額の投資をしています。 これを書いている時点では、どちらのプロジェクトも99％以上のテストカバレッジを持っています。

- Material-UIは、Chrome 49、Firefox 45、Safari 10、およびEdge 14で1200以上の単体テストを実行しています。
- MDC-webは、すべての主要ブラウザで1200以上のユニットテストを実行しています。

Still, there is one thing that sets Material-UI apart and it's key: We have [hundreds of visual regression tests](https://www.argos-ci.com/mui-org/material-ui) when MDC-web doesn't have any. 視覚的回帰テストでは、トレードオフをする必要はありません。

- 全てのコントリビューションが予想外のデグレを招く時間を短縮することができます。 1回のコントリビューションに費やす時間が**少なければ少ない**ほど、受け入れることができるコントリビューションは**より多く**なります。
- あなたは多くの労力をかけることなく新しいコントリビューションを享受することができます。 事実上、あなたはユーザーがデグレを報告するのを待つ必要がありません。 それは**効率的**で、**ライブラリの品質を向上させます** 。

## Materialize

![stars](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/materialize-css.svg)

### ブラウザサポート

Materialize supports a wider range of browsers than Material-UI does, for instance, they support IE 10 while [we only support IE 11](/getting-started/supported-platforms/). IE 11のみをサポートすることで、flexboxのレイアウトを最大限に活用できます。 IE 10にはflexboxに関する多くの問題があります。

### スタイルの解決

MaterialiseはSCSSを使用しています。これは2年前からMaterial-UIのスタイルアーキテクチャを廃止したものです。 その理由を上記の[MDC-webセクションで説明しています](#styling-solution)。

## React Toolbox

![stars](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/react-toolbox.svg)

### スタイルの解決

React ToolboxとMaterial-UIの両方がCSS-in-JSに賭けていますが、私たちは異なるトレードオフを取りました。 React Toolboxが**styled-components**でライブラリを書き換え始めたのに対し、Material-UIは**JSS**を選択しました。 次の理由から、styled-components よりもJSSを選択しました。

- JSSは低レベルのAPIを公開します 
  - 私たちは独自のニーズに合わせて自由にそれをモデル化することができます
  - `styled-components`のようにReactと結合されていません。 サードパーティのJSフレームワークやライブラリに統合する可能性があります。 SCSSを使用して並列化することができます。 SCSSは、あらゆるJavaScriptフレームワークやライブラリと互換性があり、コミュニティの注目を集めるのに役立ちます
- JSSはstyled-componentsよりもコンポーネントのマウント速度が[2倍速く](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md)、すべての最適化がオンになっています。

これは、Material-UIがユーザが自分のスタイルをどのように書くかについて意見を述べたということではありません。 あなたがそうしたいのならstyled-componentsを使うことができます。