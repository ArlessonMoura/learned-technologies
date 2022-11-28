const jwt = require('jsonwebtoken');
const serviceUsuario = require('../services/usuarioServices');
require('dotenv').config();

const secret = process.env.JWT_SECRET || 'seusecretdetoken';
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const insert = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const response = await serviceUsuario.insert(displayName, email, password, image);
  if (!response) {
    return res.status(409).json({ message: 'User already registered' });
  }
  const { id } = response;
  const token = jwt.sign(
    { data: { email, password, id } }, secret, jwtConfig,
    );
  return res.status(201).json({ token });
};

const allUsers = async (_req, res) => {
  const response = await serviceUsuario.allUsers();
  return res.status(200).json(response);
};

const userById = async (req, res) => {
  const { id } = req.params;
  const response = await serviceUsuario.userById(id);
  if (!response) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  return res.status(200).json(response);
};

const deleteMe = async (req, res) => {
  const token = req.headers.authorization;
  const response = await serviceUsuario.deleteMe(token);
  return res.status(204).json(response);
};

// const insertAdm = async (req, res) => {
//   const { name, email, password } = req.body;
//   const response = await serviceUsuario.insertAdm(name, email, password);
//   if (!response) {
//     return res.status(409).json({ message: 'Email already registered' });
//   }
//   return res.status(201).json(response);
// };

module.exports = {
  insert,
  allUsers,
  userById,
  deleteMe,
  // insertAdm,
};
