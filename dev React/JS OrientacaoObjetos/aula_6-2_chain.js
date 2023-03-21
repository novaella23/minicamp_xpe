//prototype chain:
//responsável pela herança de propriedades de objetos
//objetos possuem propriedades próprias, mas também
//podem herdar propriedades de outro objeto, o seu prototype

function Retangulo(altura, largura) {
  // <===CONSTRUTOR
  this.altura = altura;
  this.largura = largura;
  this.area = calculaArea;
}

function calculaArea() {
  return this.altura * this.largura;
}

var r1 = new Retangulo(3, 4);
var r2 = new Retangulo(7, 2);

console.log(r1.area === r2.area); //false /r1

//CRIANDO RETANGULOV2 - DE FORMA DIFERENTE - COM PROTOTYPE

function RetanguloV2(altura, largura) {
  this.altura = altura;
  this.largura = largura;
}
RetanguloV2.prototype.area = function () {
  //quando define a area no prototype da função,o objeto prototype será objeto
  //dos prototype dos objetos instanciados com aquele construtor
  return this.altura * this.largura;
};
var r3 = new Retangulo(3, 4);
var r4 = new Retangulo(7, 2);
console.log(r3.area()); //12
console.log(r4.area()); //14

console.log(r3.area === r4.area);
