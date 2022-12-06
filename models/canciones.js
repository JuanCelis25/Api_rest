const { default: mongoose } = require('mongoose');
const {moongose, Schema, model} = require('mongoose');

const schema = mongoose.Schema({
      _id: Number,
      nombreCancion: {
            type: String,
            required: true
      },
      fechaGrabacion: {
            type: Number,
            required: true
      },
      estadoCancion: {
            type: String,
            required: true
      },
      album: [{
            type: Schema.Types.Number,
            ref: 'Album'
      }]
      

})
module.exports = mongoose.model('canciones', schema);