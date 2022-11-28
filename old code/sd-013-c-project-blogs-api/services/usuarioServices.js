const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const insert = async (displayName, email, password, image) => {
  const check = await User.findOne({ where: { email } });
  if (check) {
    return null;
  }
  const response = await User.create({ displayName, email, password, image });

  return response;
};

const allUsers = async () => {
  const response = await User.findAll();
  return response;
};

const userById = async (id) => {
  const response = await User.findByPk(id);
  return response;
};

const deleteMe = async (token) => {
  const decoded = jwt.verify(token, secret);
  await User.destroy({
    where: { id: decoded.data.id },
  });
  const response = await User.findByPk(decoded.data.id);
  return response;
};

// const insertAdm = async (name, email, password) => {
//   const check = await modelUsuarios.checkEmail(email);
//   if (check) {
//     return null;
//   }
//   const response = await modelUsuarios.insertAdm(name, email, password);
//   return response;
// };

module.exports = {
  insert,
  allUsers,
  userById,
  deleteMe,
  // insertAdm,
};