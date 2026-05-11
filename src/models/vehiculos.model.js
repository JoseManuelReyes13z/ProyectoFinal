const connection = require('../config/db');
const obtenerVehiculos = (callback) => {
    const sql = 'SELECT * FROM vehiculos';
    connection.query(sql, callback);
};

module.exports = {

    obtenerVehiculos

};