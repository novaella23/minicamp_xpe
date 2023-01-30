console.log("\n\nO aluno deverá criar um programa para informar a soma de todos os múltiplos de 3 ou 5 menores que determinado número.\n\n")

//NÚMERO DIGITADO ABAIXO:

const numero_digitado = 2000

//PARA DEFINIR O ARRAY DOS MÚLTIPLOS DE 3 MENORES QUE O NÚMERO DIGITADO:

//Acertar o número para que entre nas condições. Busca-se os múltiplos de 3 menores que o número_digitado"
var x = 0;
function acertanumero (numero){
    if (numero % 3 != 0){
        var x = numero % 3;
        numero = numero - x;
    }else{numero = numero - 3;
    }
    return numero;
}
var numero_dado = acertanumero(numero_digitado);
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
console.log("\n"+"Múltiplos de 3 do número "+numero_dado+": "+list3+ "\n");


//PARA DEFINIR O ARRAY DOS MÚLTIPLOS DE 5 MENORES QUE O NÚMERO DIGITADO:

//Acertar o número para que entre nas condições. Busca-se os múltiplos de 3 menores que o número_digitado"
var y = 0;
function acertanumeroB (numero){
    if (numero % 5 != 0){
        var y = numero % 5;
        numero = numero - y;
    }else{numero = numero - 5;
    }
    return numero;
}
var numero_dadoB = acertanumeroB (numero_digitado);
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
console.log("Múltiplos de 5 do número "+numero_dadoB+": "+list5+ "\n");

//

var todos = list3.concat(list5);
console.log("As duas listas concatenadas: " + todos+ "\n");

var listafinal = [...new Set(todos)];
console.log("Lista sem itens repetidos:  " + listafinal+ "\n");


var sum = 0;
for(var i =0; i < listafinal.length; i++){
   sum += listafinal[i];
}

console.log("Soma de todos os múltiplos de 3 ou 5 menores que " + numero_digitado +" é: "+sum+" (SEM REPETIÇÃO)");
