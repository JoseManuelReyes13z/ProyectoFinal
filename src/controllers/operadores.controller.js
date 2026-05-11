const Operadores = require('../models/operadores.model');
const mostrarOperadores = (req, res) => {
    Operadores.obtenerOperadores((error, resultados) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('private/operadores', {
            operadores: resultados
        });
    });
};

module.exports = {
    mostrarOperadores
};