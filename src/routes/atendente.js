const express = require('express')
const ControllerAtendente = require('../controllers/atendente.js')
const controllerAtendente = new ControllerAtendente()
const authMiddleware = require('../middleware/auth.js')
const routerAtendente = express.Router()

routerAtendente.get('/api/atendente/:id', authMiddleware, controllerAtendente.PegarUm)
routerAtendente.get('/api/atendente/', authMiddleware, controllerAtendente.PegarTodos)
routerAtendente.post('/api/atendente/', authMiddleware, controllerAtendente.Add)
routerAtendente.put('/api/atendente/:idUsuario', authMiddleware, controllerAtendente.Update)
routerAtendente.delete('/api/atendente/:idUsuario', authMiddleware, controllerAtendente.Delete)

module.exports = routerAtendente