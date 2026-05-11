const Rutas = require('../models/rutas.model');


const mostrarRutas = (req, res) => {
    Rutas.obtenerRutas((error, resultados) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('private/rutas', {
            rutas: resultados
        });
    });
};



module.exports = {

    mostrarRutas

};