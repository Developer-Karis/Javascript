// 1. Les réponses boléenes part 1
// let nb1 = parseInt(prompt("Entrez un premier nombre : "));
// let nb2 = parseInt(prompt("Entrez un second nombre : "));
// let reponse = (nb1 == nb2);
// if (nb1 == nb2) {
//     alert("Le nombre " + nb1 + " et le nombre " + nb2 + " sont-ils égaux ? : " + reponse);
// } else {
//     alert("Le nombre " + nb1 + " et le nombre " + nb2 + " sont-ils égaux ? : " + reponse);
// }

// 2. Les réponses boléenes part 2

// let nombre1 = parseInt(prompt("Entrez un premier nombre : "));
// let nombre2 = parseInt(prompt("Entrez un second nombre : "));
// let reponsExo2 = (nombre1 < nombre2);
// if (nombre1 < nombre2) {
//     alert("Le nombre " + nombre1 + " est-il plus petit que le nombre " + nombre2 + " ? : " + reponsExo2);
// } else {
//     alert("Le nombre " + nombre1 + " est-il plus petit que le nombre " + nombre2 + " ? : " + reponsExo2);
// }

// 3. Les réponses boléenes part 3

// let nombre1 = parseInt(prompt("Entrez un premier nombre : "));
// let nombre2 = parseInt(prompt("Entrez un second nombre : "));
// let nombre3 = parseInt(prompt("Entrez un dernier nombre : "));
// let reponsExo3 = (nombre1 + nombre2);
// let reponse = (reponsExo3 > nombre3);
// if (reponsExo3 > nombre3) {
//     alert("La somme du nombre " + nombre1 + " + le nombre " + nombre2 + " est-elle plus grande que le nombre " + nombre3 + " ? : " + reponse);
// } else {
//     alert("La somme du nombre " + nombre1 + " + le nombre " + nombre2 + " est-elle plus grande que le nombre " + nombre3 + " ? : " + reponse);
// }

// 4.

// let phrase = prompt("Ecris une phrase : ");
// let longueur = prompt("Combien de caractères il y a dans cette phrase ?");
// let reponse = phrase.length;
// if (longueur.length == reponse) {
//     alert("Bravo, la réponse était bien : " + reponse);
// } else {
//     alert("Incorrect tu étais à " + Math.abs(reponse - longueur) + " unités de la bonne réponse !");
// }

// 5
// let prenom = prompt("Entrez votre prénom : ");
// if (prenom == "") {
//     let demandePrenom = prompt("Attention vous devez remplir le champs ci-dessous, Quel est votre prénom ?");
//     alert("Bonjour, " + demandePrenom);
// } else {
//     alert("Bonjour, " + prenom);
// }

// 6 
// if (confirm("Abonnez-vous") == true) {
//     let formule = prompt("Quelle formule voulez-vous prendre ? Luxe ou Normal ? ");
//     if (formule == "Luxe") {
//         alert("Félicitions, vous êtes abonné à présent !");
//         alert("Félicitations, vous avez choisis la formule Luxe !");
//     } else if (formule == "Normal") {
//         alert("Félicitions, vous êtes abonné à présent !");
//         alert("Merci pour votre abonnement.");
//     } else {
//         if (confirm("Abonnez-vous") == true) {
//             alert("C'est dommage, bonne journée !");
//         } else {
//             formule = prompt("Quelle formule voulez-vous prendre ? Luxe ou Normal ? ");
//         }
//     }
// }

// 7
// let question1 = prompt("1. Quelle est la capitale de la Belgique ?");
// let question2 = prompt("2. Quelle est la capitale du Portugal ?");
// let reponse1 = "Bruxelles";
// let reponse2 = "Lisbonne";
// if (question1 == "" && question2 == "") {
//     alert("Vous avez échoué !");
// } else if (question1 != reponse1 && question2 == reponse2) {
//     alert("Vous y êtes presque ! " + "La réponse à la question 1 était : " + reponse1);
// } else if (question1 == reponse1 && question2 != reponse2) {
//     alert("Vous y êtes presque ! " + "La réponse à la question 2 était : " + reponse2);
// } else if (question1 == reponse1 && question2 == reponse2) {
//     alert("Félicitations !");
// }

// 8. Conditions sur les nombres
// let age = parseInt(prompt("Entrez votre âge (pour la réservation du cinéma): "));
// if (age > 18 && age <= 100) {
//     alert("Vous êtes majeur, vous pouvez réserver.");
// } else if (age < 18 && age > 0) {
//     alert("Vous êtes mineur, l’accès est réservé aux grands.");
// } else if (age < 0) {
//     alert("Vous n’êtes même pas nés, n’essayez pas de tricher.");
// } else if (age > 100) {
//     alert("Vous êtes encore vivant ? Évitez de voir ce film pour le rester.");
// } else if (age == 18) {
//     alert("Vous pouvez rentrer mais c’est tout juste, n'oubliez pas que ce film peut être choquant.");
// }

// 9. Opérateurs Logique
let question1 = prompt("Est-ce que vous êtes riche ?");
let question2 = prompt("Voulez-vous partir en vacance ?");
let question3 = prompt("Est-ce que vous avez un chat ?");
let reponseOui = "oui";
let reponseNon = "non";
if (question2 == reponseNon) {
    alert("Pas de problème, ne partez pas en vacance.");
} else if (question1 == reponseNon || question3 == reponseOui) {
    alert("Même si vous le voulez, vous ne pouvez pas partir.");
} else if (question1 == reponseOui && question2 == reponseNon && question3 == reponseNon) {
    alert("Vous pourriez partir en vacance si vous le voulez.");
} else if (question1 == reponseOui && question2 == reponseOui && question3 == reponseNon) {
    alert("Tout est parfait, partez en vacance !");
} else if (question1 == reponseOui || question2 != reponseOui || question3 == reponseNon) {
    alert("Tout ce qu'elle dit est faux...");
}