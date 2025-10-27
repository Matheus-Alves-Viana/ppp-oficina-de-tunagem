const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth');

const gerarToken = (usuario, papel) => {
  return jwt.sign({ id: usuario.id, papel }, SECRET, { expiresIn: '8h' });
};

exports.registrarCliente = (req, res) => {
  const { nome, email, senha } = req.body;
  if (db.clientes.find(c => c.email === email)) {
    return res.status(400).json({ erro: 'Email já cadastrado' });
  }
  const senhaHash = bcrypt.hashSync(senha, 8);
  const cliente = { id: db.clientes.length + 1, nome, email, senhaHash };
  db.clientes.push(cliente);
  res.status(201).json({ id: cliente.id, nome, email });
};

exports.loginCliente = (req, res) => {
  const { email, senha } = req.body;
  const cliente = db.clientes.find(c => c.email === email);
  if (!cliente || !bcrypt.compareSync(senha, cliente.senhaHash)) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }
  const token = gerarToken(cliente, 'cliente');
  res.json({ token });
};
