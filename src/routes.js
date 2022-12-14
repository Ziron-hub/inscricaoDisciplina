const express = require('express')
connection = require('../src/database/connection')

const DisciplinaController = require('./controllers/DisciplinaController')
const AlunoController  = require('./controllers/AlunoController')

const routes = express.Router()

routes.post('/disciplina', DisciplinaController.create)

routes.get('/aluno/:id/disciplinas', AlunoController.indexDisciplinas)

routes.post('/aluno/disciplina', AlunoController.inscreverAlunoDisciplina)

routes.get('/disciplina/vagas/:id', DisciplinaController.consultarNumVagasDisc)

routes.get('/disciplina/:id/alunosDeferidos', DisciplinaController.consultarAlunosDef)

routes.get('/', (_req, res) => res.send('OK - Funcionando!?'))

module.exports = routes