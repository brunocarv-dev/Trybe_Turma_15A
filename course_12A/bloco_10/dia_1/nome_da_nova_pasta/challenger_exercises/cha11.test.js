const { sum } = require('./cha11');
const { expect, test } = require('@jest/globals');

console.log(sum);

test('Acesso à função sum', () => {
  expect(typeof sum).toBe('function');
});

test('Testa se os parâmetros estão adequados', () => {
  expect(() => sum()).toThrow()
})

test('Valores Retornados pela sum', () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(0, 0)).toBe(0);
  expect(() => sum(4, "5")).toThrow();
  expect(() => sum(4, "5")).toThrow("parameters must be numbers");
});