const express = require('express')

const DisciplinaController = require('./controllers/DisciplinaController')

const routes = express.Router()

routes.get('/disciplina', DisciplinaController.create)

module.exports = routes