const mongoose = require('mongoose')

const moduloSchema = new mongoose.Schema({

    nombre: {
        type:  String 
    },
    info: {
        type:  String 
    },
    estado: { //agregar a reduX y acciones e interfaz
        type: Boolean,
        default: true 
    },
})

module.exports = mongoose.model('modulo', moduloSchema);