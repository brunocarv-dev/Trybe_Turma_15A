const { myRemoveWithoutCopy } = require('./cha13');
const { test, expect } = require('@jest/globals');

test('Trata-se de uma função',() => {
  expect(typeof myRemoveWithoutCopy).not.toBe('function');
});

test('Retorno adequado da função', () => {
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4])).not.toEqual([1, 2, 3, 4]);
  expect(myRemoveWithoutCopy([1, 2 , 3],)).toEqual([1, 2, 3]);
  expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
});