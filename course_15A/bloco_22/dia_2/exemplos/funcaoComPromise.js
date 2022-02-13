function calculaDivisao(num1, num2) {
  const promise = new Promise((resolve, reject) => {
    if( num2 == 0 ) reject(new Error('Não se pode dividir por zero'))

    const resultado = num1 / num2;

    return resolve(resultado);
  })

  return promise;
}

calculaDivisao(2, 1).then((resolve) => console.log(resolve)).catch(error => console.log(error.message))
