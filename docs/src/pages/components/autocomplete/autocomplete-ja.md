---
title: オートコンプリートReactコンポーネント
components: TextField, Popper, Autocomplete
---

# Autocomplete

<p class="description">オートコンプリートは、推奨オプションのパネルによって強化された通常のテキスト入力です。</p>

ウィジェットは、単一行テキストボックスの値を設定する際に以下の2通りの状況で役に立ちます。

1. テキストボックスの値が、予め決められた許容値の中から選ばないといけない場合。 例えば、位置の欄は [combo box](#combo-box)の中から選ばないといけない。
2. テキストボックスが任意の値を含む可能性があるが、ユーザーに可能性のある値の提案をすることが有効な場合。例えば、検索欄で近い、又は、以前の検索結果を示してユーザーの時間を節約する。[free solo](#free-solo).

"react-select"と"downshift"というパッケージの改良版であることを意識しています。

## Combo box

テキストボックスの値は、予め決められた許容値の中から選ばないといけない

{{"demo": "pages/components/autocomplete/ComboBox.js"}}

### Playground

以下の各例は、Autocompleteコンポーネントの各機能を示しています。

{{"demo": "pages/components/autocomplete/Playground.js"}}

### Country select

248の国から一つ選びます。

{{"demo": "pages/components/autocomplete/CountrySelect.js"}}

### Controllable states

コンポーネントは、操作できる二つのステートを持ちます。

1. "value"ステートは `value`/`onChange` を組み合わせて使用します。 この値は、ユーザーが選択した値を示します。例えば、<kbd>Enter</kbd>を押している状態。
2. "input value"ステートは`inputValue`/`onInputChange` を組み合わせて使用します。 この値は、テキストボックスに表示される値を示します。

> 二つのステートは解離しており、独立して管理される必要があります。

{{"demo": "pages/components/autocomplete/ControllableStates.js"}}

## Free solo

`freeSolo`をtureにすることで、テキストボックスに任意の値を含むことができます。 

### Search input

提案付きの**検索欄**に使われることを主な使われ方として設計されています。例えば、Google searchやreact-autowhatever 

{{"demo": "pages/components/autocomplete/FreeSolo.js"}}

### Creatable

このモードを[combo box](#combo-box)のような体験(selectの拡張版) に使う意図であれば、以下のような設定をお勧めします。 

- `selectOnFocus`でユーザーが選択した値を消せるようにする。 
- `clearOnBlur` でユーザーが新しい値を入力できるようにする。 
- `handleHomeEndKeys`でポップアップな内で<kbd>Home</kbd> and <kbd>End</kbd>キーを使ってフォーカスが移動できるようにする。 
- 最後の選択肢に, 例えば`Add "YOUR SEARCH"`を追加する。 

{{"demo": "pages/components/autocomplete/FreeSoloCreateOption.js"}}

ユーザーが新しい値を入力する時に、ダイアログを表示することもできます。

{{"demo": "pages/components/autocomplete/FreeSoloCreateOptionDialog.js"}}

## Grouped

{{"demo": "pages/components/autocomplete/Grouped.js"}}

## Disabled options

{{"demo": "pages/components/autocomplete/DisabledOptions.js"}}

## `useAutocomplete`

高度な利用方法のために、 `useAutocomplete()` hooksがあります。 JSXのレンダリングに関連する値以外は、Autocompleteコンポーネントとほぼ同じ値をとります。 Autocompleteコンポーネントは内部でこのhookを使用しています。

```jsx
import useAutocomplete from '@material-ui/lab/useAutocomplete';
```

- [4.5 kB gzipped](/size-snapshot).

{{"demo": "pages/components/autocomplete/UseAutocomplete.js", "defaultCodeOpen": false}}

### Customized hook

{{"demo": "pages/components/autocomplete/CustomizedHook.js"}}

[Customized Autocomplete](#customized-autocomplete) 部分で、 hookの代わりに `Autocomplete`を使用したカスタマイズ例が見れます。

## Asynchronous requests

{{"demo": "pages/components/autocomplete/Asynchronous.js"}}

### Google Maps place

Google マップの位置の自動保管用のカスタムUI 

{{"demo": "pages/components/autocomplete/GoogleMaps.js"}}

このデモでは、 [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/tutorial) APIをロードする必要があります。

> Google Maps JavaScript APIを使用する前に、サインアップして、決済アカウントを作成する必要があります。

## Multiple values

タグとも言える。ユーザーは一つ以上の値を選択することができます。

{{"demo": "pages/components/autocomplete/Tags.js"}}

### Fixed options

インターフェースから削除されないように、特定のタグを固定する必要があるイベント中、チップスを無効化することができます。

{{"demo": "pages/components/autocomplete/FixedTags.js"}}

### Checkboxes

{{"demo": "pages/components/autocomplete/CheckboxesTags.js"}}

### Limit tags

`limitTags` でフォーカスしていない時に表示する選択肢の数に上限を設けられます。

{{"demo": "pages/components/autocomplete/LimitTags.js"}}

## サイズ

Fancy smaller inputs? `size`propを使用します。

{{"demo": "pages/components/autocomplete/Sizes.js"}}

## Customizations

### Custom input

`renderInput`でレンダリングされる入力をカスタマイズできます。 このrender propsの一つ目の引数は、継承する必要のあるpropsを含みます。 `ref` と `inputProps` の扱いに特に注意してください。 

{{"demo": "pages/components/autocomplete/CustomInputAutocomplete.js"}}

### GitHub's picker

GitHubのラベルピッカーを再現したデモです。

{{"demo": "pages/components/autocomplete/GitHubLabel.js"}}

[Customized hook](#customized-hook) 部分で、 コンポーネントの代わりに、`useAutocomplete`hookを使用したカスタマイズ例が見れます。

## Highlights

以下のデモはこちらに依存します。[autosuggest-highlight](https://github.com/moroshko/autosuggest-highlight), 提案されたテキストや自動保管コンポーネントをハイライトする小さいサイズの(1 kB)ユーティリティ

{{"demo": "pages/components/autocomplete/Highlights.js"}}

## Custom filter

`filterOptions`に流せるフィルターメソッドを作成できるファクトリーを露出しているコンポーネント デフォルトのフィルター挙動を変更するのに使うことができます。

```js
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
```

### `createFilterOptions(config) => filterOptions`

#### 引数

1. `config` (*Object* [optional]): 
  - `config.ignoreAccents` (*Boolean* [optional]): デフォルトは`true`. 発音記号を削除する
  - `config.ignoreCase` (*Boolean* [optional]): Defaults to `true`. Lowercase everything.
  - `config.limit` (*Number* [optional]): Default to null. Limit the number of suggested options to be shown. For example, if `config.limit` is `100`, only the first `100` matching options are shown. It can be useful if a lot of options match and virtualization wasn't set up.
  - `config.matchFrom` (*'any' | 'start'* [optional]): Defaults to `'any'`.
  - `config.stringify` (*Func* [optional]): Controls how an option is converted into a string so that it can be matched against the input text fragment.
  - `config.trim` (*Boolean* [optional]): Defaults `false`. Remove trailing spaces.

#### 戻り値

`filterOptions`: the returned filter method can be provided directly to the `filterOptions` prop of the `Autocomplete` component, or the parameter of the same name for the hook.

In the following demo, the options need to start with the query prefix:

```js
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title,
});

<Autocomplete filterOptions={filterOptions} />
```

{{"demo": "pages/components/autocomplete/Filter.js", "defaultCodeOpen": false}}

### 高度な機能(Advanced)

For richer filtering mechanisms, like fuzzy matching, it's recommended to look at [match-sorter](https://github.com/kentcdodds/match-sorter). 例えば：

```jsx
import matchSorter from 'match-sorter';

const filterOptions = (options, { inputValue }) =>
  matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />
```

## Virtualization

Search within 10,000 randomly generated options. The list is virtualized thanks to [react-window](https://github.com/bvaughn/react-window).

{{"demo": "pages/components/autocomplete/Virtualize.js"}}

## 制限事項

### autocomplete/autofill

The browsers have heuristics to help the users fill the form inputs. However, it can harm the UX of the component.

By default, the component disable the **autocomplete** feature (remembering what the user has typed for a given field in a previous session) with the `autoComplete="off"` attribute.

However, in addition to remembering past entered values, the browser might also propose **autofill** suggestions (saved login, address, or payment details). In the event you want the avoid autofill, you can try the following:

- Name the input without leaking any information the browser can use. e.g. `id="field1"` instead of `id="country"`. If you leave the id empty, the component uses a random id.
- Set `autoComplete="new-password"`: 
        jsx
        <TextField
        {...params}
        inputProps={{
          ...params.inputProps,
          autoComplete: 'new-password',
        }}
        />

### iOS VoiceOver

VoiceOver on iOS Safari doesn't support the `aria-owns` attribute very well. You can work around the issue with the `disablePortal` prop.

### ListBox コンポーネント

`Listbox コンポーネント` のカスタムプロパティを提供する場合、意図するスクロールコンテナの `role` 属性として `listbox` が設定されていることを確認する必要があります。 これにより、例えばキーボードを使用して移動する場合など、スクロールの正しい動作が保証されます。

## アクセシビリティ

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#combobox)

テキストボックスに対して、ラベルの使用を奨励しています。 コンポーネントは WAI-ARIA オーサリングを実装しています。