const funcPromise = async (num1, num2, num3) => {
  try {
    const resultado = await (num1 + num2) * num3;
    console.log(resultado);
  } catch (err) { 
      if (typeof(num1) != 'number' || typeof(num2) != 'number' || typeof(num3) != 'number')
      console.error('Informe apenas números');
    
      if (resultado < 50)
      console.error('Valor muito baixo');
    }
};

const value = 5;

module.exports = {value, funcPromise};
