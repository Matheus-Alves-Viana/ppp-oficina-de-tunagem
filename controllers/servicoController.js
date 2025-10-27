const db = require('../models/db');

exports.registrarServico = (req, res) => {
  const { nome, tipo, preco } = req.body;
  if (!['preventiva', 'tunagem'].includes(tipo)) {
    return res.status(400).json({ erro: 'Tipo de serviço inválido' });
  }
  const servico = { id: db.servicos.length + 1, nome, tipo, preco };
  db.servicos.push(servico);
  res.status(201).json(servico);
};

exports.buscarServicos = (req, res) => {
  res.json(db.servicos);
};
