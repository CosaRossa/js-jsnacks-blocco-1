//JSNACK2 L’utente inserisce nome e cognome nei relativi input, al click su un bottone, concatenare i valori degli input e stampare in console.
var send = document.getElementById("send");
send.addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  console.log(name + " " + surname);
})
