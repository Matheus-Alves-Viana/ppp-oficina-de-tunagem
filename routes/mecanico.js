const express = require('express');
const router = express.Router();
const mecanicoController = require('../controllers/mecanicoController');

router.post('/registrar', mecanicoController.registrarMecanico);
router.post('/login', mecanicoController.loginMecanico);

module.exports = router;
