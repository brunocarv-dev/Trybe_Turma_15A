const error500 = (error, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${error.message}` })
};

module.exports = error500;