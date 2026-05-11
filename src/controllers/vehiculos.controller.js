const Vehiculos = require('../models/vehiculos.model');

const mostrarVehiculos = (req, res) => {
    Vehiculos.obtenerVehiculos((error, resultados) => {
        if(error){
            console.log(error);
            return;
        }
        res.render('private/vehiculos', {
            vehiculos: resultados
        });
    });
};

module.exports = {

    mostrarVehiculos

};