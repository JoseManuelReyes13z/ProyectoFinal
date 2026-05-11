const mysql = require('mysql2');
const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'checador_taxis'

});

connection.connect((error) => {
    if(error){
        console.log('Error de conexion: ', error);
        return;
    }
    console.log('Conexion exitosa a MySQL');
});

module.exports = connection;