const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes/');

const app = express();

// Configuración de middlewares
app.use(morgan('dev')); // Para el log de peticiones HTTP
app.use(cors()); // Para permitir CORS (Cross-Origin Resource Sharing)
app.use(express.json()); // Para interpretar cuerpos de peticiones en formato JSON

// Rutas
app.use(router);

module.exports = app;
