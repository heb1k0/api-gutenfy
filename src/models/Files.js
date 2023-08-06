const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const File = sequelize.define('File', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    page_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    document: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    idOrder: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    settings: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    idfinished: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    typeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'files',
    timestamps: true,
});

module.exports = File;
