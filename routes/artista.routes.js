const express = require('express');
const routes = express.Router();
const artistas = require('../controllers/artista');

routes.get('/artistas', artistas.traer);

routes.get('/artistas/:id', artistas.traerid);

routes.post('/artistas', artistas.agregar);

routes.put('/artistas/:id', artistas.actualizar);

routes.delete('/artistas/:id', artistas.eliminar);

module.exports = routes;