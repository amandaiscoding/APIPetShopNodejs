const ServicoUsuario = require('../services/usuario.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken') 
const config = require("../config.js")

const servico = new ServicoUsuario()

class ControllerUsuario {

    async Login(req, res) {
        const { email, senha } = req.body

        if(!email || !senha ){
            return res.status(401).json({ message: "E-mail ou senha inválidos" })
        }
        console.log(email)

        const { dataValues: usuario } = await servico.PegarUmPorEmail(email)

        if(!usuario) {
            console.log('erro1')
            return res.status(401).json({ message: "E-mail ou senha inválidos" })
        }
        if(!(await bcrypt.compare(senha, usuario.senha))){
            console.log('erro2')
            return res.status(401).json({ message: "E-mail ou senha inválidos" })
        }
       console.log(usuario)      
        const token = jwt.sign( // gerando o token
            { idUsuario: usuario.idUsuario, email: usuario.email, permissao: usuario.Permissao},
            config.secret
        )

        res.json({ token })             
    }

}

module.exports = ControllerUsuario