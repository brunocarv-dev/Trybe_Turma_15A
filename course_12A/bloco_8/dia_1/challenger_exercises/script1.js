const object = {
  nomeCompleto: '',
  email: '',
};

const newEmployees = (name, callBack) => {
   
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas  
  };
  if (name === 'Pedro Guerra') {
    employees.id1 = 'Pedro Guerra';
    object.nomeCompleto = 'Pedro Guerra';
    object.email = `Pedro_Guerra@trybe.com`;
    return callBack();
  }; 
  if (name === 'Luiza Drumon') {
    employees.id1 = 'Luiza Drumon';
    object.nomeCompleto = 'Luiza Drumon';
    object.email = `Luiza_Drumon@trybe.com`;
    return callBack();
  };
  if (name === 'Carla Paiva') {
    employees.id1 = 'Carla Paiva';
    object.nomeCompleto = 'Carla Paiva';
    object.email = `Carla_Paiva@trybe.com`;
    return callBack();
  };
  return employees;
};
//função person
const person = () => object;
//chamada da HOF
console.log(newEmployees('Pedro Guerra', person));