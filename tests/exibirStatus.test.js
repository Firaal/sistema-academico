const obterStatus = require('../exibirStatus');

test('Média inferior a 4.0', () => {
  expect(obterStatus(3.5)).toBe('Reprovado por média');
});

test('Média igual a 4.0', () => {
  expect(obterStatus(4.0)).toBe('Aguardando a final');
});

test('Média entre a 4.0 e 6.0', () => {
  expect(obterStatus(5.5)).toBe('Aguardando a final');
});

test('Média igual a 6.0', () => {
  expect(obterStatus(6.0)).toBe('Aprovado por média');
});

test('Média inferior a 7.5', () => {
  expect(obterStatus(7.5)).toBe('Aprovado por média');
});

test('Média no limite inferior(0.0)', () => {
  expect(obterStatus(3.5)).toBe('Reprovado por média');
});