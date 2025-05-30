var Edicao = require('../models/edicao')
var Pais = require('../models/pais')
var Interprete = require('../models/interprete')

module.exports.getAllEdicoes = () => {
    return Edicao
        .find({}, { anoEdicao: 1, organizacao: 1, vencedor: 1 })
        .exec()
}

module.exports.getEdicaoById = (id) => {
    return Edicao
        .findById(id)
        .exec()
}

module.exports.getPaisById = (id) => {
    return Pais
        .findById(id)
        .exec()
}

module.exports.getEdicoesOrganizacao = (org) => {
    return Edicao
        .find({ organizacao: org }, { anoEdicao: 1, organizacao: 1, vencedor: 1 })
        .exec()
}

module.exports.getPaisesOrganizadores = () => {
    return Pais
        .find({ "organizou.0": { $exists: true } }, { _id: 1, organizou: 1 })
        .sort({ _id: 1 })
        .exec()
}

module.exports.getPaisesVencedores = () => {
    return Pais
        .find({ "participou.venceu": true }, { _id: 1, participou: 1 })
        .sort({ _id: 1 })
        .exec()
        .then(paises => {
            return paises.map(p => ({
                pais: p._id,
                vitorias: p.participou
                    .filter(p => p.venceu)
                    .map(p => p.ano)
            }))
        })
}

module.exports.getInterpretes = () => {
    return Interprete
        .find({}, { _id: 1, pais: 1 })
        .sort({ _id: 1 })
        .exec()
}

module.exports.addEdicao = (edicao) => {

    var nova_edicao = new Edicao(edicao)
    return nova_edicao.save() 
}

module.exports.deleteEdicao = (id) => {
    return Edicao
        .findByIdAndDelete(id)
        .exec()
}

module.exports.updateEdicao = (id, edicaoAtualizada) => {
    return Edicao
        .findByIdAndUpdate(id, edicaoAtualizada, { new: true }) // `new: true` devolve o documento atualizado
        .exec()
}
