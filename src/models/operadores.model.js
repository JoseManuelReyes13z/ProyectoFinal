const connection = require('../config/db');

const obtenerOperadores = (callback) => {
    const sql = 'SELECT * FROM operadores';
    connection.query(sql, callback);
};

const agregarOperador = (datos, callback) => {

    const sql = `
        INSERT INTO operadores
        (
            nombre,
            apellido,
            telefono,
            tipo_servicio,
            estado
        )
        VALUES (?, ?, ?, ?, ?)
    `;

    connection.query(
        sql,
        [
            datos.nombre,
            datos.apellido,
            datos.telefono,
            datos.tipo_servicio,
            datos.estado
        ],
        callback
    );

};

module.exports = {
    obtenerOperadores,
    agregarOperador
};