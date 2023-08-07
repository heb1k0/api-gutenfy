import {Users} from '../models/Users.js';
import { createErrorMessage } from '../utils/errors.js';


async function getUsers(req, res) {
    try {
        const All = await Users.findAll();
        if(All.length === 0){
            res.status(404).json({ message: 'No hay usuarios' });
        }else{
            res.json(All);
        }
    } catch (error) {
        res.status(500).json({ message: error });
    }
}


async function getUser(req, res) {

    // console.log("Lleg token? ",req.token)

        try {
            const user = await Users.findOne({ where: { id: req.params.id } });
            res.json(user);
        } catch (error) {;
            res.status(500).json({ message: 'Server Error' });
        }
}

async function createUser(req, res) {

        try {
            const user = await Users.create(req.body);
            res.json(user);
        } catch (error) {
            createErrorMessage(error, res);
        }
}

async function updateUser(req, res) {

        try {
            const user = await Users.update(req.body, { where: { id: req.params.id } });
            res.json(user);
        } catch (error) {
            createErrorMessage(error, res);
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

export { getUsers, getUser, createUser, updateUser, deleteUser };