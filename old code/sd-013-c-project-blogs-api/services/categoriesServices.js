const { Category } = require('../models');

const insert = async (name) => {
  if (name === '' || !name) {
    return null;
  }
  const response = await Category.create({ name });
  return response;
};

// const update = async ({ name, ingredients, preparation, id, userId }) => {
//   // const testId = ObjectId.isValid(id);
//   // if (testId === false) {
//   //   return null;
//   // }
//   const response = await modelRecipes.update({ name, ingredients, preparation, id, userId });
//   return response;
// };

// const deleteById = async (id) => {
//   // const testId = ObjectId.isValid(id);
//   // if (testId === false) return null;
//   const response = await modelRecipes.deleteById(id);
//   return response;
// };

const allCategories = async () => {
  const response = await Category.findAll();
  return response;
};

// const recipeId = async (id) => {
//   // const testId = ObjectId.isValid(id);
//   // if (testId === false) return null;
//   const response = await modelRecipes.recipeId(id);
//   return response;
// };

// const imgRecipes = async (id, userId) => {
//   const response = await modelRecipes.imgRecipes(id, userId);
//   return response;
// };

module.exports = {
  insert,
  allCategories,
  // recipeId,
  // update,
  // deleteById,
  // imgRecipes,
};