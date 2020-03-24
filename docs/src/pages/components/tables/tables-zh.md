---
title: React Table 表格组件
components: Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow, TableSortLabel
---

# Table 表格

<p class="description">表格展示数据组。 它们是完全可以自定义的。</p>

[表格](https://material.io/design/components/data-tables.html)以一目了然的方式显示信息，这样一来用户可以寻找规律并探索见解。 表格可以被内嵌在主要内容中，如 卡片（cards）。

表格可以包括：

- 对应的可视化效果
- 导航
- 一个用于查询和操作数据的工具

当在引入工具时，我们应将它们直接放在表格的上方或下方。

## 表格的结构

一个数据表格的顶部是标题行，并展示各列的名称，而后续的各行则是表格的数据。

若用户想要选择或操作数据，那则应该咋每一行加入复选框。

考虑到可访问性，表格的第一列应设置为 `<th>` 元素，而此元素附着了一个指定为 `"row"` 的 `scope` 属性。 这样一来，屏幕阅读器就可以通过行和列的名字，来定位到某个单元格的值。

## 简单的表格

一个没有多余装饰的简单例子。

{{"demo": "pages/components/tables/SimpleTable.js", "bg": true}}

## Dense Table 紧凑的表格

一个没有多余修饰的简单紧凑型表格。

{{"demo": "pages/components/tables/DenseTable.js", "bg": true}}

## 排序& 筛选

此示例演示了 ` Checkbox（选择框）` 和单击选择行的用法, 该表格具有自定义的 `Toolbar（工具条）`。 该示例使用 `TableSortLabel` 组件来辅助实现列标题的样式效果。

此表已被赋予固定宽度，这样能够展示水平方向的滚动。 在表格外部使用 TablePagination 组件，能够防止分页控件的滚动。 (以下的['Custom Table Pagination Action' （自定义表分页操作示例）](#custom-table-pagination-action)展示了 TableFooter 中的分页。)

{{"demo": "pages/components/tables/EnhancedTable.js", "bg": true}}

## 自定义表格

以下是自定义组件的一个示例。 您可以在[重写文档页](/customization/components/)中了解有关此内容的更多信息。

{{"demo": "pages/components/tables/CustomizedTables.js", "bg": true}}

### Custom pagination options

It's possible to customise the options shown in the "Rows per page" select using the `rowsPerPageOptions` prop. You should either provide an array of:

- **numbers**, each number will be used for the option's label and value.
    
    ```jsx
    <TablePagination rowsPerPageOptions={[10, 50]} />
    ```

- **objects**, the `value` and `label` keys will be used respectively for the value and label of the option (useful for language strings such as 'All').
    
    ```jsx
    <TablePagination rowsPerPageOptions={[10, 50, { value: -1, label: 'All' }]} />
    ```

### Custom pagination actions

`TablePagination` 组件的 `Action` 属性允许实现自定义操作。

{{"demo": "pages/components/tables/CustomPaginationActionsTable.js", "bg": true}}

## Fixed header

具有可滚动行和固定列标题的表的示例。 It leverages the `stickyHeader` prop (⚠️ no IE 11 support).

{{"demo": "pages/components/tables/StickyHeadTable.js", "bg": true}}

## Spanning Table（合并的表格）

一个行 & 列跨越的简单例子

{{"demo": "pages/components/tables/SpanningTable.js", "bg": true}}

## 大型列表渲染（Virtualized Table）

在下面的示例中，我们演示了如何将 [react-virtualized](https://github.com/bvaughn/react-virtualized) 与 `Table` 组件一起使用。 它渲染了200行，可以轻松处理更多行。 可视化优化了整体的性能。

{{"demo": "pages/components/tables/ReactVirtualizedTable.js", "bg": true}}

## 补充项目

对于更高级的用例，您可以利用：

### material-table

![stars](https://img.shields.io/github/stars/mbrn/material-table.svg?style=social&label=Stars) ![npm下载](https://img.shields.io/npm/dm/material-table.svg)

[material-table](https://github.com/mbrn/material-table) 是一款 React 的简单且强大的数据库。它基于 Material-UI Table 并且添加了一些额外的功能。 它们支持了不同的用户案例（可编辑，筛选，分组，排序，选择，国际化，树形数据等等）。 您应该看一下。

{{"demo": "pages/components/tables/MaterialTableDemo.js", "bg": true}}

### 其他

- [dx-react-grid-material-ui](https://devexpress.github.io/devextreme-reactive/react/grid/): A data grid for Material-UI with paging, sorting, filtering, grouping and editing features ([paid license](https://js.devexpress.com/licensing/)).
- [mui-datatables](https://github.com/gregnb/mui-datatables): Responsive data tables for Material-UI with filtering, sorting, search and more.
- [tubular-react](https://github.com/unosquare/tubular-react): A Material-UI table with local or remote data-source. Featuring filtering, sorting, free-text search, export to CSV locally, and aggregations.

## 可访问性

(WAI tutorial: https://www.w3.org/WAI/tutorials/tables/)

### Caption

A caption functions like a heading for a table. Most screen readers announce the content of captions. Captions help users to find a table and understand what it’s about and decide if they want to read it.

{{"demo": "pages/components/tables/AcccessibleTable.js", "bg": true}}