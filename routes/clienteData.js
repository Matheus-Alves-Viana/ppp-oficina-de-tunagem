const express = require('express');
const router = express.Router();
const { autenticarToken } = require('../middleware/auth');
const clienteDataController = require('../controllers/clienteDataController');

router.get('/', autenticarToken, clienteDataController.buscarClientes);
router.get('/:id', autenticarToken, clienteDataController.buscarClientePorId);

module.exports = router;
