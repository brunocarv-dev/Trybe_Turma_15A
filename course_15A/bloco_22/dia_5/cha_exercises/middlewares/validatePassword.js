const res = require("express/lib/response");

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || password.length > 3 && password < 9) return res.status(400).json( { message: "email or password is incorrect" } );

  next();
};

module.exports = validatePassword;