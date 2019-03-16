---
title: Dialog React Komponente
components: Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide
---
# Dialoge

<p class="description">Dialoge informieren Benutzer über eine Aufgabe und können wichtige Informationen enthalten, Entscheidungen erfordern oder mehrere Aufgaben umfassen.</p>

Ein [Dialog](https://material.io/design/components/dialogs.html) ist ein Typ von [modalen](/utils/modal/) Fenstern, der vor dem App-Inhalt angezeigt wird, um wichtige Informationen bereitzustellen oder um eine Entscheidung zu bitten. Dialoge deaktivieren alle App-Funktionen, wenn sie angezeigt werden, und bleiben auf dem Bildschirm, bis sie bestätigt, abgewiesen oder eine erforderliche Aktion ausgeführt wurde.

Dialoge sind absichtlich unterbrechend und sollten sparsam eingesetzt werden.

## Einfache Dialoge

Einfache Dialoge können zusätzliche Details oder Aktionen zu einem Listenelement bereitstellen. Sie können zum Beispiel Avatare, Symbole, Subtexte oder orthogonale Aktionen (z. B. ein Konto hinzufügen) beinhalten.

Berührungsmechanik:

- Choosing an option immediately commits the option and closes the menu
- Touching outside of the dialog, or pressing Back, cancels the action and closes the dialog

{{"demo": "pages/demos/dialogs/SimpleDialog.js"}}

## Warnungen

Alerts are urgent interruptions, requiring acknowledgement, that inform the user about a situation.

Most alerts don't need titles. They summarize a decision in a sentence or two by either:

- Asking a question (e.g. "Delete this conversation?")
- Making a statement related to the action buttons

Use title bar alerts only for high-risk situations, such as the potential loss of connectivity. Users should be able to understand the choices based on the title and button text alone.

If a title is required:

- Use a clear question or statement with an explanation in the content area, such as "Erase USB storage?".
- Avoid apologies, ambiguity, or questions, such as “Warning!” or “Are you sure?”

{{"demo": "pages/demos/dialogs/AlertDialog.js"}}

You can also swap out the transition, the next example uses `Slide`.

{{"demo": "pages/demos/dialogs/AlertDialogSlide.js"}}

## Form dialogs

Form dialogs allow users to fill out form fields within a dialog. For example, if your site prompts for potential subscribers to fill in their email address, they can fill out the email field and touch 'Submit'.

{{"demo": "pages/demos/dialogs/FormDialog.js"}}

## Customized dialog

If you have been reading the [overrides documentation page](/customization/overrides/) but you are not confident jumping in, here is one example of how you can customize the `DialogTitle` to support a close button.

⚠️ Auch wenn die Material-Design Spezifikation zur Verwendung von Themes ermutigt, liegen diese Beispiele außerhalb der üblichen Pfade.

{{"demo": "pages/demos/dialogs/CustomizedDialog.js"}}

## Full-screen dialogs

{{"demo": "pages/demos/dialogs/FullScreenDialog.js"}}

## Optional sizes

You can set a dialog maximum width by using the `maxWidth` enumerable in combination with the `fullWidth` boolean. When the `fullWidth` property is true, the dialog will adapt based on the `maxWidth` value.

{{"demo": "pages/demos/dialogs/MaxWidthDialog.js"}}

## Responsive full-screen

You may make a dialog responsively full screen the dialog using `withMobileDialog`. By default, `withMobileDialog()(Dialog)` responsively full screens *at or below* the `sm` [screen size](/layout/basics/). You can choose your own breakpoint for example `xs` by passing the `breakpoint` argument: `withMobileDialog({breakpoint: 'xs'})(Dialog)`.

{{"demo": "pages/demos/dialogs/ResponsiveDialog.js"}}

## Confirmation dialogs

Confirmation dialogs require users to explicitly confirm their choice before an option is committed. For example, users can listen to multiple ringtones but only make a final selection upon touching “OK”.

Touching “Cancel” in a confirmation dialog, or pressing Back, cancels the action, discards any changes, and closes the dialog.

{{"demo": "pages/demos/dialogs/ConfirmationDialog.js"}}

## Accessibility

Follow the [Modal accessibility section](/utils/modal/#accessibility).

## Scrolling long content

When dialogs become too long for the user’s viewport or device, they scroll.

- `scroll=paper` the content of the dialog scrolls within the paper element.
- `scroll=body` the content of the dialog scrolls within the body element.

Try the demo below to see what we mean:

{{"demo": "pages/demos/dialogs/ScrollDialog.js"}}

## Draggable dialog

You can create a draggable dialog by using [react-draggable](https://github.com/mzabriskie/react-draggable). To do so, you can pass the the imported `Draggable` component as the `PaperComponent` of the `Dialog` component. This will make the entire dialog draggable.

{{"demo": "pages/demos/dialogs/DraggableDialog.js"}}

## Performance

Follow the [Modal performance section](/utils/modal/#performance).