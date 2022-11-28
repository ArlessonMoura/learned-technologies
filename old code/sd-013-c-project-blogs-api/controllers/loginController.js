const jwt = require('jsonwebtoken');
const servicelogin = require('../services/loginServices');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const response = await servicelogin.login(email);
  if (!response || password !== response.password) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  const { id } = response;
  const token = jwt.sign(
    { data: { email, password, id } }, secret, jwtConfig,
    );
  return res.status(200).json({ token });
};

module.exports = {
  login,
};
