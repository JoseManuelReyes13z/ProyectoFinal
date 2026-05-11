const express = require('express');
const router = express.Router();
const operadoresController = require('../controllers/operadores.controller');

router.get('/', operadoresController.mostrarOperadores);
module.exports = router;