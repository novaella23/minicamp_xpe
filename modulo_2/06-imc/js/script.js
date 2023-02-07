function start() {
  var buttonCalculateIMC = document.querySelector('#button-calculate');
  buttonCalculateIMC.addEventListener('click', handleButtonClick);
  //          escutador de eventos tipo de evento (quando clicar, executar a função  )
  // console.log(buttonCalculateIMC);
  //buttonCalculateIMC.textContent = 'modifiquei';  ==> para testar o botão

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick(); //já no start começa calculando
}

function calculateIMC(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  // console.log(inputWeight);
  // console.log(inputHeight);
  var imcResultado = document.querySelector('#resultado');

  var weight = Number(inputWeight.value); //atribuiu a weight um valorxcampo
  var height = Number(inputHeight.value);
  // console.log(weight);
  // console.log(height);

  var imc = calculateIMC(weight, height);
  // console.log(imc)

  var imcFormatado = imc.toFixed(2).replace('.', ',');
  // imcResultado.textContent = imc;
  imcResultado.textContent = imcFormatado;
}
start();
