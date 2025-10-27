const db = require('../models/db');

exports.registrarCarro = (req, res) => {
  const { modelo, ano, clienteId } = req.body;
  const cliente = db.clientes.find(c => c.id === clienteId);
  if (!cliente) return res.status(404).json({ erro: 'Cliente não encontrado' });
  const carro = { id: db.carros.length + 1, modelo, ano, clienteId };
  db.carros.push(carro);
  res.status(201).json(carro);
};

exports.buscarCarros = (req, res) => {
  const { clienteId } = req.query;
  let carros = db.carros;
  if (clienteId) carros = carros.filter(c => c.clienteId == clienteId);
  res.json(carros);
};

exports.buscarCarroPorId = (req, res) => {
  const carro = db.carros.find(c => c.id == req.params.id);
  if (!carro) return res.status(404).json({ erro: 'Carro não encontrado' });
  res.json(carro);
};
