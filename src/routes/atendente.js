const express = require('express')
const ControllerAtendente = require('../controllers/atendente.js')
const authMiddleware = require('../middleware/auth.js')

const controller = new ControllerUsuario()
const routerUsuario = express.Router()

routerUsuario.post('/api/login', controller.Login)
routerUsuario.get('/api/usuario/:idUsuario', authMiddleware, controller.PegarUm)
routerUsuario.get('/api/usuario/', authMiddleware, controller.PegarTodos)
routerUsuario.post('/api/usuario', authMiddleware, controller.Add)
routerUsuario.put('/api/usuario/:idUsuario', authMiddleware, controller.Update)
routerUsuario.delete('/api/usuario/:idUsuario', authMiddleware, controller.Delete)

module.exports = routerUsuario