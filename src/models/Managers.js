const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Manager = sequelize.define('Manager', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    idStore: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    token: {
        type: DataTypes.STRING(250),
        allowNull: true,
    },
    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    avatar: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
}, {
    tableName: 'managers',
    timestamps: true,
});

module.exports = Manager;
