const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carroController');
const { autenticarToken, autorizarPapel } = require('../middleware/auth');

router.post('/', autenticarToken, autorizarPapel('mecanico'), carroController.registrarCarro);
router.get('/', autenticarToken, carroController.buscarCarros);
router.get('/:id', autenticarToken, carroController.buscarCarroPorId);

module.exports = router;
