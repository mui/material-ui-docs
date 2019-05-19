---
title: Componente React Stepper
components: MobileStepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper
---

# Barra de etapas

<p class="description">Barra de etapas representam progresso através de etapas numeradas. Ela fornece um fluxo de trabalho semelhante a um assistente.</p>

[Barra de etapas](https://material.io/archive/guidelines/components/steppers.html) exibem o progresso através de uma sequência de etapas lógicas e numeradas. Elas também podem ser usadas para navegação. Barra de etapas podem exibir uma mensagem de feedback transiente depois que uma etapa é salva.

**Tipos de etapa**

- Editável
- Não editável
- Mobile
- Opcional

**Tipos de barra de etapas**

- Horizontal
- Vertical
- Linear
- Não linear

> **Nota:** As barras de etapas não estão documentadas na documentação do Material Design.

## Horizontal Linear

A barra de etapas (`Stepper`) pode ser controlada passando o índice da etapa atual (baseado em zero) com a propriedade `activeStep`. `Stepper` orientation is set using the `orientation` property.

Este exemplo também mostra o uso de uma etapa opcional, colocando a propriedade `optional` no segundo componente de `Step`. Note that it's up to you to manage when an optional step is skipped. Once you've determined this for a particular step you must set `completed={false}` to signify that even though the active step index has gone beyond the optional step, it's not actually complete.

{{"demo": "pages/components/steppers/HorizontalLinearStepper.js"}}

## Horizontal não linear

Non-linear steppers allow users to enter a multi-step flow at any point.

This example is similar to the regular horizontal stepper, except steps are no longer automatically set to `disabled={true}` based on the `activeStep` property.

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