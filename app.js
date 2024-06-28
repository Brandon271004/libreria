
//declaracion de variables y meter el url de mongoose compass
const mongoose = require('mongoose');
const url_bd = 'mongodb://localhost:27017/LIBRERIA'
mongoose.connect(url_bd)
    //la validacion de errores
    .then(() => {
        console.log("SI jalo")
    }
    )
    .catch((err) => {
        console.log("No furulo")
    }
    )
//creo esquema
const Esquema_Libreria = new mongoose.Schema(
    {
        titulo: {
            type: String
        },
        autor: {
            type: String
        },
        date: {
           type: String
        },
        lanzamiento:{
          type:  String
        },
        refencias:{
            type: String
        },
        precio:{
            type: Number
        },
        editorial:{
            type: String
        }
    }
)

//creando coleccion
const Libreria_model = new mongoose.model('Datos personales', Esquema_Libreria)
//crear datos
Libreria_model.create({
    titulo: "El principito",
    autor: "Benito Camelo",
    date: "Diciembre 25, 1995",
    lanzamiento:"Españan",
    refencias:"La casa del Libro",
    precio:128,
    editorial:"Libros Mexico"
    
})
