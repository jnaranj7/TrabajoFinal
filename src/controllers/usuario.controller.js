import usuarioModel from "../models/usuario.model.js";

/*
    GET -> me muestra los usuarios
    POST -> me crea usuarios
    PUT -> me modifica USUARIOS
    DELETE -> me elimina usuarios
*/

//prueba inicial
export const getUsuario = async (req, res) => {
    try{
        let usuarios = await usuarioModel.find();
        return res.send(usuarios)
    }catch{
        return res.json({error: "error al mostrar los datos" + error})
    }
}
export const postUsuario = async (req, res) => {
   try{
      let datosUsuario = req.body;
      let nuevoUsuario = await usuarioModel.create(datosUsuario)
      return res.json(nuevoUsuario)
   }catch(error){
     return res.json({error: "error al crear los datos" message: error.message})
   }
}
export const putUsuario = async (req, res) => {
    return res.send('Funciona la petición PUT');
}
export const deleteUsuario = async (req, res) => {
    return res.send('Funciona la petición DELETE');
}