const router = require('express').Router();
const controllerCategories = require('../controllers/categoriesController');
const validates = require('../middleware');

const { checkToken } = validates;
const { insert, allCategories } = controllerCategories;

router.post('/', checkToken, insert);
// router.get('/:id', recipeId);
router.get('/', checkToken, allCategories);
// router.put('/:id', checkTokenRecipe, update);
// router.delete('/:id', checkTokenRecipe, deleteById);
// router.patch('/:id/image', checkTokenRecipe, uploadImage.single('file'), imgRecipes);

module.exports = router;
