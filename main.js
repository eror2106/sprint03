let liste_utilisateur = [];

function ajouterLigne() {
  var nom = document.getElementById("recuper_nom").value; //recupere le contenue de linput
  liste_utilisateur.push(nom);
  var ligne = tableau.insertRow(-1); //ajout de la ligne du tableau
  var colonne1 = ligne.insertCell(0); //ajout de la ligne du tableau//ajout de la ligne du tableau
  colonne1.innerHTML += nom; //ajout de la variable dans la cellule
  var colonne2 = ligne.insertCell(1); //ajout de la ligne du tableau
  var d = new Date(); //instensiation de la date
  let day = addZero(d.getDate()); //instensiation du jour
  let month = addZero(d.getMonth() + 1); //instensiation du mois
  let h = addZero(d.getHours()); //instensiation de l'heure
  let m = addZero(d.getMinutes()); //instensiation des minute
  let s = addZero(d.getSeconds()); //instensiation des seconde
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  time = h + ":" + m + ":" + s; //cree l'heure au format demander
  var date = day + "/" + month + "/" + d.getFullYear() + ",   " + time; //cree la date au format demander
  colonne2.innerHTML += date; //ajout de la variable dans la cellule
  var colonne3 = ligne.insertCell(2); //ajout de la ligne du tableau
  var element_crée = document.createElement("button"); //creation d'un element boutton
  var endroit = document.createTextNode("Je passe mon tour "); //creation d'un noeude de texte
  element_crée.className = "barer"; //ajout dune clase sur lelement crée
  element_crée.appendChild(endroit); //ajout d'un enfant
  colonne3.appendChild(element_crée); //ajout d'un enfant
  element_crée.setAttribute("onclick", "suprim();");
}

function suprim() {
  alert("woilla");
}
