// # Exercice 1
// - Créer un tableau vide 
// - Ajoutez 5 prenoms dans le tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo1 = [];
exo1.push("Karis", "Alexis", "Violette", "Martin", "Jordano");
console.log(exo1);

// # Exercice 2
// - Créer un tableau avec 5 prenoms 
// - Ajoutez Martin au debut et Fanny a la fin du tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo2 = ["Kosta", "Alexis", "Nicolas", "Maxime", "Valentin"];
exo2.unshift("Martin");
exo2.push("Fanny");
console.log(exo2);

// # Exercice 3
// - Créer un tableau avec 5 prenoms 
// - Supprimez le 1er e dernier prenom du tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo3 = ["Kosta", "Alexis", "Nicolas", "Maxime", "Valentin"];
exo3.shift(0);
exo3.pop();
console.log(exo3);

// # Exercice 4
// - Créer un tableau avec 5 prenoms 
// - Supprimez les 2 premiers et les 2 dernier prenoms du tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo4 = ["Kosta", "Alexis", "Nicolas", "Maxime", "Valentin"];
exo4.splice(0, 2);
exo4.splice(exo4.length - 2, exo4.length);
console.log(exo4);

// # Exercice 5
// - Créer un tableau avec 5 prenoms 
// - Remplacez le 2eme prenom du tableau par Cactus et l'avant dernier prenom du tableau par Jordano du tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo5 = ["Kosta", "Alexis", "Nicolas", "Maxime", "Valentin"];
exo5[1] = exo5[1] = "Cactus";
exo5[exo5.length - 1] = "Jordano";
console.log(exo5);

// # Exercice 6
// - Créer un tableau avec 5 prenoms (Pierre, Kadri, Maxime, Valentin, Kawtar)
// - Remplacez Kadri par Abdel et Kawtar par Yasmina du tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo6 = ["Pierre", "Kadri", "Maxime", "Valentin", "Kawtar"];
exo6.splice(1, 1, "Abdel");
exo6.splice(exo6.length - 1, 1, "Yasmina");
console.log(exo6);

// # Exercice 7
// - Créer un tableau avec 5 prenoms (Oussama, Karis, Jordano, Zidane, Sergen)
// - Supprimez  Jordano et Sergen du tableau a l'aide d'une methode
// - Affichez dans la console le contenu de l'array

let exo7 = ["Oussama", "Karis", "Jordano", "Zidane", "Sergen"];
exo7.splice(exo7.indexOf("Jordano"), 1);
exo7.splice(exo7.indexOf("Sergen"), 1);
console.log(exo7);

// # Exercice 8
// - Une classe a 10 etudiants, la classe est vide au debut et a la fin touts les etudiants doivent etre presents. 
// Afficher un message pour chaque etidiant qui vient de rentrer en la classe et afficher touts les etudiants qui sont en classe a la fin.

let exo8 = [];
exo8.push("Martin", "Fanny", "Maxime", "Karis", "Sergen", "Imad", "Jordano", "Yasmina", "Valentin", "Cactus");
for (let i = 0; i < 10; i++) {
    console.log(exo8[i] + " Bienvenue");
}
console.log(exo8);

// # Exercice 9
// - Une classe a 10 etudiants, 12 etudiants rentrent en classe mais les 2 derniers se sont trompés.
// Vous devez les envoyer dans une autre classe et montrer les etudiants qui se sont trompés et aussi montrer la classe complete avec les 10 autres etudiants.

let exo9 = [];
let elevesTrompe = [];
exo9.push("Martin", "Fanny", "Maxime", "Karis", "Sergen", "Imad", "Jordano", "Yasmina", "Valentin", "Cactus", "Kadri", "Oussama");
for (let i = 0; i < 1; i++) {
    elevesTrompe.push(exo9.pop());
}
console.log("Eleves trompés : " + elevesTrompe.push(exo9.pop()));
console.log(exo9);
console.log(elevesTrompe);