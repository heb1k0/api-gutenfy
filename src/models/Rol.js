const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Rol = sequelize.define('Rol', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    rol_name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'rol',
    timestamps: true,
});

module.exports = Rol;