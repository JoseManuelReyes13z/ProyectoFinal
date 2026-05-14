const express = require('express');
const router = express.Router();
const operadoresController = require('../controllers/operadores.controller');

router.get('/', operadoresController.mostrarOperadores);
router.post('/agregar', operadoresController.guardarOperador);

module.exports = router;