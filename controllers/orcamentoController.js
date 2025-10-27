const db = require('../models/db');

exports.criarOrcamento = (req, res) => {
  const { carroId, servicos } = req.body; // servicos: [{servicoId, preco}]
  const carro = db.carros.find(c => c.id == carroId);
  if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });
  const orcamento = {
    id: db.orcamentos.length + 1,
    carroId,
    servicos,
    status: 'pendente',
    historico: []
  };
  db.orcamentos.push(orcamento);
  res.status(201).json(orcamento);
};

exports.buscarOrcamentosPorCarro = (req, res) => {
  const { carroId } = req.params;
  const orcamentos = db.orcamentos.filter(o => o.carroId == carroId);
  res.json(orcamentos);
};

exports.aprovarOrcamento = (req, res) => {
  const { id } = req.params;
  const orcamento = db.orcamentos.find(o => o.id == id);
  if (!orcamento) return res.status(404).json({ erro: 'Orçamento não encontrado' });
  orcamento.historico.push({ status: orcamento.status, data: new Date() });
  orcamento.status = 'aprovado';
  res.json(orcamento);
};

exports.rejeitarOrcamento = (req, res) => {
  const { id } = req.params;
  const orcamento = db.orcamentos.find(o => o.id == id);
  if (!orcamento) return res.status(404).json({ erro: 'Orçamento não encontrado' });
  orcamento.historico.push({ status: orcamento.status, data: new Date() });
  orcamento.status = 'rejeitado';
  res.json(orcamento);
};

exports.alterarOrcamento = (req, res) => {
  const { id } = req.params;
  const { servicos } = req.body;
  const orcamento = db.orcamentos.find(o => o.id == id);
  if (!orcamento) return res.status(404).json({ erro: 'Orçamento não encontrado' });
  orcamento.historico.push({ status: orcamento.status, data: new Date(), servicos: orcamento.servicos });
  orcamento.servicos = servicos;
  orcamento.status = 'alterado';
  res.json(orcamento);
};
