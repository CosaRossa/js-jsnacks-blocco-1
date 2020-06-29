// ESE 9
var sum = 0;
var media = 0;
for (var i = 0; i < 10; i++) {
  var num10 = window.prompt("Inserisci un bel numero");
  sum += parseInt(num10);
}
console.log("La somma è:", sum);
media = sum / 10;
console.log("La media è:", media);
