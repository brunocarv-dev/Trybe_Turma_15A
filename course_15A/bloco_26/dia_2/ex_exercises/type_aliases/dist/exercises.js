"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estadosFisicos = exports.retornaCPF = exports.printCoord = void 0;
function printCoord(pt) {
    console.log("O valor da cordenada x é:" + pt.x);
    console.log("O valor da cordenada y é:" + pt.y);
}
exports.printCoord = printCoord;
function retornaCPF(cpf) {
    console.log("Seu cpf é:" + cpf);
}
exports.retornaCPF = retornaCPF;
function estadosFisicos(estado) {
    console.log("O estado físico é:" + estado);
}
exports.estadosFisicos = estadosFisicos;
