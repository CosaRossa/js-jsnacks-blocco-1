// ESE 4
var nomi = ["joe", "mac", "bill"];
var nomeUser = prompt("Scrivi qui il tuo nome");
var nomeLower = nomeUser.toLowerCase();
var here = false;

for (var i = 0; i < nomi.length && here; i++) {
  if (nomeLower == nomi[i]) {
    here = true;
  }
}

//Versione includes:
//here = nomi.includes(nomeLower);

if (here == true) {
  console.log("Il tuo nome è sulla lista");
} else {
  console.log("Il tuo nome non è sulla lista. GET OUT OF HEREEEE!");
}
