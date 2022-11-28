const checkName = require('./validateName');
const checkEmail = require('./validateEmail');
const checkPassword = require('./validatePassword');
const checkLoginPass = require('./validateLoginPass');
const checkLoginEmail = require('./validateLoginEmail');
const checkIngredients = require('./validateUpdatePost');
const checkPreparation = require('./validatePreparation');
const checkToken = require('./validateToken');
const checkTokenRecipe = require('./validateTokenRecipe');
const checkTokenAdm = require('./validateTokenAdm');
const checkPost = require('./validatePost');
const checkUpdatePost = require('./validateUpdatePost');

module.exports = {
  checkName,
  checkEmail,
  checkPassword,
  checkLoginPass,
  checkLoginEmail,
  checkIngredients,
  checkPreparation,
  checkToken,
  checkTokenAdm,
  checkTokenRecipe,
  checkPost,
  checkUpdatePost,
};
