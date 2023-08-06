// create all routers in api/routes folder
import express from 'express'

const app = express()
const apiRouter = express.Router();
import RouterUsers from './users.js';


apiRouter.get('/', (req, res) => {
    res.json({ message: 'Gutenfy Api v0.1' });
});

apiRouter.use('/users', RouterUsers);

export default apiRouter;