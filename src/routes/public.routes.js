//declaramos las dependencias
const express = require('express');
const router = express.Router();

// ruta principal
router.get('/', (req, res) => {
    res.render('public/index');
});

module.exports = router;