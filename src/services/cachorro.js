const RepositorioCachorros = require('../repositories/cachorro.js')
const repositorio = new RepositorioCachorros()


class ServicoCachorros {

    VerificarCachorro(cachorro) {
        if(!cachorro){
            throw new Error('Não foi enviado um cachorro para cadastrar.')
        } else if(!cachorro.nome){
            throw new Error('Não foi enviado o nome do cachorro.')
        } else if(!cachorro.raca){
            throw new Error('Não foi enviado a raça do cachorro.')
        } 
        return true
    }

    async PegarUm(idCachorro) {
        if(isNaN(idCachorro)) {
            throw new Error("Favor informar o ID apenas com número.")
        } 
        const resultadoId = repositorio.PegarUm(idCachorro)
        console.log(resultadoId)
        if(resultadoId == null) {
            throw new Error("Esse ID não foi encontrado.")
        } else {
            return resultadoId
        }
    }

    async PegarTodos() {
        return repositorio.PegarTodos()
    }

    async Add(cachorro) {
        this.VerificarCachorro(cachorro)
        return repositorio.Add(cachorro)
    }

    async Update(idCachorro, cachorro) {
        if(!idCachorro) {
            throw new Error('Não foi enviado o identificador do cachorro para alterar.')
        }
        this.VerificarCachorro(cachorro)
        return repositorio.Update(idCachorro, cachorro)
    }

    async Delete(idCachorro) {
        return repositorio.Delete(idCachorro)
    }
}

module.exports = ServicoCachorros