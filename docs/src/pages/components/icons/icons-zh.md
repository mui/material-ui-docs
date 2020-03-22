---
title: React Icon 图标组件
components: Icon, SvgIcon
---

# Icons 图标

<p class="description">我们提供了一些建议和指导，能够帮组您在 Material-UI 中使用图标。</p>

Material-UI 通过以下三种方式来支持图标的使用：

1. 您可以将标准的 [Material Design 图标](#material-icons) 导出为 React 组件 (SVG icons)。
1. 或者可以将自定义的 SVG 图标通过 [SvgIcon](#svgicon) 组件来包装成一个 React 组件。
1. 或者可以将自定义的 font 图标通过 [ Icon ](#icon-font-icons) 组件来包装成一个 React 组件。

## Material Icons 图标

Material Design 已经将1,100多个官方图标标准化，而每个图标都有五个不同的“主题”(见下文)。 对于每个 SVG 图标，我们从 @ material-ui/icons 包中导出相应的React组件。 您可以 [搜索完整的图标列表](/components/material-icons/)。

### 使用

安装 `@material-ui/icons`。 有两种导入图标的方法：

- 方法 1:

  ```jsx
  import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
  import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
  ```

- 方法 2:

  ```jsx
  import { AccessAlarm, ThreeDRotation } from '@material-ui/icons';
  ```

当然了，方法 1 比方法 2 安全得多，但是方法 2 提供了最好的开发体验。 在使用第二个方法之前，请确保您遵循 [最小化捆绑包大小指南](/guides/minimizing-bundle-size/#option-2)。 我们强烈建议您配置一个 Babel 插件。

其中我们给每个图标配备了一个”主题“：Filled (default), Outlined, Rounded, Two tone 以及 Sharp。 若您想导入一个不是默认主题的图标组件，在图标名加主题做为后缀即可。 例如，`@material-ui/icons/Delete` 图标可以：

- 导出为 Filled 主题（默认值）：`@material-ui/icons/Delete`，
- 导出为 Outlined 主题：`@material-ui/icons/DeleteOutlined`，
- 导出为 Rounded 主题：`@material-ui/icons/DeleteRounded `，
- 导出为 Twotone 主题：`@material-ui/icons/DeleteTwoTone `，
- 导出为 Sharp 主题：`@material-ui/icons/DeleteSharp `，

> 友情提示：Material Design 在命名图标的时候遵循了 “snake_case” 变量命名法（例如，`delete_forever` 和 `add_a_photo`），而 `@material-ui/icons` 则使用 “PascalCase” 来命名导出的相应图标（例如，`DeleteForever` 以及 `AddAPhoto`）。 并且此命名规则有三个特例：`3d_rotation` 导出为 `ThreeDRotation`，`4k` 导出为 `FourK`，以及 `360` 导出为 `ThreeSixty`。

{{"demo": "pages/components/icons/SvgMaterialIcons.js"}}

## SvgIcon Svg 图标

如果你想导入一个自定义的 SVG 图标（但是又无法在 Material 图标[默认系列](/components/material-icons/)中找到），你可以使用 `SvgIcon` 来包装你的图标。 此组件是原生 `<svg>` 元素的拓展版：

- 它具备一些内置的可及性。
- SVG 元素应缩放为 24x24px 的视图，这样一来其他一些 Material-UI 组件可以将此图标直接使用，或者包含为其子元素。 （使用 `viewBox` 属性，您可以随意自定义）。
- 默认情况下，此组件会继承当前的颜色。 当然，通过 `color` 这个属性，你可以让图标使用主题里的颜色。

```jsx
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
```

### Color 颜色

{{"demo": "pages/components/icons/SvgIconsColor.js"}}

### Size 大小

{{"demo": "pages/components/icons/SvgIconsSize.js"}}

### 组件属性

即使图标以 `.svg` 格式保存，你依然可以使用 `SvgIcon` 来包装它。 通过 [svgr](https://github.com/smooth-code/svgr) 提供的加载装置，您将 svg 图标作为 React 组件导入。 譬如，使用 webpack ：

**webpack.config.js**
```js
{
  test: /\.svg$/,
  use: ['@svgr/webpack'],
}
```

```jsx
import StarIcon from './star.svg';

<SvgIcon component={StarIcon} viewBox="0 0 600 476.6" />
```

### 相关的库

#### Material Design （强烈推荐）

Material Design 将 [1100 多个海量官方图标 ](#material-icons)标准化。

#### MDI

[materialdesignicons.com](https://materialdesignicons.com/) 提供了 2000 多个图标。 For the wanted icon, copy the SVG `path` they provide, and use it as the child of the `SvgIcon` component.

Note: [mdi-material-ui](https://github.com/TeamWertarbyte/mdi-material-ui) has already wrapped each of these SVG icons with the `SvgIcon` component, so you don't have to do it yourself.

## Icon (Font icons)

对于支持连字的任何图标字体，`Icon` 组件能够将其显示为一个图标。 作为先决条件，您必须在项目中包括一个 [Material icon font](https://google.github.io/material-design-icons/#icon-font-for-the-web)，举例来说，您可以由 Google Web Fonts 引入：

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

`Icon` will set the correct class name for the Material icon font. For other fonts, you must supply the class name using the Icon component's `className` property.

若想要使用图标，您只需把图标名（字体连字）和 `Icon` 组件包装到一起，例如：

```jsx
import Icon from '@material-ui/core/Icon';

<Icon>star</Icon>
```

默认情况下，一个图标会继承使用当前的文本颜色。 您也可以选择使用以下任何一个主题颜色属性来设置图标的颜色：`primary`，`secondary`，`action`，`error` 以及 `disabled`。

### Font Material 图标

{{"demo": "pages/components/icons/Icons.js"}}

### Font Awesome

如下是一个同时使用[Font Awesome](https://fontawesome.com/icons) 与 `Icon` 的示例：

{{"demo": "pages/components/icons/FontAwesome.js", "hideEditButton": true}}

## Font vs SVG. Which approach to use?

这两种方法都能管用，然而，它们之间还是有着一些微妙的差异，特别当涉及到整体性能和渲染质量。 我们推荐尽可能选择 SVG，因为它允许代码分割、支持更多图标、而且渲染得更快、更好。

若您想了解更多细节，请查看 [ 为什么 GitHub 从字体图标迁移到 SVG 图标](https://github.blog/2016-02-22-delivering-octicons-with-svg/)这篇文章。

## 可访问性

图标可以传达各种各样有意义的信息，所以将他们传递给尽可能多的受众是至关重要的。 There are two use cases you’ll want to consider:
- **Decorative Icons** are only being used for visual or branding reinforcement. 如果将它们从页面中删除，用户仍然可以理解并能够使用您的页面。
- **Semantic Icons** are ones that you’re using to convey meaning, rather than just pure decoration. 这包括将边上不带有文本的图标用作一些交互式控件 — 按钮，表单元素，切换等。

### 装饰 SVG 图标

If your icons are purely decorative, you’re already done! The `aria-hidden=true` attribute is added so that your icons are properly accessible (invisible).

### 语义 SVG 图标

如果您的图标带有语义，您只需要包含 `titleAccess =“含义”` 属性。 The `role="img"` attribute and the `<title>` element are added so that your icons are properly accessible.

对于那些可聚焦的交互式元素，譬如与一个图标按钮一起使用时，您可以使用 `aria-label` 属性：

```jsx
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

// ...

<IconButton aria-label="delete">
  <SvgIcon>
    <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
  </SvgIcon>
</IconButton>
```

### 装饰形的字体图标

If your icons are purely decorative, you’re already done! The `aria-hidden=true` attribute is added so that your icons are properly accessible (invisible).

### 语义字体图标

如果您的图标具有语义含义，您则需要提供一个对协助的技术可见的文本替代方法。

```jsx
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

// ...

<Icon>add_circle</Icon>
<Typography variant="srOnly">创建一个用户</Typography>
```

### 参考

- https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/
