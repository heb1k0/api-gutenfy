import {Users} from '../models/Users.js';
import { createErrorMessage ,  ErrorLogin } from '../utils/errors.js';
import jwt from 'jsonwebtoken';


async function login(req, res) {

    const { username, password } = req.body;

    if(!username || !password){
        return ErrorLogin(res);
    }

    try{

        const userFound = await Users.findOne({ where: { user: user } });

        if(!userFound){
            return ErrorLogin(res, {status: 404, message: 'Usuario no encontrado'});
        }

        if(userFound.password !== password){
            return ErrorLogin(res, {status: 404, message: 'Contraseña incorrecta'});
        }

        const token = jwt.sign({ user: userFound.user, id: userFound.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json({ token: token });

    }catch(error){
        createErrorMessage(error, res);
    }
}
export { login };