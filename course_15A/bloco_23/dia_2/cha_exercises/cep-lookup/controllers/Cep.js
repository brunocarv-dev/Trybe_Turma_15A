const Joi = require('joi');
const Cep = require('../services/Cep');

const getByCep = async (req, res, _next) => {
  const { cep } = req.params;  

  objectIsValid = await Cep.cepById(cep);

  switch (objectIsValid.code) {
    case 400:
      return res.status(objectIsValid.code).json({
        "error": { 
          "code": "invalidData",
          "message": "CEP inválido" 
        }
      });

    case 404:
      return res.status(objectIsValid.code).json({
        "error": {
          "code": "notFound",
          "message": "CEP não encontrado"
        }
      })
      
    case 200:
      return res.status(objectIsValid.code).json(objectIsValid.result);
  };
};

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required()
  }).validate({ cep, logradouro, bairro, localidade, uf });
  
  if (error) return next(error);

  const newCep = await Cep.createCep(cep, logradouro, bairro, localidade, uf);

  switch (newCep.code) {
    case 400:
      return res.status(newCep.code).json({
        "error": {
          "code": "invalidData",
          "message": "<mensagem do Joi>"
        }
      });

    case 409:
      return res.status(newCep.code).json({
        "error": {
          "code": "alreadyExists",
          "message": "CEP já existente"
        }
      });

    case 201:
      return res.status(newCep.code).json(newCep.result);
  }
}

module.exports = { 
  getByCep,
  createCep
 };