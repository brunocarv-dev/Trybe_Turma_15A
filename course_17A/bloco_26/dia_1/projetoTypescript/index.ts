enum StudentStatus {
  Active = 1,
  Inactive,
  Paused
}

let newStudentStatus: StudentStatus = StudentStatus.Inactive;


enum StatusCodes {
  OK = 200,
  BadRequest = 400,
  Unauthorized = 3,
  PaymentRequired,
  Forbidden,
  NotFound,
}

const ok = StatusCodes.OK;
const indiceOk = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
const indiceValue = StatusCodes[3];

enum diasDaSemana {
  segunda = 23,
  terça = 24,
  quarta = 25,
  quinta = 26,
  sexta = 27,
}

enum coresDoArcoIris {
  red = 'vermelho',
  orange = 'laranja',
  yellow = 'amarelo',
  green = 'verde',
  blue = 'azul',
  anil = 'anil',
  violet = 'violeta',
}

enum maquina {
  salvar = 1,
  imprimir = 2,
  abrir = 3,
  visualizar = 4,
  fechar = 5
}

enum bussola {
  Norte = 'N',
  Leste = 'L',
  Sul = 'S',
  Oeste = 'O'
}

console.log(diasDaSemana.segunda);
console.log(coresDoArcoIris.red);
console.log(coresDoArcoIris['green']);
console.log(maquina.salvar);
console.log(bussola.Norte);

