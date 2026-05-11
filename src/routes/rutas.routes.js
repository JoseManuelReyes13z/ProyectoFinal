const express = require('express');
const router = express.Router();

const rutasController = require('../controllers/rutas.controller');

router.get('/', rutasController.mostrarRutas);
module.exports = router;