const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  assert.deepStrictEqual(arr, [1, 2, 3, 4], 'O array passado por parâmetro foi alterado');
  return newArr;
}

// implemente seus testes aqui

/* assert.notDeepStrictEqual( myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'O valor retornado foi [1, 2, 4]'); */

/* assert.deepStrictEqual( myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'O valor retornado não foi [1, 2, 3, 4]'); */

/* myRemove([1, 2, 3, 4,], 3); */

assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], `A chamada não retorna o array esperado`)