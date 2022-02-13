const fs = require('fs').promises;

const escreveArq = async () => {
  try {
    await fs.writeFile('./meu-novo-arquivo.txt', 'Eu estive aqui :eyes:', { flag: 'wx'});
    console.log('Arquivo escrito com sucesso! =D');
  } catch (err) {
    console.log('Erro ao escrever no arquivo', err);
  }
}

escreveArq()