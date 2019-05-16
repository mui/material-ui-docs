---
components: Link
---

# Links

<p class="description">O componente Link permite que você personalize facilmente elementos de âncora com suas cores de tema e estilos de tipografia.</p>

## Links simples

O componente Link é construído sobre o componente [Typography](/api/typography/). Você pode aproveitar suas propriedades.

{{"demo": "pages/components/links/Links.js"}}

No entanto, o Link possui propriedades padrão diferentes do componente Typography:

- `color="primary"` como o link precisa se destacar.
- `variant="inherit"` como o link será, na maioria das vezes, usado como filho de um componente Typography.

## Acessibilidade

- Ao fornecer o conteúdo para o link, evite descrições genéricas como "clique aqui" ou "vá para". Em vez disso, use [descrições específicas](https://developers.google.com/web/tools/lighthouse/audits/descriptive-link-text).
- Para obter a melhor experiência do usuário, os links devem se destacar do texto na página.
- Se o link não tem um href significativo, [ele deve ser renderizado usando um elemento `<button>`](https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md).

{{"demo": "pages/components/links/ButtonLink.js"}}

## Segurança

When you use `target="_blank"` with Links it is [recommended](https://developers.google.com/web/tools/lighthouse/audits/noopener) to always set `rel="noopener"` or `rel="noreferrer"` when linking to third party content.

- `rel="noopener"` prevents the new page from being able to access the window.opener property and ensures it runs in a separate process. Without this the target page can potentially redirect your page to a malicious URL.
- `rel="noreferrer""` has the same effect, but also prevents the *Referer* header from being sent to the new page. ⚠️ Removing the referrer header will affect analytics.

## Biblioteca de roteamento de terceiros

One common use case is to perform the navigation on the client only, without doing a .html round-trip with the server. The `Link` component provides a property to handle this use case: `component`.

{{"demo": "pages/components/links/LinkRouter.js", "defaultCodeOpen": true}}

*Note: Creating the Link components is necessary to prevent unexpected unmounting. You can read more about it in our [component property guide](/guides/composition/#component-property).*