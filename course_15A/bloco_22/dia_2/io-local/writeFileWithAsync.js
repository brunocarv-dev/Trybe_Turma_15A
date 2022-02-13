const fs = require('fs').promises;

const escreveArq = async () => {
  try {
    await fs.writeFile('./meu-arquivo.txt', 'Hello, mundão de meu deus!');
    console.log('Arquivo escrito com sucesso! =D');
  } catch (err) {
    console.log('Erro ao escrever no arquivo', err.message);
  }
}

escreveArq()