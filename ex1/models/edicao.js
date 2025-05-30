var mongoose = require('mongoose')

var musicaSchema = new mongoose.Schema({
    _id: String,
    link: String,
    compositor: String,
    interprete: String,
    letra: String,
    titulo: String,
    pais: String
})

var edicaoSchema = new mongoose.Schema({
    _id: String,
    anoEdicao: Number,
    organizacao: String,
    vencedor: String, // pode estar ausente
    musicas: [musicaSchema]
}, { versionKey: false })

module.exports = mongoose.model('edicoes', edicaoSchema)
