const servicoAtendentes = require('../services/atendente.js');
const servico = new ServicoAtendente();

class ControllerAtendente {

    async PegarUm(req, res) {
        try {
            console.log(req.params.idUsuario);
            const result = await servico.PegarUm(req.params.idUsuario);
            res.status(200).json({
                atendente: result     
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async PegarTodos(req, res) {
        try {
            const result = await servico.PegarTodos();
            res.status(200).json({
                atendentes: result
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Add(req, res) {
        try {
            const result = await servico.Create(req.body.usuario);
            res.status(201).json({
                atendente: result
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
            const result = await servico.Update(req.params.idUsuario, req.body.usuario);
            res.status(200).json({
                message: "Cadastro alterado com sucesso."
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
            await servico.Delete(req.params.idUsuario);
            res.status(200).json({
                message: "Cadastro excluído com sucesso."
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: "Erro ao deletar cadastro de cliente."
            })
        }
    }
} 

module.exports = ControllerAtendente