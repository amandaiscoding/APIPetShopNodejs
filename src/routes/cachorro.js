const express = require('express');
const ControllerCachorro = require('../controllers/cachorro.js');
const controllerCachorro = new ControllerCachorro();
const routerCachorro = express.Router();

routerCachorro.get('/api/cachorro/:idCachorro', controllerCachorro.PegarUm);
routerCachorro.get('/api/cachorro', controllerCachorro.PegarTodos);
routerCachorro.post('/api/cachorro', controllerCachorro.Add);
routerCachorro.put('/api/cachorro/:idCachorro', controllerCachorro.Update);
routerCachorro.delete('/api/cachorro/:idCachorro', controllerCachorro.Delete);

module.exports = routerCachorro