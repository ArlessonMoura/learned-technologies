const { User } = require('../models');

const login = async (email) => {
  const response = await User.findOne({ where: { email } });
  return response;
};

module.exports = {
  login,
};
