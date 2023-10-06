const Atendimento = require('../models/atendimento.js')

class RepositorioAtendimento{
    
    async PegarUm(idAtendimento) {
        return Atendimento.findOne({
            where: {idAtendimento}
        })
    }

    async PegarTodos() {
        return Atendimento.findAll()
    }

    async Add(atendimento) {
        console.log(atendimento)
        const result = await Atendimento.create(atendimento)
        console.log(result)
        return result
    }
 
    async Update(idAtendimento, atendimento) {
        const result = await Atendimento.update(atendimento, {
            where: {idAtendimento}
        })
        return result
    }

    async Delete(idAtendimento) {
        return Atendimento.destroy({
            where: { idAtendimento }
        })
    }
            
    
}

module.exports = RepositorioAtendimento