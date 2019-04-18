# Packetgröße minimieren

<p class="description">Erfahren Sie mehr über die Tools, mit denen Sie die Paketgröße reduzieren können.</p>

## Packetgröße zählt

Die Paketgröße der Material-UI wird sehr ernst genommen. Bei jedem Commit werden für jedes Paket und für kritische Teile dieser Pakete Größen-Snapshots erstellt ([siehe letzten Snapshot](/size-snapshot)). Wir können, kombiniert mit [dangerJS](https://danger.systems/js/), [detaillierte Änderungen der Bündelgröße]((https://github.com/mui-org/material-ui/pull/14638#issuecomment-466658459)) bei jedem Pull Request prüfen.

## Wie kann ich die Packetgröße reduzieren?

Der Einfachheit halber stellt Material-UI seine vollständige API auf der oberste Ebene des `material-ui` Imports zur Verfügung. Dies ist in Ordnung, wenn Sie mit Tree Shaking arbeiten, wenn Tree Shaking jedoch in Ihrer Build-Kette nicht unterstützt oder konfiguriert ist, kann dadurch **die gesamte Bibliothek und ihre Abhängigkeiten** in Ihrem Packet eingeschlossen werden.

Sie haben mehrere Möglichkeiten, um dies zu vermeiden:

### Option 1

Sie können direkt aus `material-ui/` importieren, um zu vermeiden, ungenutzte Module zu laden. Zum Beispiel anstelle von:

```js
import { Button, TextField } from '@material-ui/core';
```

verwende:

```js
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
```

While importing directly in this manner doesn't use the exports in [`@material-ui/core/index.js`](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/index.js), this file can serve as a handy reference as to which modules are public. Anything not listed there should be considered **private**, and subject to change without notice. For example, the `Tabs` component is a public module while `TabIndicator` is private.

### Option 2

Another option is to keep using the shortened import like the following, but still have the size of the bundle optimized thanks to a **Babel plugin**:

```js
import { Button, TextField } from '@material-ui/core';
```

Pick one of the following plugins:

- [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) is quite customizable and with enough tweaks works with Material-UI.
- [babel-transform-imports](https://bitbucket.org/amctheatres/babel-transform-imports) has a different api than a `babel-plugin-import` but does same thing.
- [babel-plugin-lodash](https://github.com/lodash/babel-plugin-lodash) aims to work out of the box with all the `package.json`.

**Important note**: Both of these options *should be temporary* until you add tree shaking capabilities to your project.

## ECMAScript

The package published on npm is **transpiled**, with [Babel](https://github.com/babel/babel), to take into account the [supported platforms](/getting-started/supported-platforms/).

We also publish a second version of the components to target **evergreen browsers**. You can find this version under the [`/es` folder](https://unpkg.com/@material-ui/core@next/es/). All the non-official syntax is transpiled to the [ECMA-262 standard](https://www.ecma-international.org/publications/standards/Ecma-262.htm), nothing more. This can be used to make separate bundles targeting different browsers. Older browsers will require more JavaScript features to be transpiled, which increases the size of the bundle. No polyfills are included for ES2015 runtime features. IE11+ and evergreen browsers support all the necessary features. If you need support for other browsers, consider using [`@babel/polyfill`](https://www.npmjs.com/package/@babel/polyfill).

⚠️ In order to minimize duplication of code in users' bundles, we **strongly discourage** library authors from using the `/es` folder.