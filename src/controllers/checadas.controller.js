const Checadas = require('../models/checadas.model');

const mostrarChecadas = (req, res) => {

    Checadas.obtenerChecadas((error, resultados) => {

        if(error){
            console.log(error);
            return;
        }
        res.render('private/checadas', {
            checadas: resultados
        });
    });
};

module.exports = {

    mostrarChecadas

};