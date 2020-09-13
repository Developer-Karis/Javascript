// # Exercice 1
// - A l'aide de 2 prompts, demender 2 nombres et dire quel est le plus grand

let nb1 = prompt("Entrez un premier nombre : ");
let nb2 = prompt("Entrez un second nombre : ");

console.log("Exo 1 : ");
if (nb1 > nb2) {
    console.log("Le plus grand nombre est : " + nb1);
} else {
    console.log("Le plus grand nombre est : " + nb2);
}

// # Exercice 2
// - A l'aide d'un prompt, demander un nombre
// - Afficher si le nombre est paire ou impaire 

let nombre = prompt("Entrez un nombre : ");

console.log("Exo 2 : ");
if (nombre % 2 == 0) {
    console.log("Le nombre est pair. ");
} else {
    console.log("Le nombre est impair. ");
}

// # Exercice 3
// - A l'aide d'un prompt, demande le prenom
// - Afficher `Votre prenom a moins de 5 caractères` si la taille du prenom est < 5
// - Afficher `Votre prenom a  5 caractères` si la taille du prenom est == 5
// - Afficher `Votre prenom a plus de 5 caractères` si la taille du prenom est > 5

let prenom = prompt("Entrez votre prénom : ");

console.log("Exo 3 : ");
if (prenom.length < 5) {
    console.log("Votre prénom a moins de 5 caractères. ");
} else if (prenom.length == 5) {
    console.log("Votre prénom a 5 caractères. ");
} else {
    console.log("Votre prenom a plus de 5 caractères");
}

// # Exercice 4

// - Entrez 2 prenoms via des prompts
// - Afficher `Prenom1 a moins de caractères que Prenom2` si la taille de prenom1 est < taille de prenom2
// - Afficher `Prenom1 a le meme nombre de caractères que Prenom2` si la taille du prenom1 est == taille de prenom2
// - Afficher `Prenom1 a plus de caractères que Prenom2` si la taille du prenom1 est > taille de prenom2

let prenom1 = prompt("Entrez un prénom : ");
let prenom2 = prompt("Entrez un prénom : ");

console.log("Exo 4 : ");
if (prenom1.length < prenom2.length) {
    console.log("Prenom1 a moins de caractères que Prenom2");
} else if (prenom1.length == prenom2.length) {
    console.log("Prenom1 a le meme nombre de caractères que Prenom2");
} else {
    console.log("Prenom1 a plus de caractères que Prenom2");
}

// # Exercice 5

// - Entrez votre vitesse
// - La vitesse limite de la route est 50km/h
// - Afficher `Vous pouvez continuer a cette vitesse. (vitesse => vitesse entrée)` si la vitesse est < que le vitesse limite
// - Afficher `Attention vous roulez a la vitesse limite. (vitesse => vitesse entrée)` si la vitesse est == que le vitesse limite
// - Afficher `Ralentissez, vous avez depassé la vitesse limite!! (vitesse => vitesse entrée)` si la vitesse est > que le vitesse limite

let vitesse = prompt("Entrez votre vitesse : ");
const vitesseLimite = 50;

console.log("Exo 5 : ");
if (vitesse < vitesseLimite) {
    console.log("Vous pouvez continuer a cette vitesse.");
} else if (vitesse == vitesseLimite) {
    console.log("Attention vous roulez a la vitesse limite. ");
} else {
    console.log("Ralentissez, vous avez depassé la vitesse limite !!");
}

// # Exercice 6
// - Demander le prenom et l'age d'une personne.
// - Afficher `Salut, nom de la personne! Vu que t'as l'age de la personne ans, ce soir tu peux sortir en discoteque` si la est >= 18
// - Afficher `Salut, nom de la personne! Vu que t'as l'age de la personne ans, aujourd'hui tu iras au cinema` si la est < 18

let prenomExo6 = prompt("Entrez votre prénom : ");
let ageExo6 = prompt("Entrez votre âge : ");

console.log("Exo 6 : ");
if (ageExo6 >= 18) {
    console.log(`Salut, ${prenomExo6} ! Vu que t'as l'age de ${ageExo6} ans, ce soir tu peux sortir en discoteque. `);
} else {
    console.log(`Salut, ${prenomExo6} ! Vu que t'as l'age de ${ageExo6} ans, aujourd'hui tu iras au cinema. `);
}

// # Exercice 7
// - Entrer 2 nombres et demander quel operateur on veut utilizer
// - Afficher le resultat pour l'operateur choisis
// - Ex: 3 * 2 = 6

let nb1Exo7 = parseInt(prompt("Entrez un premier nombre : "));
let nb2Exo7 = parseInt(prompt("Entrez un second nombre : "));
let operateur = prompt("Quel opérateur voulez-vous utiliser ? -, +, /, *. ");

console.log("Exo 7 : ");
if (operateur == "-") {
    console.log(nb1Exo7 + " - " + nb2Exo7 + " = " + (nb1Exo7 - nb2Exo7));
} else if (operateur == "+") {
    console.log(nb1Exo7 + " + " + nb2Exo7 + " = " + (nb1Exo7 + nb2Exo7));
} else if (operateur == "/") {
    console.log(nb1Exo7 + " / " + nb2Exo7 + " = " + (nb1Exo7 / nb2Exo7));
} else {
    console.log(nb1Exo7 + " * " + nb2Exo7 + " = " + (nb1Exo7 * nb2Exo7));
}