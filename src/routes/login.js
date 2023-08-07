import express from 'express'
const RouterLogin = express.Router();

import { login } from '../controllers/login.js';

RouterLogin.post('/', login);

export default RouterLogin;