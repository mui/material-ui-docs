# 常见问题解答

<p class="description">您在一个特定的问题上停滞不前吗？ 您可以先在常见 FAQ（问题解答）中检索一下常见问题。</p>

如果仍然找不到所需的内容，您可以参考我们的 [支持页面](/getting-started/support/) 。

## Material-UI 超赞。 我该如何支持该项目？

其实有很多方法可以支持 Material-UI：

- **口口相传**。 通过在您的网站上 [链接到 material-ui.com](https://material-ui.com/) 来传播 Material-UI ，每个反向链接对我们来说都很重要。 在 [Twitter 上关注我们](https://twitter.com/MaterialUI) ，点赞并转发一些重要的新闻。 或者只是与您的朋友谈论我们。
- **给我们反馈** 。 告诉我们一些做得好的地方或者可以改进的地方。 请给您最希望看到能够解决的问题投票（👍）。
- **帮助新的用户** 。 您可以在 [StackOverflow](https://stackoverflow.com/questions/tagged/material-ui) 中回答一些问题。
- **做出一些改变吧**。 
  - 编辑文档。 每个页面右上角都有一个“编辑此页面”的链接。
  - 通过 [创建一个问题](https://github.com/mui-org/material-ui/issues/new) 来报告错误或缺少的功能 。
  - 查看和评论一些现有的 [pull requests](https://github.com/mui-org/material-ui/pulls) 和 [issues](https://github.com/mui-org/material-ui/issues)。
  - 帮助我们 [翻译](https://translate.material-ui.com) 文档。
  - 通过 [提交的一个 pull request](https://github.com/mui-org/material-ui/pulls) 来 [优化我们的文档](https://github.com/mui-org/material-ui/tree/master/docs)，修复错误，或者添加功能。
- **在 [OpenCollective](https://opencollective.com/material-ui)** 上资助我们。 如果您在商业项目中使用了 Material-UI，并希望通过成为我们的赞助商来支持我们的持续发展，或者在一个业余的或者爱好的项目中使用了，并想成为我们的一个支持者， 您都可以通过 OpenCollective 来资助我们。 筹集的所有资金都是透明管理的，赞助商在 README 和 Material-UI 主页上都会获得认可。

## 为什么我的组件在生产构造中没有正确地渲染？

发生这种情况的首要原因，很有可能是您的代码在生产环境中的捆绑包中出现了类名冲突。 如果想要 Material-UI 正常工作，页面上所有组件的 `classname` 值必须由单个实例的 [类名称生成器](/styles/advanced/#class-names) 生成。

要纠正这个问题，您需要对页面上的所有组件进行初始化，使它们之间永远只有**一个类名生成器**。

在很多情况下，您可能最终会意外地使用两个类名生成器：

- 比如你一不小心 **打包**了 两个版本的 Material-UI。 你可能错误地将一个依赖和 material-ui 设置为同版本依赖了。
- You are using `StylesProvider` for a **subset** of your React tree.
- 您正在使用打包的代码分割功能，这会生成多个 class 名字

> 如果你正使用的 webpack 带有 [SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) 插件 ，请尝试在设置里的 [`optimizations` 下配置 `runtimeChunk`](https://webpack.js.org/configuration/optimization/#optimization-runtimechunk) 。

总的来说，您只需要在每个 Material-UI 应用程序的组件树顶部使用 [`StylesProvider`](/styles/api/#stylesprovider) 组件进行包装，**并在它们之间共享一个单一的类名生成器**，就可以很容易地解决这个问题。

## 为什么当打开Modal（模态框）时，fixed positioned（位置固定的）元素会移动？

当Modal（模态框）打开时，滚动会被禁止。 这样就能够阻止用户与下层背景内容进行交互以确保模态框应该是唯一的交互内容。 然而，移除滚动条会使您的**固定定位的元素**移动。 在这种情况下，您可以应用全局 `.mui-fixed` 类来通知 Material-UI 处理这些元素。

## 如何在全局禁用 ripple effect（涟漪效果）？

涟漪效果完全来自` BaseButton `零件。 您可以通过在您的主题中提供以下内容，来全局地禁用涟漪效果：

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true, // No more ripple, on the whole application 💣!
    },
  },
});
```

## 如何禁用全局过渡？

Material-UI 使用相同的主题助手来创建所有的过渡。 因此，您可以通过覆盖主题助手来禁用所有的过渡：

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  transitions: {
    // 这样就得到了全局的 `transition: none;`
    create: () => 'none',
  },
});
```

在视觉测试过程中禁用过渡，或者在低端设备上提高性能，这样做都是很有用的。

您可以更进一步地禁用所有的过渡和动画效果。

```js
import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    // 组件名称 ⚛️
    MuiCssBaseline: {
      // 规则名称
      '@global': {
        '*, *::before, *::after': {
          transition: 'none !important',
          animation: 'none !important',
        },
      },
    },
  },
});
```

请注意，上述方法需要使用 `CssBaseline`。 如果您选择不使用它，您仍然可以通过加入这些 CSS 规则来禁用过渡和动画：

```css
*, *::before, *::after {
  transition: 'none !important';
  animation: 'none !important';
}
```

## 我是否必须使用 JSS 给 app 来设置样式呢？

不用的，JSS 不是一个必须选择。 But this dependency comes built in, so carries no additional bundle size overhead.

然而，也许您正在为一个已经使用其他样式解决方案的应用程序添加一些 Material-UI 组件，或者已经l熟悉了不同的 API，而不想学习新的 API？ 在这种情况下，请访问 [样式库互用](/guides/interoperability/) 部分，在那里我们展示了使用替代样式库来重新设置 Material-UI 组件的样式是多么简单。

## 内联样式与 CSS 之间我应该怎么选择使用的时机？

根据经验，仅对动态样式属性使用内联样式。 CSS 替代方案也有更多优势，例如：

- 自动前缀
- 更好地调试
- 媒体查询
- 关键帧

## 我应该怎么使用 react-router？

在我们的指南中详细介绍了与 react-router、Gatsby 或 Next.js 等 [第三方路由库](/guides/composition/#routing-libraries) 的集成。

## 我应该怎么访问 DOM 元素？

所有应该在 DOM 中渲染内容的 Material-UI 组件都会都将其 ref 转发给底层的 DOM 组件。 这意味着您可以通过读取附加在 Material-UI 组件上的 ref 来获取 DOM 元素。 

```jsx
// 或者为一个 ref setter 函数
const ref = React.createRef();
// 渲染
<Button ref={ref} />;
// 使用
const element = ref.current;
```

如果您对相关 Material-UI 组件是否转发了它的 ref 存在疑问的时候，你可以查看“Props”下的 API 文档，例如 [Button API](/api/button/#props)

> ref 会被转发到根元素。

这就表明您可以使用 ref 来访问这个 DOM 元素。

## 我的页面上有多个样式实例。

如果您在控制台中看到类似下面的警告消息，那么您可能已经在页面上初始化了多个 `@material-ui/styles` 实例。

> 看起来在这个应用程序中初始化了多个 `@material-ui/styles` 实例。 这可能会导致主题传播问题、类名称损坏、专一性问题，并使你的应用程序尺寸无端变大。 

### 可能的原因

出现这些问题通常有几个常见的原因：

- 在您的依赖关系中还有一个 `@material-ui/styles` 库。
- 您的项目是 monorepo 结构（例如，lerna，yarn workspaces），并且 `@material-ui/styles` 模块是多个包中的依赖（与前一个包或多或少相同）。
- 您有几个使用 `@material-ui/styles` 的应用程序在同一页面上运行（例如，webpack 中的几个入口点被加载在同一页面上）。

### 在 node_modules 中重复的模块。 

如果您认为问题可能出现在您的依赖关系中的 @material-ui/styles 模块的重复，那么有几种方法可以检查。 您可以在应用程序文件夹中使用 `npm ls @material-ui/styles`、`yarn list @material-ui/styles` 或 `find -L ./node_modules | grep /@material-ui/styles/package.json` 命令来进行检查。

如果使用了这些命令之后都没有发现重复的依赖，请尝试分析您的捆绑包中是否有多个 @material-ui/styles 实例。 您可以直接去检查捆绑包的源代码，或者使用 [source-map-explorer](https://github.com/danvk/source-map-explorer) 或 [webpack-bundle-analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) 这样的工具来帮助检查。

如果您确定当前遇到的问题是模块重复，那么您可以尝试解决以下几个问题： 

如果您正在使用的是 npm，那么您可以尝试运行 `npm dedupe` 命令。 这条命令将会搜索本地的依赖关系，并试图通过将共同的依赖关系移到树的更上层来简化结构。 

如果您使用的是 webpack，您可以更改 [解析](https://webpack.js.org/configuration/resolve/#resolve-modules) @material-ui/styles 模块的方式。 您可以通过覆盖 webpack 查找依赖项的默认顺序的方法来使您的应用程序中的 node_modules 比默认的 node 解析模块顺序更优先进行渲染。 

```diff
  resolve: {
+   alias: {
+     "@material-ui/styles": path.resolve(appFolder, "node_modules", "@material-ui/styles"),
+   }
  }
```

### 和 Learn 一起使用

如果您想要让 @material-ui/styles 在 Lerna monorepo 中跨包运行，一个可能的修复方法是将 [hoist](https://github.com/lerna/lerna/blob/master/doc/hoist.md) 的共享依赖项移动到 monorepo 文件的根部。 您可以尝试使用 - -hoist 标识运行引导选项。 

```sh
lerna bootstrap --hoist
```

另外，您也可以在 package.json 文件中删除 @material-ui/styles 项，然后手动将它移动到顶层 package.json 文件中。 

Lerna 根目录下的 package.json 文件示例： 

```json
{
  "name": "my-monorepo",
  "devDependencies": {
    "lerna": "latest"
  },
  "dependencies": {
    "@material-ui/styles": "^4.0.0"
  },
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "clean": "lerna clean",
    "start": "lerna run start",
    "build": "lerna run build"
  }
}
```

### Running multiple applications on one page

If you have several applications running on one page, consider using one @material-ui/styles module for all of them. If you are using webpack, you can use [CommonsChunkPlugin](https://webpack.js.org/plugins/commons-chunk-plugin/) to create an explicit [vendor chunk](https://webpack.js.org/plugins/commons-chunk-plugin/#explicit-vendor-chunk), that will contain the @material-ui/styles module:

```diff
  module.exports = {
    entry: {
+     vendor: ["@material-ui/styles"],
      app1: "./src/app.1.js",
      app2: "./src/app.2.js",
    },
    plugins: [
+     new webpack.optimize.CommonsChunkPlugin({
+       name: "vendor",
+       minChunks: Infinity,
+     }),
    ]
  }
```

## 我的应用程序在服务器上没有正确渲染

If it doesn't work, in 99% of cases it's a configuration issue. A missing property, a wrong call order, or a missing component – server-side rendering is strict about configuration, and the best way to find out what's wrong is to compare your project to an already working setup. Check out the [reference implementations](/guides/server-rendering/#reference-implementations), bit by bit.

### CSS works only on first load then is missing

The CSS is only generated on the first load of the page. Then, the CSS is missing on the server for consecutive requests.

#### 要采取的行动

The styling solution relies on a cache, the *sheets manager*, to only inject the CSS once per component type (if you use two buttons, you only need the CSS of the button one time). You need to create **a new `sheets` instance for each request**.

*example of fix:*

```diff
-// Create a sheets instance.
-const sheets = new ServerStyleSheets();

function handleRender(req, res) {

+ // Create a sheets instance.
+ const sheets = new ServerStyleSheets();

  //…

  // Render the component to a string.
  const html = ReactDOMServer.renderToString(
```

### React class name hydration mismatch

There is a class name mismatch between the client and the server. It might work for the first request. Another symptom is that the styling changes between initial page load and the downloading of the client scripts.

#### 要采取的行动

The class names value relies on the concept of [class name generator](/styles/advanced/#class-names). The whole page needs to be rendered with **a single generator**. This generator needs to behave identically on the server and on the client. 就像这样：

- You need to provide a new class name generator for each request. But you shouldn't share a `createGenerateClassName()` between different requests:

*example of fix:*

```diff
-  //创建一个新的类名生成器。
-const generateClassName = createGenerateClassName();

function handleRender(req, res) {

+ // 创建一个新的类名生成器。
+ const generateClassName = createGenerateClassName();

  //…

  // 将组件渲染为字符串。
  const html = ReactDOMServer.renderToString(
```

- You need to verify that your client and server are running the **exactly the same version** of Material-UI. It is possible that a mismatch of even minor versions can cause styling problems. 要检查版本号，请在构建应用程序的环境中以及部署环境中运行 `npm list @material-ui/core`。
  
    You can also ensure the same version in different environments by specifying a specific MUI version in the dependencies of your package.json.

*修复示例 (package.json）：*

```diff
  "dependencies": {
    ...

-   "@material-ui/core": "^4.0.0",
+   "@material-ui/core": "4.0.0",
    ...
  },
```

- You need to make sure that the server and the client share the same `process.env.NODE_ENV` value.

## 为什么我的应用程序看到的颜色和文档里的颜色大相径庭？

文档网站使用了一个自定义的主题。 因此，调色板和 Material-UI 传播的默认的主题是截然不同的。 请参考[这页](/customization/theming/) 来了解自定义主题。

## 为什么组件X 需要一个 DOM 节点，而不是 ref 对象？

Components like the [Portal](/api/portal/#props) or [Popper](/api/popper/#props) require a DOM node in the `container` or `anchorEl` prop respectively. It seems convenient to simply pass a ref object in those props and let Material-UI access the current value. This works in a simple scenario:

```jsx
function App() {
  const container = React.useRef(null);

  return (
    <div className="App">
      <Portal container={container}>
        <span>portaled children</span>
      </Portal>
      <div ref={container} />
    </div>
  );
}
```

where `Portal` would only mount the children into the container when `container.current` is available. Here is a naive implementation of Portal:

```jsx
function Portal({ children, container }) {
  const [node, setNode] = React.useState(null);

  React.useEffect(() => {
    setNode(container.current);
  }, [container]);

  if (node === null) {
    return null;
  }
  return ReactDOM.createPortal(children, node);
}
```

With this simple heuristic `Portal` might re-render after it mounts because refs are up-to-date before any effects run. However, just because a ref is up-to-date doesn't mean it points to a defined instance. If the ref is attached to a ref forwarding component it is not clear when the DOM node will be available. In the example above, the `Portal` would run an effect once, but might not re-render because `ref.current` is still `null`. This is especially apparent for React.lazy components in Suspense. The above implementation could also not account for a change in the DOM node.

This is why we require a prop with the actual DOM node so that React can take care of determining when the `Portal` should re-render:

```jsx
function App() {
  const [container, setContainer] = React.useState(null);
  const handleRef = React.useCallback(instance => setContainer(instance), [setContainer])

  return (
    <div className="App">
      <Portal container={container}>
        <span>Portaled</span>
      </Portal>
      <div ref={handleRef} />
    </div>
  );
}
```

## clsx 依赖什么？

[clsx](https://github.com/lukeed/clsx) is a tiny utility for constructing `className` strings conditionally, out of an object with keys being the class strings, and values being booleans.

Instead of writing:

```jsx
// let disabled = false, selected = true;

return (
  <div
    className={`MuiButton-root ${disabled ? 'Mui-disabled' : ''} ${selected ? 'Mui-selected' : ''}`}
  />
);
```

你可以这样做：

```jsx
import clsx from 'clsx';

return (
  <div
    className={clsx('MuiButton-root', {
      'Mui-disabled': disabled,
      'Mui-selected': selected,
    })}
  />
);
```