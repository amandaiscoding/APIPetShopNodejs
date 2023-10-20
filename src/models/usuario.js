const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Cliente = require('./cliente.js');

const Usuario = conexao.define('usuarios', {

    idUsuario: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false,        
    },
    permissao: {
        type: DataTypes.INTEGER,
        unique: true
    },

}, {
    createdAt: false,
    updatedAt: false
});

// 1 usuário para 1 cliente
Cliente.belongsTo(Usuario, { 
    constraint: true, 
    foreignKey: 'idUsuario'
})

module.exports = Usuario