//classes em javascript

class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }

  //CRIANDO MÉTODO:

  area() {
    return this.altura * this.largura;
  }
}

var r1 = new Retangulo(3, 4);
var r2 = new Retangulo(3, 8);

console.log('r1.altura: ' + r1.altura);
console.log('r1.area(): ' + r1.area());
console.log('r1.area===r2.area :' + (r1.area === r2.area)); //aqui está comparando as funções dos dois objetos

console.log('========= HERANÇA ===========');

class Quadrado extends Retangulo {
  constructor(dimensao) {
    super(dimensao, dimensao);
  }
}

var r3 = new Quadrado(3);
console.log('r3.altura: ' + r3.altura);
console.log('r3.largura: ' + r3.largura);
console.log('r3.area(): ' + r3.area());
