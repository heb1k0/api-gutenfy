const {  DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TypePrinting = sequelize.define('TypePrinting', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    type_name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    finished: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
}, {
    tableName: 'typePrinting',
    timestamps: true,
});
