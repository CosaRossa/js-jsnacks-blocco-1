// ESE 5
var empthy = [];
var num = 0;

for (var i = 0; i < 6; i++) {
  num = parseInt(prompt("Inserisci un numero"));
  if (num%2 == 1) {
    empthy.push(num);
  }
}
console.log(empthy);
