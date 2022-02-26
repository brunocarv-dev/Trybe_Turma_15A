/*  function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

const testingScope = escopo => {
(
  escopo === true ? `Não devo ser utilizada fora do meu escopo (if)
ótimo, fui utilizada no escopo !` : `Não devo ser utilizada fora meu escopo (else)`
);

console.log(`o que estou fazendo aqui ? :O`);
}

console.log(testingScope(true)); 


/* const oddsAndEvens = array => {
  // Seu código aqui.
  let maiorNum = null;
  let menorNum = null;
  let numeroPrimeiro = null;
  let numeroSegundo = null;
  
  for(let position1=0; position1<array.length; position1+=1){
    numeroPrimeiro = array[position1];
    for(let position2=0; position2<array.length; position2+=1){   
      numeroSegundo = array[position2];
      if(numeroPrimeiro>=numeroSegundo) {
        maiorNum = numeroPrimeiro; 
        menorNum = numeroSegundo;
      }   
      else maiorNum = numeroSegundo;  
    }; 
  };

return maiorNum; 
}

console.log(oddsAndEvens([13, 3, 4, 10, 7, 2])); */