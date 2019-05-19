---
title: Componente React Stepper
components: MobileStepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper
---

# Assistente

<p class="description">Assistentes representam progresso através de etapas numeradas. Ele fornece um fluxo de trabalho de passo a passo.</p>

[Assistentes](https://material.io/archive/guidelines/components/steppers.html) exibem o progresso através de uma sequência de etapas lógicas e numeradas. Elas também podem ser usadas para navegação. Assistentes podem exibir uma mensagem de feedback transiente depois que uma etapa é salva.

**Tipos de etapa**

- Editável
- Não editável
- Mobile
- Opcional

**Tipos de assistentes**

- Horizontal
- Vertical
- Linear
- Não linear

> **Nota:** Os assistentes não estão documentados na documentação do Material Design.

## Horizontal Linear

O assistente (`Stepper`) pode ser controlado passando o índice da etapa atual (baseado em zero) com a propriedade `activeStep`. A orientação do asisstente (`Stepper`) é definida usando a propriedade `orientation`.

Este exemplo também mostra o uso de uma etapa opcional, colocando a propriedade `optional` no segundo componente de `Step`. Observe que cabe a você gerenciar quando uma etapa opcional é ignorada. Depois de determinar isso para uma etapa específica, você deve definir `completed={false}` para indicar que, embora o índice da etapa ativa tenha ultrapassado a etapa opcional, ele não está realmente concluído.

{{"demo": "pages/components/steppers/HorizontalLinearStepper.js"}}

## Horizontal não linear

Os assistentes não lineares permitem que os usuários insiram um fluxo de várias etapas a qualquer momento.

Este exemplo é semelhante ao não linear, porém as etapas não são mais automaticamente definidas `disabled={true}` com base na propriedade `activeStep`.

Nós usamos a `StepButton` aqui para demonstrar etiquetas passo clicáveis, bem como definir a `copleted` bandeira no entanto, porque passos podem ser acessados de forma não-linear é até sua própria implementação para determinar quando todas as etapas forem concluídas (ou mesmo se eles precisam ser completados).

{{"demo": "pages/components/steppers/HorizontalNonLinearStepper.js"}}

## Horizontal Linear - Rótulo Alternativo

Labels can be placed below the step icon by setting the `alternativeLabel` property on the `Stepper` component.

{{"demo": "pages/components/steppers/HorizontalLinearAlternativeLabelStepper.js"}}

## Horizontal Non Linear - Alternative Label

{{"demo": "pages/components/steppers/HorizontalNonLinearAlternativeLabelStepper.js"}}

## Horizontal Non Linear - Error Step

{{"demo": "pages/components/steppers/HorizontalNonLinearStepperWithError.js"}}

## Vertical Stepper

{{"demo": "pages/components/steppers/VerticalLinearStepper.js"}}

## Customized Stepper

Aqui está um exemplo de personalização do componente. Você pode aprender mais sobre isso na [página de documentação de substituições](/customization/components/).

This component uses a customized `StepConnector` element that changes border color based on the `active` and `completed` state.

{{"demo": "pages/components/steppers/CustomizedSteppers.js"}}

## Mobile Stepper

This component implements a compact stepper suitable for a mobile device. See [mobile steps](https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps) for its inspiration.

### Mobile Stepper - Text

This is essentially a back/next button positioned correctly. You must implement the textual description yourself, however, an example is provided below for reference.

{{"demo": "pages/components/steppers/TextMobileStepper.js"}}

### Mobile Stepper - Text with Carousel effect

This demo is very similar to the previous, the difference is the usage of [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) to make the transition of steps.

{{"demo": "pages/components/steppers/SwipeableTextMobileStepper.js"}}

### Mobile Stepper - Dots

Use dots when the number of steps isn’t large.

{{"demo": "pages/components/steppers/DotsMobileStepper.js"}}

### Mobile Stepper - Progress

Use a progress bar when there are many steps, or if there are steps that need to be inserted during the process (based on responses to earlier steps).

{{"demo": "pages/components/steppers/ProgressMobileStepper.js"}}