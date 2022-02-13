const { funcPromise } = require('./exercise1');

funcPromise('a', 2, 3)
  .then((result) => console.log('Sucesso:', {result}))
  .catch((err) => console.log(err.message));