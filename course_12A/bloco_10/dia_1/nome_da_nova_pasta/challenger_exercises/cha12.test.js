const { myRemove } = require('./cha12');
const { expect, test } = require('@jest/globals');

test('Trata-se de uma função', () => {
  expect(typeof myRemove).toBe('function');
});

test('Retorno adequado da função', () => {
  expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});
