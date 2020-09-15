---
title: React 步骤条组件
components: MobileStepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper
githubLabel:
  component: Stepper 步骤条组件
materialDesign: https://material.io/archive/guidelines/components/steppers.html
---

# Stepper 步骤条组件

<p class="description">步骤条组件通过数字的步骤来表示进度。 它提供了一个类似于安装向导的用户流。</p>

[步骤条](https://material.io/archive/guidelines/components/steppers.html)通过一系列逻辑和编号的步骤来显示当前操作的进度。 它们也可用于导航。 在保存一个步骤后，步骤条可能会显示短暂的反馈信息。

- **步骤的类型**：可编辑的，不可编辑的，移动端的，可选择的
- **步骤条的类型**：横向的，竖向的，线性的，非线性的

{{"component": "modules/components/ComponentLinkHeader.js"}}

> **请注意：**步骤条不再出现在 [Material Design 指南](https://material.io/)中, 但 Material-UI 会继续支持此组件。

## Horizontal stepper

Horizontal steppers are ideal when the contents of one step depend on an earlier step.

Avoid using long step names in horizontal steppers.

### 线性进度条

A linear stepper allows the user to complete the steps in sequence.

你可以在 `activeStep` 属性中传入一个初始值为 0 的当前步骤值来控制 `步骤条`。 你也可以借助 `orientation` 属性来设置 `步骤条` 的方向。

这个例子还展示了通过在第二个 `步骤条` 组件上放置 `optional` 属性来使用可选步骤。 请注意，您可以自行选择管理跳过一个可选的步骤。 一旦决定将一个特定步骤设置为可选的，您就必须配置这个属性 `completed={false}` 以表示即使激活的步骤索引超出了可选的步骤，步骤条并没有完成。

{{"demo": "pages/components/steppers/HorizontalLinearStepper.js"}}

### 非线性的步骤条

Non-linear steppers allow the user to enter a multi-step flow at any point.

这个例子类似于常规的水平步骤条，不同之处在于步骤条不再根据 `activeStep` 属性将其自动设置为 `disabled={true}`。

在这里使用 `StepButton` 演示了一个可单击的步骤器标签，并且设置了 `completed` 标志。 但是，由于可以以非线性方式访问每个步骤，因此需要由您自己的实现来确定何时完成所有步骤（甚至是是否需要完成）。

{{"demo": "pages/components/steppers/HorizontalNonLinearStepper.js"}}

### Alternative label

您可以将标签置于步骤的图标之下，通过设置 `Stepper` 组件的 `alternativeLabel` 属性可以实现。

{{"demo": "pages/components/steppers/HorizontalLinearAlternativeLabelStepper.js"}}

### Error step

{{"demo": "pages/components/steppers/HorizontalStepperWithError.js"}}

### Customized horizontal stepper

以下是自定义组件的一个示例。 您可以在[重写文档页](/customization/components/)中了解有关此内容的更多信息。

{{"demo": "pages/components/steppers/CustomizedSteppers.js"}}

## Vertical stepper

Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented.

{{"demo": "pages/components/steppers/VerticalLinearStepper.js"}}

## Mobile stepper

该组件实现了适用于移动设备上的紧凑型步骤条。 IT has more limited functionality than the vertical stepper. 如果你还在寻找灵感，请参阅 [移动设备上的步骤条](https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps)。

The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress.

### 文本

The current step and total number of steps are displayed as text.

{{"demo": "pages/components/steppers/TextMobileStepper.js", "bg": true}}

### Text with carousel effect

This demo uses [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) to create a carousel.

{{"demo": "pages/components/steppers/SwipeableTextMobileStepper.js", "bg": true}}

### 点状

Use dots when the number of steps is small.

{{"demo": "pages/components/steppers/DotsMobileStepper.js", "bg": true}}

### Progress 进度条组件

当有许多步骤时，或者如果在此过程中需要插入步骤（基于对早期步骤的响应），请使用进度条。

{{"demo": "pages/components/steppers/ProgressMobileStepper.js", "bg": true}}
