const db = require('../models/db');

exports.registrarManutencao = (req, res) => {
  const { carroId, servicoId, data, status } = req.body;
  const carro = db.carros.find(c => c.id == carroId);
  const servico = db.servicos.find(s => s.id == servicoId);
  if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });
  if (!servico) return res.status(404).json({ erro: 'Serviço não encontrado' });
  const manutencao = { id: db.manutencoes.length + 1, carroId, servicoId, data, status };
  db.manutencoes.push(manutencao);
  res.status(201).json(manutencao);
};

exports.buscarManutencoesPorCarro = (req, res) => {
  const { carroId } = req.params;
  const manutencoes = db.manutencoes.filter(m => m.carroId == carroId);
  res.json(manutencoes);
};
