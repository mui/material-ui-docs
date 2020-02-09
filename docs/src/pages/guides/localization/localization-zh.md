# 本地化

<p class="description">本地化（也称为“i10n”），是使产品或内容适应特定地区或市场的过程。</p>

Material-UI 的默认本地环境是 English (United States)。 如果您想使用其他本地环境，按照下面的说明去做。

## 本地化文本

使用主题来全局地配置本地环境文本：

```jsx
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { zhCN } from '@material-ui/core/locale';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#1976d2' },
  },
}, zhCN);

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### 支持的语言环境

| 地区                      | BCP 47 语言标签 | 导入名称   |
|:----------------------- |:----------- |:------ |
| Azerbaijani             | az-AZ       | `azAZ` |
| Bulgarian               | bg-BG       | `bgBG` |
| Catalan                 | ca-ES       | `caES` |
| Chinese (Simplified)    | zh-CN       | `zhCN` |
| Czech                   | cs-CZ       | `csCZ` |
| Dutch                   | nl-NL       | `nlNL` |
| English (United States) | en-US       | `enUS` |
| Finnish                 | fi-FI       | `fiFI` |
| French                  | fr-FR       | `frFR` |
| German                  | de-DE       | `deDE` |
| Hungarian               | hu-HU       | `huHU` |
| Icelandic               | is-IS       | `isIS` |
| Indonesian              | id-ID       | `idID` |
| Italian                 | it-IT       | `itIT` |
| Japanese                | ja-JP       | `jaJP` |
| Korean                  | ko-KR       | `koKR` |
| Persian                 | fa-IR       | `faIR` |
| Polish                  | pl-PL       | `plPL` |
| Portuguese (Brazil)     | pt-BR       | `ptBR` |
| Portuguese              | pt-PT       | `ptPT` |
| Romanian                | ro-RO       | `roRO` |
| Russian                 | ru-RU       | `ruRU` |
| Slovak                  | sk-SK       | `skSK` |
| Spanish                 | es-ES       | `esES` |
| Swedish                 | sv-SE       | `svSE` |
| Turkish                 | tr-TR       | `trTR` |
| Ukrainian               | uk-UA       | `ukUA` |
| Vietnamese              | vi-VN       | `viVN` |

您可以在GitHub库中找到[源文件](https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/locale/index.js)。

To create your own translation, or to customise the English text, copy this file to your project, make any changes needed and import the locale from there. (Please do consider contributing new translations back to Material-UI by opening a pull request.)

### 示例

{{"demo": "pages/guides/localization/Locales.js", "defaultCodeOpen": false}}

## RTL Support

Right-to-left languages such as Arabic, Persian or Hebrew are supported. Follow [this guide](/guides/right-to-left/) to use them.
