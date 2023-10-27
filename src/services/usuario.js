const RepositorioUsuarios = require("../repositories/usuario")

const repositorio = new RepositorioUsuarios()

class ServicoUsuario {
    
    VerficarUsuario(usuario) {
        if(!usuario){
            throw new Error('Usuário inválido')
        } else if(!usuario.email){
            throw new Error('Email inválido')
        } else if(!usuario.senha){
            throw new Error('Senha inválida')
        }
        return true
    }

    async PegarUm(idUsuario, transaction) {
        return repositorio.PegarUm(idUsuario, transaction)
    }

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email)
    }

    async PegarTodos() {
        return repositorio.PegarTodos()
    }

    async Add(usuario, transaction) {
        this.VerficarUsuario(usuario)

        return repositorio.Create(usuario, transaction)
    }

    async Update(idUsuario, usuario) {
        if(!idUsuario) {
            throw new Error('ID inválido')
        } 
        this.VerficarUsuario(usuario)

        return repositorio.Update(idUsuario, usuario)
    }

    async Delete(idUsuario) {
        return repositorio.Delete(idUsuario)
    }

} 

module.exports = ServicoUsuario