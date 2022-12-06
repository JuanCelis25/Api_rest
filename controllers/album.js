const album = require('../models/album');
const genero = require('../models/generos');

exports.traer = async (req, res)=>{
      const albums = await album.find().populate('genero',{
            "nombreGenero": 1
      }).populate('artista',{
            "nombreArtista": 1,
            "apellidoArtista":1,
            "nombreArtistico":1
      });
      res.status(200).json(albums);
}

exports.traerId = async (req,res)=>{
      const id = req.params.id;
      const albums = await album.findById(id).populate('genero',{
            "nombreGenero": 1
      }).populate('artista',{
            "nombreArtista": 1,
            "apellidoArtista":1,
            "nombreArtistico":1
      });
      res.json(albums);
}

exports.agregar = (req, res)=>{
      const newAlbum = album(req.body);
      newAlbum.save()
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
}; 

exports.actualizar = async (req, res)=>{
      const {id} = req.params;
      const {nombreAlbum, añoPublicacion, estadoAlbum, genero, artista} = req.body;
      album
      .updateOne({ _id: id }, { $set: {nombreAlbum, añoPublicacion, estadoAlbum, genero, artista } })
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
     
}

exports.eliminar = async(req, res)=>{
      const id = req.params.id;   
      album
      .deleteOne({_id: id})
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
}