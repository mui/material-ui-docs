# About the lab

<p class="description">このパッケージは、まだコアに移動する準備ができていないインキュベーター・コンポーネントをホストします。</p>

Labパッケージとcoreパッケージの明確な違いはどのようにバージョン管理されるかです。 Coreパッケージは[slower-moving policy](https://material-ui.com/versions/#release-frequency). を基にバージョン管理されます。 対してLabパッケージは必要に応じて破壊的な変更が加えられる可能性があります。

開発者としてlabパッケージのコンポーネントをテスト/使用し、不具合や、使いにくさ、デザインなどについて報告する事ができます。そうする事によってLab パッケージのコンポーネントをより良くする事ができます。 みなさんが使ってくれれば使ってくれるほど、将来的に起きうる重大な問題を早期に発見・改善する事ができます。

Coreパッケージに移るためには以下の基準を考慮します。

* **使用されている**必要があります。 Material-UIチームはそれぞれのコンポーネントの使用量を、他の指標よりもGoogleアナリティクスの統計を重視して評価しています。 実験的なコンポーネントで使用率が低いものは、動作が不完全であるか需要がないかのどちらかを意味します。
* Coreコンポーネントと同**品質**である必要が あります。 Coreパッケージに含まれるほど完璧である必要はないが、開発者が頼れる信頼性はひつようです。 
    * 各コンポーネントが**型定義**を持つこと。 現在、Labパッケージへの採用基準に型はひつようないですが、Coreパッケージに移すためには必要です。
    * Requires good **test coverage**. Some of the lab components don't currently have comprehensive tests.
* Can it be used as **leverage** to incentivize users to upgrade to the latest major release? The less fragmented the community is, the better.
* It needs to have a low probability of a **breaking change** in the short/medium future. For instance, if it needs a new feature that will likely require a breaking change, it may be preferable to delay its promotion to the core.

## インストール

次を使用して、プロジェクトディレクトリにパッケージをインストールします。

```sh
// with npm
npm install @material-ui/lab

// with yarn
yarn add @material-ui/lab
```

このラボには、コアコンポーネントへのピア依存関係があります。 プロジェクトでまだMaterial-UIを使用していない場合は、次のコマンドでインストールできます。

```sh
// npmの場合
npm install @material-ui/core

// yarnの場合
yarn add @material-ui/core
```

## TypeScript

In order to benefit from the [CSS overrides](/customization/globals/#css) and [default prop customization](/customization/globals/#default-props) with the theme, TypeScript users need to import the following types. Internally, it uses [module augmentation](/guides/typescript/#customization-of-theme) to extend the default theme structure with the extension components available in the lab.

```tsx
import type '@material-ui/lab/themeAugmentation';

const theme = createMuiTheme({
  overrides: {
    MuiTimeline: {
      root: {
        backgroundColor: 'red',
      },
    },
  },
});
```