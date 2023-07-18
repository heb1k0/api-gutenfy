// Path: src\models\Finishes.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const FinishesOptions = sequelize.define('FinishesOptions', {
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
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    finishesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'finishesOptions',
    timestamps: true,
});

module.exports = FinishesOptions;
