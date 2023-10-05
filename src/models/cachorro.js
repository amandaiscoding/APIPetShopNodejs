const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Cliente = require('./cliente.js');

const Cachorro = conexao.define('cachorro', {
    idCachorro: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idCliente: {
        type: DataTypes.STRING,
    },
    raca: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    createdAt: false,
    updatedAt: false
});

// /* Relacionamento 1 para 1 usa belongsTo(pertence a), no caso cliente. */
Cachorro.belongsTo(Cliente, { 
    constraint: true, 
    foreignKey: 'idCliente'
})

/* Relacionamento 1 para N usa hasMany, no caso cachorro.*/
Cliente.hasMany(Cachorro, {
    foreignKey: 'idCliente'
})

module.exports = Cachorro