const ServicoAtendimento = require('../services/atendimento.js')
const servico = new ServicoAtendimento()

class ControllerAtendimento {

    async PegarUm(req, res) {
        try {
            console.log(req.params.idAtendimento)
            const result = await servico.PegarUm(req.params.idAtendimento)
            res.status(200).json({
                atendimento: result     
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                message: error.message
            })
        }
    }

    async PegarTodos(_, res) {
        try {
            const result = await servico.PegarTodos()
            res.status(200).json({
                atendimento: result
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                message: "Erro ao buscar informações."
            })
        }
    }

    async Add(req, res) {
        try {
            const result = await servico.Add(req.body.atendimento)
            res.status(201).json({
                atendimento: result
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                message: error.message
            })
        }
    }
    
    async Update(req, res) {
        try {
            const result = await servico.Update(req.params.idAtendimento, req.body.atendimento)
            res.status(200).json({
                atendimento: result,
                message: "Cadastro atualizado com sucesso."
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Delete(req, res) {
        try {
            await servico.Delete(req.params.idAtendimento)
            res.status(200).json({
                message: "Cadastro deletado com sucesso."
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                message: "Erro ao deletar cadastro de atendimento."
            })
        }
    }

} 

module.exports = ControllerAtendimento