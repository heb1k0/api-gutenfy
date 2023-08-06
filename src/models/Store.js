const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Store = sequelize.define('Store', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    idCompany: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    cordenadas: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    cp: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    logo: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    open: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    slug: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'stores',
    timestamps: true,
});

module.exports = Store;