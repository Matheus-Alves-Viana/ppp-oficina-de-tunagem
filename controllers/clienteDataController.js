const db = require('../models/db');

exports.buscarClientes = (req, res) => {
  res.json(db.clientes.map(({ senhaHash, ...c }) => c));
};

exports.buscarClientePorId = (req, res) => {
  const cliente = db.clientes.find(c => c.id == req.params.id);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  const { senhaHash, ...dados } = cliente;
  res.json(dados);
};
