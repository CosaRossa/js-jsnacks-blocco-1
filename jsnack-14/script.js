// ESE 8
document.getElementById("btn").addEventListener("click", function() {
  var lista = document.getElementById("lista");
  var num4 = document.getElementById("num4").value;
  var splitted = num4.split('');
  console.log(splitted);
  var sum = 0;

  lista.innerHTML = "";

  for (var i = 0; i < splitted.length; i++) {
    if (splitted[i] != 0) {
      sum += parseInt(splitted[i]);
    }
  }

  lista.innerHTML += "<li>" + sum + "</li>";
});
