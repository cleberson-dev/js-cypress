# Todo With Cypress

Projeto que realiza testes E2E em um to-do app com Cypress.



## Sobre

O objetivo desse repositório/projeto é aprender a utilizar e realizar testes com Cypress.

A aplicação é construída com React, consistindo de um gerenciador de tarefas ("to-dos") onde é possível criar, editar, remover, completar tarefas, além de apresentar tarefas filtradas por 'todos', 'ativos' e 'completos'.

> **OBS**: O Webapp, disponível em http://todomvc.com/examples/react, não é controlado por mim, autor desse repositório, e é recomendado não realizar testes em aplicações sem o seu controle, já que você não consegue prever as alterações, quebrando sua pilha de testes. Porém, como é um projeto somente para aprendizado e uso da ferramenta, me pareceu mais simples realizar em um app já existente. Qualquer alterações no app em testes precisará de mudanças no código de testes. Fique avisado, caso clone-o e os testes falhem.


## Uso
1. Instale as dependências
```bash
npm install 
```
2. Execute o Cypress Test Runner:
```bash
npm run test
```

Cypress irá abrir o navegador instalado em sua máquina adequado e compatível com ele para execução dos testes.