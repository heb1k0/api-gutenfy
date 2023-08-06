// Path: src\models\ScheduleHours.js
const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const ScheduleHours = sequelize.define('ScheduleHours', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    start_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    end_time: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    scheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'scheduleHours',
    timestamps: true,
});

module.exports = ScheduleHours;
