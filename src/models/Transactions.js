
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Transaction = sequelize.define('Transaction', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'transactions',
    timestamps: true,
});

module.exports = Transaction;