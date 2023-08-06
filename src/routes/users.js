// Create Routers User

// Path: src\routes\users.js
import express from 'express'
const RouterUsers = express.Router();
import{ getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/users.js';

RouterUsers.get('/',getUsers);
RouterUsers.post('/',createUser);

// Routas protegidas

import { requireLogin } from '../middlewares/users.js'

RouterUsers.use(requireLogin);
RouterUsers.get('/:id',getUser);
RouterUsers.put('/:id',updateUser);
RouterUsers.delete('/:id',deleteUser);


export default RouterUsers;