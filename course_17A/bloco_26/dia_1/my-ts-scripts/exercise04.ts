import readline from 'readline-sync';
import MesesDoAno from "./exercise02";
import Estacoes from "./exercise03";

type CorrespondenciaNorte = {
  [Estacoes.OUTONO]: MesesDoAno[];
  [Estacoes.INVERNO]: MesesDoAno[];
  [Estacoes.PRIMAVERA]: MesesDoAno[];
  [Estacoes.VERAO]: MesesDoAno[];
}

const correspondenciaSul = {
  [Estacoes.OUTONO]: [MesesDoAno.Janeiro, MesesDoAno.Fevereiro, MesesDoAno.Março], 
  [Estacoes.INVERNO]: [MesesDoAno.Abril, MesesDoAno.Maio, MesesDoAno.Junho], 
  [Estacoes.PRIMAVERA]: [MesesDoAno.Julho, MesesDoAno.Agosto, MesesDoAno.Setembro],
  [Estacoes.VERAO]: [MesesDoAno.Outubro, MesesDoAno.Novembro, MesesDoAno.Dezembro], 
}

const correspondenciaNorte = {
  [Estacoes.OUTONO]: correspondenciaSul[Estacoes.PRIMAVERA],
  [Estacoes.PRIMAVERA]: correspondenciaSul[Estacoes.OUTONO], 
  [Estacoes.VERAO]: correspondenciaSul[Estacoes.INVERNO], 
  [Estacoes.INVERNO]: correspondenciaSul[Estacoes.VERAO], 
}

const hemisferios = {
  Norte: "Hemisfério Norte",
  Sul: "Hemisfério Sul",
};

const arrayMeses = Object.values(MesesDoAno);
const posicaoMes = readline.keyInSelect(arrayMeses, "Escolha um mês do ano");
const mesEscolhido = arrayMeses[posicaoMes];

const arrayHemisferios = Object.values(hemisferios);
const posicaoHemisferio = readline.keyInSelect(arrayHemisferios, "Escolha um hemisfério");
const hemisferioEscolhido = arrayHemisferios[posicaoHemisferio];

export function choiseHemisferio (hemisferio: string, mes: string): void {
  if (hemisferio === 'Hemisfério Norte') return hemisferioNorte(mes, correspondenciaNorte);
  return hemisferioSul(mes);
}

export function hemisferioNorte (mes: string, correspondenciaNorte: CorrespondenciaNorte): void {
  Object.entries(correspondenciaNorte).forEach((element) => {
    if (element[1].includes(mesEscolhido)) {
      console.log(`Em ${mes}, a estação no hemisfério norte é: ${element[0]}`);
    }  
  });
}

export function hemisferioSul (mes: string): void {
  Object.entries(correspondenciaSul).forEach((element) => {
    if (element[1].includes(mesEscolhido)) {
      console.log(`Em ${mes}, a estação no hemisfério sul é: ${element[0]}`);
    }  
  });
};

choiseHemisferio(hemisferioEscolhido, mesEscolhido);
