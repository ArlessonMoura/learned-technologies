const router = require('express').Router();
const validations = require('../middleware');
const controllerSales = require('../controllers/salesController');

const { insertSales, listSales, salesId, updateSale, deleteSale } = controllerSales;
const { checkSales } = validations;

router.post('/', checkSales, insertSales);
router.get('/:id', salesId);
router.get('/', listSales);
router.put('/:id', checkSales, updateSale);
router.delete('/:id', deleteSale);

module.exports = router;