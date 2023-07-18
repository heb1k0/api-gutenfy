const {  DataTypes } = require('sequelize');
const sequelize = require('../config/db');


const SettingOption = sequelize.define('SettingOption', {
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
    idservice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
}, {
    tableName: 'settingOptions',
    timestamps: true,
});

module.exports = SettingOption;
