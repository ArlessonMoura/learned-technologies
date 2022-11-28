const serviceProducts = require('../services/productsService');

const productId = async (req, res) => {
  const { id } = req.params;
  const response = await serviceProducts.productId(id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    });
  }
  return res.status(200).json(response);
};

const allProducts = async (_req, res) => {
  const response = await serviceProducts.allProducts();
  return res.status(200).json({ products: response });
};

const insert = async (req, res) => {
  const { name, quantity } = req.body;
  const response = await serviceProducts.insert(name, quantity);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      } });
  }
  return res.status(201).json(response);
};

const update = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const response = await serviceProducts.update(name, quantity, id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Product id not exists',
      } });
  }
  return res.status(200).json(response);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const response = await serviceProducts.deleteProduct(id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      } });
  }
  return res.status(200).json(response);
};

module.exports = {
  insert,
  allProducts,
  productId,
  update,
  deleteProduct,
};
