const error500 = (err, _req, res, _next) => {
  res.status(500).json({ error: `Erro: ${err.message}` })
};

module.exports = error500;