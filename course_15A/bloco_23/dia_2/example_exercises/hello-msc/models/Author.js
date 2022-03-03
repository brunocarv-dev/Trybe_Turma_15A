const connection = require('./connection');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName]
    .filter((name) => name).join(' ');

    return {
      id,
      firstName,
      middleName,
      lastName,
      name: fullName,
    };
};

const serialize = (authorData) => authorData.map((item) => getNewAuthor({
  id: item.id,
  firstName: item.first_name,
  middleName: item.middle_name,
  lastName: item.last_name,
}));

const getAll = async () => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';
  const [authors] = await connection.execute(query, );
  return serialize(authors);
};

const findById = async (id) => {
  const query = 'SELECT id, first_name, middle_name, last_name FROM model_example.authors;';

  const [authorData] = await connection.execute(query, [id]);
  
  if (authorData.length === 0) return null;

  return serialize(authorData)[0];
};

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

const createAuthor = async (firstName, middleName, lastName) => {
  const query = 'INSERT INTO model_example.authors(first_name, middle_name, last_name) VALUES (?, ?, ?) ;';
  const [author] = await connection.execute(query, [firstName, middleName, lastName]);

  return getNewAuthor({ id:author.id, firstName, middleName, lastName })
};

module.exports = {
  getAll,
  findById,
  isValid,
  createAuthor,
};
