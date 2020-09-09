# 测试

<p class="description">编写测试能够预防回归问题，并能够带来更好的代码。</p>

## 用户空间

It's generally recommended to test your application without tying the tests too closely to Material-UI. This is how Material-UI components are tested internally. A library that has a first-class API for this approach is [`@testing-library/react`](https://testing-library.com/docs/react-testing-library/intro).

For example, when rendering a `TextField` your test should not need to query for the specific Material-UI instance of the `TextField` but rather for the `input`, or `[role="textbox"]`.

By not relying on the React component tree you make your test more robust against internal changes in Material-UI or, if you need snapshot testing, adding additional wrapper components such as context providers. We don't recommend snapshot testing though. ["Effective snapshot testing" by Kent C. Dodds](https://kentcdodds.com/blog/effective-snapshot-testing) goes into more details why snapshot testing might be misleading for React component tests.

## 内部

Material-UI 的 测试范围 **很广**，因此我们有信心 对组件进行迭代，例如，[Argos-CI](https://www.argos-ci.com/mui-org/material-ui) 提供的可视化回归测试已被证明非常有用。 若您想要进一步了解内部测试，您可以查看 [README](https://github.com/mui-org/material-ui/blob/next/test/README.md)。
