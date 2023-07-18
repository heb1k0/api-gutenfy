// Path: src\models\Finishes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Finishes = sequelize.define('Finishes', {
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
    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    pay: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    ranges: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    typePrintingId: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
}, {
    tableName: 'finishes',
    timestamps: true,
});

module.exports = Finishes;
