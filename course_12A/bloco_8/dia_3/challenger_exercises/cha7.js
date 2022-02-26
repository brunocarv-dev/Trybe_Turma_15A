const assert = require('assert');

const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

const expectedResult = 'O Senhor dos Anéis';

/* 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
Dica: cada inicial termina com um ponto.
 */
function authorWith3DotsOnName() {
  // escreva seu código aqui
  const nomes = books.map(nome => nome.author.name);
  let result = nomes.find(nom => {
    let ronald = nom.split(' ').filter(n => n.endsWith('.'));
    console.log(ronald);
    if (ronald.length == 3) {
      return nom;
    };
  });
  return books.find(book => book.author.name == result).name;
};

  /* for (let indice in caracteres) {
    console.log(caracteres[indice]);
    break;
    if (caracteres[indice] == '.') {
      count += 1;
      console.log(count);
      if (count > 3) {
        console.log(caracteres); //caracteres não está sendo chamado
        return caracteres;
      };
    };
  };
  count = 0; */
  /* console.log(nomes); */

assert.deepStrictEqual(authorWith3DotsOnName(), expectedResult);
/* 
function authorWith3DotsOnName() {
  // escreva seu código aqui
  const nomes = books.map(nome => nome.author.name);
  let result = nomes.find(nom => {
    let count = 0;
    return nom.split('').some(n => {
      if (n == '.') {
        count += 1;
        if (count > 2) {
          return true;
        };
      };
    });
  });
  return books.find(book => book.author.name == result).name;
}; */
 