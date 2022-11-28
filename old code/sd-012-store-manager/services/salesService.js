const { ObjectId } = require('mongodb');
const modelSales = require('../model/salesModel');
const modelProducts = require('../model/productsModel');

const insertSales = async (itensSold) => {
  let stockProblem = false;
  const stock = await modelProducts.allProducts();
  itensSold.forEach((product) => {
   const productMatch = stock.find(({ _id }) => product.productId === _id.toString());
   if (productMatch.quantity < product.quantity) {
    stockProblem = true;
   }
  });
  if (stockProblem === true) {
    return 'stock_problem';
  }

  const updateStock = itensSold.map(({ productId, quantity }) =>
    modelProducts.updateBySales(productId, quantity));
  await Promise.all(updateStock);

  const dataSale = await modelSales.insertSales(itensSold);
  return dataSale;
};

const salesId = async (id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }
  const product = await modelSales.salesId(id);
  return product;
};

const listSales = async () => {
  const list = await modelSales.listSales();
  return list;
};

const updateSale = async (itensSold, id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }

  const updateStock = itensSold.map(({ productId, quantity }) =>
    modelProducts.updateBySales(productId, quantity));
  await Promise.all(updateStock);

  const updateReq = await modelSales.updateSale(itensSold, id);
  return updateReq;
};

const deleteSale = async (id) => {
  const testId = ObjectId.isValid(id);
  if (testId === false) {
    return null;
  }

  const { itensSold } = await modelSales.salesId(id);
  const updateStock = itensSold.map(({ productId, quantity }) =>
   modelProducts.updateByDeleteSales(productId, quantity));
  await Promise.all(updateStock);

  const deleteReq = await modelSales.deleteSale(id);
  return deleteReq;
};

module.exports = {
  insertSales,
  listSales,
  salesId,
  updateSale,
  deleteSale,
};
