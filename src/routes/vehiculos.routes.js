const express = require('express');
const router = express.Router();
const vehiculosController = require('../controllers/vehiculos.controller');

router.get('/', vehiculosController.mostrarVehiculos);

module.exports = router;