var mongoose = require('mongoose')

var organizouSchema = new mongoose.Schema({
    _id: String,
    ano: Number
}, { _id: false })

var participouSchema = new mongoose.Schema({
    _id: String,
    ano: Number,
    nome_musica: String,
    "id-musica": String,
    interprete: String,
    venceu: Boolean
}, { _id: false })

var paisSchema = new mongoose.Schema({
    _id: String, // nome do país
    organizou: [organizouSchema],
    participou: [participouSchema]
}, { versionKey: false })

module.exports = mongoose.model('paises', paisSchema)
