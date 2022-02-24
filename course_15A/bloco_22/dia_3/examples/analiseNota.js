const analiseNota = (nota) => {
  const aprovado = 'Aprovado!';
  const reprovado = 'Reprovado!';
  if (nota >= 7) return aprovado;

  return reprovado;
}

module.exports = analiseNota;