# Minimizando o tamanho do pacote

<p class="description">Saiba mais sobre as ferramentas que você pode aproveitar para reduzir o tamanho do pacote.</p>

## Tamanho do pacote importa

O tamanho do pacote de Material-UI é levado muito a sério. Tiramos snapshots de tamanho em cada commit, para cada pacote e partes críticas desses pacotes ([veja o último snapshot](/size-snapshot)). Combinado com [dangerJS](https://danger.systems/js/) podemos inspecionar [alterações detalhadas no tamanho do pacote](https://github.com/mui-org/material-ui/pull/14638#issuecomment-466658459) em cada solicitação de Pull Request.

## Como reduzir o tamanho do pacote?

Por conveniência, o Material-UI expõe sua API completa em nível superior na importação de `material-ui`. Se você estiver usando módulos ES 6 e um empacotador que suporte [tree-shaking](https://pt.stackoverflow.com/a/317844) ([`webpack` >= 2.x](https://webpack.js.org/guides/tree-shaking/), [`parcel` com a opção](https://en.parceljs.org/cli.html#enable-experimental-scope-hoisting/tree-shaking-support)), você pode seguramente usar importações nomeadas e ter apenas um conjunto mínimo de componentes do Material-UI em seu pacote:

```js
import { Button, TextField } from '@material-ui/core';
```

Esteja ciente que tree-shaking é uma otimização, que geralmente é aplicada somente aos pacotes de produção. Pacotes de desenvolvimento irá conter a biblioteca completa, que pode levar tempos de inicialização mais lentos. Isso é especialmente perceptível se você importar de `@material-ui/icons`. Os tempos de inicialização podem ser aproximadamente 6 vezes mais lentos do que sem importações nomeadas da API de nível superior.

Se isso é um problema para você, você tem várias opções:

### Option 1

You can use path imports to avoid pulling in unused modules. For instance, instead of:

```js
import { Button, TextField } from '@material-ui/core';
```

use:

```js
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
```

While importing directly in this manner doesn't use the exports in [`@material-ui/core/index.js`](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/index.js), this file can serve as a handy reference as to which modules are public.

Be aware that we only support first and second leve imports. Anything below is considered private and can cause module duplication in your bundle.

```js
// OK
import { Add as AddIcon } from '@material-ui/icons';
import { Tabs } from '@material-ui/core';
//                                 ^^^^ 1st or top-level

// OK
import AddIcon from '@material-ui/icons/Add';
import Tabs from '@material-ui/core/Tabs';
//                                  ^^^^ 2nd level

// NOT OK
import TabIndicator from '@material-ui/core/Tabs/TabIndicator';
//                                               ^^^^^^^^^^^^ 3rd level
```

### Option 2

**Important note**: This is only supported for `@material-ui/icons`. We recommend this approach if you often restart your development build.

Another option is to keep using named imports, but still have shorter start up times by using `babel` plugins.

Pick one of the following plugins:

- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) with the following configuration: 
        js
        [
        'babel-plugin-import',
        {
          libraryName: '@material-ui/icons',
          libraryDirectory: 'esm', // or '' if your bundler does not support ES modules
          camel2DashComponentName: false,
        },
        ];

- [babel-plugin-transform-imports](https://www.npmjs.com/package/babel-plugin-transform-import) has a different api than `babel-plugin-import` but does same thing. 
        js
        [
        'transform-imports',
        {
          '@material-ui/icons': {
            transform: '@material-ui/icons/esm/${member}',
            // for bundlers not supporting ES modules use:
            // transform: '@material-ui/icons/${member}',
          },
        },
        ];

## ECMAScript

The package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms/).

We also publish a second version of the components. You can find this version under the [`/es` folder](https://unpkg.com/@material-ui/core@next/es/). All the non-official syntax is transpiled to the [ECMA-262 standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), nothing more. This can be used to make separate bundles targeting different browsers. Older browsers will require more JavaScript features to be transpiled, which increases the size of the bundle. No polyfills are included for ES2015 runtime features. IE11+ and evergreen browsers support all the necessary features. If you need support for other browsers, consider using [`@babel/polyfill`](https://www.npmjs.com/package/@babel/polyfill).

⚠️ In order to minimize duplication of code in users' bundles, we **strongly discourage** library authors from using the `/es` folder.