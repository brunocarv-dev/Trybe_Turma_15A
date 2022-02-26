const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  // escreva seu código aqui
  let media = grades.map( array => array
    .reduce( ( acc, current) => {
      acc = acc + current;
      return acc;
      }
    )/grades[0].length
  );
  return students.map( ( student, indice ) => (
    {name:`${student}`, average: media[indice]}
    )
  );

};

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);