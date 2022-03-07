const Joi = require('joi');
const Services = require('../services/Cep');
const rescue = require('express-rescue');

const isValidCep = (cep) => {
  const regex = /\d{5}-?\d{3}/; 

  if (!regex.test(cep)) return false;

  return true;
};  

const getByCep = rescue(async (req, res, next) => {
  const { cep } = req.params;  

  if (!isValidCep(cep)) return next(400);

  resultRequest = await Services.cepById(cep);

  console.log(resultRequest);

  if (resultRequest.error) return next(resultRequest.error);

  return res.status(resultRequest.code).json(resultRequest.result);
});

const createCep = async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  if (!isValidCep(cep)) return next(400);

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required()
  }).validate({ cep, logradouro, bairro, localidade, uf });
  
  if (error) return next(error);

  const newCep = await Services.createCep(cep, logradouro, bairro, localidade, uf);

  if (newCep.error) return next(newCep.error);
    
  return res.status(newCep.code).json(newCep.result);
}

module.exports = { 
  getByCep,
  createCep
 };