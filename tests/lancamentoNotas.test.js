const lancarNota = require('../lancamentoNotas');

test('Notas válidas devem ser salvas com sucesso', () => {
  expect(lancarNota(7.5, 8.2)).toEqual({ nota1: 7.5, nota2: 8.2 });
});

test('Nota de 1UP inválida', () => {
  expect(() => lancarNota(-1.0, 8.2)).toThrow('Nota de 1UP inválida');
});

test('Nota de 2UP inválida', () => {
  expect(() => lancarNota(7.5, 12.0)).toThrow('Nota de 2UP inválida');
});

test('Nota de 1UP com mais de uma casa decimal', () => {
  expect(() => lancarNota(7.567, 8.2)).toThrow('Nota de 1UP inválida');
});

test('Nota de 2UP com mais de uma casa decimal', () => {
  expect(() => lancarNota(7.5, 8.256)).toThrow('Nota de 2UP inválida');
});

test('Entradas não numéricas', () => {
  expect(() => lancarNota("sete", 8.2)).toThrow('Entradas devem ser numéricas');
});
