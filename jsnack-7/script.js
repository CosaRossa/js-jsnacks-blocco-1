// ESE 1
var num1 = window.prompt("Inserisci un numero");
var num2 = window.prompt("Inserisci un altro numero");
var result = document.getElementById("result");

if (!isNaN(num1) && (!isNaN(num2))) {
  if (num1 < num2) {
    result.innerHTML = "Il numero più grande è " + num2;
  } else if (num1 > num2) {
    result.innerHTML = "Il numero più grande è " + num1;
  } else {
    result.innerHTML = "I numeri sono grandi uguali";
  }
} else {
  result.innerHTML = "Scrivi due numeri";
}
