const connection = require('../config/db');

const obtenerOperadores = (callback) => {
    const sql = 'SELECT * FROM operadores';
    connection.query(sql, callback);
};

module.exports = {
    obtenerOperadores
};