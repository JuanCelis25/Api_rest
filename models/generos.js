const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

const schema = moongose.Schema({     
      _id: Number,
      nombreGenero: {
            type: String,
            required: true
      },
      estadoGenero: {
            type: String,
            required: true
      }
})
module.exports = mongoose.model('generos', schema);