import {sequelize} from './config/db.js';
import express from 'express';
import apiRouter from './routes/index.js';
import 'dotenv/config'

const app = express();
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