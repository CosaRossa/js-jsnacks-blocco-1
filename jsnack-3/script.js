//JSNACK3 Al click su un bottone, il programma acquisisce tramite prompt un numero. Se il numero è positivo, il background di un p#colore diventa verde, se negativo rosso e se zero blu.
var goNum = document.getElementById("goNumber");
goNum.addEventListener("click", function() {
  var num = window.prompt("Inserisci un numero")
  var par = document.getElementById("colore");

  if (!isNaN(num)) {
    if (num > 0) {
      par.className = "green";
    } else if (num < 0) {
      par.className = "red";
    } else {
      par.className = "blue";
    }
  } else {
    document.getElementById("colore").innerHTML = "Si prega di scrivere un numero";
    par.className = " "
  }
})
