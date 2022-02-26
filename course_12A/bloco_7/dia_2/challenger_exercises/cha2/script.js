const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* const incremento = (objeto, chave, valor) => { 
objeto[chave]=valor;
console.log(objeto);
}
 incremento(lesson2, 'turno', 'manhã');  */

 /* const keysList = objeto => Object.keys(objeto);
 console.log(keysList(lesson2));
  */

/*  const size = objeto => {
   const arrayKeys = Object.keys(objeto);
   const arrayValues = Object.values(objeto);
   console.log(`Este array possui: ${arrayKeys.length} chaves e ${arrayValues.length} valores no total.`);
 }
 size(lesson2); */

/*  const valuesList = objeto => console.log(Object.values(objeto));
 valuesList(lesson3); */

 
/*  const allLessons = {};
 const newObject = Object.assign( allLessons, {lesson1, lesson2, lesson3});
 console.log(newObject); */

 const allLessons = Object.assign( {}, {lesson1, lesson2, lesson3});
 /* console.log(allLessons); */

 const allStudents = allLessons => {
   const arrayKeys = Object.keys(allLessons);
   let numberStudents = null;
   for(let indice in arrayKeys){
    let students = allLessons[arrayKeys[indice]].numeroEstudantes;
   numberStudents += students;
 }
  return numberStudents;
 };


 console.log(allStudents(allLessons));