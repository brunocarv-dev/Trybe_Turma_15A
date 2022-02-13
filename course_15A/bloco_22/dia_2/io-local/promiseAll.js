const fs = require('fs').promises;

Promise.all([
  fs.readFile('meu-arquivo.txt'),
  fs.readFile('meu-arquivo-2.txt'),
  fs.readFile('meu-arquivo-3.txt')
]).then (([file1, file2, file3]) => {
  const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength
  console.log('Lidos os 3 arquivos. Tamanho total:', fileSizeSum, 'bytes');
}).catch((err) => {
  console.error(err.message);
});