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

This document contains the practices that are followed to provide you with a leading-edge UI library, balanced with stability, ensuring that future changes are always introduced in a predictable way.

Material-UI follows [Semantic Versioning 2.0.0](https://semver.org/). Material-UI 的版本号由三部分组成：`主版本号.次版本号.修订版本号`。 版本号的选择是根据更新内容的数量决定

- **主要版本** 包含重要的新功能，有些但在更新期间预计会提供最少的开发人员帮助。 更新到新的主要版本时，您可能需要运行更新脚本，重构代码，运行其他测试以及学习新API。
- **次版本**包含重要的新功能。 次要版本完全向后兼容;更新期间不需要开发人员协助，但您可以选择修改应用程序和库，以开始使用发行版中添加的新API，功能和功能。
- **日常更新**的风险较低。它包含了对bug的修复和较小的新功能。 更新期间不需要开发人员协助。

## 发布周期

A regular schedule of releases helps you plan and coordinate your updates with the continuing evolution of Material-UI.

通常情况下, 你可以根据以下的发布周期来预测:

- 每12个月发布一个**主版本**。
- 每个主版本会附带1-3个向下兼容的**次版本**。
- 每周发布**修订**更新 (如果有紧急的问题修复，则任何时候都可发布)。

## 发布计划

| 日期       | 版本     | 状态  |
|:-------- |:------ | --- |
| 2018年5月  | v1.0.0 | 已发布 |
| 2018年9月  | v3.0.0 | 已发布 |
| 2019年5月  | v4.0.0 | 已发布 |
| 2020第三季度 | v5.0.0 | ⏳   |


You can follow the [milestones](https://github.com/mui-org/material-ui/milestones) for a more detailed overview.

> ⚠️ **Disclaimer**: We operate in a dynamic environment, and things are subject to change. The information provided is intended to outline the general framework direction. It's intended for informational purposes only. We may decide to add/remove new items at any time depending on our capability to deliver while meeting our quality standards. The development, releases and timing of any features or functionality of Material-UI remains at the sole discretion of Material-UI. The roadmap does not represent a commitment, obligation or promise to deliver at any time.

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