const application = (number) => {
try{
  if (typeof number === 'number') {
    if (number > 0) return 'positivo';
    
    if (number < 0) return 'negativo';
    
    return 'neutro';
  } else {
    return 'o valor deve ser um número';
  }
  
} catch (e) {
  console.error(e);
}
};

module.exports = application;
