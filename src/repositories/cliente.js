const Cliente = require('../models/cliente.js')
const Cachorro = require('../models/cachorro.js')

class RepositorioCliente {

    async PegarUm(idCliente) {
        return Cliente.findOne({
            where: { idCliente },
            include: [Cachorro]
        })
    }
    
    async PegarTodos() {
        return Cliente.findAll()
    }

    async Add(cliente, transaction) {
        const result = await Cliente.create(cliente, { transaction })

        return result
    }

    async Update(idCliente, cliente) {
        const result = await Cliente.update(cliente, {
            where: {
                idCliente
            }
        })

        console.log(result)

        return result
    }

    async Delete(idCliente) {
        return Cliente.destroy({
            where: { idCliente }
        })
    }

}

module.exports = RepositorioCliente