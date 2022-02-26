const assert = require('assert');
// escreva a função findTheNeedle aqui
const findTheNeedle = (param1, param2) => {
  
  for(let indice=0; indice<param1.length; indice+=1){
     if(param1[indice]===param2){
     return indice;
     };
  };
  return -1; 
}

let words = ['house', 'train', 'slide', 'needle', 'book'];
let expected = 3;
let output = findTheNeedle(words, 'needle');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = 0;
output = findTheNeedle(words, 'plant');
assert.strictEqual(output, expected);

words = ['plant', 'shelf', 'arrow', 'bird'];
expected = -1;
output = findTheNeedle(words, 'plat');
assert.strictEqual(output, expected);