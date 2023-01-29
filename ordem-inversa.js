//Criar uma função que recebe uma palavra como parâmetro e retorna esta palavra invertida

// function ordemInversa(ROMA){
//     var palavraInvertida = "";
//     for (var i = ROMA.length-1; i >=0 ; i--){
//         palavraInvertida = palavraInvertida + ROMA[i];
       
//     }
//    return palavraInvertida;
// 

// console.log(ordemInversa("AMOR"));


var lista = [2, 5, 7, 9, 12, 18, 20];

function encontraNumero(numero){
    var existe = false;
    
    for (var i = 0; i < lista.length; i++){
        if (lista[i] === numero){
            existe = true;
            
            
            //ao encontrar o número na lista, ele para de verificar no restante da lista.
        }
    }
    
    return existe;
}
 var verificaNum = encontraNumero(2);
 console.log(verificaNum);