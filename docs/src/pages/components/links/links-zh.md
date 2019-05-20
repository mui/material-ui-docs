---
components: Link
---

# Link组件

<p class="description">Link组件允许您使用主题颜色和排版样式轻松自定义锚元素。</p>

## 简单的链接

Link组件构建在 [Typography](/api/typography/) 组件之上。 您可以利用其属性。

{{"demo": "pages/components/links/Links.js"}}

However, the Link has different default properties than the Typography:

- `color="primary"` as the link needs to stand out.
- `variant="inherit"` as the link will, most of the time, be used as a child of a Typograpy component.

## 无障碍功能

- When providing the content for the link, avoid generic descriptions like "click here" or "go to". Instead, use [specific descriptions](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).
- For the best user experience links should stand out from the text on the page.
- If a link doesn't have a meaningful href, [it should be rendered using a `<button>` element](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).

{{"demo": "pages/components/links/ButtonLink.js"}}

## 安全

当使用 `target="_blank"` 带链接的是 [推荐](https://developers.google.com/web/tools/lighthouse/audits/noopener) 总是设置 的`rel ="noopener"` 或 `的rel ="noreferrer"` 链接到第三方内容时。

- `rel="noopener"` 阻止新页面访问window.opener属性并确保它分开在不同的进程中运行。 若不如此，目标页面有潜在可能性将你的页面重定向至一个恶意网址
- `rel ="noreferrer"` 具有相同的效果，但同时也阻止了 *Referer* header被发送到新的页面。 ⚠️ 去除referrer header会影响分析统计

## 第三方路由库

一个常见的用例是仅在客户端上执行导航，而不执行与服务器的.html往返。 为解决此用例 `组件`，`Link` 组件提供了一个属性：

{{"demo": "pages/components/links/LinkRouter.js", "defaultCodeOpen": true}}

*备注：为防止意外的卸载，创建Link组件是非常有必要的。 您可以在我们的 [组件属性指南](/guides/composition/#component-property)阅读更多相关信息。*