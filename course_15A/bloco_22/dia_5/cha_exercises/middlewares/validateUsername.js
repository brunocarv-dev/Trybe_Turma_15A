const validateUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || username < 4) return res.status(400).json({ message: `invalid data: ${username}` });

  next();
}

module.exports = validateUsername;