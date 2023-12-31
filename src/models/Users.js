import {sequelize} from '../config/db.js';
import { DataTypes } from 'sequelize';

export const Users = sequelize.define('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    last_name: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
    avatar: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    purse: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'users',
    timestamps: true,
});

// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
// }).catch((error) => {
//     console.error('Unable to create table : ', error);
// });
 