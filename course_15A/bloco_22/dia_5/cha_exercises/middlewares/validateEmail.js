const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@') && !email.includes('.com')) return res.status(400).json({ message: `invalid data: ${email}` });

  next();
};

module.exports = validateEmail;
