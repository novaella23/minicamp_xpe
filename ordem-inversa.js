//Criar uma função que recebe uma palavra como parâmetro e retorna esta palavra invertida

function ordemInversa(ROMA){
    var palavraInvertida = "";
    for (var i = ROMA.length - 1; i >=0 ; i--){
        palavraInvertida = palavraInvertida + ROMA[i];
       
    }
    return palavraInvertida;
}

console.log(ordemInversa("AMOR"));