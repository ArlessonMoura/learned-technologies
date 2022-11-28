const jwt = require('jsonwebtoken');
const { BlogPost, Category, User } = require('../models');
require('dotenv').config();

// O sol já nasceu na fazendinha!!!!!

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const insertPost = async (title, content, categoryIds, token) => {
  const decoded = jwt.verify(token, secret);
  const { id } = decoded.data;
  const categories = await Category.findAll({ where: { id: categoryIds } });
  if (!categories || categories.length < categoryIds.length) {
    return null;
  }
  const response = await BlogPost.create({ title, content, userId: id });
  return response;
};

const allPosts = async () => {
  const response = await BlogPost.findAll({
    include: [
      { model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return response;
};

const postById = async (id) => {
  const response = await BlogPost.findByPk(id, { include: [
    { model: User, as: 'user' },
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return response;
};

const updatePost = async ({ title, content, id, token }) => {
  const decoded = jwt.verify(token, secret);
  const check = await BlogPost.findByPk(id);
  if (check.userId !== decoded.data.id) {
    return null;
  }
 await BlogPost.update({ title, content }, {
    where: { id },
  });
  const response = await BlogPost.findByPk(id, { include: [
    { model: Category, as: 'categories', through: { attributes: [] } },
  ] });
  return response;
};

const deletePostById = async (id, token) => {
  const decoded = jwt.verify(token, secret);
  const check = await BlogPost.findByPk(id);
  if (!check) {
    return 'error type 2';
  }
  if (check.userId !== decoded.data.id) {
    return 'error type 1';
  }
  await BlogPost.destroy({
    where: { id },
  });
  const response = await BlogPost.findByPk(id);
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
  insertPost,
  allPosts,
  postById,
  updatePost,
  deletePostById,
  // insertAdm,
};