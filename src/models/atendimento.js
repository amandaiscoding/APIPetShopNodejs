const { DataTypes } = require('sequelize')
const conexao = require('../database.js')
const Cachorro = require('./cachorro.js')

const Atendimento = conexao.define('atendimentos', {
    idAtendimento: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    hora: {
        type: DataTypes.TIME,
    },
    valor: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    concluido: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    idAtendimento: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idCliente: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idCachorro: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    createdAt: false,
    updatedAt: false
})

// relacionamento 1 para 1
Atendimento.belongsTo(Cachorro, { 
    constraint: true, 
    foreignKey: 'idAtendimento'
})

// relacionamento 1 para N
Cachorro.hasMany(Atendimento, {
    foreignKey: 'idAtendimento'
})

module.exports = Cachorro