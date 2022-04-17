"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = void 0;
function losango(diagonalmaior, diagonalmenor) {
    return (diagonalmaior * diagonalmenor) / 2;
}
exports.losango = losango;
function trapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura / 2;
}
exports.trapezio = trapezio;
function circulo(raio) {
    return (raio * raio) * 3.14;
}
exports.circulo = circulo;
