const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@') && !email.includes('.com')) return res.status(400).json({ message: "email or password is incorrect" });

  next();
};

module.exports = validateEmail;
