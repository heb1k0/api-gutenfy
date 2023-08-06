// Create Routers User

// Path: src\routes\users.js
const express = require('express');
const RouterUsers = express.Router();

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

RouterUsers.get('/',getUsers);

RouterUsers.get('/:id',getUser);

RouterUsers.post('/',createUser);

RouterUsers.put('/:id',updateUser);


RouterUsers.delete('/:id',deleteUser);

module.exports = RouterUsers;
