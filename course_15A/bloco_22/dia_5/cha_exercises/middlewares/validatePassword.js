const res = require("express/lib/response");

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (!password || typeof password !== 'number' ||password.length > 3 && password < 9) return res.status(400).json({ message: `invalid data: ${password}` } );

  res.status(201).json({ message: "user created" });
};

module.exports = validatePassword;