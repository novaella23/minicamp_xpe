function soma(a, b) {
  return a + b;
}

//código com arrow function
var somaV2 = (a, b) => {
  return a + b;
};
//pode ser reescrita da seguinte forma:
var somaV2 = (a, b) => a + b;

function RetanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
  this.area = () => this.altura * this.largura;
}
