const express = require('express')
const ControllerAtendimento = require('../controllers/atendimento.js')
const controllerAtendimento = new ControllerAtendimento()
const routerAtendimento = express.Router()

routerAtendimento.get('/api/atendimento/:idAtendimento', controllerAtendimento.PegarUm)
routerAtendimento.get('/api/atendimento', controllerAtendimento.PegarTodos)
routerAtendimento.post('/api/atendimento', controllerAtendimento.Add)
routerAtendimento.put('/api/atendimento/:idAtendimento', controllerAtendimento.Update)
routerAtendimento.delete('/api/atendimento/:idAtendimento', controllerAtendimento.Delete)

module.exports = routerAtendimento