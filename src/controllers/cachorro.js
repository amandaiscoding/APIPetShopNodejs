const ServicoCachorro = require('../services/cachorro.js');
const servico = new ServicoCachorro();

class ControllerCachorro {

    async PegarUm(req, res) {
        try {
            console.log(req.params.idCachorro);
            const result = await servico.PegarUm(req.params.idCachorro);
            res.status(200).json({
                cachorro: result     
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async PegarTodos(_, res) {
        try {
            const result = await servico.PegarTodos();
            res.status(200).json({
                cachorros: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao buscar informações."
            })
        }
    }

    async Create(req, res) {
        try {
            const result = await servico.Create(req.body.cachorro);
            res.status(201).json({
                cachorro: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Update(req, res) {
        try {
            const result = await servico.Update(req.params.idCachorro, req.body.cachorro);
            res.status(200).json({
                message: "Cadastro atualizado com sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Delete(req, res) {
        try {
            await servico.Delete(req.params.idCachorro);
            res.status(200).json({
                message: "Cadastro deletado com sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro de cachorro."
            })
        }
    }

} 

module.exports = ControllerCachorro