let liste_utilisateur = [];

function ajouterLigne() {
  var nom = document.getElementById("recuper_nom").value;
  liste_utilisateur.push(nom);
  var ligne = tableau.insertRow(-1); //on a ajouté une ligne
  var colonne1 = ligne.insertCell(0); //on a une ajouté une cellule
  colonne1.innerHTML += nom; //on y met le contenu de titre
  var colonne2 = ligne.insertCell(1); //on repete loperation pour les 31 j
  var d = new Date();
  let day = addZero(d.getDate());
  let month = addZero(d.getMonth());
  let h = addZero(d.getHours());
  let m = addZero(d.getMinutes());
  let s = addZero(d.getSeconds());
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  time = h + ":" + m + ":" + s;
  var date = day + "/" + month + "/" + d.getFullYear() + ",   " + time;
  colonne2.innerHTML += date; //ajout du contenu
  var colonne3 = ligne.insertCell(2); //on repete loperation pour les 31 j
  var bouton = document.createElement("button");
  bouton.textContent += "Je passe mon tour";
  colonne3.id = "dernier";
  colonne3.innerHTML += "<button class=barer>Je passe mon tour </button>"; //ajout du contenu
}

function suivant() {
  console.log("code pour le btn au suivant");
}
