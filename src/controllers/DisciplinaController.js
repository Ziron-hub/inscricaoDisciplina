const Retangulo = require('../models/Disciplina/disciplinaModel') 
const Usuario = require('../models/Usuario/Usuario') 
const Disciplina = require('../models/Disciplina/Disciplina')
const connection = require('../database/connection')
const { json } = require('express')

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
    },
    
    async consultarNumVagasDisc(request, response){
        const {id} = request.params;

        const disciplina = new Disciplina();
        const numeroDeVagas = await disciplina.consultarNumVagasDisc(id)

        return response.json(numeroDeVagas)
    }
}