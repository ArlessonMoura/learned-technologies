const validateQuantity = (req, res, next) => {
  const { quantity } = req.body;
  if (typeof (quantity) !== 'number') {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
      } });
  }
  if (quantity < 1) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
      } });
  }
  next();
};

module.exports = validateQuantity;
