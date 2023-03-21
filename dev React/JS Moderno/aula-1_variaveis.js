function teste() {
  for (var i = 0; i < 5; i++) {
    //fazer algo
  }

  // for (let j = 0; j < 5; j++) {
  //   //fazer algo
  // }

  console.log('i: ' + i);
  // console.log('j: ' + j); // a variável let só vai existir dentro da função. então não
  //vai existir aqui fora
}
teste();

console.log('=========DESESTRUTURAÇÃO: ====================');

let primos = [2, 3, 5, 7, 11, 13];
let [p1, p2, ...resto] = primos;
console.log(p1, p2, resto);

let curso = {
  nome: 'Bootcamp Front End',
  modulos: 4,
  presencial: false,
  turma: 1,
};

let { nome, turma, ...outrosCampos } = curso;
console.log(nome, turma, outrosCampos); //Bootcamp Front End 1 { modulos: 4, presencial: false }

function imprime({ nome }) {
  console.log(nome);
}
imprime(curso);

console.log('===========operador spread===========');

let primos2 = [...primos, 17];
//...primos, vai incluir o array de primos, antes de ,17
console.log('primos2: ' + primos2); //2,3,5,7,11,13,17

let primos3 = [1, ...primos, 17];
console.log('primos3: ' + primos3); //1,2,3,5,7,11,13,17

let curso2 = {
  ...curso,
  descricao: 'bla bla bla',
  ativo: true,
};
console.log(curso2);
// {
//   nome: 'Bootcamp Front End',
//   modulos: 4,
//   presencial: false,
//   turma: 1,
//   descricao: 'bla bla bla',
//   ativo: true
// }

let curso3 = {
  ...curso,
};

console.log(curso3); //{ nome: 'Bootcamp Front End', modulos: 4, presencial: false, turma: 1 }

console.log(curso === curso3); //false
