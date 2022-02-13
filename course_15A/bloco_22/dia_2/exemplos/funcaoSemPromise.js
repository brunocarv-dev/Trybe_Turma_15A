function calculaDivisao(num1, num2) {
  if( num2 === 0 ) throw new Error("Não se pode dividir por zero") 

  const resultado = num1 / num2

  return resultado;
};

try {
  const resultado = calculaDivisao(2, 0);
  console.log('resultado:', resultado)
} catch (e) {
  console.log(e.message)
};