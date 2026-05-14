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

const guardarOperador = (req, res) => {
    const datos = req.body;
    Operadores.agregarOperador(datos, (error) => {
        if(error){
            console.log(error);
            return;
        }
        res.redirect('/operadores');
    });
};

module.exports = {
    mostrarOperadores,
    guardarOperador 
};