// Exo 2 Functions 
// En utilisant prompt, tableaux, boucles et conditions.

// Un utilisateur doit pouvoir encoder les prénoms des élèves et une côte pour chaque élève
// Il peut rajouter un élève par la suite
// Il peut arrêter le programme à la fin en lui posant la question (Oui ou Non)

let tabEleves = [];
let tabCotes = [];
let tabResult = [];

let eleve;
let askCotes;

let askNouvelEleve;
let nouvelEleve;
let askNouvelCotes;
let vrai = "non";

let ajoutEleve = (a, b) => {
    a = prompt("Ajouter un élève : ");
    b = parseInt(prompt("Entrer une côte sur /20 ? "));
    while ((b < 0 || b > 20) || isNaN(b)) {
        alert("Erreur ! Vous devez entrer un chiffre entre 0 et 20 ! ");
        b = parseInt(prompt("Entrer une côte sur /20 ? "));
    }
    tabEleves.push(a);
    tabCotes.push(b);
}
let ajoutNouvelEleve = (c, d, e) => {
    c = prompt("Voulez-vous ajouter un élève ? (oui ou non) ");
    if (c == "oui") {
        d = prompt("Ajouter un nouvel élève : ");
        e = parseInt(prompt("Quel est sa côte sur 20 ? "));
        tabEleves.push(d);
        tabCotes.push(e);
        while ((e < 0 || e > 20) || isNaN(e)) {
            alert("Erreur ! Vous devez entrer un chiffre entre 0 et 20 ! ");
            e = parseInt(prompt("Quel est sa côte sur 20 ? "));
        }
    }
}

while (vrai == "non") {
    ajoutEleve(eleve, askCotes);
    ajoutNouvelEleve(askNouvelEleve, nouvelEleve, askNouvelCotes);
    vrai = prompt("Voulez-vous arrêter le programme ? (oui ou non) ");
}

for (let i = 0; i < tabEleves.length; i++) {
    tabResult.push("La côte de " + tabEleves[i] + " est " + tabCotes[i] + "/20");
}
console.log(tabEleves);
console.log(tabCotes);
console.log(tabResult);