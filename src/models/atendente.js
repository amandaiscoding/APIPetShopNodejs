const { DataTypes } = require('sequelize');
const conexao = require('../database.js');
const Usuario = require('./usuario.js');


const Atendente = conexao.define('atendentes', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(150),
        allowNull: false
    },}, {});

Atendente.belongsTo(Usuario, { foreignKey: 'id_user', allowNull: false });


module.exports = Atendente;