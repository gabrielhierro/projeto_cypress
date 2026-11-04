# Cypress QA Portfolio

Projeto de portfólio para demonstrar fundamentos de Quality Assurance (QA) e automação de testes End-to-End (E2E) com **Cypress** e **JavaScript**.

Os testes são executados no site de demonstração [SauceDemo](https://www.saucedemo.com/). O ambiente é externo e pode sofrer alterações; caso algum seletor ou fluxo mude, os testes precisarão ser atualizados.

## Objetivo

Praticar e demonstrar como:
- automatizar cenários positivos e negativos;
- validar comportamentos e mensagens da aplicação;
- testar fluxos de autenticação, catálogo, carrinho e checkout;
- reutilizar passos comuns com comandos personalizados;
- organizar testes por funcionalidade;
- executar testes localmente e em integração contínua.

## Tecnologias

- JavaScript
- Cypress
- Node.js e npm
- Git e GitHub
- GitHub Actions

## Cenários automatizados

| Área | Cenário | Tipo |
|---|---|---|
| Login | Autenticação com credenciais válidas | Positivo |
| Login | Senha incorreta | Negativo |
| Login | Usuário não informado | Negativo |
| Catálogo | Exibição da lista de produtos | Positivo |
| Catálogo | Ordenação por preço crescente | Positivo |
| Catálogo | Adição de produto ao carrinho | Positivo |
| Carrinho | Revisão do produto adicionado | Positivo |
| Checkout | Finalização com dados válidos | Positivo |
| Checkout | Validação de campo obrigatório | Negativo |

## Pré-requisitos

- Node.js (versão 20 ou superior recomendada)
- npm
- Conexão com a internet

## Como executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/SEU-USUARIO/cypress-qa-portfolio.git
   cd cypress-qa-portfolio
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Abra o Cypress em modo interativo:

   ```bash
   npm run cy:open
   ```

4. Ou execute todos os testes no terminal:

   ```bash
   npm run cy:run
   ```

## Organização do projeto

```text
cypress-qa-portfolio/
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

Os testes verificam resultados observáveis na interface, como URL, mensagens de validação, presença de elementos, quantidade de produtos e conclusão do pedido. O comando personalizado `cy.login()` centraliza o fluxo de autenticação usado em diferentes arquivos.

A configuração inclui uma nova tentativa em caso de falha no modo headless. Isso pode ajudar a identificar instabilidade, mas não substitui a investigação da causa de um teste intermitente (*flaky test*).

## Integração contínua

O workflow do GitHub Actions executa os testes a cada push e pull request direcionados à branch `main`. O resultado fica disponível na aba **Actions** do repositório.

## Limitações conhecidas

- O projeto testa uma aplicação pública de demonstração, não um sistema de produção.
- Os testes dependem da disponibilidade e da estrutura atual do SauceDemo.
- Não há integração com bancos de dados ou APIs privadas.
- Os testes não comprovam cobertura completa da aplicação.

## Próximas melhorias

- Adicionar testes para remoção de itens e logout.
- Criar fixtures para centralizar dados de teste.
- Implementar cenários para diferentes perfis de usuário.
- Adicionar relatórios de execução.
- Expandir a cobertura com testes de acessibilidade e validações adicionais.

## Autor

**Gabriel Hierro**  
Estudante de Sistemas de Informação | Interesse em QA e automação de testes

- GitHub: https://github.com/gabrielhierro
