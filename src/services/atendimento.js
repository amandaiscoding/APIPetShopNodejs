const RepositorioAtendimentos = require('../repositories/atendimento.js')
const repositorio = new RepositorioAtendimentos()


class ServicoAtendimento {

    VerificarAtendimento(atendimento) {
        if(!atendimento){
            throw new Error('Não foi enviado um atendimento para cadastrar.')
        } else if(!atendimento.idAtendimento){
            throw new Error('Não foi enviado o ID do atendimento.')
        } 
        return true
    }

    async PegarUm(idAtendimento) {
        if(isNaN(idAtendimento)) {
            throw new Error("Favor informar o ID apenas com número.")
        } 
        const resultadoId = repositorio.PegarUm(idAtendimento)
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

    async Add(atendimento) {
        this.VerificarAtendimento(atendimento)
        return repositorio.Add(atendimento)
    }

    async Update(idAtendimento, atendimento) {
        if(!idAtendimento) {
            throw new Error('Não foi enviado o identificador do atendimento para alterar.')
        }
        this.VerificarAtendimento(atendimento)
        return repositorio.Update(idAtendimento, atendimento)
    }

    async Delete(idAtendimento) {
        return repositorio.Delete(idAtendimento)
    }
}

module.exports = ServicoAtendimento