// create all routers in api/routes folder
const express = require('express');
const app = express();
const apiRouter = express.Router();

apiRouter.get('/', (req, res) => {
    res.send('Hello World!');
});

module.exports = apiRouter;
