const express = require('express')
connection = require('../src/database/connection')

const DisciplinaController = require('./controllers/DisciplinaController')

const routes = express.Router()

routes.post('/disciplina', DisciplinaController.create)

module.exports = routes