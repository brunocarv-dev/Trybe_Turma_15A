const { expect } = require('chai');
const analiseNota = require('./analiseNota');

describe('Quando a média for menor que 7', () => {
  it('Retorna reprovado', () => {
    const resposta = analiseNota(4);

    expect(resposta).to.be.equals('Reprovado!');
  });
});

describe('Quando a média for maior que 7', () => {
  it('Retorna aprovado!', () => {
    const resposta = analiseNota(8);

    expect(resposta).to.be.equals('Aprovado!');
  });
});

describe('Quando a média for igual a 7', () => {
  it('Retorna aprovado', () => {
    resposta = analiseNota(7);
    expect(resposta).to.be.equal('Aprovado!');
  });
});