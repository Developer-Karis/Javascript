// 1
// let prenom = prompt("Entrez un prénom : ");
// while (prenom.length < 5) {
//     alert("Le prénom est trop court");
//     prenom = prompt("Entrez un prénom : ");
// }

// 2
// let nb2 = prompt("5x5 = ? ");
// let result = 25;
// while (nb2 != result) {
//     alert("Tu étais à " + Math.abs(result - nb2) + " unités" + " de la bonne réponse.");
//     nb2 = prompt("5x5 = ? ");
// }

// 3
// let i = 0;
// while (i <= 11) {
//     if (i % 2 != 0) {
//         console.log(i);
//     }
//     i++;
// }

// 4
// let prenom = prompt("Entrez votre prénom : ");
// console.log(prenom.length);
// let i = 0;
// while (i < prenom.length) {
//     console.log(prenom);
//     i++;
// }

// 5
// let prenom = prompt("Entrez votre prénom : ");
// let i = 0;
// while (i < prenom.length) {
//     console.log(prenom[i]);
//     i++;
// }

// 6
// let piscine = parseInt(prompt("Quelle quantité de littre d'eau contient votre piscine ? "));
// let seau;
// let niveau = 0;
// while (niveau < piscine) {
//     seau = parseInt(prompt("Verser des litres d'eau : "));
//     niveau += seau;
//     if (niveau > piscine) {
//         alert("La piscine déborde de " + (seau - piscine) + " littres.");
//     } else if (niveau == piscine) {
//         alert("Votre piscine est pleine. ");
//     }
// }

// 7
let prenom = prompt("Entrez un prénom : ");
while (prenom == "" || prenom == " ") {
    prenom = prompt("Entrez un vrai prénom : ");
}