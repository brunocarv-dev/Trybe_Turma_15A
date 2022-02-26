const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
let gaba = [];
let resp = [];
let acertos = 0;

const hof = (gabarito, resposta, callBack) => {
  gaba = gabarito;
  resp = resposta;
   callBack();
};

const contagem = () => {
  for (let indice in gaba) {
    if (gaba[indice] === resp[indice]) {
      acertos += 1;
    };
    if (gaba[indice] !== resp[indice]) {
      if (resp[indice] === 'N.A') {
        acertos = acertos;
      } else {
        acertos -= 0.5;
      };
    };
  };
  console.log(`Total de respostas certas: ${acertos}`);
};

hof(rightAnswers, studentAnswers, contagem);