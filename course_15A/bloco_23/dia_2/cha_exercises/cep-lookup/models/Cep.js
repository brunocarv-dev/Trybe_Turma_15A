const connection = require('./connection');

const cepById = async (cep) => {
  const query = 'SELECT cep, logradouro, bairro, localidade, uf FROM cep_lookup.ceps WHERE cep = ?;'
  const [resultCep] = await connection.execute(query, [cep]);
  
  if (resultCep.length === 0) return null;

  return resultCep;
}

const createCep = async (cep, logradouro, bairro, localidade, uf) => {
let query = 'INSERT INTO cep_lookup.ceps(cep, logradouro, bairro, localidade, uf)';
query += 'VALUES (?, ?, ?, ? , ?);';

const resultCep = await cepById(cep);

if (resultCep) return null;

await connection.execute(query, [cep, logradouro, bairro, localidade, uf]);

return {
  cep,
  logradouro,
  bairro,
  localidade,
  uf
};
}

module.exports = {
  cepById,
  createCep
};