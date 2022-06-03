type Point = {
  x: number;
  y: number;
}

export function printCoord(pt: Point) {
  console.log("O valor da cordenada x é:" + pt.x);
  console.log("O valor da cordenada y é:" + pt.y);
}

export function retornaCPF(cpf: number | string) {
  console.log("Seu cpf é:" + cpf);
}

export function estadosFisicos(estado: string | number) {
  console.log("O estado físico é:" + estado);
}