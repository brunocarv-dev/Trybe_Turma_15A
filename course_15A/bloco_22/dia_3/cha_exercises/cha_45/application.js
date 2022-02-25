const fs = require('fs');

const application = (arquivo, conteudo) => {
  try {
    if (!arquivo || !conteudo) return 'Invalid data!';

    fs.writeFileSync(arquivo, conteudo);
    return 'ok';
  } catch (e) { console.error(e) }
};

module.exports = application;