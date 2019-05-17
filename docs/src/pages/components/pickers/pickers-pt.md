---
title: Date Picker, Time Picker React components
components: TextField
---

# Seletores

<p class="description">Seletores fornecem uma maneira simples de selecionar um único valor de um conjunto pré-determinado.</p>

- Em dispositivos móveis, seletores são melhores aplicados quando mostrados em diálogos de confirmação.
- For inline display, such as on a form, consider using compact controls such as segmented dropdown buttons.

## Seletores nativos

⚠️ O suporte dos navegadores aos controles de entrada nativos [não é perfeito](https://caniuse.com/#feat=input-datetime). Dê uma olhada nos [projetos complementares](#complementary-projects) para uma melhor solução.

### Seletores de Data

A native date picker example with `type="date"`.

{{"demo": "pages/components/pickers/DatePickers.js"}}

### Seletores de Data & Hora

A native date & time picker example with `type="datetime-local"`.

{{"demo": "pages/components/pickers/DateAndTimePickers.js"}}

### Seletores de Hora

A native time picker example with `type="time"`.

{{"demo": "pages/components/pickers/TimePickers.js"}}

## Projetos Complementares

Para caso de usos mais avançados, você é capaz de aproveitar de.

### @material-ui/pickers

![estrelas](https://img.shields.io/github/stars/mui-org/material-ui-pickers.svg?style=social&label=Stars) ![npm downloads](https://img.shields.io/npm/dm/@material-ui/pickers.svg)

[@material-ui/pickers](https://material-ui-pickers.dev/) fornece controles de data e hora que seguem as especificações do Material Design.

{{"demo": "pages/components/pickers/MaterialUIPickers.js"}}