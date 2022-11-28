const validateName = (req, res, next) => {
  const { name } = req.body;

  if (name.length < 6 || !name) {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      } });
  }
  if (typeof (name) !== 'string') {
    return res.status(422).json({
      err: {
        code: 'invalid_data',
        message: '"name" must be a string',
      } });
  }
  next();
};

module.exports = validateName;
