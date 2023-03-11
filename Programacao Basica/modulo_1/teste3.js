

var numero;
function acertanumero (numero){
    if (numero%3 != 0){
        var x = numero%3;
        console.log(x);
        numero = numero - x;
        console.log(numero);
       
    }return numero;
}


console.log(acertanumero(5));