let sorteio = (Math.random() * 5);
let valorAposta = true;

const hof = (aposta, callBack) => {
  sorteio = Math.ceil(sorteio);
  valorAposta = aposta;
  callBack()
};
const random = () => {
  if(valorAposta === sorteio) {
    console.log(`Parabéns você ganhou`);
  }
    else {
      console.log(`Tente novamente`);  
    };  
};


hof(2, random);