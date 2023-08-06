const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const Schedule = sequelize.define('Schedule', {
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
    weekdays: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
    },
    from: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    to: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'schedule',
    timestamps: true,
});

module.exports = Schedule;
