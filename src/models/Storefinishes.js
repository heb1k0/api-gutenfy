const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Storefinishes = sequelize.define('Storefinishes', {
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
    finishesId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    tableName: 'storefinishes',
    timestamps: true,
});

module.exports = Storefinishes;