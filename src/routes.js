const express = require('express')

const disciplinaController = require('./controllers/disciplinaController')

const routes = express.Router()

routes.get('/disciplina', disciplinaController.create)

module.exports = routes