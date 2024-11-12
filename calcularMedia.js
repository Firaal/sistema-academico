function calcularMedia(nota1, nota2) {
    if (typeof nota1 !== 'number' || typeof nota2 !== 'number' || nota1 < 0 || nota1 > 10 || nota2 < 0 || nota2 > 10) {
      throw new Error('Entradas devem ser numéricas');
    }
  return (nota1 + nota2) / 2;
}

module.exports = calcularMedia;
