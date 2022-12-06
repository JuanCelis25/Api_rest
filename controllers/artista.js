const artista = require('../models/artista');

exports.traer = async (req, res)=>{
      const artistas = await artista.find()
      res.json(artistas);
}

exports.traerid = async(req, res)=>{
      const id = req.params.id
      const artistas = await artista.findById(id)
    res.status(200).json(artistas);
}


exports.agregar = (req, res)=>{
      const artistas = artista(req.body);
      artistas.save()
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
};

//put
exports.actualizar = async (req, res)=>{
      const {id} = req.params;
      const {noDocumento,tipoDocumento,nombreArtista,apellidoArtista, nombreArtistico, fechaNacimiento,email,estado} = req.body;
      artista
      .updateOne({ _id: id }, { $set: {noDocumento,tipoDocumento,nombreArtista,apellidoArtista, nombreArtistico, fechaNacimiento,email,estado} } )
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
     
}

//eliminar
exports.eliminar = (req, res)=>{
      const id = req.params.id;    
      artista
      .deleteOne({_id: id})
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
};