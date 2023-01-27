//soma, subtracao, multiplicacao, divisao, resto, porcentagem

function calculo (operacao, num1, num2){
    var resultado;

    if(operacao === "soma"){
        resultado = num1 + num2;
    }else if (operacao === "subtracao"){
        resultado = num1 - num2;
    }else if (operacao === "divisao"){
        resultado = num1 / num2;
    }else if (operacao === "resto"){
        resultado = num1 % num2;
    }else if (operacao === "porcentagem"){ //poderia parar aqui e não em else, pois se uma entrada de operação errada, iria fazer o cálculo da porcentagem
        resultado = num1 * num2 / 100;
    }else { //
        console.log("Operação Inválida") //se nada der certo acima, no caso da operação inválida, sai essa mensagem
    }
    
 return resultado;
 
}
var x = calculo("subtracao", 2, 1);
console.log("o resultado da operacao é:  " + x);
