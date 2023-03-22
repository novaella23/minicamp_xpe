// 1. for... of
// for (let item of usPresidents) {
//   //   console.log(item.president);
// }

// 2. forEach
// usPresidents.forEach((item, index) => {
//   //   console.log(`${index}: ${item.president}`);
// });

// 3. map - permite criar novos arrays com os itens que for colocado na função
//let names = usPresidents.map(item => item.president + ' ' + item.took_office);

// 4. filter - permite filtrar elementos do array

//let republicans = usPresidents.filter(item => item.party == 'Republican');
/*let republicans = usPresidents
  .filter(item => item.party == 'Republican')
  .map(item => item.president);*/

// 5. find - permite encontrar O PRIMEIRO ELEMENTO dentro do critério
//let p1 = usPresidents.find(item => item.party == 'Democratic');

// 6. sort - ordena O ARRAY ORIGINAL, NÃO CRIA UM NOVO ARRAY
usPresidents.sort((i1, i2) => {
  if (i1.president < i2.president) {
    return -1;
  } else if (i1.president > i2.president) {
    return 1;
  } else {
    return 0;
  }
});
