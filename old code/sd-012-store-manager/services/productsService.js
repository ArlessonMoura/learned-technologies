const { ObjectId } = require('mongodb');
const modelProducts = require('../model/productsModel');

// Service testa validade do ID, e quando possivel recebe produto por ID.
const productId = async (id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) return null;
  const product = await modelProducts.productId(id);
  return product;
};

// Faz o service com todos os produtos em arr
const allProducts = async () => {
  const list = await modelProducts.allProducts();
  return list;
};

// Service verifica existencia de produto igual, e quando possivel manda parametros
// para query inserir produtos.
const insert = async (name, quantity) => {
  const list = await modelProducts.allProducts();
  const validate = list.find((product) => product.name === name);
  if (validate) {
    return null;
  }
  const insertReq = await modelProducts.insert(name, quantity);
  return insertReq;
};

// Service testa validade do ID, e quando possivel recebe query de atualização de produto.
const update = async (name, quantity, id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }
  const updatReq = await modelProducts.update(name, quantity, id);
  return updatReq;
};

const deleteProduct = async (id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }
  const deleteReq = await modelProducts.deleteProduct(id);
  return deleteReq;
};

module.exports = {
  allProducts,
  insert,
  productId,
  update,
  deleteProduct,
};