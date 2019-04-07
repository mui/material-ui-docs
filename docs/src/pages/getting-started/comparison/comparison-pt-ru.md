# Comparação com outras bibliotecas

<p class="description">Você está aqui porque quer saber se o Material-UI pode resolver seus problemas específicos da melhor forma. Isso é o que esperamos responder para você aqui.</p>

Esta é definitivamente uma das páginas mais difíceis no guia para se escrever, mas sentimos que é importante. É provável que você já teve problemas que tentou resolver e usou outra biblioteca para resolvê-los.

Gostaríamos da sua ajuda para manter este documento atualizado porque o mundo do JavaScript se move rapidamente! Se você notar uma imprecisão ou algo que não parece certo, por favor nos avise [abrindo uma questão](https://github.com/mui-org/material-ui/issues/new?title=[docs]+Inaccuracy+in+comparison+guide).

Nós cobrimos as seguintes bibliotecas:

- [Material-UI](#material-ui)
- [Material Design Lite (MDL)](#material-design-lite-mdl)
- [Material Components Web (MDC-web)](#material-components-web-mdc-web)
- [Materialize](#materialize)
- [React Toolbox](#react-toolbox)

## Material-UI

![estrelas](https://img.shields.io/github/stars/mui-org/material-ui.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/@material-ui/core.svg)

Vamos nos esforçar muito para evitar preconceitos, embora como equipe principal, nós obviamente gostamos muito de Material-UI ❤️. There are some problems we think it solves better than anything else out there; if we didn’t believe that, we wouldn’t be working on it

Nós queremos ser justos e precisos, então onde outras bibliotecas oferecem vantagens significativas, tentamos listá-las também.

## Material Design Lite (MDL)

![estrelas](https://img.shields.io/github/stars/google/material-design-lite.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-design-lite.svg)

Material Design Lite, sendo uma implementação do Material Design muito bem pensada, foi mantida principalmente pelos Desenvolvedores de Relações do Google. Hoje, **o projeto não é mais mantido**. Então, o que aconteceu?

A equipe de Material Components Web começou a criar o MDC-web como "MDL v2", porém, após colaborarem nele por alguns meses, ambos os times sentiram que era melhor colocar o projeto sob supervisão da equipe de Material Design. Essa mudança significou uma re-orientação das metas longe de simplesmente "acrescentando uma aparência e comportamento Material Design" para websites, e com o objetivo de uma implementação canônica Material Design para toda a plataforma web.

## Material Components Web (MDC-web)

![estrelas](https://img.shields.io/github/stars/material-components/material-components-web.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/material-components-web.svg)

Nós estamos muito felizes em ver este projeto recebendo apoio do Google, e sua equipe de design. Isso é um sinal claro de que a [Especificação Material Design](https://material.io/design/) veio para ficar, porque eles continuam a investir nela.

### Фреймворки и библиотеки

Material-UI focuses exclusively on the React library, although, given that Preact supports the very same API, we hope to soon support it too. Поддержка одного фреймворка позволяет нам делать меньше, но делать это лучше.

Это происходит в различных вариантах:

- Имея меньше ограничений, мы можем идти на компромиссы, характерные для нашего целевого фреймворка. У нас меньше граничных случаев, которые нужно принимать во внимание.
- Мы можем потратить больше времени на разработку и оттачивание использования React.

MDC-web was designed from the ground up to be fully compatible with 3rd party JS frameworks and libraries. They list 3rd-party framework integration projects in the github [README](https://github.com/material-components/material-components-web/#material-components-for-the-web)

### Стилевое решение

[Material-UI несет тяжелое наследие со стилями](https://github.com/oliviertassinari/a-journey-toward-better-style). Our very first release was using LESS, but seeing the limitation of this solution, we quickly started looking into alternatives. Our first migration was towards using an inline-style solution. Это было многообещающе:

- It allowed us to remove the dependency on the LESS toolchain for our users. We removed one important friction in the installation process. (**simpler**)
- We were able to change the theme at runtime, nest different themes, and have dynamic styles. (** более мощный **)
- We reduced the loading time by breaking the big monolithic CSS file in order to enable code splitting. (**faster**)
- The style override story became more intuitive, as we were free of CSS specificity issues. (**simpler**)

Eventually, we reached the limitations of inline-styles and moved toward a CSS-in-JS solution. Этот переход был сделан без потери улучшений, внесенных первой миграцией ** Мы твердо убеждены, что CSS-in-JS - это будущее веб-платформы **. Вы можете [ узнать больше о нашем новом решении для стилизации ](/customization/css-in-js/) в документации.

MDC-web основан на SCSS как и Bootstrap v4. Архитектура SCSS очень близка к LESS - технологии, которую мы заменили из-за ее ограничений.

### Видение

Наше видение заключается в том, чтобы обеспечить элегантную реализацию рекомендаций по Material Design **и более**.

> The Material Design guidelines are an incredible starting point, but they do not provide guidance on all aspects or needs of an application. В дополнение к реализации, ориентированной на конкретные рекомендации, мы хотим, чтобы Material-UI стал тем, что обычно полезно для разработки приложений и все это в духе рекомендаций Material Design.
> 
> *[Выдержка из раздела [видение](/discover-more/vision/) документации.]*

We want to see businesses succeeding in taking advantage of Material-UI to ship an awesome UI to their users while having it match their brand, so we have invested a lot in the customization capabilities of Material-UI.

Единственная цель MDC-Web - реализация Material Design для веб-платформы. ** Ни больше, ни меньше **,. They will not consider making changes to the components - especially UX changes - that would facilitate additional flexibility at the cost of breaking with the core Material Design system, as that is a non-goal of the project. *[ источник ](https://github.com/mui-org/material-ui/issues/6799#issuecomment-299925174)*

### Тесты

Оба проекта покрываются множеством тестов. На момент написания статьи, оба проекта покрыты тестами более чем на 99%:

- Material-UI содержит 1200+ юнит тестов запускаемых в Chrome 49, Firefox 45, Safari 10 и Edge 14.
- MDC-web содержит 1200+ юнит тестов запускаемых во всех основных браузерах.

Still, there is one thing that sets Material-UI apart and it's key: We have [hundreds of visual regression tests](https://www.argos-ci.com/mui-org/material-ui) when MDC-web doesn't have any. With visual regression tests, you don't have to make any trade-off:

- You can spend less time making sure every contribution doesn't introduce unexpected regressions. The **less** time you spend on a single contribution, the **more** contributions you can accept.
- You can merge new contributions without digging much. Effectively, you are not waiting for users to report regressions. It's **efficient** and **improves the library quality**.

## Materialize

![estrelas](https://img.shields.io/github/stars/Dogfalo/materialize.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/materialize-css.svg)

### Поддержка браузеров

Materialize supports a wider range of browsers than Material-UI does, for instance, they support IE 10 while [we only support IE 11](/getting-started/supported-platforms/). Только поддержка IE 11 позволяет нам в полной мере использовать макет flexbox. IE 10 имеет много проблем с flexbox.

### Стилевое решение

Materialize использует SCSS, стилевую архитектуру Material-UI, от которой отказались 2 года назад. Мы объясняем почему в [секции MDC-web](#styling-solution) выше.

## React Toolbox

![estrelas](https://img.shields.io/github/stars/react-toolbox/react-toolbox.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/react-toolbox.svg)

### Стилевое решение

В то время как и React Toolbox, и Material-UI делают ставки на CSS-in-JS, мы приняли другой компромисс. Material-UI выбрал **JSS** в то время как React Toolbox начал переписывать свою библиотеку с помощью **styled-components**. Мы выбрали JSS вместо styled-components по следующей причине:

- JSS предоставляет API низкого уровня: 
  - Мы можем моделировать его в соответствии с нашими уникальными потребностями, что позволило нам создать один из самых совершенных механизмов переопределения и создания тем.
  - Он не связан с React, как `styled-components`. It has the potential to reach any 3rd party JS frameworks and libraries. Параллели могут быть сделаны с помощью SCSS. SCSS совместим с любыми JavaScript-фреймворками и библиотеками, что помогает ему развиваться в сообществе.
- JSS [в два раза быстрее](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md) чем подключение компонентов через styled-components, при всей включенной оптимизации.

Это не означает, что Material-UI думает о том, как пользователи пишут свои стили. Вы можете использовать styled-components, если хотите.