const repositorioAtendente = require('../repositories/atendente.js')
const repositorio = new repositorioAtendente()

class servicoAtendente {

    async PegarUmPorEmail(email) {
        return repositorio.PegarUmPorEmail(email)
    }

    async Add(atendente, transaction) {
        return repositorio.Add(atendente, transaction)
    }

    async Update(idUsuario, atendente) {
        if(!idUsuario) {
            throw new Error('Não foi enviado o identificador do atendente para alterar.')
        }
        return repositorio.Update(idUsuario, atendente)
    }

    async Delete(idUsuario) {
        return repositorio.Delete(idUsuario)
    }
}

module.exports = servicoAtendente