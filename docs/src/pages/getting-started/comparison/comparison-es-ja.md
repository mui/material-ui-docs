# Comparación con otras librerías

<p class="description">Estas aqui porque quieres saber si Material-UI puede dar mejor soluciones a tus problemas especificos. Esto es lo que esperamos respoder.</p>

Esta es sin duda la página de la guía más difícil de escribir, pero creemos que es importante. Lo más probable es que haya tenido problemas que intentó resolver y haya utilizado otra librería para ello.

También nos gustaría **tú** ayuda para mantener este documento actualizado ¡porque el mundo de JavaScript se mueve rápido! Si usted nota una inexactitud o algo que no parece del todo correcto, por favor, avísenos a través [ de un issue ](https://github.com/mui-org/material-ui/issues/new?title=[docs]+Inaccuracy+in+comparison+guide).

Nosotros cubrimos las siguientes librerías:

- [Material-UI](#material-ui)
- [Material Design Lite (MDL)](#material-design-lite-mdl)
- [Material Components Web (MDC-web)](#material-components-web-mdc-web)
- [Materialize](#materialize)
- [React Toolbox](#react-toolbox)

## Material-UI

![estrellas](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/@material-ui/core.svg)

Nos esforzaremos mucho para evitar sesgos, aunque como equipo central, obviamente nos gusta mucho Material-UI ❤️. There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

Sin embargo, queremos ser justos y precisos, por lo que, cuando otras librerías ofrecen ventajas significativas, también intentamos enumerarlas.

## Material Design Lite (MDL)

![estrellas](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite, fue una implementación muy bien pensada de Material Design, y fue mantenida principalmente por desarrolladores de Google. Hoy, ** el proyecto ya no es mantenido. **. ¿Entonces qué pasó?

El equipo de componentes web material comenzó la construcción de MDC-web como "MDL v2", pero, después de colaborar en él durante unos meses, ambos equipos sintieron que lo mejor es llevar el proyecto bajo el ámbito de competencia del equipo de Material Design. Este cambio significó una reorientación de objetivos lejos de simplemente "agregar una apariencia de Material Design" a los sitios web, y hacia el objetivo de una implementación de Material Design canónica para toda la plataforma web.

## Material Components Web (MDC-web)

![estrellas](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/material-components-web.svg)

Estamos muy contentos de ver este proyecto apoyado por Google y su equipo de diseño. Es una señal clara de que la especificación de [ Material Design ](https://material.io/design/) vino para quedarse, ya que continúan invirtiendo en ella.

### Frameworks y librerías

Material-UI se centra exclusivamente en la librería React, aunque, dado que Preact soporta la misma API, esperamos darle soporte pronto también. Apoyar un framework nos permite hacer menos pero hacerlo mejor.

Esto viene en diferentes sabores:

- Al tener menos restricciones, podemos hacer concesiones específicas a nuestro framework objetivo. Tenemos menos casos de vanguardia que tener en cuenta.
- Podemos dedicar más tiempo a identificar el caso de uso de React.

MDC-web fue diseñado desde cero para ser totalmente compatible con los frameworks y bibliotecas JS de terceros. Ellos listan proyectos de integración con frameworks de terceros en github [README](https://github.com/material-components/material-components-web/#material-components-for-the-web)

### Solución de diseño

[Material-UI tiene un gran legado con estilos](https://github.com/oliviertassinari/a-journey-toward-better-style). Nuestra primera versión usaba LESS, pero viendo la limitación de esta solución, rápidamente empezamos a buscar alternativas. Nuestra primera migración fue hacia el uso de una solución de estilo en línea. Este fue prometedor:

- Nos permitió eliminar la dependencia de la herramienta LESS para nuestros usuarios. Quitamos una fricción importante en el proceso de instalación. (**más simple**)
- Pudimos cambiar el tema en tiempo de ejecución, anidar diferentes temas y tener estilos dinámicos. (**más potente**)
- Redujimos el tiempo de carga rompiendo el gran archivo monolítico CSS para permitir la división del código. (**más rápido**)
- La historia de reemplazado de estilo se hizo más intuitiva, ya que estábamos libres de problemas específicos de CSS. (**más simple**)

Finalmente, hemos alcanzado las limitaciones de los estilos en línea y nos hemos movido hacia una solución CSS-in-JS. This transition was made without losing the enhancements the first migration introduced **Creemos firmemente que CSS-in-JS es el futuro de la plataforma web **. Puedes [aprender más sobre nuestra nueva solución de estilo](/customization/css-in-js/) en la documentación.

MDC-web se basa en SCSS como Bootstrap v4. La arquitectura SCSS está bastante cerca de LESS - una tecnología que reemplazamos por sus limitaciones.

### Nuestra visión

Nuestra visión es proporcionar una implementación elegante de las pautas de Material Design **y más**.

> Las pautas de Material Design son un excelente punto de partida, pero no brindan dirección sobre todos los aspectos o necesidades de una aplicación. ガイドライン特有の実装に加えて、Material-UIは、すべてMaterial Designガイドラインの準拠した基で、アプリケーション開発に一般的に役立つものになることを望んでいます。
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

![estrellas](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/materialize-css.svg)

### Navegadores soportados

Materialize supports a wider range of browsers than Material-UI does, for instance, they support IE 10 while [we only support IE 11](/getting-started/supported-platforms/). IE 11のみをサポートすることで、flexboxのレイアウトを最大限に活用できます。 IE 10にはflexboxに関する多くの問題があります。

### Solución de diseño

MaterialiseはSCSSを使用しています。これは2年前からMaterial-UIのスタイルアーキテクチャを廃止したものです。 その理由を上記の[MDC-webセクションで説明しています](#styling-solution)。

## React Toolbox

![estrellas](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/react-toolbox.svg)

### Solución de diseño

React ToolboxとMaterial-UIの両方がCSS-in-JSに賭けていますが、私たちは異なるトレードオフを取りました。 React Toolboxが**styled-components**でライブラリを書き換え始めたのに対し、Material-UIは**JSS**を選択しました。 次の理由から、styled-components よりもJSSを選択しました。

- JSSは低レベルのAPIを公開します 
  - 私たちは独自のニーズに合わせて自由にそれをモデル化することができます
  - `styled-components`のようにReactと結合されていません。 サードパーティのJSフレームワークやライブラリに統合する可能性があります。 SCSSを使用して並列化することができます。 SCSSは、あらゆるJavaScriptフレームワークやライブラリと互換性があり、コミュニティの注目を集めるのに役立ちます
- JSSはstyled-componentsよりもコンポーネントのマウント速度が[2倍速く](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md)、すべての最適化がオンになっています。

これは、Material-UIがユーザが自分のスタイルをどのように書くかについて意見を述べたということではありません。 あなたがそうしたいのならstyled-componentsを使うことができます。