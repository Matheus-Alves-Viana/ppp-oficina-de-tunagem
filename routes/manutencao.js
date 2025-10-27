const express = require('express');
const router = express.Router();
const manutencaoController = require('../controllers/manutencaoController');
const { autenticarToken, autorizarPapel } = require('../middleware/auth');

router.post('/', autenticarToken, autorizarPapel('mecanico'), manutencaoController.registrarManutencao);
router.get('/:carroId', autenticarToken, manutencaoController.buscarManutencoesPorCarro);

module.exports = router;
