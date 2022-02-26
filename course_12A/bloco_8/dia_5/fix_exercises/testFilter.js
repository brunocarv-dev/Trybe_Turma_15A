/* const array = [1,2,3,4,5,6,7,8];
const newArray = ['a',2,'b',4,'c'];
console.log(array.filter((unity, indice)=> unity === newArray[indice]));

const objeto = [{p1:'a'}, {p2:'b'}, {p3:'c'}];
console.log({...objeto}); */

/* const array = ['k','l','m','n','o'];
const newArray = {...['a','b','c','d','e']};
const {leao} = { ...newArray };
console.log(leao); 
console.log(); */

/* test(1,2);
function test (acc, current) {
let [accumulator, atual] = [acc, current];
console.log(atual) */

let objeto = {a:1, b:2, c:3};
const [a,b,c] = [4,5,6]
objeto = {a,b,c};
console.log(objeto);
