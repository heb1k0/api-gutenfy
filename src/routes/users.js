// Create Routers User

// Path: src\routes\users.js
const express = require('express');
const RouterUsers = express.Router();

const { getUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/users');

RouterUsers.get('/',getUsers);
RouterUsers.post('/',createUser);



// Routas protegidas


const { requireLogin } = require('../middlewares/users');


// RouterUsers.get('/:id',requireLogin, getUser);
// RouterUsers.put('/:id', requireLogin,updateUser);
// RouterUsers.delete('/:id', requireLogin ,deleteUser);

module.exports = RouterUsers;
