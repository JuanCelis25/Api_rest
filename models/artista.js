const { default: mongoose } = require('mongoose');

const schema = mongoose.Schema({     
      _id: Number,
      noDocumento: {
            type: Number,
            Unique: true, 
            required: true
      },
      tipoDocumento: {
            type: String,
            required: true
      },
      nombreArtista: {
            type: String,
            required: true
      },
      apellidoArtista: {
            type: String,
            required: true
      },
      nombreArtistico:{
            type: String,
            required: true, 
            unique: true
      },
      fechaNacimiento:{
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true, 
            unique: true
      },
      estado:{
            type: String,
            required: true
      }


})
module.exports = mongoose.model('artista', schema);