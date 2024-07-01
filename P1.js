//FLORERIA SGAG
const mongoose = require ('mongoose')
const url_bd = 'mongodb://localhost:27017/P1'
mongoose.connect(url_bd)
.then(() => { 
    console.log ("Puedo dormir tranquila Parte1")
})
.catch((err) => {
    console.log("No jala esta chingadera Parte1")
}) 
const esquema_floreria = new mongoose.Schema
({
    Nombre : {
        type : String
    }, 
    Dirección : {
        type : String
    },
    Número : {
        type : Number
    },
    GerenteCargo : {
        type : String
    },
    Sucursales : {
        type : Number
    }
})
const modelo_floreria = new mongoose.model 
("Tab_Datos", esquema_floreria)
modelo_floreria.create ({
    Nombre : "Flower´s ShG",
    Dirección : "Ave de Paraíso",
    Número : 449670,
    GerenteCargo : "Gael Romero",
    Sucursales : 4
})