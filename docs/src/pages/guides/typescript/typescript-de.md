# TypeScript

<p class="description">Sie können statische Typisierung zu JavaScript hinzufügen, um die Produktivität und die Codequalität dank TypeScript zu verbessern.</p>

Schauen Sie sich das [Create React App mit TypeScript](https://github.com/mui-org/material-ui/tree/next/examples/create-react-app-with-typescript) Beispiel an. Eine Mindestversion von TypeScript 2.8 ist erforderlich.

Unsere Type Definitionen werden mit der folgenden [tsconfig.json](https://github.com/mui-org/material-ui/tree/next/tsconfig.json) getestet. Verwendung einer weniger strengen `tsconfig.json` oder das Weglassen einiger Bibliotheken kann zu Fehlern führen.

## Verwendung von `withStyles`

Verwenden von `withStyles` in TypeScript kann es etwas kniffelig sein, aber es gibt einige Hilfsprogramme, um die Erfahrung so schmerzlos wie möglich zu gestalten.

### Verwenden von `CreateStyles`, um die Typerweiterung zu besiegen

Eine häufige Quelle der Verwirrung ist die [Erweiterung der Typen](https://blog.mariusschulz.com/2017/02/04/typescript-2-1-literal-type-widening) von TypeScript, was dazu führt, dass dieses Beispiel nicht wie erwartet funktioniert:

```ts
const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
  }
};

withStyles(styles);
//         ^^^^^^
//         Typen der Eigenschaft  'flexDirection' sind nicht kompatibel.
// Der Typ 'string' kann dem Typ '"-moz-initial" | "inherit" | "initial" |
// "revert" | "unset" | "column" | "column-reverse" | "row"...'
// nicht zugewiesen werden.
```

Das Problem ist, dass der Typ der `flexDirection` als `string` interpretiert wird, was zu ungenau ist. Um dies zu beheben, können Sie das Styles-Objekt direkt an `withStyles`: übergeben:

```ts
withStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});
```

Wenn Sie jedoch versuchen, die Stile von dem Thema abhängig zu machen, macht Ihnen die Typenerweiterung wieder eine Strich durch die Rechnung:

```ts
withStyles(({ palette, spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing.unit,
    backgroundColor: palette.background.default,
    color: palette.primary.main,
  },
}));
```

Dies liegt daran, dass TypeScript [die Rückgabetypen von Funktionsausdrücken ](https://github.com/Microsoft/TypeScript/issues/241) erweitert.

Aus diesem Grund empfehlen wir die Verwendung unserer `createStyles` Hilfsfunktion zum Erstellen Ihres Stilregelobjekts:

```ts
// Non-dependent styles
const styles = createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
});

// Theme-dependent styles
const styles = ({ palette, spacing }: Theme) => createStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: spacing.unit,
    backgroundColor: palette.background.default,
    color: palette.primary.main,
  },
});
```

`createStyles` ist nur die Identitätsfunktion; es "tut" nichts zur Laufzeit, es hilft nur die Typen zur Kompilierzeit festzulegen.

### Media-Anfragen

`withStyles` erlaubt ein Styles-Objekt mit Top-Level-Media-Abfragen wie:

```ts
const styles = createStyles({
  root: {
    minHeight: '100vh',
  },
  '@media (min-width: 960px)': {
    root: {
      display: 'flex',
    },
  },
});
```

Damit diese Stile an TypeScript übergeben werden können, müssen die Definitionen hinsichtlich der Namen der CSS-Klassen und der tatsächlichen CSS-Eigenschaftsnamen mehrdeutig sein. Aus diesem Grund sollten Klassennamen, die den CSS-Eigenschaften entsprechen, vermieden werden.

```ts
// Fehler, da TypeScript denkte, dass `@media (min-width: 960px)` ein Klassen-
// name und `content` eine css Eigenschaft ist
const ambiguousStyles = createStyles({
  content: {
    minHeight: '100vh',
  },
  '@media (min-width: 960px)': {
    content: {
      display: 'flex',
    },
  },
});

// Dies funktioniert
const ambiguousStyles = createStyles({
  contentClass: {
    minHeight: '100vh',
  },
  '@media (min-width: 960px)': {
    contentClass: {
      display: 'flex',
    },
  },
});
```

### Erweitern Sie Ihre Eigenschaften mit `WithStyles`

Da, wenn eine Komponente mit `withStyles(styles)` dekoriert ist, eine spezielle `classes` Eigenschaft injiziert bekommt, möchten Sie die Eigenschaften entsprechend definieren:

```ts
const styles = (theme: Theme) => createStyles({
  root: { /* ... */ },
  paper: { /* ... */ },
  button: { /* ... */ },
});

interface Props {
  // Nicht style Eigenschaften
  foo: number;
  bar: boolean;
  // Injizierte Style Eigenschaften
  classes: {
    root: string;
    paper: string;
    button: string;
  };
}
```

Dies ist jedoch nicht sehr [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) weil Sie die Klassennamen (`'root'`, `'paper'`, `'button'`, ...) an zwei verschiedenen Stellen pflegen müssen. Wir stellen einen Typoperator `WithStyles` bereit, um damit zu helfen. So kannst du einfach schreiben

```ts
import { WithStyles, createStyles } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  root: { /* ... */ },
  paper: { /* ... */ },
  button: { /* ... */ },
});

interface Props extends WithStyles<typeof styles> {
  foo: number;
  bar: boolean;
}
```

### Komponenten dekorieren

Anwenden von `withStyles(styles)` als Funktion funktioniert wie erwartet:

```tsx
const DecoratedSFC = withStyles(styles)(({ text, type, color, classes }: Props) => (
  <Typography variant={type} color={color} classes={classes}>
    {text}
  </Typography>
));

const DecoratedClass = withStyles(styles)(
  class extends React.Component<Props> {
    render() {
      const { text, type, color, classes } = this.props
      return (
        <Typography variant={type} color={color} classes={classes}>
          {text}
        </Typography>
      );
    }
  }
);
```

Aufgrund einer [aktuellen Einschränkung der TypeScript-Dekorateure](https://github.com/Microsoft/TypeScript/issues/4881), kann `withStyles(styles)` leider nicht als Dekorator in TypeScript verwendet werden.

## Anpassung des `Theme`

Beim Hinzufügen benutzerdefinierter Eigenschaften zum `Theme` können Sie es weiterhin in stark typisierter Weise verwenden, indem Sie die [Modulerweiterung von TypeScript](https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation) nutzen.

Im folgenden Beispiel wird eine `appDrawer` Eigenschaft hinzugefügt, welche in das von `material-ui` exportierte Theme eingefügt wird:

```ts
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width']
      breakpoint: Breakpoint
    }
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width']
      breakpoint?: Breakpoint
    }
  }
}
```

Und eine benutzerdefinierte Theme Generierung mit zusätzlichen Standardoptionen:

**./styles/createMyTheme**:

```ts
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    appDrawer: {
      width: 225,
      breakpoint: 'lg',
    },
    ...options,
  })
}
```

Dies könnte wie folgt verwendet werden:

```ts
import createMyTheme from './styles/createMyTheme';

const theme = createMyTheme({ appDrawer: { breakpoint: 'md' }});
```

## Verwendung der `component` Eigenschaft

Mit der Material-UI können Sie den Wurzelknoten einer Komponente durch die `component` Eigenschaft ersetzen. For example, a `Button`'s root node can be replaced with a React Router `Link`, and any additional props that are passed to `Button`, such as `to`, will be spread to the `Link` component, meaning you can do this:

```jsx
import { Link } from 'react-router-dom';

<Button component={Link} to="/">Nach Hause</Button>
```

However, TypeScript will complain about it, because `to` is not part of the `ButtonProps` interface, and with the current type declarations it has no way of inferring what props can be passed to `component`.

The current workaround is to cast Link to `any`:

```tsx
import { Link } from 'react-router-dom';
import Button, { ButtonProps } from '@material-ui/core/Button';

interface LinkButtonProps extends ButtonProps {
  to: string;
  replace?: boolean;
}

const LinkButton = (props: LinkButtonProps) => (
  <Button {...props} component={Link as any} />
)

// Benutzung:
<LinkButton color="primary" to="/">Nach Hause</LinkButton>
```

Material-UI components pass some basic event handler props (`onClick`, `onDoubleClick`, etc.) to their root nodes. These handlers have a signature of:

```ts
(event: MouseEvent<HTMLElement, MouseEvent>) => void
```

which is incompatible with the event handler signatures that `Link` expects, which are:

```ts
(event: MouseEvent<AnchorElement>) => void
```

Any element or component that you pass into `component` will have this problem if the signatures of their event handler props don't match.

There is an ongoing effort to fix this by making component props generic.

### Avoiding properties collision

The previous strategy suffers from a little limitation: properties collision. The component providing the `component` property might not forward all its properties to the root element. To workaround this issue, you can create a custom component:

```tsx
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const MyLink = (props: any) => <Link to="/" {...props} />;

// Benutzung:
<Button color="primary" component={MyLink}>Nach Hause</Button>
```