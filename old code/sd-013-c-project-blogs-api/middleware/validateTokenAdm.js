const jwt = require('jsonwebtoken');

const secret = 'seusecretdetoken';

const validateTokenAdm = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
  try {
    const decoded = jwt.verify(token, secret);
    if (decoded.data.role !== 'admin') {
      return res.status(403).json({ message: 'Only admins can register new admins' });
    }
    req.user = decoded.data;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
};

module.exports = validateTokenAdm;
