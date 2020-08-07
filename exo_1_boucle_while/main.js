let classe = [];
let maxEtudiants = prompt("Choisissez le nombre max d'etudiants dans la classe : ");

let ajout;
while (classe.length < maxEtudiants) {
    ajout = prompt("Ajoutez un prénom : ");
    classe.push(ajout);
}
console.log(classe);