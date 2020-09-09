# Color 颜色

<p class="description">颜色承载了不同的寓意。 开箱即用，您可以查看 Material Design 规范中的所有颜色。</p>

使用 Material Design 的[颜色系统](https://material.io/design/color/)，您可创建表现独特品牌或风格的颜色主题。

## 选取颜色

### 官方的色彩工具

The Material Design team has also built an awesome palette configuration tool: [material.io/resources/color/](https://material.io/resources/color/). 它会帮助你为你的 UI 建立自己的色彩集合，同时也会帮助测量每个颜色组合的可访问性。 您可以用它来为 UI 创建调色板，以及检测任何颜色组合的无障碍水平。

<a href="https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=3F51B5&secondary.color=F44336" target="_blank" rel="noopener nofollow">
  <img src="/static/images/color/colorTool.png" alt="官方的色彩工具" style="width: 574px" />
</a>

<br />
<br />

输出的结果可以被传入到 `createMuiTheme()` 函数中：

```js
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});
```

### 练习

若想用 Material-UI 文档来测试 [material.io/design/color](https://material.io/design/color/) 的配色方案，只需使用下面的调色板和滑块来选取颜色即可。 另外，您也可以在主要（Primary）和次要（Secondary）文本字段中输入十六进制（hex）值。

{{"demo": "pages/customization/color/ColorTool.js", "hideToolbar": true, "bg": true}}

您可以把颜色的例子中显示的输出结果直接粘贴到一个 [`createMuiTheme()`](/customization/theming/#createmuitheme-options-theme) 函数里（需要与 [`ThemeProvider`](/customization/theming/#theme-provider) 配合使用）：

```jsx
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },
});
```

您只需提供 `主要的` 阴影（shades）（除非您希望进一步自定义 `light`，`dark` 或 `contrastText` 这几个属性），在 [定制主题](/customization/palette/) 章节中提到，这是因为其他颜色会由 `createMuiTheme()` 自动计算。

如果你在使用默认的主要和/或次要阴影，那么通过提供一个颜色对象（color object） ，`createMuiTheme()` 将会根据主（main）、亮（light）和暗（dark）三种 material 颜色使用合适的阴影。

### 社区提供的一些工具

- [create-mui-theme](https://react-theming.github.io/create-mui-theme/)：使用 Material Design 颜色工具来创建 Material-UI 主题的在线工具。
- [material-ui-theme-editor](https://in-your-saas.github.io/material-ui-theme-editor/)：只需要选择颜色即可为你的 Material-UI 应用生成主题的工具，同时还支持在线预览。 Includes basic site templates to show various components and how they are affected by the theme
- [Material palette generator](https://material.io/inline-tools/color/)：它可用于通过您输入的任何颜色生成一系列的调色板。

## 2014 Material Design 调色板

这些调色板最初由 Material Design 于 2014 年创建，由一些旨在和谐搭配的颜色组成，您可以用它们来开发品牌调色板。 要生成您专属的颜色协调的调色板，请使用调色板生成工具。

### 一些重要的术语

- **Palette**: A palette is a collection of colors, i.e. hues and their shades. Material-UI 提供Material Design 指南中的所有颜色. 设计[此调色板](#color-palette)时，我们确保了各个颜色之间的协调。 Material-UI 提供 Material Design 指南中的所有颜色。 设计 [此调色板](#color-palette) 时，我们确保了各个颜色之间的协调呈现。
- **Hue" & "Shade**: A single color within the palette is made up of a hue such as "red", and shade, such as "500". "rad 50" 是红色的最浅的阴影 (* 粉红色! *), 而 "red 900" 是最暗的。 "rad 50" 是红色的最浅的阴影 (_ 粉红色! _), 而 "red 900" 是最暗的。 除此之外，大多数的色调都带有以 `A` 为前缀的强调（accent）色调。

### 调色板

若给定了一种_色调_（如红色，粉红色等）以及一个_阴影_ （500，600等），你可以这样导入颜色：

```jsx
import HUE from '@material-ui/core/colors/HUE';

const color = HUE[SHADE];
```

{{"demo": "pages/customization/color/Color.js", "hideToolbar": true, "bg": "inline"}}

### 例子

例如：您可以参考互补的主色和重点色，像 "red 500" 和 "purple A200" 这样的：

```js
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

const primary = red[500]; // #f44336
const accent = purple['A200']; // #e040fb
const accent = purple.A200; // #e040fb (替代方法)
```
