const RepositorioCliente = require("../repositories/cliente");

const repositorio = new RepositorioCliente()

class ServicoCliente {
    
    VerficarPessoa(cliente) {
        if(!cliente){
            throw new Error('Não foi enviado o cliente para adicionar');
        } else if(!cliente.nome){
            throw new Error('Não foi enviado o nome do cliente');
        } else if(!cliente.telefone){
            throw new Error('Não foi enviado o telefone do cliente');
        }

        return true
    }

    async PegarUm(idCliente, transaction) {
        return repositorio.PegarUm(idCliente, transaction);
    }

    async PegarTodos() {
        return repositorio.PegarTodos();
    }

    async Add(cliente, transaction) {
        this.VerficarPessoa(cliente)

        return repositorio.Add(cliente, transaction);
    }

    async Update(idCliente, cliente) {
        if(!idCliente) {
            throw new Error('Não foi enviada o identificador do cliente para alterar');
        } 
        this.VerficarPessoa(cliente)

        return repositorio.Update(idCliente, cliente);
    }

    async Delete(idCliente) {
        return repositorio.Delete(idCliente);
    }

} 

module.exports = ServicoCliente