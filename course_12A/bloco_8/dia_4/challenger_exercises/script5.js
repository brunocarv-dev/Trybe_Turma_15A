const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  // escreva seu código aqui
  return names.reduce( ( acc, current) => {
    acc = acc + current;
    return acc; 
    }
  )
    .split('')
      .filter( carac => 
        (carac === 'A' || carac === 'a') )
          .length;

};

assert.deepStrictEqual(containsA(), 20);