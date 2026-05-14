const connection = require('../config/db');

// funcion de sql para obtener las checadas 
// recuerda modificarla si agregas mas campos
const obtenerChecadas = (callback) => {

    const sql = `
        SELECT 
            checadas.id_checada,
            operadores.nombre,
            operadores.apellido,
            vehiculos.numero_unidad,
            vehiculos.tipo,
            rutas.nombre_ruta,
            checadas.fecha,
            checadas.hora_entrada,
            checadas.hora_salida,
            checadas.observaciones
        FROM checadas
        INNER JOIN operadores 
            ON checadas.id_operador = operadores.id_operador
        INNER JOIN vehiculos 
            ON checadas.id_vehiculo = vehiculos.id_vehiculo
        LEFT JOIN rutas 
            ON checadas.id_ruta = rutas.id_ruta
    `;

    connection.query(sql, callback);

};

module.exports = {

    obtenerChecadas

};