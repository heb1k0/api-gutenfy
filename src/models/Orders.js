const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');
const Order = sequelize.define('Orders', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    payed: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    accepted: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    printed: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    delivered: {
        type: DataTypes.DATE,

        allowNull: true,
    },
    order_status: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    idUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idStore: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'orders',
    timestamps: true,
});

module.exports = Order;

