const fetch = require('node-fetch');

function verifiedFetch(url) {
  return new Promise((resolve, reject) => {
   /*  if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
      fetch(url)
        .then((r) => r.json())
        .then((r) => resolve(r.value));
    } else {
      reject(new Error('endpoint não existe'));
    } */
    return resolve('Chuck Norris é onipotente')
  });
}

function sendJokeToFriend(name) {
  const message = verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
    .then((joke) => console.log(`Oi ${name}, ouve essa: ${joke}`))
    .catch((err) => err);
  /* console.log(message); */
}

sendJokeToFriend("Anna");

//São duas áreas de execução. A promisse vai para a área especial e depois volta para a área padrão de execução.

// O then pega o resolve da fetch, a qual foi executada em uma promisse. O catch pega o reject da fetch que também foi executada na promisse (especifica a assincronicidade de uma função ao executá-la em uma área especial).

// O segundo then e o segundo catch estão na área de execução padrão, porém eles recebem como parâmetro o retorno da fetch que está dentro de um objeto promisse. Logo a execução da função que foi atribuída à variável message depende do retorno da função verifiedFetch que é assíncrona.