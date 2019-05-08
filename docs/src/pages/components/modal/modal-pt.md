---
title: Componente React Modal
components: Modal
---

# Modal

<p class="description">O componente modal fornece uma base sólida para criar diálogos, popovers, lightboxes ou qualquer outra coisa.</p>

O componente renderiza o conteúdo de seu `children` sobre um backdrop. O `Modal` fornece alguns recursos úteis quando utilizado sobre um componente [`Portal`](/utils/portal/) e alguns estilos:

- Gerencia o empilhamento de chamadas 'um a cada vez'.
- Cria um backdrop para desabilitar a interação abaixo do modal.
- Quando aberto, desabilita o scroll da página.
- ♿️ It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.
- ♿️ Adds the appropriate ARIA roles automatically.
- 📦 [6.5 kB gzipped](/size-snapshot).

> **Nota sobre a terminologia**. O termo "modal" algumas vezes é usado com o sentido de "diálogo", mas isto é um equívoco. Uma janela Modal descreve partes de uma UI. Um elemento é considerado modal se [ele bloqueia interações com o resto da aplicação](https://en.wikipedia.org/wiki/Modal_window).

Se você está criando um diálogo Modal, você provavelmente quer usar o componente [Dialog](/components/dialogs/) em vez de diretamente um Modal. Modal uma estrutura de baixo-nível que é alavancada pelos seguintes componentes:

- [Dialog](/components/dialogs/)
- [Drawer](/components/drawers/)
- [Menu](/components/menus/)
- [Popover](/components/popover/)

## Modal Simples

{{"demo": "pages/components/modal/SimpleModal.js"}}

## Performance

The content of the modal is **lazily mounted** into the DOM. It ensures that having many closed modal in your React tree won't slow down your page.

However, creating React elements has a cost too. Consider the following case:

```jsx
<Modal open={false}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell>Dessert (100g serving)</TableCell>
        <TableCell align="right">Calories</TableCell>
        <TableCell align="right">Fat&nbsp;(g)</TableCell>
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

We create a lot of React elements that will never be mounted. It's wasteful 🐢. You can **speed up** the rendering by moving the modal body into its own component.

```jsx
<Modal open={false}>
  <TableComponent />
</Modal>
```

This way, you take advantage of [React render laziness evaluation](https://overreacted.io/react-as-a-ui-runtime/#lazy-evaluation). The `TableComponent` render method will only be evaluated when opening the modal.

## Acessibilidade

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

- O [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/examples/dialog-modal/dialog.html) pode ajudá-lo a definir o foco inicial no elemento mais relevante, com base no seu conteúdo modal.