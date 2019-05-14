# Тема по умолчанию

<p class="description">Вот как выглядит объект темы со значениями по умолчанию.</p>

## Обзор

Изучите документацию по объекту темы:

{{"demo": "pages/customization/default-theme/DefaultTheme.js", "hideEditButton": true}}

> Совет: вы можете поиграть с объектом темы документации в ** вашей консоли **. Мы выставляем переменную документации `тема` на всех страницах документации. Обратите внимание, что эта документация использует настраиваемую тему.

Подробности о структуре темы изнутри можно посмотреть здесь [`material-ui/style/createMuiTheme.js`](https://github.com/mui-org/material-ui/blob/next/packages/material-ui/src/styles/createMuiTheme.js), а также изучив зависимости, используемые `createMuiTheme`.

## Отличие @material-ui/core/styles от @material-ui/styles

Стили в Material-UI работают на основе npm пакета [@material-ui/styles](/styles/basics/). Это стили для React-приложения. Они [изолированы](https://bundlephobia.com/result?p=@material-ui/styles) от стандартной Material-UI темы. To remove the need for injecting a theme in the React's context **systematically**, we are wrapping the style modules (`makeStyles`, `withStyles` and `styled`) with the default Material-UI theme:

- `@material-ui/core/styles/makeStyles` wraps `@material-ui/styles/makeStyles`.
- `@material-ui/core/styles/withStyles` wraps `@material-ui/styles/withStyles`.
- `@material-ui/core/styles/styled` wraps `@material-ui/styles/styled`.