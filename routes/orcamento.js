const express = require('express');
const router = express.Router();
const orcamentoController = require('../controllers/orcamentoController');
const { autenticarToken, autorizarPapel } = require('../middleware/auth');

// Apenas mecânico pode criar orçamento
router.post('/', autenticarToken, autorizarPapel('mecanico'), orcamentoController.criarOrcamento);
// Cliente e mecânico podem consultar orçamentos do carro
router.get('/carro/:carroId', autenticarToken, orcamentoController.buscarOrcamentosPorCarro);
// Apenas cliente dono do carro pode aprovar/rejeitar/alterar
router.post('/:id/aprovar', autenticarToken, autorizarPapel('cliente'), orcamentoController.aprovarOrcamento);
router.post('/:id/rejeitar', autenticarToken, autorizarPapel('cliente'), orcamentoController.rejeitarOrcamento);
router.put('/:id/alterar', autenticarToken, autorizarPapel('cliente'), orcamentoController.alterarOrcamento);

module.exports = router;
