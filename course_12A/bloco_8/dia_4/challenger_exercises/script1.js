const assert = require('assert');

const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];
/* console.log(arrays); */
function flatten() {
  // escreva seu código aqui
  const matArray = arrays.reduce(( acc, current) => {
    acc = acc
      .concat(current);
    return acc;}
    , []
  );
  console.log(matArray);
  return matArray;
};

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);