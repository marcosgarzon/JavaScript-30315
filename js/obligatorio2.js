let IMC = () => {
let pesoEnKilogramos = parseInt(document.getElementById("peso").value);
let alturaEnCm = parseInt(document.getElementById("altura").value);
let alturaEnM = +alturaEnCm / 100;
let calcular = document.getElementById("calcular");
let imprime = document.getElementById("imprime");
let resultado = "";
let alturaAlCuadrado = +alturaEnM * +alturaEnM;
let calculo = Math.round(+pesoEnKilogramos / alturaAlCuadrado);
  
  if (calculo <= 18.5) {
      resultado = "Resultado: Bajo peso";
  }
  else if (calculo > 18.5 && calculo <= 24.9) {
      resultado = "Resultado: Normal";      
  } 
  else if (calculo > 24.9 && calculo <= 29.9) {
      resultado = "Resultado: Sobrepeso"
  }

  else {
      resultado = "Resultado: Obesidad"
  }

imprime.innerText = `${resultado}`;
 
};

let campoEnter = document.getElementById("altura");
campoEnter.onkeyup = () => {IMC()};
let campoEnter2 = document.getElementById("peso");
campoEnter2.onkeyup = () => {IMC()};



