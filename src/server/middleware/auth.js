import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSecret = process.env.JWTSECRET;

export default (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    res.status(401).send({ message: 'Token not provided!' });
  }
  const token = authHeader.replace('Bearer ', '');
  try {
    jwt.verify(token, jwtSecret);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      res.status(401).send({ message: 'Invalid Token !' });
    }
  }
  next();
};
