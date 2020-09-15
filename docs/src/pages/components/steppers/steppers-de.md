---
title: Stepper React-Komponente
components: MobileStepper, Step, StepButton, StepConnector, StepContent, StepIcon, StepLabel, Stepper
githubLabel:
  component: Stepper
materialDesign: https://material.io/archive/guidelines/components/steppers.html
---

# Stepper

<p class="description">Steppers convey progress through numbered steps. It provides a wizard-like workflow.</p>

[Stepper](https://material.io/archive/guidelines/components/steppers.html) zeigen den Fortschritt durch eine Folge logischer und nummerierter Schritte an. Sie können auch zur Navigation verwendet werden. Steppers können eine vorübergehende Rückmeldung anzeigen, nachdem ein Schritt gespeichert wurde.

- **Types of Steps**: Editable, Non-editable, Mobile, Optional
- **Types of Steppers**: Horizontal, Vertical, Linear, Non-linear

{{"component": "modules/components/ComponentLinkHeader.js"}}

> **Note:** Steppers are no longer documented in the [Material Design guidelines](https://material.io/), but Material-UI will continue to support them.

## Horizontal stepper

Horizontal steppers are ideal when the contents of one step depend on an earlier step.

Avoid using long step names in horizontal steppers.

### Linear

A linear stepper allows the user to complete the steps in sequence.

Der `Stepper` kann gesteuert werden, indem der aktuelle Schrittindex (auf Null basierend) als `activeStep` Eigenschaft übergeben wird. Die `Stepper-` Ausrichtung wird mithilfe der Eigenschaft `orientation` gesetzt.

Dieses Beispiel zeigt auch die Verwendung eines optionalen Schritt durch setzten der `optional` Eigenschaft auf der zweiten `Step` Komponente. Beachten Sie, dass Sie selbst entscheiden müssen, wann ein optionaler Schritt übersprungen wird. Wenn Sie dies für einen bestimmten Schritt festgelegt haben, müssen Sie `complete={false}` setzten, um anzuzeigen, dass der Index des aktiven Schritts den optionalen Schritt überschritten hat, jedoch nicht wirklich abgeschlossen ist.

{{"demo": "pages/components/steppers/HorizontalLinearStepper.js"}}

### Nicht linear

Non-linear steppers allow the user to enter a multi-step flow at any point.

This example is similar to the regular horizontal stepper, except steps are no longer automatically set to `disabled={true}` based on the `activeStep` prop.

The use of the `StepButton` here demonstrates clickable step labels, as well as setting the `completed` flag. However because steps can be accessed in a non-linear fashion, it's up to your own implementation to determine when all steps are completed (or even if they need to be completed).

{{"demo": "pages/components/steppers/HorizontalNonLinearStepper.js"}}

### Alternative label

Labels can be placed below the step icon by setting the `alternativeLabel` prop on the `Stepper` component.

{{"demo": "pages/components/steppers/HorizontalLinearAlternativeLabelStepper.js"}}

### Error step

{{"demo": "pages/components/steppers/HorizontalStepperWithError.js"}}

### Customized horizontal stepper

Hier ist ein Beispiel zum Anpassen der Komponente. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/components/).

{{"demo": "pages/components/steppers/CustomizedSteppers.js"}}

## Vertical stepper

Vertical steppers are designed for narrow screen sizes. They are ideal for mobile. All the features of the horizontal stepper can be implemented.

{{"demo": "pages/components/steppers/VerticalLinearStepper.js"}}

## Mobile stepper

Diese Komponente implementiert einen kompakten Stepper, der für ein mobiles Gerät geeignet ist. IT has more limited functionality than the vertical stepper. Siehe [Mobile steps](https://material.io/archive/guidelines/components/steppers.html#steppers-types-of-steps) zur Inspiration.

The mobile stepper supports three variants to display progress through the available steps: text, dots, and progress.

### Text

The current step and total number of steps are displayed as text.

{{"demo": "pages/components/steppers/TextMobileStepper.js", "bg": true}}

### Text with carousel effect

This demo uses [react-swipeable-views](https://github.com/oliviertassinari/react-swipeable-views) to create a carousel.

{{"demo": "pages/components/steppers/SwipeableTextMobileStepper.js", "bg": true}}

### Dots

Use dots when the number of steps is small.

{{"demo": "pages/components/steppers/DotsMobileStepper.js", "bg": true}}

### Fortschritt (Progress)

Verwenden Sie eine Fortschrittsleiste, wenn viele Schritte vorhanden sind oder wenn Schritte eingefügt werden müssen (basierend auf den Antworten auf frühere Schritte).

{{"demo": "pages/components/steppers/ProgressMobileStepper.js", "bg": true}}
