//JSNACK4
document.getElementById("goNumber").addEventListener("click", function () {
  var numRandom = Math.floor(Math.random()*(10 - 1 + 1) + 1);
  console.log(numRandom);
  var par = document.getElementById("numero");

  par.classList.add("pari", "dispari");
  par.classList.remove("none")

  if ((numRandom%2) == 0) {
    par.classList.remove("pari");
  } else {
    par.classList.remove("dispari");
  }
})
