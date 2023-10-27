const servicoAtendente = require('../services/atendente.js')
const servico = new servicoAtendente()

class ControllerAtendente {

    async PegarUm(req, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Sem permissão")
            }
            const result = await servico.PegarUm(req.params.id)
            res.status(200).json({
                atendente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            if(req.session.permissao != 0){
                throw new Error("Sem permissão")
            }
            const result = await servico.PegarTodos()
            res.status(200).json({
                atendentes: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res) {
        try {
            const result = await servico.Add(req.body.usuario)
            res.status(201).json({
                atendente: result
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
            const result = await servico.Update(req.params.idUsuario, req.body.usuario)
            res.status(200).json({
                message: "Cadastro alterado com sucesso."
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
            await servico.Delete(req.params.idUsuario)
            res.status(200).json({
                message: "Cadastro excluído com sucesso."
            })
        } catch(error) {
            console.log(error)
            res.status(500).json({
                message: "Erro ao deletar cadastro de cliente."
            })
        }
    }
} 

module.exports = ControllerAtendente