const serviceCategories = require('../services/categoriesServices');

const insert = async (req, res) => {
  const { name } = req.body;
  const response = await serviceCategories.insert(name);
  if (!response) {
    return res.status(400).json({ message: '"name" is required' });
  }
  return res.status(201).json(response);
};

// const update = async (req, res) => {
//   const { name, ingredients, preparation } = req.body;
//   const { id } = req.params;
//   const { userId } = req.user;
//   const response = await serviceRecipes.update({ name, ingredients, preparation, id, userId });

//   return res.status(200).json(response);
// };

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const response = await serviceRecipes.deleteById(id);
//   // if (!response) {
//   //   return res.status(404).json({ message: 'recipe not found' });
//   // }
//   return res.status(204).json(response);
// };

const allCategories = async (_req, res) => {
  const response = await serviceCategories.allCategories();
  return res.status(200).json(response);
};

// const recipeId = async (req, res) => {
//   const { id } = req.params;
//   const response = await serviceRecipes.recipeId(id);
//   if (!response) {
//     return res.status(404).json({ message: 'recipe not found' });
//   }
//   return res.status(200).json(response);
// };

// const imgRecipes = async (req, res) => {
//   const { id } = req.params;
//   const { userId } = req.user;
//   const response = await serviceRecipes.imgRecipes(id, userId);
//   return res.status(200).json(response);
// };

module.exports = {
  insert,
  allCategories,
  // recipeId,
  // update,
  // deleteById,
  // imgRecipes,
};
