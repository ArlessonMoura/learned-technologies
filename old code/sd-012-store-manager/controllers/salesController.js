const serviceSales = require('../services/salesService');

const insertSales = async (req, res) => {
  const itensSold = req.body;
  const response = await serviceSales.insertSales(itensSold);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      },
    });
  }
  if (response === 'stock_problem') {
    return res.status(404).json({
      err: {
        code: 'stock_problem',
        message: 'Such amount is not permitted to sell',
      } });
  }
  return res.status(200).json(response);
};

const listSales = async (_req, res) => {
  const response = await serviceSales.listSales();
  return res.status(200).json({ sales: response });
};

const salesId = async (req, res) => {
  const { id } = req.params;
  const response = await serviceSales.salesId(id);
  if (!response) {
    return res.status(404).json({
      err: {
        code: 'not_found',
        message: 'Sale not found',
      },
    });
  }
  return res.status(200).json(response);
};

const updateSale = async (req, res) => {
  const itensSold = req.body;
  const { id } = req.params;
  const response = await serviceSales.updateSale(itensSold, id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      } });
  }
  return res.status(200).json(response);
};

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const response = await serviceSales.deleteSale(id);
  if (!response) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong sale ID format',
      } });
  }
  return res.status(200).json(response);
};

module.exports = {
  insertSales,
  listSales,
  salesId,
  updateSale,
  deleteSale,
};
