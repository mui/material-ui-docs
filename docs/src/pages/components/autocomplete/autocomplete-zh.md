---
title: React Autocomplete（自动补全）组件
components: TextField, Popper, Autocomplete
---

# Autocomplete（自动补全）

<p class="description">自动补全是一个通过一组建议选项来帮助用户输入的普通文本输入框。</p>

该组件常用于以下两个场景中的单行文本框赋值：

1. 文本框必须取值于某个预设值的集合，例如位置字段必须包含合理的位置： [组合框](#combobox)
2. 文本框可以设置任何值，但是为用户提供可能的选项会更好，譬如搜索框可以提供近似的或者曾搜索过的选项以节省用户时间：[灵活的单文本框](#free-solo)

## 组合框

必须取值于一个预设的可选值集合

{{"演示": "pages/components/autocomplete/IntegrationAutosuggest.js"}}

### Playground

Each of the following examples demonstrate one feature of the Autocomplete component.

{{"demo": "pages/components/autocomplete/Playground.js"}}

### Country select

Choose one country between 248.

{{"demo": "pages/components/autocomplete/CountrySelect.js"}}

## Free solo

Set `freeSolo` to true so the textbox can contain any arbitrary value.

{{"demo": "pages/components/autocomplete/FreeSolo.js"}}

## Grouped

{{"demo": "pages/components/autocomplete/Grouped.js"}}

## Disabled options

{{"demo": "pages/components/autocomplete/DisabledOptions.js"}}

## `useAutocomplete`

For advanced customization use cases, we expose a `useAutocomplete()` hook. It accepts almost the same options as the Autocomplete component minor all the props related to the rendering of JSX. The Autocomplete component uses this hook internally.

```jsx
import useAutocomplete from '@material-ui/lab/useAutocomplete';
```

- 📦 [4 kB gzipped](/size-snapshot).

{{"demo": "pages/components/autocomplete/UseAutocomplete.js", "defaultCodeOpen": false}}

### Customized useAutocomplete

WIP: to implement [this design](https://www.behance.net/gallery/27997595/Multi-select-dropdown-tags-field-with-search).

Head to [Customized Autocomplete](#customized-autocomplete) for a customization example with the Autocomplete component instead of the hook.

## Asynchronous requests

{{"demo": "pages/components/autocomplete/Asynchronous.js"}}

### Google Maps place

A customized UI for Google Maps Places Autocomplete. For this demo, we need to load the [Google Maps JavaScript](https://developers.google.com/maps/documentation/javascript/tutorial) API.

{{"demo": "pages/components/autocomplete/GoogleMaps.js"}}

## Multiple values

Also knowned as tags, the user is allowed to enter more than 1 value.

{{"demo": "pages/components/autocomplete/Tags.js"}}

### Fixed options

In the event that you need to lock certain tag so that they can't be removed in the interface, you can set the chips disabled.

{{"demo": "pages/components/autocomplete/FixedTags.js"}}

### Checkboxes（复选框）

{{"demo": "pages/components/autocomplete/CheckboxesTags.js"}}

## Customized Autocomplete

This demo reproduces the GitHub's label picker:

{{"demo": "pages/components/autocomplete/GitHubLabel.js"}}

## Highlights

The following demo relies on [autosuggest-highlight](https://github.com/moroshko/autosuggest-highlight), a small (1 kB) utility for highlighting text in autosuggest and autocomplete components.

{{"demo": "pages/components/autocomplete/Highlights.js"}}

## Customer filter

The component exposes a factory to create a filter method that can provided to the `filerOption` prop. You can use it to change the default option filter behavior.

```js
import { createFilterOptions } from '@material-ui/lab/Autocomplete';
```

It supports the following options:

1. `config` (*Object* [optional]): 
  - `config.ignoreAccents` (*Boolean* [optional]): Defaults to `true`. Remove diacritics.
  - `config.ignoreCase` (*Boolean* [optional]): Defaults to `true`. Lowercase everything.
  - `config.matchFrom` (*'any' | 'start'* [optional]): Defaults to `'any'`.
  - `config.stringify` (*Func* [optional]): Defaults to `JSON.stringify`.
  - `config.trim` (*Boolean* [optional]): Defaults to `false`. Remove trailing spaces.

In the following demo, the options need to start with the query prefix:

```js
const filterOptions = createFilterOptions({
  matchFrom: 'start',
  stringify: option => option.title,
});

<Autocomplete filterOptions={filterOptions} />
```

{{"demo": "pages/components/autocomplete/Filter.js", "defaultCodeOpen": false}}

For richer filtering mechanisms, it's recommended to look at [match-sorter](https://github.com/kentcdodds/match-sorter). 就像这样：

```jsx
import matchSorter from 'match-sorter';

const filterOptions = (options, { inputValue }) =>
  matchSorter(options, inputValue);

<Autocomplete filterOptions={filterOptions} />
```

## Virtualization

Search within 10,000 randomly generated options. The list is virtualized thanks to [react-window](https://github.com/bvaughn/react-window).

{{"demo": "pages/components/autocomplete/Virtualize.js"}}

## 可访问性

(WAI-ARIA: https://www.w3.org/TR/wai-aria-practices/#combobox)

We encourage the usage of a label for the textbox. The component implements the WAI-ARIA authoring practices.