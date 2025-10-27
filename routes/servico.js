const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');
const { autenticarToken, autorizarPapel } = require('../middleware/auth');

router.post('/', autenticarToken, autorizarPapel('mecanico'), servicoController.registrarServico);
router.get('/', autenticarToken, servicoController.buscarServicos);

module.exports = router;
