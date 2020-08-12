# バンドルサイズの最小化

<p class="description">バンドルサイズを削減できるツールについて学びましょう。</p>

## バンドルサイズは重要である

Material-UIはバンドルサイズについてとても気をつけている。 サイズのスナップショットを、全てのパッケージとその重要箇所において各コミットで取っている ([最新のスナップショット](/size-snapshot))。 [dangerJS](https://danger.systems/js/) と組み合わせることで、各プルリクエストにおいて、[バンドルサイズ変更の詳細](https://github.com/mui-org/material-ui/pull/14638#issuecomment-466658459)を調査することができます。

## いつ、どのように、tree-shakingをするか？

Material-UIのtree-shakingは、モダンフレームワークにおいて設定なしに動作します。 Material-UIはすべてのAPIを上位の`material-ui`インポートで公開しています。 ES6とtree0shakingに対応したバンドラー ([`webpack` >= 2.x](https://webpack.js.org/guides/tree-shaking/), [`parcel` with a flag](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)) を使用している場合、名前を指定してインポートをしても自動的にバンドルサイズの最適化の恩恵を受けることができます。

```js
import { Button, TextField } from '@material-ui/core';
```

⚠️ 以下の指示は開発時の初期化時間を改善したい場合、または、tree-shakingに対応していない古いバンドラーをしようしている場合にのみ必要です。

## 開発環境

開発時のバンドルはライブラリの全てを含むので、 **遅い起動時間**の原因となります。 これは、特に`@material-ui/icons`からインポートする場合に顕著です。 起動時間は、上位からの名前指定インポートがない場合に比べて、約6倍遅い場合もあります。

この課題を持っているのであれば、様々な対応を取ることができます。

### 選択肢 1

パス指定インポートを利用して、使用していないモジュールのインポートを避けることができます。 例えば：

```js
// 🚀 早い!
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
```

上位インポート(Babelを使用していない) の代わりに

```js
import { Button, TextField } from '@material-ui/core';
```

設定を必要としないので、この選択肢は全てのデモで利用しています。 コンポーネントを利用するパッケージ作成者には推奨されています。 最高のDXとUXをもたらすアプローチは[選択肢 2](#option-2)をみましょう。

While importing directly in this manner doesn't use the exports in [`@material-ui/core/index.js`](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/index.js), this file can serve as a handy reference as to which modules are public.

Be aware that we only support first and second level imports. Anything deeper is considered private and can cause issues, such as module duplication in your bundle.

```js
// ✅ OK
import { Add as AddIcon } from '@material-ui/icons';
import { Tabs } from '@material-ui/core';
//                                 ^^^^ 1st or top-level

// ✅ OK
import AddIcon from '@material-ui/icons/Add';
import Tabs from '@material-ui/core/Tabs';
//                                  ^^^^ 2nd level

// ❌ NOT OK
import TabIndicator from '@material-ui/core/Tabs/TabIndicator';
//                                               ^^^^^^^^^^^^ 3rd level
```

If you're using `eslint` you can catch problematic imports with the [`no-restricted-imports` rule](https://eslint.org/docs/rules/no-restricted-imports). The following `.eslintrc` configuration will highlight problematic imports from `@material-ui` packages:

```json
{
  "rules": {
    "no-restricted-imports": [
      "error",
      {
        "patterns": ["@material-ui/*/*/*", "!@material-ui/core/test-utils/*"]
      }
    ]
  }
}
```

### Option 2

This option provides the best User Experience and Developer Experience:

- UX: The Babel plugin enables top level tree-shaking even if your bundler doesn't support it.
- DX: The Babel plugin makes startup time in dev mode as fast as Option 1.
- DX: This syntax reduces the duplication of code, requiring only a single import for multiple modules. Overall, the code is easier to read, and you are less likely to make a mistake when importing a new module.
```js
import { Button, TextField } from '@material-ui/core';
```

However, you need to apply the two following steps correctly.

#### 1. Configure Babel

Pick one of the following plugins:

- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) with the following configuration:

  `yarn add -D babel-plugin-import`

  Create a `.babelrc.js` file in the root directory of your project:

  ```js
  const plugins = [
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/core',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'core'
    ],
    [
      'babel-plugin-import',
      {
        'libraryName': '@material-ui/icons',
        // Use "'libraryDirectory': ''," if your bundler does not support ES modules
        'libraryDirectory': 'esm',
        'camel2DashComponentName': false
      },
      'icons'
    ]
  ];

  module.exports = {plugins};
  ```

- [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-imports) with the following configuration:

  `yarn add -D babel-plugin-transform-imports`

  Create a `.babelrc.js` file in the root directory of your project:

  ```js
  const plugins = [
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
          'transform': '@material-ui/core/esm/${member}',
          'preventFullImport': true
        },
        '@material-ui/icons': {
          // Use "transform: '@material-ui/icons/${member}'," if your bundler does not support ES modules
          'transform': '@material-ui/icons/esm/${member}',
          'preventFullImport': true
        }
      }
    ]
  ];

  module.exports = {plugins};
  ```

If you are using Create React App, you will need to use a couple of projects that let you use `.babelrc` configuration, without ejecting.

  `yarn add -D react-app-rewired customize-cra`

  Create a `config-overrides.js` file in the root directory:

  ```js
  /* config-overrides.js */
  const { useBabelRc, override } = require('customize-cra')

  module.exports = override(
    useBabelRc()
  );
  ```

  If you wish, `babel-plugin-import` can be configured through `config-overrides.js` instead of `.babelrc` by using this [configuration](https://github.com/arackaf/customize-cra/blob/master/api.md#fixbabelimportslibraryname-options).

  Modify your `package.json` start command:

```diff
  "scripts": {
-  "start": "react-scripts start"
+  "start": "react-app-rewired start"
  }
```

  Note: You may run into errors like these:

  > Module not found: Can't resolve '@material-ui/core/makeStyles' in '/your/project'

  This is because `@material-ui/styles` is re-exported through `core`, but the full import is not allowed.

  You have an import like this in your code:

  ```js
  import { makeStyles, createStyles } from '@material-ui/core';
  ```

  The fix is simple, define the import separately:

  ```js
  import { makeStyles, createStyles } from '@material-ui/core/styles';
  ```

  Enjoy significantly faster start times.

#### 2. Convert all your imports

Finally, you can convert your existing codebase to this option with this [top-level-imports](https://github.com/mui-org/material-ui/blob/master/packages/material-ui-codemod/README.md#top-level-imports) codemod. It will perform the following diffs:

```diff
-import Button from '@material-ui/core/Button';
-import TextField from '@material-ui/core/TextField';
+import { Button, TextField } from '@material-ui/core';
```

## ECMAScript

The package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms/).

A second version of the components is also published, which you can find under the [`/es` folder](https://unpkg.com/@material-ui/core/es/). All the non-official syntax is transpiled to the [ECMA-262 standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), nothing more. This can be used to make separate bundles targeting different browsers. Older browsers will require more JavaScript features to be transpiled, which increases the size of the bundle. No polyfills are included for ES2015 runtime features. IE11+ and evergreen browsers support all the necessary features. If you need support for other browsers, consider using [`@babel/polyfill`](https://www.npmjs.com/package/@babel/polyfill).

⚠️ In order to minimize duplication of code in users' bundles, library authors are **strongly discouraged** from using the `/es` folder.
