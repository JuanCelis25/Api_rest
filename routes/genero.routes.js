const express = require('express');
const routes = express.Router();
const generoC = require('../controllers/genero.js')

routes.get('/generos', generoC.traer);

routes.get('/generos/:id', generoC.traerid );

routes.post('/generos', generoC.agregar);

routes.put('/generos/:id', generoC.actualizar);

routes.delete('/generos/:id', generoC.eliminar);
module.exports = routes;