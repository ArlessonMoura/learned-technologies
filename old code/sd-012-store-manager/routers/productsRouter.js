const router = require('express').Router();
const validates = require('../middleware');
const controllerProducts = require('../controllers/productsController');

const { checkName, checkQuantity } = validates;
const { insert, allProducts, productId, update, deleteProduct } = controllerProducts;

router.post('/', checkName, checkQuantity, insert);
router.get('/', allProducts);
router.get('/:id', productId);
router.put('/:id', checkName, checkQuantity, update);
router.delete('/:id', deleteProduct);

module.exports = router;
