const express = require('express');
const routes = express.Router();
const Album = require('../controllers/album');

routes.get('/albums', Album.traer);

routes.get('/albums/:id', Album.traerId);

routes.post('/albums', Album.agregar);

routes.put('/albums/:id', Album.actualizar);

routes.delete('/albums/:id', Album.eliminar);

module.exports = routes;