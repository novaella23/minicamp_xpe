//PARA DEFINIR O ARRAY DOS MÚLTIPLOS DE 3:
var x = 0;
function acertanumero (numero){
    if (numero % 3 != 0){
        var x = numero % 3;
        numero = numero - x;
    }else{numero = numero - 3;
    }
    return numero;
}
//====>DIGITE O NÚMERO DO MÚLTIPLO ABAIXO:
var numero_dado = acertanumero(100);
var list3=[];
function multiplos_de_tres(numero_dado){
    const limite = numero_dado/3;
    for(let i = 0; i <= limite; i++){
        list3.push(numero_dado);
        numero_dado-=3;
    }
    return list3;
 }
multiplos_de_tres(numero_dado);
console.log("Múltiplos de 3 do número "+numero_dado+": "+list3);

//PARA DEFINIR O ARRAY DOS MÚLTIPLOS DE 5:
var y = 0;
function acertanumeroB (numero){
    if (numero % 5 != 0){
        var y = numero % 5;
        numero = numero - y;
    }else{numero = numero - 5;
    }
    return numero;
}
//====>DIGITE O NÚMERO DO MÚLTIPLO ABAIXO:
var numero_dadoB = acertanumeroB (100);
var list5=[];
function multiplos_de_cinco(numero_dadoB){
    const limite = numero_dadoB/5;
    for(let i = 0; i <= limite; i++){
        list5.push(numero_dadoB);
        numero_dadoB-=5;
    }
    return list5;
 }
multiplos_de_cinco(numero_dadoB);
console.log("Múltiplos de 5 do número "+numero_dadoB+": "+list5);

//

var todos = list3.concat(list5);
console.log("As duas listas concatenadas: " + todos);

var listafinal = [...new Set(todos)];
console.log("Lista sem itens repetidos:  " + listafinal);


var sum = 0;
for(var i =0; i < listafinal.length; i++){
   sum += listafinal[i];
}
console.log("Soma dos múltiplos de "+numero_dado+" e "+numero_dadoB+" é: "+sum+" (SEM REPETIÇÃO)");







// var intersection = list3.filter(i => list5.includes(i));
// console.log('intersecção:  '+ intersection);

// var teste = todos.filter(item => item != 3*5)


// console.log('lista final é:  ' + teste)

// var numeros = [1, 2, 3, 4, 5, 7, 8, 9, 10];
// numeros = numeros.filter(item => item > 5);
// console.log(numeros);



// const numerosSemRepeticao = [...new Set(todos)];
// console.log(numerosSemRepeticao);


// parte = intersection.filter(item => item - intersection);
// console.log(parte);




// for(let i=0; i<lista_mltplo3.length; i++){
//     let tem = false;
//     for(let j=0; j<lista_mltplo5.length; j++){
//         if(lista_mltplo3[i] == lista_mltplo5[j]){
//             tem = true;
//         }
//     }
//     if(!false){
//        console.log(lista_mltplo3.pop(lista_mltplo3[i]))
//     }
// }


































// // let numero_dadoB;
// // var lista_mltplo5=[];


// // function multiplos_de_cinco(numero_dadoB){
// //     const limite=((numero_dadoB)/5)
// //     for(let i=0; i<= limite; i++){
// //         if (numero_dadoB % 5 === 0){
// //             lista_mltplo5.push(numero_dadoB);
// //             numero_dadoB-=5;
// //         }else{numero_dadoB--}
// //     }return lista_mltplo5;
// // }
// // multiplos_de_cinco(10);
// // console.log(lista_mltplo5);


// // // var numero_dado = 21;
// // // var multiplo;
// // // var lista=[];


// // // if (numero_dado % 3 ==0){

// // //     let i = 0
// // //     const contador=numero_dado/3
// // //     while(i<= contador){
// // //         lista.push(numero_dado);
// // //         console.log(lista);

// // //     numero_dado-=3;
// // //     i++
// // //     }
// // // }