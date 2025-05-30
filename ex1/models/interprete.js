var mongoose = require('mongoose')

var interpreteSchema = new mongoose.Schema({
    _id: String, // nome do intérprete
    pais: String
}, { versionKey: false })

module.exports = mongoose.model('interpretes', interpreteSchema)
