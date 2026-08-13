const express = require('express');
// Importar el módulo CORS para permitir solicitudes desde diferentes dominios
const cors = require('cors');
// Importar la configuración de la base de datos
const db = require('./config/db');
// Configurar CORS
const app = express();
const PORT = 3000;
app.use(cors());
// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());


// Configuración de la ruta POST para el inicio de sesión
app.post('/login', (req, res) => {
    const { nickname, password } = req.body;
    const sql = `
        SELECT id, nombre, apellido, nickname, email, IsAdmin
        FROM usuarios
        WHERE nickname = ? AND password = ?
        `;
    const valores = [nickname, password];
    db.query(sql, valores, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Error en el servidor'
            });
        }
        if (results.length === 0) {
            return res.status(401).json({
                message: 'Usuario o contraseña incorrectos'
            });
        }
        res.status(200).json({
            message: 'Inicio de sesión correcto',
            usuario: results[0]
        });
    });
});
// Configuracion de GET para obtener todos los usuarios
app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM usuarios';
    db.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({
                message: 'Error al consultar los usuarios'
            });
        }
        res.json(results);
    });

});

// Configuración de la ruta POST para crear un nuevo usuario
app.post('/users', (req, res) => {

    const {
        Nombre,
        Apellido,
        Nickname,
        Email,
        Password,
        IsAdmin
    } = req.body;

    const sql = `
        INSERT INTO usuarios
        (Nombre, Apellido, Nickname, Email, Password, IsAdmin)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        Nombre,
        Apellido,
        Nickname,
        Email,
        Password,
        IsAdmin
    ];

    db.query(sql, valores, (error, result) => {

        if (error) {
            console.error(error);

            return res.status(500).json({
                message: 'Error al crear el usuario'
            });
        }

        res.status(201).json({
            message: 'Usuario creado correctamente',
            id: result.insertId
        });
    });
});

// Configuración de la ruta PUT para actualizar un usuario existente
app.put('/users/:id', (req, res) => {

    const { id } = req.params;

    const {
        Nombre,
        Apellido,
        Nickname,
        Email,
        Password,
        IsAdmin
    } = req.body;

    const sql = `
        UPDATE usuarios
        SET
            Nombre = ?,
            Apellido = ?,
            Nickname = ?,
            Email = ?,
            Password = ?,
            IsAdmin = ?
        WHERE Id = ?
    `;

    const valores = [
        Nombre,
        Apellido,
        Nickname,
        Email,
        Password,
        IsAdmin,
        id
    ];

    db.query(sql, valores, (error, result) => {

        if (error) {

            console.error(error);

            return res.status(500).json({
                message: 'Error al actualizar el usuario'
            });
        }

        if (result.affectedRows === 0) {

            return res.status(404).json({
                message: 'Usuario no encontrado'
            });
        }

        res.status(200).json({
            message: 'Usuario actualizado correctamente'
        });
    });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});