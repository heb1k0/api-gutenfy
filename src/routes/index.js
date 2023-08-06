// create all routers in api/routes folder
const express = require('express');
const app = express();
const apiRouter = express.Router();

const RouterUsers = require('./users');


apiRouter.get('/', (req, res) => {
    res.json({ message: 'Gutenfy Api v0.1' });
});

apiRouter.use('/users', RouterUsers);

module.exports = apiRouter;
