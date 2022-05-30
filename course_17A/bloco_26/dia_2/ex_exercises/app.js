"use strict";
let names = ["Bruno", "Carvalho", "Trindade"];
let namesAge = ["Bruno", 25];
// console.log(namesAge[0], namesAge[1]);
function soma(param) {
    return param.x + param.y;
}
const araraAzul = {
    bico: 'Curvo',
    cor: 'Azul',
    especie: 'Arara-azul',
};
// console.log(araraAzul.bico, araraAzul.cor, araraAzul.especie);
function retornaCPF(cpf) {
    console.log('Seu cpf é:', cpf);
}
retornaCPF(12345678998);
function estadoFisico(param) {
    console.log(param.Estado1, param.Estado2, param.Estado3);
}
estadoFisico({
    Estado1: 'Sólido',
    Estado2: 'Líquido',
    Estado3: 'Gasoso',
});
estadoFisico({
    Estado1: 1,
    Estado2: 2,
    Estado3: 3,
});
