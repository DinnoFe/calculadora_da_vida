# ⏳ Calculadora de Tempo Vivido

> Uma aplicação interativa que calcula o tempo de vida do utilizador em dias, horas e minutos, com animações dinâmicas de processamento.

![Demonstração do Projeto](./assets/tempo_vivo_demo.gif)

## 🎯 Objetivo
Este projeto foi desenvolvido para praticar a manipulação avançada do **DOM**, lógica de temporizadores em JavaScript (`setInterval`) e estratégias de **estabilidade de layout** no CSS.

## 🚀 Funcionalidades
- **Animação em tempo real:** Números aleatórios rodam constantemente enquanto o utilizador não insere a idade.
- **Cálculo Preciso:** Conversão instantânea de anos para dias, horas e minutos.
- **Layout Estável:** Implementação de técnicas de `min-width` e `tabular-nums` para evitar o tremor de texto durante as animações.
- **Design Responsivo:** Interface limpa e centralizada com foco na experiência do utilizador.

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estrutura semântica.
- **CSS3:** Flexbox para centralização e manipulação de fontes monoespaçadas.
- **JavaScript (ES6):** Lógica de animação, cálculos matemáticos e manipulação de classes.

## 🧠 Desafios Técnicos Solucionados
Durante o desenvolvimento, enfrentei o desafio do **Layout Jittering** (quando o texto salta devido à mudança de largura dos números). Solucionei isto utilizando:
1.  `display: inline-block` com larguras fixas em `ch`.
2.  `font-variant-numeric: tabular-nums` para garantir que todos os dígitos tivessem a mesma largura.
3.  Preenchimento de strings com caracteres invisíveis para manter o alinhamento.

## 📦 Como rodar o projeto
1. Clone este repositório:
   ```bash
   git clone [https://github.com/DinnoFe/calculadora_da_vida.git](https://github.com/DinnoFe/calculadora_da_vida.git)
