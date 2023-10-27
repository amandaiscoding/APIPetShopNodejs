const express = require('express')
const ControllerUsuario = require('../controllers/usuario.js')
const controller = new ControllerUsuario()

const routerUsuario = express.Router()

routerUsuario.post('/api/login', controller.Login)

module.exports = routerUsuario