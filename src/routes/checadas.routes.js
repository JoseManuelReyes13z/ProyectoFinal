const express = require('express');
const router = express.Router();
const checadasController = require('../controllers/checadas.controller');

router.get('/', checadasController.mostrarChecadas);

module.exports = router;