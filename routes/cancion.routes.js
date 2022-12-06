const express = require('express');
const routes = express.Router();
const Cancion = require('../controllers/cancion');

routes.get('/canciones', Cancion.traer);

routes.get('/canciones/:id', Cancion.traerid);

routes.post('/canciones', Cancion.agregar);

routes.put('/canciones/:id', Cancion.actualizar);

routes.delete('/canciones/:id', Cancion.eliminar);

module.exports = routes;