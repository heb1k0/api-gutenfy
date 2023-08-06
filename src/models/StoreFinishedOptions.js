// Path: src\models\StoreFinishesOptions.js
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const StoreFinishesOptions = sequelize.define('StoreFinishesOptions', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    storeservicesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    optionsId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'storefinishesoptions',
    timestamps: true,
});

module.exports = StoreFinishesOptions;