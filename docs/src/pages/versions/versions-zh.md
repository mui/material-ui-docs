# Material-UI 的版本

<p class="description">你可以随时回到本页来切换不同版本的文档。</p>

## 稳定版本

我们推荐在生产开发中使用最新版本。

{{"demo": "pages/versions/StableVersions.js", "hideHeader": true}}

## 最新版本

在这里您可以找到尚未发布的最新文档和代码。 您可以使用它来查看未来的更新，并给 Material-UI 的贡献者提供更好的反馈。

{{"demo": "pages/versions/LatestVersions.js", "hideHeader": true}}

## 版本控制方案

稳定性确保可重用组件、库、教程、工具和实践不会意外过时。 稳定性是Material-UI生态系统蓬勃发展的关键。

本文档包括遵循为您提供前沿前段库以及权衡稳定性的实践，以确保未来的更新始终可以预测。

Material-UI遵循[语义化版本2.0.0](https://semver.org/)。 Material-UI 的版本号由三部分组成：`主版本号.次版本号.修订版本号`。 版本号的递增是根据更新内容的级别而决定。

- **主版本**包含重要的新功能，更新时需要一些少量开发人员的支持。 更新到新的主要版本时，您可能需要运行更新脚本，重构代码，运行其他测试以及学习新API。
- **次版本**包含重要的新功能。 次版本完全向后兼容，更新时不需要开发人员的支持，但您可以选择修改应用程序和库，以开始使用新版本中添加的新API和功能。
- **修订版本**的风险低，包含了对bug的修复和较小的新功能。 更新时不需要开发人员的支持。

## 发布周期

定期的发布周期可以帮助您规划和协调Material-UI不断的更新。

通常情况下，你可以预期以下的发布周期：

- 每12个月发布一个**主版本**。
- 每个主版本会包含1-3个**次版本**。
- 每周发布**修订版本**更新（随时发布更新来修复紧急的bug）。

## 发布时间表

| 日期       | 版本     | 状态  |
|:-------- |:------ | --- |
| 2018年5月  | v1.0.0 | 已发布 |
| 2018年9月  | v3.0.0 | 已发布 |
| 2019年5月  | v4.0.0 | 已发布 |
| 2020第三季度 | v5.0.0 | ⏳   |


您可以参考[里程碑](https://github.com/mui-org/material-ui/milestones)来获得更详细的概述。

> ⚠️**免责声明** ：我们在动态的环境中运作，情况随时可能发生变化。 提供的信息旨在概述总体框架方向， 仅供参考。 We may decide to add/remove new items at any time depending on our capability to deliver while meeting our quality standards. The development, releases and timing of any features or functionality of Material-UI remains at the sole discretion of Material-UI. The roadmap does not represent a commitment, obligation or promise to deliver at any time.

## 支持政策

查看[所支持版本](/getting-started/support/#supported-versions)的详情

## 弃用做法

**“不兼容变更”**有时是必要的，例如删除对选定API和功能的支持。

为了让过渡尽可能简单：

- 尽量减少不兼容变更，并且尽可能提供迁移工具。
- 遵循以下描述的弃用原则，以便您有时间用最新的API和最佳做法更新您的应用程序。

### 弃用原则

- Deprecated features are announced in the changelog, and when possible, with warnings at runtime.
- When a deprecation is announced, recommended update path is provided.
- Existing use of a stable API during the deprecation period is supported, so your code will keep working during that period.
- Peer dependency updates (React) that require changes to your apps are only made in a major release.