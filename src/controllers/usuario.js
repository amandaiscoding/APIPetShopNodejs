const ServicoUsuario = require('../services/usuario.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 
const config = require("../config.js")

const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res) {
        const { email, senha } = req.body

        if(!email || !senha ){
            return res.status(401).json({ message: "E-mail ou senha inválido" })
        }
        console.log(email)

        const { dataValues: usuario } = await servico.PegarUmPorEmail(email)

        if(!usuario) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválido" })
        }
        if(!(await bcrypt.compare(senha, usuario.senha))){
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválido" })
        }
       console.log(usuario)      
        const token = jwt.sign( // gerando o token
            { idUsuario: usuario.idUsuario, email: usuario.email, permissao: usuario.Permissao},
            config.secret
        )

        res.json({ token })             
    }

    async PegarUm(req, res){
        try {
            const result = await servico.PegarUm(req.params.idUsuario)
            res.status(200).json({
                usuario: result
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
                usuarios: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Add(req, res){
        try {
            const result = await servico.Create(req.body.usuario)
            res.status(201).json({
                usuario: result
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Update(req, res){
        try {
            const result = await servico.Update(req.params.idUsuario, req.body.usuario)
            res.status(200).json({
                message: "Cadastro alterado com Sucesso."
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: error })
        }
    }

    async Delete(req, res){
        try {
            await servico.Delete(req.params.idUsuario)
            res.status(200).json({
                message: "Usuário excluído com Sucesso."
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: "Erro ao deletar usuário."
            })
        }
    }
}

module.exports = ControllerUsuario