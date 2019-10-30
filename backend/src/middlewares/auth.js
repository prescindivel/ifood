const jwt = require('jsonwebtoken');
const { promisify } = require('util');

require('dotenv').config();

const User = require('../models/User');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).send({ message: 'Token não enviado' });
  }

  const [scheme, token] = authHeader.split(' ');

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET_KEY);

    const user = await User.findById(decoded.id);

    if (!user) return res.status(401).send({ message: 'Usuário não existe' });

    req.userId = decoded.id;

    return next();
  } catch (error) {
    return res.status(401).send({ message: 'Token inválido' });
  }
};
