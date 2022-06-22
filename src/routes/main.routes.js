const express = require('express');
const routes = express.Router();

//requerir controlador
const mainController = require('../controllers/mainController');

//rutas
routes.get('/', mainController.home);

routes.get('/about', mainController.about);

module.exports = routes