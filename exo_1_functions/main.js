let direBonjour = function (prenom, nom) {
    console.log(`Bonjour ${prenom} ${nom}!`);
}
direBonjour("maxime", "herbiet");

// # EXO1
// - Créez une fonction qui prend deux paramètres, et les additionne, et faites un console.log du résultat.(Additionner)

function exo1(a, b) {
    console.log("Exo 1 : " + (a + b));
}
exo1(5, 5);

// # EXO2
// - Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

function exo2(a, b) {
    console.log("Exo 2 : " + (b - a));
}
exo2(5, 2);

// # EXO3  
// - Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

function exo3(a, b) {
    console.log("Exo 3 : " + (a * b));
}
exo3(5, 5);

// # EXO4 
// - Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

function exo4(a, b) {
    console.log("Exo 4 : " + (b / a));
}
exo4(5, 5);

// # EXO5
// - Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

function exo5(a, b) {
    console.log("Exo 5 : " + (a % b));
}
exo5(5, 5);

// # EXO6
// - Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(carré)

function exo6(a) {
    console.log("Exo 6 : " + a ** 2);
}
exo6(9);

// # EXO7
// - Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)

function exo7(a, b) {
    console.log("Exo 7 : " + Math.pow(a, b));
}
exo7(5, 5);

// # EXO8
// - Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères 
// avec la première lettre en majuscule et le reste en minuscule;

function capitalize(str) {
    str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    console.log("Capitalize : " + str);
}
capitalize("qsmdlkpoeipoe");

// # EXO9
// - Créer une function [calcul] ayant 3 paramètres
// - nbr1 , operator , nbr2
// - Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)

// function calcul(nbr1, operator, nbr2) {
//     switch (operator) {
//         case "+":
//             console.log("calcul : " + (nbr1 + nbr2));
//             break;
//         case "-":
//             console.log("calcul : " + (nbr1 - nbr2));
//             break;
//         case "*":
//             console.log("calcul : " + (nbr1 * nbr2));
//             break;
//         case "/":
//             console.log("calcul : " + (nbr1 / nbr2));
//             break;
//         default:
//     }
// }
// let nbr1 = parseInt(prompt("Nombre 1 : "));
// let operator = prompt("Quel opérateur ? +, -, *, / ");
// let nbr2 = parseInt(prompt("Nombre 2 : "));
// calcul(nbr1, operator, nbr2);

// # EXO10
// - Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)

// function reverseNumber(nombre, cumul) {
//     for (let i = nombre.length; i >= 0; i--) {
//         cumul += nombre.charAt(i);
//     }
//     console.log(cumul);
// }
// let nombre = prompt("Entrez un nombre : ");
// let cumul = "";
// reverseNumber(nombre, cumul);

// # EXO11
// - Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// - Qui répond "Le num x est divisible par 2 x:2 = z"
// - Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"

// ***** Nouvelle façon de créer une fonction *****
// let divParDeux = (nombre) => {
//     switch (true) {
//         case (nombre % 2 === 0):
//             console.log("Le num " + nombre + " est divisible par 2. ");
//             break;
//         default:
//             console.log("Ce nombre n'est pas divisible par 2. ");
//     }
// }
// let divisbleParDeux = parseInt(prompt("Entrez un nombre : "));
// divParDeux(divisbleParDeux);

// # EXO12
// - Créer une fonction [logIn] qui va demander à l'utilisateur un mot de passe et vérifier s'il a bien entré "mdp" si oui, 
// faites une alert "Vous êtes connecté", si non, redemander le mot de passe jusqu'à ce que l'utilisateur rentre "mdp"

// let logIn = (mdp) => {
//     while (mdp != "mdp") {
//         mdp = prompt("Votre mot de passe est incorrect ! Réessayer ! ");
//     }
//     alert('Vous êtes connecté ! ');
// }
// let mdp = prompt("Entrez un mot de passe : ");
// logIn(mdp);

// Exo 12 Bonus logIn mdp 3 essais 10 secondes

let motDePasse = () => {
    let i = 2;
    let mdp = prompt("Entrez un mot de passe : ");
    while (mdp != "mdp") {
        if (i != 0) {
            alert("Il vous reste " + i + " essais. ");
            mdp = prompt("Votre mot de passe est incorrect ! Réessayer ! ");
            i--;
        } else {
            alert("Vous avez essayer trop de fois ! " + "\n" + "Vous devez attendre 10 secondes ! ");
            setTimeout(motDePasse, 5000);
            break;
        }
    }
    if (mdp == "mdp") {
        alert("Vous êtes connecté ! ");
    }
}
motDePasse();

// # EXO13
// - Créer un tableau [codingSchool12] vide.
// - Créer une fonction qui permet d'ajouter quelqu'un au tableau
// - Créer une fonction qui permet de retirer quelqu'un au tableau
// - Avec la capture d'écran reproduisez les entrées / sorties de la classe

// let codingSchool12 = [];

// function ajout(x) {
//     codingSchool12.push(x);
//     console.log(codingSchool12);
// }
// let prenom = prompt("Entrez votre prénom : ");
// ajout(prenom);

// function remove(y) {
//     codingSchool12.splice(codingSchool12.indexOf(y), 1);
//     console.log(codingSchool12);
// }
// let supprimer = prompt("Enlever un élement : ");
// remove(supprimer);

