const genericError = (error, _req, res, next) => {
  if (error.code && error.status) {
    return res.status(error.status).json({
      message: error.message, code: error.code
    })
  }

next(error);
}

module.exports = genericError;