const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const StoreServices = sequelize.define('StoreServices', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    storeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ServicesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    tableName: 'storeservices',
    timestamps: true,
});

module.exports = StoreServices;
