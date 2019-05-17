---
title: Componente React Sem SSR
components: NoSsr
---

# Sem SSR

<p class="description">O NoSsr remove intencionalmente componentes do contexto de Server Side Rendering (SSR).</p>

Esse componente pode ser útil em várias situações:

- Válvula de escape para dependências quebradas que não suportam SSR.
- Melhorar o tempo para a primeira pintura no cliente renderizando somente a primeira parte da página (above the fold).
- Reduzir o tempo de renderização no servidor.
- Sob carga de servidor muito pesada, você pode ativar a degradação do serviço.
- Melhore o tempo de interação apenas processando o que é importante (com a propriedade `defer`).

## Client side deferring

{{"demo": "pages/components/no-ssr/SimpleNoSsr.js"}}

## Frame deferring

In it's core, the NoSsr component purpose is to **defer rendering**. As it's illustrated in the previous demo, you can use it to defer the rendering from the server to the client.

But you can also use it to defer the rendering within the client itself. You can **wait a screen frame** with the `defer` property to render the children. React does [2 commits](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects) instead of 1.

{{"demo": "pages/components/no-ssr/FrameDeferring.js"}}