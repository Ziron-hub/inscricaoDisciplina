const Retangulo = require('../models/disciplinaModel') 
const Usuario = require('../models/Usuario') 
connection = require('../database/connection')

module.exports = {
    async create(request, response){
        const {ano, creditos, maxCredito, semestre} = request.body
        id = "1"
        await connection('periodo').insert({
            id,
            ano,
            creditos,
            maxCredito,
            semestre,

        })
        return response.json({"teste":"deu"})
    }
}