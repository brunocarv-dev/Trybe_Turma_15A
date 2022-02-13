const { funcPromise } = require('./exercise1');

const random = () => Math.ceil((Math.random()*100));

funcPromise(random(), random(), random())
  .then((result) => console.log('Sucesso:', {result}))
  .catch((err) => console.log(err.message));