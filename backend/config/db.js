const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login_react'
});

connection.connect((error) => {

    if (error) {
        console.error('Error al conectar con MySQL:', error);
        return;
    }

    console.log('Conexión con MySQL exitosa');
});

module.exports = connection;