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

> Las pautas de Material Design son un excelente punto de partida, pero no brindan dirección sobre todos los aspectos o necesidades de una aplicación. 除遵循指南精心打造各类组件以外，我们还希望 Material-UI 秉着 Material Design 的设计精神，努力成为那个软件UI开发的‘百宝箱’。
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

![estrellas](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/materialize-css.svg)

### Navegadores soportados

Materialize supports a wider range of browsers than Material-UI does, for instance, they support IE 10 while [we only support IE 11](/getting-started/supported-platforms/). 我们只支持IE 11的原因是想充分利用 flexbox 布局。 IE 10 一直 和flexbox 有很多兼容问题。

### Solución de diseño

Materialise 使用了 SCSS 样式架构，而 Material-UI 在2年前就摈弃了。 我们在以上[MDC-web部分](#styling-solution)解释过。

## React Toolbox

![estrellas](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/react-toolbox.svg)

### Solución de diseño

虽然 React Toolbox 和 Material-UI 都在侧重于 CSS-in-JS，但我们采取了不同折中方案。 Material-UI选择了**JSS**而 React Toolbox 开始用 **styled-components**重新编写他们的库。 我们在styled-components 和 JSS中选择了后者，原因如下：

- JSS 公开了一个低级别的 API： 
  - 我们可以根据我们的独特的需求进行建模，这样能够构建最高级的机制之一，而这机制拥有最先进的覆盖和主题选择特性。
  - 它没有像 `styled-components` 那样耦合到 React 中。 在覆盖任何第三方 JS 框架和库上它有极高的潜力。 这些相似之处可以用 SCSS 进行。 SCSS 与任何J avaScript 框架和库兼容，这样让它在社区中受到瞩目。
- 在所有优化开启的状态下， JSS插入组件的速度比styled-components[快两倍](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md)。

这并不是说 Material-UI 在用户如何编写样式表上一意孤行。 如果您愿意的话，您还是可以使用 styled-components。