const Models = require('../models/Cep');

const cepById = async (cep) => {
  const checkedCep = await Models.cepById(cep);

  if (!checkedCep) return { error: 404 };

  return { code: 200, result: checkedCep}

};

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
  const checkCreatedCep = await Models.createCep(cep, logradouro, bairro, localidade, uf);

  if (!checkCreatedCep) return { error: 409 };

  return { code: 201, result: checkCreatedCep };
};

module.exports = {
  cepById,
  createCep
};