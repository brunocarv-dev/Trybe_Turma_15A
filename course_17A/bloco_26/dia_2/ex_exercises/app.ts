let names: string[] = ["Bruno", "Carvalho", "Trindade"];

let namesAge: [string, number] = ["Bruno", 25];

type chuarzenildson = {
  x: number;
  y: number;
};

// console.log(namesAge[0], namesAge[1]);

function soma (param: chuarzenildson): number {
  return param.x + param.y;
}

// console.log(soma({ x: 1, y: 2 }));

type passaro = {
  bico: string;
  cor: string;
  especie: string
}

const araraAzul: passaro = {
  bico: 'Curvo',
  cor: 'Azul',
  especie: 'Arara-azul',
}

// console.log(araraAzul.bico, araraAzul.cor, araraAzul.especie);

function retornaCPF(cpf: number | string): void {
  console.log('Seu cpf é:', cpf);
}

retornaCPF(12345678998);

type fisicoNumber = {
  Estado1: number;
  Estado2: number;
  Estado3: number;
}

type fisicoString = {
  Estado1: string;
  Estado2: string;
  Estado3: string;
}

function estadoFisico (param: fisicoNumber | fisicoString): void {
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