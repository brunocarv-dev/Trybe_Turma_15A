function saudacao(name) {
  const fala = `Olá meu caro, ${name}!`
  return console.log(fala);
}

function pessoa(callback) {
  const nameArray = ['Bruno', 'Biel', 'BAugusto', 'Val', 'Thales'];
  callback(nameArray[1]);
};

pessoa(saudacao);