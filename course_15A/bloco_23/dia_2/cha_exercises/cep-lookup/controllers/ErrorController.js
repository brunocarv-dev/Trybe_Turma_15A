module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    return res.status(400)
      .json({ 
        error: {
          code: "invalidData",
          message: err.details[0].message
        }
      });
  }

  switch (err) {

    case 409:
      return res.status(err).json({
        "error": {
          "code": "alreadyExists",
          "message": "CEP já existente"
        }
      });

    case 404:
      return res.status(err).json({
        "error": {
          "code": "notFound",
          "message": "CEP não encontrado"
        }
      });
    
    case 400:
      return res.status(err).json({
        "error": { 
          "code": "invalidData",
          "message": "CEP inválido" 
        }
      });
  }

  console.error(err);
  res.status(500).json({
    error: {
      code: 'internal',
      message: 'Internal server error'
    }
  });
}; 