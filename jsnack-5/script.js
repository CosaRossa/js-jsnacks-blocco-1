//JSNACK5
document.getElementById("calc").addEventListener("click", function () {
  var num1 = parseInt(document.getElementById("num1").value);
  var num2 = parseInt(document.getElementById("num2").value);
  var opera = document.getElementById("opera").value;
  var result = document.getElementById("result")
  console.log(num1 + num2);

  if (opera == "somma") {
    result.innerHTML = num1 + num2;
  }
  else if (opera == "sottrazione") {
    result.innerHTML = num1 - num2;
  }
  else if (opera == "moltiplicazione") {
    result.innerHTML = num1 * num2;
  }
  else if (opera == "divisione") {
    result.innerHTML = num1 / num2;
  }
  else if (opera == "") {
    result.innerHTML = "Non hai selezionato nessuna operazione!"
  }
})
