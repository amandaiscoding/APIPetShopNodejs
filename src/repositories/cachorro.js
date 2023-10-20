const Cachorro = require('../models/cachorro.js')
const Atendimento = require('../models/atendimento.js')

class RepositorioCachorro {
    
    async PegarUm(idCachorro) {
        return Cachorro.findOne({
            where: {idCachorro},
            include: ['atendimentos']
        })
    }

    async PegarTodos() {
        return Cachorro.findAll()
    }

    async Add(cachorro) {
        console.log(cachorro)
        const result = await Cachorro.create(cachorro)
        console.log(result)
        return result
    }
 
    async Update(idCachorro, cachorro) {
        const result = await Cachorro.update(cachorro, {
            where: {idCachorro}
        })
        return result
    }

    async Delete(idCachorro) {
        return Cachorro.destroy({
            where: { idCachorro }
        })
    }
            
    
}

module.exports = RepositorioCachorro