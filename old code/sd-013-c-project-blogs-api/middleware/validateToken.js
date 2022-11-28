const jwt = require('jsonwebtoken');
const servicelogin = require('../services/loginServices');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const validateToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token || token.length === 0) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const decoded = jwt.verify(token, secret);

    const response = await servicelogin.login(decoded.data.email);
    if (!response) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    // req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
