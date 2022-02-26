let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

let impar1, impar3, impar5, rest;
[impar1, impar3, impar5,...rest] = [1,3,5,6,8,10,12];

console.log(rest);

