let liste_utilisateur = [];
let tr_personne;
let td_btn_griser;
let span;
let id = 0;
let indice_liste_utiliateur = 0;
let td_nom;
let td_date;
let tableau = document.getElementById("tableau");
let boutton;
function recherche_id() {
  id++;
  return id;
}

function recherche_date() {
  //fonction de la date
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
  return date;
}

function ajouterLigne() {
  let id = recherche_id();
  let date = recherche_date();
  let nom = document.getElementById("recuper_nom").value;
  //creation de lobjet
  let persone = new Persone(id, nom, date);
  function Persone() {
    this.id = id;
    this.nom = nom;
    this.date = date;
  }

  //ajout de lobjet dans une liste
  liste_utilisateur.push(persone);
  //creation des elements
  tableau = document.getElementById("tableau"); //recuperation du tableau
  tr_personne = document.createElement("tr"); //parent
  td_nom = document.createElement("td"); //enfant
  td_date = document.createElement("td"); //enfant
  td_btn_griser = document.createElement("td"); //enfant
  boutton = document.createElement("button"); //enfant d'enfants
  span = document.createElement("span");
  //ajjout de class
  tr_personne.className = "ligne";
  td_nom.className = "cellule_persone";
  td_date.className = "cellule_date";
  td_btn_griser.className = "cellule_button";
  boutton.className = "btn_griser";
  span.className = "id_btn_griser";
  boutton.setAttribute("onclick", "griser(textContent)");
  //modifier le contenu des elements
  for (let index = 0; index < liste_utilisateur.length; index++) {
    td_nom.textContent = liste_utilisateur[index].nom;
    td_date.textContent = liste_utilisateur[index].date;
    boutton.textContent = "je passe mon tour ";
    span.textContent = id;
    //ajout dan lhtml

    tableau.appendChild(tr_personne);
    tr_personne.appendChild(td_nom);
    tr_personne.appendChild(td_date);
    tr_personne.appendChild(td_btn_griser);
    td_btn_griser.appendChild(boutton);
    boutton.appendChild(span);
    indice_liste_utiliateur++;
  }
  //resset du champs txt
  document.getElementById("recuper_nom").value = "";
}
function griser(textContent) {
  let idbouton = get_id_btn(textContent);
  let nom = document.getElementsByClassName("cellule_persone");

  for (let index = 0; index < liste_utilisateur.length; index++) {
    if (liste_utilisateur[index].id == idbouton) {
      nom.item(index).parentElement.className = "nom_mort";
    }
  }
}
function get_id_btn(textContent) {
  let tabid = textContent.split(" ");

  return tabid[tabid.length - 1];
}

function delete_row() {
  let lignes = document.getElementsByClassName("nom_mort");

  while (0 < lignes.length) {
    const current_ligne = lignes.item(0);
    current_ligne.parentNode.removeChild(current_ligne);
  }
}
