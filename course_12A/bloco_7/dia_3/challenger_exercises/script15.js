const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui

const compare = (param1,param2) => (param1 === param2 ? `Objetos iguais`: `Objetos diferentes`);

assert.strictEqual(typeof(compare),`function`,`Não se trata de uma função`);
assert.notStrictEqual(compare(obj1,obj2),``,`A função não está retornando o valor previsto`);
assert.strictEqual(compare(obj1,obj2),`Objetos iguais`,`Os valores não são idênticos`);