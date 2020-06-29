// ESE 3

//Versione HOWMANY
//var howMany = parseInt(prompt("Quanti numeri vuoi sommare?"));
//var numUser = 0;

var num = [];
var result = document.getElementById("result");

for (var i = num.length; i < howMany; i++) {
  numUser = parseInt(prompt("Inserisci il " + (i+1) "° numero"));
  num.push(numUser);
  console.log(num[i]);
}

var sum = 0;
for (var i = 0; i < num.length; i++) {
  sum += num[i]
  console.log(sum);
}

// Versione HOWMANY
//var sum = 0;
//for (var i = 0; i < howMany; i++) {
//  numUser = parseInt(prompt("Inserisci un numero"));
//  console.log(numUser);
//  sum += numUser;
//}
//console.log(sum);
