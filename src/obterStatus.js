function obterStatus(media) {
  if (media < 4.0) return 'Reprovado por média';
  if (media >= 6.0) return 'Aprovado por média';
  return 'Aguardando a final';
}

module.exports = obterStatus;
