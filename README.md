# Projeto Cypress – Automação de Testes E2E

Projeto desenvolvido para praticar e demonstrar conhecimentos em **Quality Assurance (QA)** e automação de testes End-to-End (E2E), utilizando Cypress e JavaScript.

A aplicação utilizada nos testes é o [SauceDemo](https://www.saucedemo.com/), um ambiente de demonstração que permite testar funcionalidades comuns de um e-commerce, como autenticação, navegação por produtos, carrinho de compras e finalização de pedidos.

## Objetivo

O objetivo deste projeto é aplicar conceitos de qualidade de software na prática, desenvolvendo testes automatizados que permitam verificar o funcionamento das principais funcionalidades da aplicação.

Durante o desenvolvimento, foram trabalhados:

- Criação de cenários de testes positivos e negativos;
- Validação de mensagens, elementos e comportamentos da aplicação;
- Automação de fluxos de login, catálogo, carrinho e checkout;
- Reutilização de etapas por meio de comandos personalizados;
- Organização dos testes por funcionalidade;
- Execução de testes em ambiente local e integração contínua.

## Tecnologias utilizadas

- **JavaScript** – Linguagem utilizada na implementação dos testes.
- **Cypress** – Framework de automação de testes E2E.
- **Node.js e npm** – Ambiente de execução e gerenciamento de dependências.
- **Git e GitHub** – Controle de versão e hospedagem do projeto.
- **GitHub Actions** – Automação da execução dos testes.

## Cenários automatizados

| Área     | Cenário                                    | Tipo     |
| -------- | ------------------------------------------ | -------- |
| Login    | Autenticação com credenciais válidas       | Positivo |
| Login    | Tentativa de acesso com senha incorreta    | Negativo |
| Login    | Tentativa de acesso sem informar o usuário | Negativo |
| Catálogo | Exibição da lista de produtos              | Positivo |
| Catálogo | Ordenação de produtos por preço crescente  | Positivo |
| Catálogo | Adição de produto ao carrinho              | Positivo |
| Carrinho | Revisão do produto adicionado              | Positivo |
| Checkout | Finalização da compra com dados válidos    | Positivo |
| Checkout | Validação de campos obrigatórios           | Negativo |

## Pré-requisitos

Para executar o projeto, é necessário ter instalado:

- Node.js (versão 20 ou superior recomendada);
- npm;
- Git;
- Conexão com a internet.

## Como executar o projeto

**1. Clone o repositório:**

```bash
git clone https://github.com/gabrielhierro/projeto_cypress.git
cd projeto_cypress
```

**2. Instale as dependências:**

```bash
npm install
```

**3. Abra o Cypress em modo interativo:**

```bash
npm run cy:open
```

**4. Para executar todos os testes diretamente pelo terminal:**

```bash
npm run cy:run
```

## Organização do projeto

```text
projeto_cypress/
├── .github/
│   └── workflows/
│       └── cypress.yml
├── cypress/
│   ├── e2e/
│   │   ├── login.cy.js
│   │   ├── inventory.cy.js
│   │   └── cart-checkout.cy.js
│   └── support/
│       ├── commands.js
│       └── e2e.js
├── .gitignore
├── cypress.config.js
├── package.json
└── README.md
```

## Estratégia de testes

Os testes foram organizados de acordo com as funcionalidades da aplicação, contemplando tanto situações esperadas quanto situações em que o sistema deve apresentar mensagens de validação.

As verificações incluem autenticação, navegação entre páginas, ordenação de produtos, atualização do carrinho e conclusão do checkout.

Também foi criado o comando personalizado `cy.login()`, facilitando a reutilização do processo de autenticação em diferentes cenários de teste.

## Integração contínua (CI)

O projeto conta com integração contínua utilizando **GitHub Actions**.

Os testes são executados automaticamente a cada envio de alterações (_push_) e abertura de solicitações de integração (_pull requests_) direcionadas à branch `main`.

Os resultados das execuções podem ser acompanhados diretamente na aba **Actions** do repositório.

## Observações

Os testes são realizados no SauceDemo, uma aplicação pública utilizada para fins de demonstração e prática de automação de testes.

Por utilizar um ambiente externo, a execução depende de sua disponibilidade e do funcionamento atual de suas funcionalidades. Caso ocorram mudanças na aplicação, pode ser necessário atualizar os testes para acompanhar essas alterações.

## Próximas melhorias

- Implementar testes para remoção de produtos do carrinho;
- Adicionar cenários de logout;
- Utilizar fixtures para organizar e reutilizar dados de teste;
- Implementar relatórios de execução;
- Expandir a cobertura com testes de acessibilidade e outras validações.

## Autor

**Gabriel Hierro**

Estudante de Sistemas de Informação, com interesse em Qualidade de Software (QA), automação de testes e desenvolvimento de aplicações.

- GitHub: [github.com/gabrielhierro](https://github.com/gabrielhierro)
