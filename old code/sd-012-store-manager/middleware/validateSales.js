const validateSales = (req, res, next) => {
  const itensSold = req.body;
  const verification = itensSold
  .find(({ quantity }) => Number.isInteger(quantity) === false || quantity < 1);
  if (verification) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: 'Wrong product ID or invalid quantity',
      } });
  }
  next();
};

module.exports = validateSales;
