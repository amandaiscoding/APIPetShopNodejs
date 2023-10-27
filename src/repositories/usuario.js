const Usuario = require('../models/usuario.js')

class RepositorioUsuario {

    async PegarUmPorEmail(email) {
        return Usuario.findOne({
            where: { email }
        })
    }

}

module.exports = RepositorioUsuario