const canciones = require('../models/canciones');
const album = require('../models/album');

//get
exports.traer = async(req, res)=>{
    const cancion = await canciones.find().populate('album',{
        "nombreAlbum": 1,
        "añoPublicacion": 1,
        "estadoAlbum": 1
  });
  res.status(200).json(cancion);
}

//GET WITH ID
exports.traerid = async(req, res)=>{
    const id = req.params.id
    const cancion = await canciones.findById(id).populate('album',{
        "nombreAlbum": 1,
        "añoPublicacion": 1,
        "estadoAlbum": 1
  });
  res.status(200).json(cancion);
}

//POST
exports.agregar = (req, res)=>{
    const newSong = canciones(req.body);
    newSong.save()
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
}

//PUT
exports.actualizar = async (req, res)=>{
    const {id} = req.params;
    const {nombreCancion, fechaGrabacion, estadoCancion, album} = req.body;
    canciones
    .updateOne({ _id: id }, { $set: {nombreCancion, fechaGrabacion, estadoCancion, album } })
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));  
}

//DELETE
exports.eliminar = async(req, res)=>{
    const id = req.params.id;   
    canciones
    .deleteOne({_id: id})
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message: error}));
}