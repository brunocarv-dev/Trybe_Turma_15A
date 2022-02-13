const { funcPromise } = require('./exercise3');

const random = () => Math.ceil((Math.random()*100));

funcPromise(random(), random(), random());