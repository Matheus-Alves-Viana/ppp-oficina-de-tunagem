const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const clienteDataController = require('../controllers/clienteDataController');

router.post('/registrar', clienteController.registrarCliente);
router.post('/login', clienteController.loginCliente);
router.get('/', clienteDataController.buscarClientes);
router.get('/:id', clienteDataController.buscarClientePorId);

module.exports = router;
