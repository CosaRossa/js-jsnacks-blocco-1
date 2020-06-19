//JSNACK1 Scrivi 2 numeri in sequenza e stampa il maggiore. Se sono uguali dillo e se non sono numeri mena.
var num1 = window.prompt("Inserisci un numero");
var num2 = window.prompt("Inserisci un altro numero");
var biggerNum = document.getElementById("number");

if (!isNaN(num1) && !isNaN(num2)) {
  if (num1 > num2) {
    biggerNum.innerHTML = num1;
    console.log(num1);
  } else if (num2 > num1) {
    biggerNum.innerHTML = num2;
    console.log(num2);
  } else {
    biggerNum.innerHTML = "I numeri sono uguali";
    console.log("I numeri sono uguali");
  }
} else {
  biggerNum.innerHTML = "Magari scrivi due bei numerini :)";
}
