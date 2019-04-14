# Komposition

<p class="description">Die Material-UI versucht die Komposition so einfach wie möglich zu gestalten.</p>

## Komponenten verpacken

Um maximale Flexibilität und Leistung zu gewährleisten, benötigen wir einen Weg, um die Art der untergeordneten Elemente einer Komponente zu kennen. Zur Lösung dieses Problems haben wir einige unserer Komponenten, wenn nötig, mit der statische Eigenschaft ` muiName ` markiert.

Möglicherweise müssen Sie jedoch eine Komponente umhüllen, um sie zu verbessern, was mit der `muiName` Lösung in Konflikt geraten kann. Wenn Sie eine Komponente umschließen, überprüfen Sie, ob für diese Komponente diese statische Eigenschaft festgelegt ist.

Wenn dieses Problem auftritt, müssen Sie dasselbe Tag für die Umwickelkomponente, das mit der umwickelten Komponente verwendet wird. Außerdem sollten Sie die Eigenschaften weiterleiten, da die übergeordnete Komponente möglicherweise die übergeordneten Komponentenstützen steuern muss.

Sehen wir uns ein Beispiel an:

```jsx
const WrappedIcon = props => <Icon {...props} />;
WrappedIcon.muiName = Icon.muiName;
```

{{"demo": "pages/guides/composition/Composition.js"}}

## Komponenteneigenschaft

Mit der Material-UI können Sie den Stammknoten der gerendert wird mit der `component` Eigenschaft ändern.

### Wie funktioniert das?

Die Komponente wird wie folgt gerendert:

```js
return React.createElement(this.props.component, props)
```

Beispielsweise wird die `List` Komponente mit einem `<ul>`-Element gerendert. Dies kann durch übergeben der [React component](https://reactjs.org/docs/components-and-props.html#function-and-class-components) als `component` Eigenschaft geändert werden. Im folgenden Beispiel wird die Komponente `List` stattdessen mit einem `<nav>` Element als Wurzelknoten gerendert:

```jsx
<List component="nav">
  <ListItem>
    <ListItemText primary="Trash" />
  </ListItem>
  <ListItem>
    <ListItemText primary="Spam" />
  </ListItem>
</List>
```

Dieses Muster ist sehr leistungsfähig und ermöglicht eine große Flexibilität sowie die Möglichkeit, mit anderen Bibliotheken wie dem [`React-Router`](#react-router-demo) oder Ihre Lieblingsformularbibliothek zu arbeiten. Aber es gibt auch eine **kleine Einschränkung!**

### Vorbehalt beim Inlining

Verwenden einer Inline-Funktion als Argument für die `component` Eigenschaft kann dazu führen, dass **unerwartetes unmounting** passiert, da Sie jedes mal eine neue Komponente an die `component` Eigenschaft übergeben, wenn React rendert. Zum Beispiel, wenn Sie ein benutzerdefiniertes `ListItem` erstellen möchten, das als Link fungiert, können Sie Folgendes tun:

```jsx
import { Link } from 'react-router-dom';

const ListItemLink = ({ icon, primary, secondary, to }) => (
  <li>
    <ListItem button component={props => <Link to={to} {...props} />}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}
      <ListItemText inset primary={primary} secondary={secondary} />
    </ListItem>
  </li>
);
```

⚠️ Da wir jedoch eine Inline-Funktion verwenden, um die gerenderte Komponente zu ändern, wird die Verknüpfung von React bei jedem Rendern des `ListItemLink ` aufgehoben. React aktualisiert nicht nur das DOM unnötig, sondern die Wellenvisualisierung des `ListItem` funktioniert auch nicht richtig.

Die Lösung ist einfach: ** vermeiden von Inline-Funktionen und stattdessen übergeben eine statische Komponente an die `component` Eigenschaft. Lassen Sie uns unser `ListItemLink` zu dem Folgendem ändern:</p> 

```jsx
import { Link } from 'react-router-dom';

class ListItemLink extends React.Component {
  renderLink = React.forwardRef((itemProps, ref) => (
    // mit react-router-dom@^5.0.0 benutze `ref` anstatt `innerRef`
    <RouterLink to={this.props.to} {...itemProps} innerRef={ref} />
  ));

  render() {
    const { icon, primary, secondary, to } = this.props;
    return (
      <li>
        <ListItem button component={this.renderLink}>
          {icon && <ListItemIcon>{icon}</ListItemIcon>}
          <ListItemText inset primary={primary} secondary={secondary} />
        </ListItem>
      </li>
    );
  }
}
```

`renderLink` wird jetzt immer auf dieselbe Komponente verweisen.

### Vorbehalt mit der Abkürzung

Sie können die Weiterleitung von Eigenschaften nutzen, um den Code zu vereinfachen. In diesem Beispiel erstellen wir keine Zwischenkomponente:

```jsx
import { Link } from 'react-router-dom';

<ListItem button component={Link} to="/">
```

⚠️ Jedoch weist diese Strategie eine kleine Einschränkung auf: die Kollision der Eigenschaften. Die Komponente, die die `component` Eigenschaft bereitstellt (z.B. ListItem), leitet möglicherweise nicht alle Eigenschaften an das Stammelement weiter(z.B. dense).

### React Router Demo

Hier ist eine Demo mit [React Router DOM](https://github.com/ReactTraining/react-router):

{{"demo": "pages/guides/composition/ComponentProperty.js"}}

### Mit TypeScript

Die Details finden Sie im [TypeScript-Handbuch](/guides/typescript#usage-of-component-property).

### Vorbehalt bei Refs

Einige Komponenten wie `ButtonBase` (und daher `Button`) benötigen Zugriff auf den darunterliegenden DOM-Knoten. Dies wurde zuvor mit `ReactDOM.findDOMNode(this)` durchgeführt. `FindDOMNode` ist jedoch veraltet (wodurch es im React Concurrent Modus nicht anwendbar ist), zugunsten der Komponenten Refs und ref - Forwarding.

Es ist daher erforderlich, dass die Komponente, die Sie an die `Komponente` Eigenschaft übergeben, einen Ref halten kann. Dazu gehören:

- Klassen-Komponenten
- ref Weiterleitungskomponenten (`React.forwardRef`)
- eingebaute Komponenten zB `div` oder `a`

Ist dies nicht der Fall, geben wir eine Warnung ähnlich der folgenden aus:

> Ungültige `component` Eigenschaft an `ComponentName` übergeben. Es wurde ein Elementtyp erwartet, der eine Referenz enthalten kann.

Zusätzlich gibt React eine Warnung aus.

Sie können diese Warnung beheben, indem Sie `React.forwardRef` verwenden. Weitere Informationen dazu finden Sie in [dieser Sektion in den offiziellen React-Dokumenten](https://reactjs.org/docs/forwarding-refs.html).

Um herauszufinden, ob die Material-UI - Komponente, die Sie verwenden, diese Anforderung hat, überprüfen Sie API - Dokumentation für diese Komponente. Wenn Sie Refs weiterleiten müssen, wird die Beschreibung mit diesem Abschnitt verknüpft.

### Vorsicht bei StrictMode oder unstable_ConcurrentMode

Wenn Sie Klassenkomponenten an die `Komponente` Eigenschaft übergeben und nicht im strikten Modus laufen, Sie müssen nichts ändern, da wir `ReactDOM.findDOMNode` sicher verwenden können. Bei Funktionskomponenten müssen Sie jedoch Ihre Komponente in `React.forwardRef` einhüllen:

```diff
- const MyButton = props => <div {...props} />
+ const MyButton = React.forwardRef((props, ref) => <div {...props} ref={ref} />)
<Button component={MyButton} />
```