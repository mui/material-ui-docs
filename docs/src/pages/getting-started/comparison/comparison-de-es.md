# Vergleich mit anderen Bibliotheken

<p class="description">Du bist hier, weil du wissen willst, ob Material-UI deine spezifischen Probleme besser lösen kann. Genau das hoffen wir dir hier beantworten zu können.</p>

Dies ist definitiv eine der am schwierigsten zu verfassenden Seiten in diesem Guide, aber wir sind der Meinung, dass sie wichtig ist. Wahrscheinlich standest du bereits einmal vor Problemen, die du versucht hast, mit einer anderen Bibliothek zu lösen.

Wir würden uns sehr über deine Hilfe freuen, dieses Dokument auf dem Laufenden zu halten, denn die JavaScript-Welt ist schnelllebig! Wenn du eine Ungenauigkeit oder etwas anderes, das dir nicht richtig erscheint, bemerkst, dann lass' es uns bitte wissen, indem du [ein Issue öffnest](https://github.com/mui-org/material-ui/issues/new?title=[docs]+Inaccuracy+in+comparison+guide).

Wir vergleichen die folgenden Bibliotheken:

- [Material-UI](#material-ui)
- [Material Design Lite (MDL)](#material-design-lite-mdl)
- [Material Components Web (MDC-web)](#material-components-web-mdc-web)
- [Materialize](#materialize)
- [React Toolbox](#react-toolbox)

## Material-UI

![estrellas](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/@material-ui/core.svg)

Wir werden unser bestes tun, Voreingenommenheit zu vermeiden, auch wenn wir als Core Team Material-UI natürlich sehr mögen ❤️. There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

Wir wollen trotzdem so fair und genau sein. Wo also andere Bibliotheken signifikante Vorteile bieten, werden wir versuchen, diese ebenfalls aufzulisten.

## Material Design Lite (MDL)

![estrellas](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite wurde, obwohl eine sehr gut durchdachte Material Design Implementierung, hauptsächlich durch Developer Relations bei Google gepflegt. Aktuell **wird das Projekt nicht länger gepflegt**. Was ist also passiert?

Das Material Components Web Team begann mit dem entwickeln von MDC-web als "MDL v2", aber nachdem ein paar Monate daran entwickelt wurde, hatten beide Teams das Gefühl, es wäre das Beste, beide Projekte in den Zuständigkeitsbereich des Material Design Teams zu geben. Diese Entscheidung bedeutete eine Neuausrichtung der Ziele, weg von dem einfachen "hinzufügen eines Material Design Looks" zu Webseiten, hin zu dem Ziel einer kanonischen Material Design Implementierung für die gesamte Web-Plattform.

## Material Components Web (MDC-web)

![estrellas](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/material-components-web.svg)

Estamos muy contentos de ver este proyecto apoyado por Google y su equipo de diseño. It sends a clear signal that the [Material Design specification](https://material.io/design/) is here to stay, as they continue to invest in it.

### Frameworks y librerías

Material-UI focuses exclusively on the React library, although, given that Preact supports the very same API, we hope to soon support it too. Apoyar un framework nos permite hacer menos pero hacerlo mejor.

Esto viene en diferentes sabores:

- Al tener menos restricciones, podemos hacer concesiones específicas a nuestro framework objetivo. Tenemos menos casos de vanguardia que tener en cuenta.
- Podemos dedicar más tiempo a identificar el caso de uso de React.

MDC-web fue diseñado desde cero para ser totalmente compatible con los frameworks y bibliotecas JS de terceros. Ellos listan proyectos de integración con frameworks de terceros en github [README](https://github.com/material-components/material-components-web/#material-components-for-the-web)

### Solución de diseño

[Material-UI tiene un gran legado con estilos](https://github.com/oliviertassinari/a-journey-toward-better-style). Our very first release was using LESS, but seeing the limitation of this solution, we quickly started looking into alternatives. Nuestra primera migración fue hacia el uso de una solución de estilo en línea. Este fue prometedor:

- Nos permitió eliminar la dependencia de la herramienta LESS para nuestros usuarios. Quitamos una fricción importante en el proceso de instalación. (**más simple**)
- Pudimos cambiar el tema en tiempo de ejecución, anidar diferentes temas y tener estilos dinámicos. (**más potente**)
- Redujimos el tiempo de carga rompiendo el gran archivo monolítico CSS para permitir la división del código. (**más rápido**)
- La historia de reemplazado de estilo se hizo más intuitiva, ya que estábamos libres de problemas específicos de CSS. (**más simple**)

Eventually, we reached the limitations of inline-styles and moved toward a CSS-in-JS solution. This transition was made without losing the enhancements the first migration introduced **We strongly think that CSS-in-JS is the future of the web platform**. Puedes [aprender más sobre nuestra nueva solución de estilo](/customization/css-in-js/) en la documentación.

MDC-web se basa en SCSS como Bootstrap v4. The SCSS architecture is pretty close to LESS - a technology we replaced for its limitations.

### Nuestra visión

Nuestra visión es proporcionar una implementación elegante de las pautas de Material Design **y más**.

> Las pautas de Material Design son un excelente punto de partida, pero no brindan dirección sobre todos los aspectos o necesidades de una aplicación. In addition to the guideline-specific implementation, we want Material-UI to become whatever is generally useful for application development, all in the spirit of the Material Design guidelines.
> 
> *[An extract taken from the [vision section](/discover-more/vision/) of the documentation.]*

We want to see businesses succeeding in taking advantage of Material-UI to ship an awesome UI to their users while having it match their brand, so we have invested a lot in the customization capabilities of Material-UI.

The only goal of MDC-Web is to be a Material Design implementation for the web platform. **Nothing more, nothing less**. They will not consider making changes to the components - especially UX changes - that would facilitate additional flexibility at the cost of breaking with the core Material Design system, as that is a non-goal of the project. *[source](https://github.com/mui-org/material-ui/issues/6799#issuecomment-299925174)*

### Tests

Both projects invest a lot in tests. At the time of writing, both projects have over 99% test coverage:

- Material-UI has 1200+ unit tests running on Chrome 49, Firefox 45, Safari 10 and Edge 14.
- MDC-web has 1200+ unit tests running on all the major browsers.

Still, there is one thing that sets Material-UI apart and it's key: We have [hundreds of visual regression tests](https://www.argos-ci.com/mui-org/material-ui) when MDC-web doesn't have any. With visual regression tests, you don't have to make any trade-off:

- You can spend less time making sure every contribution doesn't introduce unexpected regressions. The **less** time you spend on a single contribution, the **more** contributions you can accept.
- You can merge new contributions without digging much. Effectively, you are not waiting for users to report regressions. It's **efficient** and **improves the library quality**.

## Materialize

![estrellas](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/materialize-css.svg)

### Navegadores soportados

Materialize supports a wider range of browsers than Material-UI does, for instance, they support IE 10 while [we only support IE 11](/getting-started/supported-platforms/). Only supporting IE 11 allows us to take full advantage of the flexbox layout. IE 10 has many issues with flexbox.

### Solución de diseño

Materialize uses SCSS, a styling architecture Material-UI moved away from 2 years ago. We explain why in the [MDC-web section](#styling-solution) above.

## React Toolbox

![estrellas](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![descargas npm](https://img.shields.io/npm/dm/react-toolbox.svg)

### Solución de diseño

While both React Toolbox and Material-UI are betting on CSS-in-JS, we have taken a different trade-off. Material-UI has chosen **JSS** while React Toolbox started rewriting their library with **styled-components**. We picked JSS over styled-components for the following reason:

- JSS exposes a low-level API: 
  - We are free to model it to our unique needs, which has allowed us to build one of the most advanced override and theming mechanism.
  - It's not coupled to React like `styled-components` is. It has the potential to reach any 3rd party JS frameworks and libraries. The parallels can be made with SCSS. SCSS is compatible with any JavaScript frameworks and libraries, helping it to get traction in the community.
- JSS is [two times faster](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md) to mount components than styled-components is, with all the optimization turned on.

This is not to say that Material-UI is opinionated about how users write their styles. You can use styled-components if you would like to do so.