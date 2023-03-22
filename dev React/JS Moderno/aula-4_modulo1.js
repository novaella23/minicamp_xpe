export function soma(a, b) {
  return a + b;
}

//window.soma = soma; coloca em escopo global, podem utilizar fora do módulo

export function subrai(a, b) {
  return a - b;
}

export const PI = 3.14;

//export { soma, subrai }; //exemplo 1 essa é uma forma de exportar, mas pode fazer diretamente na função
