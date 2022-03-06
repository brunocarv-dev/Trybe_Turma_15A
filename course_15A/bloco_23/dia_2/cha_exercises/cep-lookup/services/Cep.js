const Cep = require('../models/Cep');

const isValidCep = (cep) => {
  const regex = /\d{5}-?\d{3}/; 

  if (!regex.test(cep)) return false;

  return true;
};

const cepById = async (cep) => {
  if (!isValidCep(cep)) return { code: 400 };
  
  const checkedCep = await Cep.cepById(cep);

  if (!checkedCep) return { code: 404 };

  return { code: 200, result: checkedCep}

};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  if (!isValidCep(cep)) return { code: 400 };

  const checkCreatedCep = await Cep.createCep(cep, logradouro, bairro, localidade, uf);

  if (!checkCreatedCep) return { code: 409 };

  return { code: 201, result: checkCreatedCep };
};

module.exports = {
  cepById,
  createCep
};