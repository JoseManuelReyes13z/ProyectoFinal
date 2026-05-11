const connection = require('../config/db');

const obtenerRutas = (callback) => {
    const sql = 'SELECT * FROM rutas';
    connection.query(sql, callback);
};


module.exports = {

    obtenerRutas

};