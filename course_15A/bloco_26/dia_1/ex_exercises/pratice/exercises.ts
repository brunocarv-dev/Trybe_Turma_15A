export function losango(diagonalmaior: number, diagonalmenor: number): number {
  return (diagonalmaior * diagonalmenor) / 2;
}

export function trapezio(baseMaior: number, baseMenor: number, altura: number): number {
  return (baseMaior + baseMenor) * altura / 2;
}

export function circulo(raio: number): number {
  return (raio * raio) * 3.14;
}