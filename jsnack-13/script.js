// ESE 7
document.getElementById("btn").addEventListener("click", function() {
  var lista = document.getElementById("lista");
  var potenze = [];

  lista.innerHTML = "";

  for (var i = 1; i < 1000 ; i = i*2) {
    lista.innerHTML += "<li>" + i + "</li>";
  }
});
