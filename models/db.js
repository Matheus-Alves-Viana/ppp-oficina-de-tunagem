// Modelos de dados em memória para oficina de tunagem

const db = {
  mecanicos: [], // { id, nome, email, senhaHash }
  clientes: [], // { id, nome, email, senhaHash }
  carros: [], // { id, modelo, ano, clienteId }
  servicos: [], // { id, nome, tipo: 'preventiva'|'tunagem', preco }
  manutencoes: [], // { id, carroId, servicoId, data, status }
  orcamentos: [] // { id, carroId, servicos: [{servicoId, preco}], status: 'pendente'|'aprovado'|'rejeitado'|'alterado', historico: [] }
};

module.exports = db;
