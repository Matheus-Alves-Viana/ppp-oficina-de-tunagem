const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { SECRET } = require('../middleware/auth');

const gerarToken = (usuario, papel) => {
  return jwt.sign({ id: usuario.id, papel }, SECRET, { expiresIn: '8h' });
};

exports.registrarMecanico = (req, res) => {
  const { nome, email, senha } = req.body;
  if (db.mecanicos.find(m => m.email === email)) {
    return res.status(400).json({ erro: 'Email já cadastrado' });
  }
  const senhaHash = bcrypt.hashSync(senha, 8);
  const mecanico = { id: db.mecanicos.length + 1, nome, email, senhaHash };
  db.mecanicos.push(mecanico);
  res.status(201).json({ id: mecanico.id, nome, email });
};

exports.loginMecanico = (req, res) => {
  const { email, senha } = req.body;
  const mecanico = db.mecanicos.find(m => m.email === email);
  if (!mecanico || !bcrypt.compareSync(senha, mecanico.senhaHash)) {
    return res.status(401).json({ erro: 'Credenciais inválidas' });
  }
  const token = gerarToken(mecanico, 'mecanico');
  res.json({ token });
};
