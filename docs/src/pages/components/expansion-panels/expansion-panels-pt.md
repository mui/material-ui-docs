---
title: Componente React para Painéis de Expansão
components: ExpansionPanel, ExpansionPanelActions, ExpansionPanelDetails, ExpansionPanelSummary
---

# Painéis de Expansão

<p class="description">Os painéis de expansão contêm fluxos de criação e permitem a edição simplificada de um elemento.</p>

[Um painel de expansão](https://material.io/archive/guidelines/components/expansion-panels.html) é um contêiner leve que pode estar sozinho ou conectado em uma superfície maior, como um cartão.

> **Nota:** Os painéis de expansão não estão mais documentados na documentação do Material Design.

## Acessibilidade

Para melhor acessibilidade recomendamos a definição de `id` e `aria-controles` no `ExpansionPanelSummary`. O `ExpansionPanel` irá derivar os valores de `aria-labelledby` e `id` para a região de conteúdo do painel.

## Painel de Expansão Simples

{{"demo": "pages/components/expansion-panels/SimpleExpansionPanel.js"}}

## Acordeão Controlado

Estenda o comportamento padrão do painel para criar um acordeão com o componente `ExpansionPanel`.

{{"demo": "pages/components/expansion-panels/ControlledExpansionPanels.js"}}

## Cabeçalho Secundário e Colunas

Várias colunas podem ser usadas para estruturar o conteúdo, e um texto auxiliar pode ser adicionado ao painel para ajudar o usuário.

{{"demo": "pages/components/expansion-panels/DetailedExpansionPanel.js"}}

## Performance

O conteúdo dos painéis de expansão é montado por padrão, mesmo que o painel não esteja expandido. Esse comportamento padrão tem em mente a renderização do lado do servidor e o SEO. If you render expensive component trees inside your panels or simply render many panels it might be a good idea to change this default behavior by enabling the `unmountOnExit` in `TransitionProps`: `<ExpansionPanel TransitionProps={{ unmountOnExit: true }} />`. As with any performance optimization this is not a silver bullet. Be sure to identify bottlenecks first and then try out these optimization strategies.

## Customized expansion panels

Aqui está um exemplo de personalização do componente. Você pode aprender mais sobre isso na [página de documentação de substituições](/customization/components/).

{{"demo": "pages/components/expansion-panels/CustomizedExpansionPanels.js"}}