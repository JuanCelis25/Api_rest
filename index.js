const express = require('express');
const path = require('path');
const ejs = require('ejs');
const {connectDB} = require('./db');



connectDB();
const server = express();


server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs'); 

server.use(express.json())

server.use('/', require('./routes/rutas'));
server.use('/pinaRecord', require('./routes/album.routes'));
server.use('/pinaRecord', require('./routes/cancion.routes'));
server.use('/pinaRecord', require('./routes/genero.routes'));
server.use('/pinaRecord', require('./routes/artista.routes'));

server.use(express.static('public'));


server.listen(process.env.PORT || 3000);
console.log(process.env.PORT || 3000);
server.use((req , res, next)=>{
      res.status(404).sendFile(__dirname + '/views/Error.html');
})

