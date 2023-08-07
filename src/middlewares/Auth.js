import jwt from 'jsonwebtoken';

export function Auth(req, res, next) {

  const token = req.headers.authorization;

  if(!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }
  const tokenArray = token.split(' ');
  const tokenString = tokenArray[1];

  jwt.verify(tokenString, process.env.JWT_SECRET , (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    } else {
      // Almacenar los datos decodificados en la solicitud para uso posterior
      req.user = decoded;
      next();
    }
  });

}
