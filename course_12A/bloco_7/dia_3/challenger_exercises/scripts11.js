const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

/* assert.strictEqual( sum(4,5), 9, "Erro: o resultado esperado é 9!");
 */

/* assert.strictEqual( sum(0,0), 0, "Erro: o resultado esperado é 0!"); */

/* assert.notStrictEqual( sum(4,'5'), 9, "Erro: o resultado esperado não é 9!"); */
sum(4, '5')
assert.StrictEqual( Error, 'parameters must be numbers', "Erro: A mensagem de erro deveria ser 'parameters must be numbers'")