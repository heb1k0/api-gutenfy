const jwt = require('jsonwebtoken');

function requireLogin(req, res, next) {

    const token = req.headers.authorization;
  
    if (token) {
      jwt.verify(token, 'miClaveSecreta', (err, decoded) => {
        if (err) {
          return res.status(401).json({ message: 'Token inválido' });
        } else {
          // Almacenar los datos decodificados en la solicitud para uso posterior
          req.user = decoded;
          next();
        }
      });
    } else {
      return res.status(401).json({ message: 'Token no proporcionado' });
    }
  }

module.exports = {requireLogin};