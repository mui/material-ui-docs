# Testen

<p class="description">Schreiben Sie Tests, um Regressionen zu verhindern und besseren Code zu schreiben.</p>

Die Beispiele in diesem Abschnitt verwenden [globale Methoden von Mocha](https://mochajs.org/api/global.html), nicht [Jest](https://jestjs.io/docs/en/api).

## Intern

Wir nehmen Tests ernst. Wir haben **eine breite Palette** von Tests geschrieben und halten diese aktuell, sodass wir mit Vertrauen auf den Komponenten iterieren können, zum Beispiel haben sich die, von [Argos-CI](https://www.argos-ci.com/mui-org/material-ui) zur Verfügung gestellten, visuellen Regressionstests als sehr hilfreich erwiesen. Weitere Informationen zu unseren internen Tests finden Sie in der [README](https://github.com/mui-org/material-ui/blob/next/test/README.md).

Obwohl wir eine 100%ige Testabdeckung erreicht haben, empfehlen wir unseren Benutzern nicht, dasselbe zu tun. [![Abdeckungsstatus](https://img.shields.io/codecov/c/github/mui-org/material-ui/next.svg)](https://codecov.io/gh/mui-org/material-ui/branch/next)

## Userspace

What about writing tests in userspace? The Material-UI styling infrastructure uses some helper functions built on top of [enzyme](https://github.com/airbnb/enzyme) to make the process easier, which we are exposing. You can take advantage of them if you so choose.

### Shallow rendering

Shallow rendering is useful to constrain your testing to a component as a unit. This also ensures that your tests aren't indirectly asserting behavior of child components. Shallow rendering was created to test components in isolation. This means without leaking child implementation details such as the context.

The `createShallow()` function can be used for this situation. Aside from wrapping the enzyme API, it provides a `dive` and `untilSelector` option.

### Full DOM rendering

Full DOM rendering is ideal for use cases where you have components that may interact with DOM APIs or may require the full lifecycle in order to fully test the component (e.g., `componentDidMount` etc.).

The `createMount()` function is provided for this situation. Aside from wrapping the enzyme API, it provides a `cleanUp` function.

### Render to string

Rendering to a string is useful to test the behavior of the components that are used on the server. You can take advantage of this to assert the generated HTML string.

The `createRender()` function is ideal for this. This is just an alias for the enzyme API, which is only exposed for consistency.

## API

### `createShallow([options]) => shallow`

Generate an enhanced shallow function with the needed context. Please refer to the [enzyme API documentation](https://airbnb.io/enzyme/docs/api/shallow.html) for further details on the `shallow` function.

#### Arguments

1. `Optionen` (*Object* [optional]) 
    - `options.shallow` (*Function* [optional]): The shallow function to enhance, it uses **enzyme by default**.
    - `options.untilSelector` (*String* [optional]): Recursively shallow renders the children until it can find the provided selector. It's useful to drill down higher-order components.
    - `options.dive` (*Boolean* [optional]): Shallow render the one non-DOM child of the current wrapper, and return a wrapper around the result.
    - The other keys are forwarded to the options argument of `enzyme.shallow()`.

#### Rückgabewerte

`shallow` (*shallow*): Eine shallow-Funktion.

#### Beispiele

```jsx
importiere { createShallow } aus '@ material-ui / core / test-utils';

beschreiben ('<0 />', () =&gt; {
  sei flach;

  vor (()) =&gt; {// Dies ist Mocha; in Jest verwende beforeAll
    shallow = createShallow ();
  });

  es ('sollte funktionieren', () =&gt; {
    const wrapper = shallow (<0 />);
  });
});
```

### `createMount([options]) => mount`

Generieren Sie eine erweiterte Mount-Funktion mit dem erforderlichen Kontext. Bitte beachten Sie die [Enzyme API-Dokumentation](https://airbnb.io/enzyme/docs/api/mount.html) für weitere Informationen zur `mount` Funktion.

#### Argumente

1. `Optionen` (*Object* [optional]) 
    - `options.mount` (*Function* [optional]): Die Mount-Funktion, die verbessert werden soll, verwendet **standardmäßig Enzym**.
    - Die anderen Schlüssel werden an das Optionsargument von `enzyme.mount()` weitergeleitet.

#### Rückgabewerte

`mount` (*mount*): Die mount-Funktion.

#### Beispiele

```jsx
import { createMount } from '@material-ui/core/test-utils';

describe('<MyComponent />', () => {
  let mount;

  before(() => {
    mount = createMount();
  });

  after(() => {
    mount.cleanUp();
  });

  it('should work', () => {
    const wrapper = mount(<MyComponent />);
  });
});
```

### `createRender([options]) => render`

Generieren Sie eine Render-zu-String-Funktion mit dem erforderlichen Kontext. Bitte beachten Sie die [Enzyme API-Dokumentation](https://airbnb.io/enzyme/docs/api/render.html) für weitere Informationen zur `render` Funktion.

#### Argumente

1. `Optionen` (*Object* [optional]) 
    - `options.render` (*Function* [optional]): Die Renderfunktion, die verbessert werden soll, verwendet **standardmäßig Enzym**.
    - Die anderen Schlüssel werden an das Optionsargument von `enzyme.render()` weitergeleitet.

#### Rückgabewerte

`render` (*Funktion*): Eine Render-zu-String-Funktion.

#### Beispiele

```jsx
import { createRender } from '@material-ui/core/test-utils';

describe('<MyComponent />', () => {
  let render;

  before(() => {
    render = createRender();
  });

  it('should work', () => {
    const wrapper = render(<MyComponent />);
  });
});
```