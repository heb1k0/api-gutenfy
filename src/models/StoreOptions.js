const {  DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const StoreOptions = sequelize.define('StoreOptions', {
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
    }
}, {
    tableName: 'storeoptions',
    timestamps: true,
});

module.exports = StoreOptions;
