var n1 = document.getElementById('n1');
var n2 = document.getElementById('n2');
var r = document.getElementById('r');

// function calcula(){
//     var resultado = n1.valueAsNumber + n2.valueAsNumber;
  //   if (isNaN(resultado)){
  //       r.textContent="";
  // }else{
  //   r.textContent=resultado;
  // }

  // r.textContent = isNaN(resultado)? "":resultado;
// }
  document.addEventListener('input', function(){
    var resultado = n1.valueAsNumber + n2.valueAsNumber;
    r.textContent = isNaN(resultado)? "":resultado;})
