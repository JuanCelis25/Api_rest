const genero = require('../models/generos');

//get
exports.traer = async (req, res)=>{
            const generos = await genero.find();
            res.json(generos);         
} 
//get
exports.traerid = async (req, res)=>{
      const id = req.params.id;
      const generos = await genero.findById(id);
      res.json(generos);
}
//post
genero.init();

exports.agregar = (req, res)=>{
      const newGenero = genero(req.body);
      newGenero.save()
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
};

//put
exports.actualizar = async (req, res)=>{
      const {id} = req.params;
      const {nombreGenero, estadoGenero} = req.body;
      genero
      .updateOne({ _id: id }, { $set: {nombreGenero, estadoGenero} } )
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
     
}

//eliminar
exports.eliminar = (req, res)=>{
      const id = req.params.id;    
      genero
      .deleteOne({_id: id})
      .then((data)=>res.json(data))
      .catch((error)=>res.json({message: error}));
};
