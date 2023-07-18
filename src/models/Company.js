const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Company = sequelize.define('Company', {
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
    cif: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    cp: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    managerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'company',
    timestamps: true,
});

module.exports = Company;
