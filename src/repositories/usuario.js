const Usuario = require('../models/usuario.js')
const bcrypt = require('bcrypt')

class RepositorioUsuario {

    async PegarUm(idUsuario, transaction) {
        return Usuario.findOne({
            where: { idUsuario },
            transaction
        });
    }

    async PegarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        });
    }
    
    async PegarTodos() {
        return Usuario.findAll();
    }

    async Add(usuario, transaction) {
        const hashSenha = await bcrypt.hash(usuario.senha, 10)

        const result = await Usuario.create(
            { ...usuario, senha: hashSenha },
            { transaction }
        )
        return result
    }

    async Update(idUsuario, usuario) {
        const result = await Usuario.update(usuario, {
            where: {
                idUsuario
            }
        })
        console.log(result)
        return result
    }

    async Delete(idUsuario) {
        return Usuario.destroy({
            where: { idUsuario }
        });
    }

}

module.exports = RepositorioUsuario