// 1
// console.log(1 == "1");

// 2
// console.log(1 === "1");

// 3
// let prenom = prompt("Entrez votre prénom : ");
// if (prenom.length < 5) {
//     alert("Ton prénom est trop court. ");
// }

// 4
// let addition = parseInt(prompt("Résoudre : 10 + 5 = ?"));
// if (addition == 15) {
//     alert("Bravo ! Bonne réponse ! ");
// } else {
//     alert("Incorrect ! ");
// }

// 5
// let multiplication = parseInt(prompt("Résoudre : 10 * 6 = ?"));
// let resultat = 10 * 6;
// if (multiplication == resultat) {
//     alert("La réponse était bien : " + resultat);
// } else {
//     alert("C'est dommage, tu n'étais qu'a " + Math.abs(resultat - multiplication) + " unité de la bonne réponse");
// }

// 6
let myArray = [];
let ajoutTab = prompt("Combien d'élements voulez-vous ajouter dans le tableau ?");
if (ajoutTab <= 3) {
    let element1 = prompt("Premier élément ?");
    let element2 = prompt("Deuxième élément ?");
    let element3 = prompt("Dernier élément ?");
    myArray.push(element1, element2, element3);
    alert(myArray);
} else {
    alert("Vous devez entrer 3 éléments maximums dans le tableau !");
}

// 7
let bacs = parseInt(prompt("Entrez un nombre : "));
let grandNombres = 0;
let petitNombres = 0;
if (bacs >= 12) {
    grandNombres = bacs;
} else {
    petitNombres = bacs;
}
alert("Grand Nombre : " + grandNombres + " Petit nombre : " + petitNombres);

// 8
let bonus = prompt("Quel est ton prénom ?");
if (bonus.length <= 5) {
    alert("Ton prénom contient " + bonus.length + " caractères.");
} else {
    alert("Ton prénom est vraiment long ! " + bonus.length + " caractères.");
}