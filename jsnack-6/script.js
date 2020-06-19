//JSNACK6
document.getElementById("lanciaMoneta").addEventListener("click", function () {
  var numRandom = Math.floor(Math.random()*10);
  console.log(numRandom);
  var croce = document.getElementById("croce");
  var testa = document.getElementById("testa");

  if (numRandom%2 == 0) {
    croce.className = "none";
    testa.className = "show";
  } else {
    testa.className = "none";
    croce.className = "show";
  }
})
