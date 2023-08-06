const sequelize = require('./config/db');
const express = require('express');
const apiRouter = require('./routes/index');
const dotenv = require('dotenv');
const app = express();
dotenv.config();

// CONSTANTS
const PORT = process.env.PORT || 3000;


async function main() {
    try {
        await sequelize.authenticate();
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use('/', apiRouter);
        app.listen(PORT, () => {
            console.log(`Server Gutenfy running on port ${PORT}`);
        });
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database: ', error);
    }
}

main();