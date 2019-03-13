---
title: Modal React-Komponente
components: Modal
---
# Modal

<p class="description">Die modale Komponente bietet eine solide Grundlage für das Erstellen von Dialogen, Popovers, Leuchtkästen oder anderen Elementen.</p>

Die Komponente rendered seine `Kinder` - Knoten vor einer Hintergrund - Komponente. Das `Modal` bietet einige hilfreiche Funktionen gegenüber der Verwendung einer [`Portal`](/utils/portal/) Komponente und einiger Stile:

- Verwaltet modales Stacking, wenn eins zu einem Zeitpunkt nicht ausreicht.
- Erstellt einen Hintergrund zum Deaktivieren der Interaktion unter dem Modal.
- Es deaktiviert das Blättern des Seiteninhalts, während es geöffnet ist.
- ♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
- ♿️ Adds the appropriate ARIA roles automatically.

> **Terminology note**. The term "modal" is sometimes used to mean "dialog", but this is a misnomer. A Modal window describes parts of a UI. An element is considered modal if [it blocks interaction with the rest of the application](https://en.wikipedia.org/wiki/Modal_window).

If you are creating a modal dialog, you probably want to use the [Dialog](/demos/dialogs/) component rather than directly using Modal. Modal is a lower-level construct that is leveraged by the following components:

- [Dialog](/demos/dialogs/)
- [Drawer](/demos/drawers/)
- [Menu](/demos/menus/)
- [Popover](/utils/popover/)

## Einfaches Modal

{{"demo": "pages/utils/modal/SimpleModal.js"}}

## Performance

The content of the modal is **lazily mounted** into the DOM. It ensures that having many closed modal in your React tree won't slow down your page.

Das Erstellen von React-Elementen ist jedoch ebenfalls mit Kosten verbunden. Betrachten Sie den folgenden Fall:

```jsx
<Modal open={false}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat (g)</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</Modal>
```

We create a lot of React elements that will never be mounted. It's wasteful 

```jsx
<Modal open={false}>
  <TableComponent />
</Modal>
```

This way, you take advantage of [React render laziness evaluation](https://overreacted.io/react-as-a-ui-runtime/#lazy-evaluation). The `TableComponent` render method will only be evaluated when opening the modal.

## Barrierefreiheit

- Be sure to add `aria-labelledby="id..."`, referencing the modal title, to the `Modal`. Additionally, you may give a description of your modal with the `aria-describedby="id..."` property on the `Modal`.

```jsx
<Modal
  aria-labelledby="simple-modal-title"
  aria-describedby="simple-modal-description"
>
  <Typography variant="h6" id="modal-title">
    My Title
  </Typography>
  <Typography variant="subtitle1" id="simple-modal-description">
    My Description
  </Typography>
</Modal>
```

- The [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) can help you set the initial focus on the most relevant element, based on your modal content.