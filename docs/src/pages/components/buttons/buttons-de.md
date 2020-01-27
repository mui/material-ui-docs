---
title: Button React Komponente
components: Button, IconButton, ButtonBase
---

# Button (schaltfläche)

<p class="description">Mit den Schaltflächen können Benutzer mit einem einzigen Tastendruck Aktionen ausführen und Entscheidungen treffen.</p>

[Buttons](https://material.io/design/components/buttons.html) (Schaltflächen / Knöpfe) geben Aktionen an, die ein Nutzer ausführen kann. Sie werden an verschiedenen Orten in Anwendungen verwendet, zum Beispiel:

- Dialoge
- Modale Fenster
- Formulare
- Cards
- Toolbars

## Contained Buttons

[Contained buttons](https://material.io/design/components/buttons.html#contained-button) sind hervorgehoben und unterscheiden sich durch die Verwendung von Höhe und Füllung. Sie enthalten Aktionen, die für Ihre App vorrangig sind.

Das letzte Beispiel dieser Demo zeigt, wie Sie eine Schaltfläche zum Hochladen verwenden.

{{"demo": "pages/components/buttons/ContainedButtons.js"}}

You can remove the elevation with the `disableElevation` prop.

{{"demo": "pages/components/buttons/DisableElevation.js"}}

## Text Buttons

[Text buttons](https://material.io/design/components/buttons.html#text-button) werden normalerweise für weniger ausgeprägte Aktionen verwendet, darunter auch solche, die Folgendes enthalten:

- In Dialogen
- In Karten

In Karten helfen Text Buttons dabei, den Karteninhalt hervorzuheben.

{{"demo": "pages/components/buttons/TextButtons.js"}}

## Outlined Buttons

[Outlined Buttons](https://material.io/design/components/buttons.html#outlined-button) sind Buttons mit mittlerer Betonung. Sie enthalten wichtige Aktionen, aber nicht die primäre Aktion in einer App.

Outlined Buttons sind auch eine Alternative mit geringerer Betonung als Contained Buttons, oder eine Alternative mit höherer Betonung als Text Buttons.

{{"demo": "pages/components/buttons/OutlinedButtons.js"}}

## Upload button

{{"demo": "pages/components/buttons/UploadButtons.js"}}

## Größen

Fancy larger or smaller buttons? Use the `size` property.

{{"demo": "pages/components/buttons/ButtonSizes.js"}}

## Buttons with icons and label

Sometimes you might want to have icons for certain button to enhance the UX of the application as we recognize logos more easily than plain text. For example, if you have a delete button you can label it with a dustbin icon.

{{"demo": "pages/components/buttons/IconLabelButtons.js"}}

## Icon Buttons

Icon buttons are commonly found in app bars and toolbars.

Icons are also appropriate for toggle buttons that allow a single choice to be selected or deselected, such as adding or removing a star to an item.

{{"demo": "pages/components/buttons/IconButtons.js"}}

## Customized buttons

Hier sind einige Beispiele, wie man die Komponente anpassen kann. Mehr dazu erfahren Sie auf der [Überschreibungsdokumentationsseite](/customization/components/).

{{"demo": "pages/components/buttons/CustomizedButtons.js", "defaultCodeOpen": false}}

👑 If you are looking for inspiration, you can check [MUI Treasury's customization examples](https://mui-treasury.com/components/button).

## Complex Buttons

The Text Buttons, Contained Buttons, Floating Action Buttons and Icon Buttons are built on top of the same component: the `ButtonBase`. You can take advantage of this lower level component to build custom interactions.

{{"demo": "pages/components/buttons/ButtonBase.js"}}

## Drittanbieter-Routing Bibliothek

One common use case is to use the button to trigger navigation to a new page. The `ButtonBase` component provides a property to handle this use case: `component`. However for certain focus polyfills `ButtonBase` requires the DOM node of the provided component. This is achieved by attaching a ref to the component and expecting that the component forwards this ref to the underlying DOM node. Given that many of the interactive components rely on `ButtonBase`, you should be able to take advantage of it everywhere.

Here is an [integration example with react-router](/guides/composition/#button).

## Einschränkungen

### Cursor not-allowed

The ButtonBase component sets `pointer-events: none;` on disabled buttons, which prevents the appearance of a disabled cursor.

If you wish to use `not-allowed`, you have two options:

1. **CSS only**. You can remove the pointer events style on the disabled state of the `<button>` element:

  ```css
  .MuiButtonBase-root:disabled {
    cursor: not-allowed;
    pointer-events: auto;
  }
  ```

However:

- You should add `pointer-events: none;` back when you need to display [tooltips on disabled elements](/components/tooltips/#disabled-elements)
- The cursor won't change if you render something other than a button element, for instance, a link `<a>` element.

2. **DOM change**. You can wrap the button:

  ```jsx
  <span style={{ cursor: 'not-allowed' }}>
    <Button component={Link} disabled>
      disabled
    </Button>
  </span>
  ```

This has the advantage of supporting any element, for instance, a link `<a>` element.