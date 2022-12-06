const { default: mongoose } = require('mongoose');
const {moongose, Schema, model} = require('mongoose');

const schema = mongoose.Schema({     
      _id: Number,
      nombreAlbum: {
            type: String, 
            required: true, 
            unique: true
      },   
      añoPublicacion: {
            type: Number,
            required: true
      },
      estadoAlbum: {
            type: String,
            required: true
      },
      genero: [{
            type: Schema.Types.Number,
            ref: 'generos'
      }],
      artista: [{
            type: Schema.Types.Number,
            ref: 'artista'
      }]

})
module.exports = mongoose.model('Album', schema);