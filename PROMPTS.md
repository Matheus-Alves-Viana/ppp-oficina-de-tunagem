1. Objetivo:
Criar uma API Rest para acompanhamento da progressão de carros em uma oficina de tunagem.

2. Contexto:
- A API possui as seguintes funcionalidades: registro de Mecanico, registro de carro que é atrelado a um cliente, busca de carros, busca de dados de clientes, registro de serviços e registro de manutençoes já tomadas pelo carro.
- um cliente pode ter mais de um carro mas um carro só pode ter um cliente.
- Para que eu possa usar as funcionalidades, preciso fazer login como Mecanico.
- Para que o cliente possa consultar do seu carro, ele precisa fazer login como cliente. 
- clientes apenas consultam progresso, mecanicos acessam todas as funcionalidades do sistema.
- Progressão é feita através da comparação de serviçoes existentes e das manutenções já realizadas pelo carro. 
- Serviços devem ser passados para o cliente em forma de orçamento.
- Orçamentos podem ser aprovados, rejeitados e alterados, todas estas funções só podem ser feitas pelo dono do carro.
- Orçamentos alterados podem ser aprovados ou rejeitados. 
- Serviços que a oficina presta são de manutenção preventiva e tunagem.

3. Regras:
- Não me pergunte nada, só faça.
- A documentação da API deve ser feita com Swagger, em forma de arquivo, crie esse arquivo em uma pasta de recursos. O swagger precisa descrever o modelo JSON da resposta de cada endpoint com base na forma que API for implementada. O Swagger também deve contemplar os status code de erro que serão implementados na API.
- Adicione um endpoint para renderizar o Swagger.
- Construa um arquivo README para descrever o projeto
- Divida a API em camadas: routes, controllers, service e model
- Armazene os dados da API em um banco de dados em memória
- Utilize a biblioteca express para construir a API Rest
- Faça com que a autenticação seja parte do Middleware, utilizando token JWT como modelo de autenticação, e implemente as regras de autenticação seguindo as informações descritas no contexto.