# 测试

<p class="description">编写测试能够预防回归问题，并能够带来更好的代码。</p>

本指南使用[来自 Mocha 的全局方法](https://mochajs.org/api/global.html)，而不是使用 [Jest](https://jestjs.io/docs/en/api)。

## 内部

我们十分注重测试问题。 我们已编写并且维护了**一系列的** 测试，这样一来我们可以非常自信地迭代开发组件，例如，由 [Argos-CI](https://www.argos-ci.com/mui-org/material-ui) 提供的可视化回归测试，亲测有效。 若您想要进一步了解内部测试，您可以查看 [README](https://github.com/mui-org/material-ui/blob/next/test/README.md)。

尽管我们已达到100％的测试覆盖率，但是我们不鼓励我们的用户也这样做。 [![Coverage Status](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)

## 用户空间

在用户空间编写测试会如何呢？ Material-UI 的样式基础架构使用构建在 [enzyme](https://github.com/airbnb/enzyme) 的一些辅助函数之上来，这样一来整个流程会更简便，而这正是我们正在开源的。 若你愿意，你可以对它们加之利用。

### Shallow rendering

当把测试的组件当做一个小的单元时，Shallow rendering 起到了很好的约束作用。 This also ensures that your tests aren't indirectly asserting behavior of child components. Shallow rendering was created to test components in isolation. This means without leaking child implementation details such as the context.

`createShallow()` 函数可用于此情况。 除了包装酶API，它提供 `dive`untilSelector`直到选择` 选项。

### 完整的DOM渲染

Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or may require the full lifecycle in order to fully test the component (e.g., `componentDidMount` etc.).

为这种情况提供了 `createMount()` 函数。 Aside from wrapping the enzyme API, it provides a `cleanUp` function.

### 渲染为字符串

Rendering to a string is useful to test the behavior of the components that are used on the server. You can take advantage of this to assert the generated HTML string.

`createRender()` 函数非常适合这种情况。 这只是enzyme API的别名，只是为了保持一致性而暴露。

## API

### `createShallow([options]) => shallow`

Generate an enhanced shallow function with the needed context. 有关 `shallow`函数的更多详细信息, 请参考[enzyme API 文档 ](https://airbnb.io/enzyme/docs/api/shallow.html),

#### 参数

1. `options` (*Object* [optional]) 
    - `options.shallow` （*Function* [optional]）：浅增强功能，默认使用 **酶**。
    - `options.untilSelector` （*String* [optional]）：递归浅呈现子项，直到找到提供的选择器。 向下钻取高阶组件非常有用。
    - `options.dive` (*Boolean* [optional])：Shallow渲染当前包装器的一个非DOM子节点，并返回结果周围的包装器。
    - 其他键被转发到 `enzyme.shallow（）`的options参数。

#### 返回结果

`shallow` （*shallow*）：浅函数。

#### 例子

```jsx
import { createShallow } from '@material-ui/core/test-utils';

describe('<MyComponent />', () => {
  let shallow;

  before(() => {  // This is Mocha; in Jest, use beforeAll
    shallow = createShallow();
  });

  it('should work', () => {
    const wrapper = shallow(<MyComponent />);
  });
});
```

### `createMount([options]) => mount`

Generate an enhanced mount function with the needed context. 有关 `mount` 功能的更多详细信息，请参阅 [enzyme API文档](https://airbnb.io/enzyme/docs/api/mount.html)。

#### 参数

1. `options` (*Object* [optional]) 
    - `options.mount` (*Function* [optional])：mount功能增强，默认使用 **酶**。
    - 其他键被转发到 `enzyme.mount()`的options参数。

#### 返回结果

`mount` (*mount*)：安装功能。

#### 例子

```jsx
import { createMount } from '@material-ui/core/test-utils';

describe('<MyComponent />', () => {
  let mount;

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<MyComponent />);
  });
});
```

### `createRender([options]) => render`

Generate a render to string function with the needed context. 有关 `render` 功能的更多详细信息，请参阅 [enzyme API文档](https://airbnb.io/enzyme/docs/api/render.html)。

#### 参数

1. `options` (*Object* [optional]) 
    - `options.render` (*Function* [optional])：渲染功能增强，默认使用 **enzyme**。
    - 其他键被转发到 `enzyme.render()`的options参数。

#### 返回结果

`render` (*Function*)：渲染到字符串函数。

#### 例子

```jsx
import { createRender } from '@material-ui/core/test-utils';

describe('<MyComponent />', () => {
  let render;

  before(() => {
    render = createRender();
  });

  it('should work', () => {
    const wrapper = render(<MyComponent />);
  });
});
```