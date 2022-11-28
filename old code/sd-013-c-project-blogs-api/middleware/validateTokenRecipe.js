const jwt = require('jsonwebtoken');
const servicelogin = require('../services/loginServices');

const secret = 'seusecretdetoken';

const validateTokenRecipe = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'missing auth token' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    const response = await servicelogin.login(decoded.data.email);
    if (!response) {
      return res.status(401).json({ message: 'jwt malformed' });
    }
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = validateTokenRecipe;
