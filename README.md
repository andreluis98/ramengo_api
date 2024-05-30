# Teste Técnico Red Ventures

Repositório criado para envio do teste técnico da Red Ventures.

## Visão Geral

Esta é uma aplicação Node.js e Express que fornece uma API para gerenciar proteínas e caldos, e para criar pedidos. A aplicação inclui rotas para buscar proteínas e caldos, e para gerar IDs de pedidos através de uma API externa.

## Funcionalidades

- Buscar uma lista de proteínas
- Buscar uma lista de caldos
- Criar um pedido e gerar um ID de pedido via uma API externa

## Começando

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- npm (versão 6.x ou superior)

### Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/seu-repo.git
    cd seu-repo
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave API:

    ```env
    API_KEY=sua_chave_api
    ```

### Executando a Aplicação

Para iniciar o servidor localmente:

```bash
npm start
```

O servidor iniciará em `http://localhost:5000`.

### Endpoints da API

- **GET /api/proteins**
  - Recupera uma lista de proteínas.
  - Headers: `x-api-key: sua_chave_api`
  - Resposta:
    ```json
    [
        {
            "id": 1,
            "imageInactive": "https://tech.redventures.com.br/icons/chicken/inactive.svg",
            "imageActive": "https://tech.redventures.com.br/icons/chicken/active.svg",
            "name": "Chicken",
            "description": "A delicious chicken protein",
            "price": 20
        },
    ]
    ```

- **GET /api/broths**
  - Recupera uma lista de caldos.
  - Headers: `x-api-key: sua_chave_api`
  - Resposta:
    ```json
    [
        {
            "id": 1,
            "imageInactive": "https://tech.redventures.com.br/icons/miso/inactive.svg",
            "imageActive": "https://tech.redventures.com.br/icons/miso/active.svg",
            "name": "Miso",
            "description": "Miso Soup",
            "price": 10
        }
    ]
    ```

- **POST /api/order**
  - Cria um pedido e gera um ID de pedido.
  - Headers: `x-api-key: sua_chave_api`
  - Corpo da Requisição (JSON ou texto simples):
    ```json
    {
        "brothId": 1,
        "proteinId": 2
    }
    ```
  - Resposta:
    ```json
    {
        "orderId": "generated_order_id"
    }
    ```

### Testes

Para testar a API localmente, você pode usar ferramentas como Postman ou Curl.
