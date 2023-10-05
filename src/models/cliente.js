const { DataTypes } = require('sequelize')
const conexao = require('../database.js')

const Cliente = conexao.define('cliente', {
    idCliente: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INT
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.INT,
        unique: true,
    }
}, {
    createdAt: false,
    updatedAt: false
})

module.exports = Cliente