const { Users } = require('../models/Users.js');


async function getUsers(req, res) {
    try {
        const All = await Users.findAll();
        if(All.length === 0){
            res.status(404).json({ message: 'No hay usuarios' });
        }else{
            res.json(All);
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
}


async function getUser(req, res) {

        try {
            const user = await Users.findOne({ where: { id: req.params.id } });
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
}

async function createUser(req, res) {

        try {
            const user = await Users.create(req.body);
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
}

async function updateUser(req, res) {

        try {
            const user = await Users.update(req.body, { where: { id: req.params.id } });
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
}

async function deleteUser(req, res) {

        try {
            const user = await Users.destroy({ where: { id: req.params.id } });
            res.json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Server Error' });
        }
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}