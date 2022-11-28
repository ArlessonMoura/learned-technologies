const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const regexMask = /\S+@\S+\.\S+/;
  if (!email) {
    return res.status(400).json({ message: '"email" is required' });
  }
  if (regexMask.test(email) === false) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }
  next();
};

module.exports = validateEmail;
