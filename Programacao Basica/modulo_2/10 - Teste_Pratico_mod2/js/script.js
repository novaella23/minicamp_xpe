function start() {
  var botaoCalcular = document.querySelector('#button-calcular');
  botaoCalcular.addEventListener('click', handleButtonClick);

  handleButtonClick();
}

function soma(numA, numB) {
  return numA + numB;
}

function subtrairAB(numA, numB) {
  return numA - numB;
}
function subtrairBA(numB, numA) {
  return numB - numA;
}
function multiplica(numA, numB) {
  return numA * numB;
}
function divideAB(numA, numB) {
  if (numB === 0) {
    return 'não divide';
  }
  return (numA / numB).toFixed(2);
}
function divideBA(numB, numA) {
  if (numA === 0) {
    return 'não divide';
  }
  return (numB / numA).toFixed(2);
}

function potenciaAB(numA, numB) {
  return numA ** numB;
}
function potenciaBA(numB, numA) {
  return numB ** numA;
}

function raizA(numA) {
  return Math.sqrt(numA).toFixed(2);
}
function raizB(numB) {
  return Math.sqrt(numB).toFixed(2);
}

function fatorialA(numA) {
  if (numA === 1 || numA === 0) {
    return 1;
  }
  for (var i = numA - 1; i > 1; i--) {
    numA = numA * i;
  }
  return numA;
}
function fatorialB(numB) {
  if (numB === 1 || numB === 0) {
    return 1;
  }
  for (var i = numB - 1; i > 1; i--) {
    numB = numB * i;
  }
  return numB;
}
function porcentagemAB(numB, numA) {
  if (numA === 0) {
    return ' ';
  }
  return Math.round((numB / numA) * 100) + '%';
}
function porcentagemBA(numA, numB) {
  if (numB === 0) {
    return ' ';
  }
  return Math.round((numA / numB) * 100) + '%';
}
function media(numA, numB) {
  return (numA + numB) / 2;
}

function handleButtonClick() {
  var inputNumA = document.querySelector('#num1A');
  var inputNumB = document.querySelector('#num2B');
  var numA = Number(inputNumA.value);
  var numB = Number(inputNumB.value);

  var mostraSoma = document.querySelector('#soma');
  var resultSoma = soma(numA, numB);
  mostraSoma.textContent = resultSoma;

  var mostraSubtracaoAB = document.querySelector('#subAB');
  var resultSubAB = subtrairAB(numA, numB);
  mostraSubtracaoAB.textContent = resultSubAB;

  var mostraSubtracaoBA = document.querySelector('#subBA');
  var resultSubBA = subtrairBA(numB, numA);
  mostraSubtracaoBA.textContent = resultSubBA;

  var mostraMultiplicacao = document.querySelector('#multiplica');
  var resultMult = multiplica(numA, numB);
  mostraMultiplicacao.textContent = resultMult;

  var mostraDivisaoAB = document.querySelector('#divAB');
  var resultDivAB = divideAB(numA, numB);
  mostraDivisaoAB.textContent = resultDivAB;

  var mostraDivisaoBA = document.querySelector('#divBA');
  var resultDivBA = divideBA(numB, numA);
  mostraDivisaoBA.textContent = resultDivBA;

  var mostraPotenciaAB = document.querySelector('#potenciaAB');
  var resultPotAB = potenciaAB(numA, numB);
  mostraPotenciaAB.textContent = resultPotAB;

  var mostraPotenciaBA = document.querySelector('#potenciaBA');
  var resultPotBA = potenciaBA(numB, numA);
  mostraPotenciaBA.textContent = resultPotBA;

  var mostraRaizA = document.querySelector('#raizA');
  var resultRaizA = raizA(numA);
  mostraRaizA.textContent = resultRaizA;

  var mostraRaizB = document.querySelector('#raizB');
  var resultRaizB = raizA(numB);
  mostraRaizB.textContent = resultRaizB;

  var mostraFatorialA = document.querySelector('#fatorialA');
  var resultFatorialA = fatorialA(numA);
  mostraFatorialA.textContent = resultFatorialA;

  var mostraFatorialB = document.querySelector('#fatorialB');
  var resultFatorialB = fatorialB(numB);
  mostraFatorialB.textContent = resultFatorialB;

  var mostraPorcentagemAB = document.querySelector('#porcentagemAB');
  var resultPorcentagemAB = porcentagemAB(numB, numA);
  mostraPorcentagemAB.textContent = resultPorcentagemAB;

  var mostraPorcentagemBA = document.querySelector('#porcentagemBA');
  var resultPorcentagemBA = porcentagemAB(numA, numB);
  mostraPorcentagemBA.textContent = resultPorcentagemBA;

  var mostraMedia = document.querySelector('#media');
  var resultMedia = media(numA, numB);
  mostraMedia.textContent = resultMedia;
}
start();
