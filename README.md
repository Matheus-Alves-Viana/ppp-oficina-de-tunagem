# Oficina de Tunagem - API REST

## Descrição
API REST para acompanhamento da progressão de carros em uma oficina de tunagem. Permite o registro de mecânicos, clientes, carros, serviços, manutenções e orçamentos, com autenticação JWT e controle de acesso baseado em papéis.

## Funcionalidades
- Registro e login de mecânicos e clientes
- Registro de carros (vinculados a clientes)
- Consulta de carros e clientes
- Registro de serviços e manutenções
- Geração e gerenciamento de orçamentos (aprovação, rejeição, alteração)
- Controle de acesso: mecânicos têm acesso total, clientes apenas à consulta do progresso de seus carros e gerenciamento de orçamentos
- Documentação Swagger disponível em `/api-docs`

## Estrutura do Projeto
- `routes/` - Rotas da API
- `controllers/` - Lógica dos endpoints
- `services/` - Regras de negócio
- `models/` - Modelos de dados (em memória)
- `middleware/` - Autenticação e autorização
- `resources/` - Documentação Swagger

## Como rodar
1. Instale as dependências:
   ```sh
   npm install
   ```
2. Inicie o servidor:
   ```sh
   npm start
   ```
3. Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Tecnologias
- Node.js
- Express
- JWT (jsonwebtoken)
- Swagger (swagger-ui-express)

## Observações
- O banco de dados é em memória, todos os dados são perdidos ao reiniciar a aplicação.
- Para acessar as funcionalidades, é necessário autenticação via JWT.
