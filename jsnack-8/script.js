// ESE 2
var par1 = window.prompt("Scrivi una parola");
var par2 = window.prompt("Scrivi un'altra parola");
var result = document.getElementById("result");

if (par1.length < par2.length) {
  result.innerHTML = par2 + " " + par1;
} else if (par1.length > par2.length) {
  result.innerHTML = par1 + " " + par2;
} else {
  result.innerHTML = "Le due parole sono lunghe uguali";
}
