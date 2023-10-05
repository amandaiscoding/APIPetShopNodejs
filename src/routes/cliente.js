const express = require('express')
const ControllerCliente = require('../controllers/cliente.js')
const controller = new ControllerCliente()
const router = express.Router()

router.get('/api/cliente/:idCliente', controller.PegarUm)
router.get('/api/cliente/', controller.PegarTodos)
router.post('/api/cliente', controller.Add)
router.put('/api/cliente/:ididCliente', controller.Update)
router.delete('/api/cliente/:ididCliente', controller.Delete)

module.exports = router