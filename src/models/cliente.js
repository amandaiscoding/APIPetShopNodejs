const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cliente = conexao.define('clientes', {
    idCliente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.INTEGER,
        unique: true,
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Cliente