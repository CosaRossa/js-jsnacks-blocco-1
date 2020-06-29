// ESE 6
document.getElementById("btn").addEventListener("click", function() {
  var lista = document.getElementById("lista");
  var howMany = document.getElementById("howMany").value;
  var cubo = [];

  lista.innerHTML = "";

  for (var i = 1; i <= howMany; i++) {
    lista.innerHTML += "<li>" + (i**3) + "</li>";
  }
});
