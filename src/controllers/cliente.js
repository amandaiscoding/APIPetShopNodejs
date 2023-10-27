const ServicoCliente = require("../services/cliente")

const servico = new ServicoCliente()

class ControllerCliente {

    async PegarUm(req, res){
        try {
            console.log(req.params.idCliente)
            const result = await servico.PegarUm(req.params.idCliente)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }
    
    async PegarTodos(_, res){
        try {
            const result = await servico.PegarTodos()
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            console.log(req.session.permissao)
            const resultCliente = await servico.Add(req.body.cliente);
            res.status(201).json({
                message: { resultCliente }
            })
        } catch(error) {
            console.log(error);
            res.status(500).json({
                message: error.message
            })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.idCliente, req.body.cliente)
            res.status(200).json({
                cliente: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            await servico.Delete(req.params.idCliente)
            res.status(204)
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

}

module.exports = ControllerCliente