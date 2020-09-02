// ## 1
// Créer un programme qui va choisir un nombre au hasard entre 1 et 20. Le joueur a 5 essais pour trouver le nombre. 
// Si le joueur est a 10 unités ou plus de la réponse, la fonction doit renvoyer "Froid". 
// Si le joueur est à 5 unités ou plus de la bonne réponse alors la fonction doit renvoyer tiède. 
// Si le joueur est à 2 unités ou plus = "chaud". 1 unité ou plus = "brûlant". 
// Si le jouer échoue à trouver le nombre la fonction indique que la partie est terminée.

// let trouverNombre = () => {
//     let min = 1;
//     let max = 20;
//     let randomNumber = Math.round(Math.random() * (max - min) + min);
//     let askNumber;
//     for (let i = 4; i >= 0; i--) {
//         askNumber = parseInt(prompt("Choisissez un chiffre : "));
//         if (Math.abs(randomNumber - askNumber) >= 10) {
//             alert("Froid ! ");
//         } else if (Math.abs(randomNumber - askNumber) >= 5) {
//             alert("Tiède ! ");
//         } else if (Math.abs(randomNumber - askNumber) >= 2) {
//             alert("Chaud !");
//         } else if (Math.abs(randomNumber - askNumber) >= 1) {
//             alert("Brûlant ! ");
//         } else if (askNumber == randomNumber) {
//             alert("Vous avez trouvé la bonne réponse : " + randomNumber + "\n" + "Bravo !");
//             break;
//         }
//         alert("Il vous reste " + i + " essais restants. ");
//     }
// }
// trouverNombre();

// ## 2
// Créer la liste d'élève de la codingSchool 13 avec une fonction
// Créer une liste des élèves admis à Molengeek en fonction de ses présences et de la note qu'il a obtenu pour le site du chef
// Créer une liste des non - admis
// Créer une liste des admis qui devront repasser un test(bonne notes pour le site du chef mais taux d'absence élever)

// let listeEleves = [];
// let elevesAdmis = [];
// let elevesNonAdmis = [];
// let elevesAdmisAvecTest = [];

// let codingSchool13 = () => {
//     let out = true;
//     let ajoutEleves;
//     let absence;
//     let noteSiteDuChef;
//     let fin;
//     while (out == true) {
//         ajoutEleves = prompt("Nom de l'élève : ");
//         listeEleves.push(ajoutEleves);
//         absence = prompt("La personne a été absente ? (oui ou non) ");
//         if (absence == "oui") {
//             elevesNonAdmis.push(ajoutEleves);
//         } else if (absence == "non") {
//             noteSiteDuChef = prompt("Quelle est la note pour le site du chef sur /20 ? ");
//             if (noteSiteDuChef < 10) {
//                 elevesAdmisAvecTest.push(ajoutEleves);
//                 listeCotes.push(noteSiteDuChef);
//             } else if (noteSiteDuChef >= 10) {
//                 elevesAdmis.push(ajoutEleves);
//                 listeCotes.push(noteSiteDuChef);
//             }
//         }
//         fin = prompt("Voulez-vous arrêter le programme ? (oui ou non) ");
//         if (fin == "oui") {
//             out = false;
//         }
//     }
// }
// codingSchool13();
// console.log("Liste des élèves : " + listeEleves.join(", "));
// console.log("Admis : " + elevesAdmis.join(", "));
// console.log("Non admis : " + elevesNonAdmis.join(", "));
// console.log("Admis avec test : " + elevesAdmisAvecTest.join(", "));

// ## 3
// Vous avez un aquarium avec des crevettes, des poissons, des crabes et des escargots, 2 de chaque.Comme c'est le bordel, vous souhaitez séparer toutes les espèces dans 4 bacs 
// différents en les triant par espèce.Affichez ce que contien chaque aquarium dans la console.Utilisez des fonctions!
// Vous devez ensuite nourrir tous les habitants des aquariums en même temps.

let aquarium = ["Crevette géante tigrée", "Crevette d'Amano", "Espadon", "Poisson rouge", "Crabe de cocotier", "Maja squinado", "Helix aspersa", "Bulime tronqué"];

let crevettes = [];
let poissons = [];
let crabes = [];
let escargots = [];
let rangement;

let remplirAquarium = () => {
    for (let i = 0; i < aquarium.length; i++) {
        rangement = prompt("Vous devez ranger chaque espèce dans un aquarium. "
            + "\n" + "Voici la liste : " + aquarium[i]
            + "\n" + "Choississez l'aquarium : crevettes, poissons, crabes et escargots. ");
        while (rangement != "crevettes" && rangement != "poissons" && rangement != "crabes" && rangement != "escargots") {
            alert("Aquarium non reconnu ! ");
            rangement = prompt("Vous devez ranger chaque espèce dans un aquarium. "
                + "\n" + "Voici la liste : " + aquarium[i]
                + "\n" + "Choississez l'aquarium : crevettes, poissons, crabes et escargots. ");
        }
        if (rangement == "crevettes") {
            crevettes.push(aquarium[i]);
        } else if (rangement == "poissons") {
            poissons.push(aquarium[i]);
        } else if (rangement == "crabes") {
            crabes.push(aquarium[i]);
        } else if (rangement == "escargots") {
            escargots.push(aquarium[i]);
        }
    }
}
remplirAquarium();
console.log(crevettes);
console.log(poissons);
console.log(crabes);
console.log(escargots);

// ## 4 
// creer une fonction à fin de calculer la quantité que tu auras besoin dans ta vie d'un aliment ou d'une boisson spécifique. 
// demande à la personne jusqu'à quel age elle pense vivre.
// Et à la fin tu lui dit : "tu auras besoin x (aliment) jusqu'à que tu arrives a l'age de x ans"

// ## 5
// Crée un systéme de prise de rendez vous simple, sans double rendez vous la même heures et le meme jours.

// ## 6
// Crée un 'OXO' à partir de ça :
//     let oxo = "1 | 2 | 3 \n──┼───┼──\n4 | 5 | 6 \n──┼───┼──\n7 | 8 | 9 \n---------";
// console.log(oxo);
// Tu dois pouvoir remplacer les chiffres par des 'X'

// ## 7
// //Créer une fonction [calcul] qui va demander à l'utilisateur la réponse au calcul ((10*50)/2) et vérifie si il a bien entré la bonne réponse.

// //-> Si oui, faites une alert "Vous êtes doué ! ".
// // -> Si non, redemander la réponse jusqu'à ce qu'elle soit correcte, et préciser le nombre d'essais qu'il lui reste.

// //L'utilisateur à 4 chances pour répondre, et 10sec d'intervalle avant de pouvoir réessayer. Stocks les réponses fausses dans un tableau , et la vraie dans un autre.

// ## 8
// 1.
// crée une fonction avec lequel l'utilisateur serait en mesure de choisir trois éléments pour son menu en te basant sur les tableau suivant:

//     - let boissons = ["coca", "fanta", "sprite", "ice tea", "eau plate"];

// - let plat = ["riz curry", "steak frite", "pate bolo", "pavé de saumon", "panini"];

// - let dessert = ["brownie", "cookie", "beignets", "crepe", "profiterole"];

// 2.
// la fonction devras afficher via une alerte le prix total du menu.Pour les prix tu te base sur les références ci dessous:

// #### boissons
//     - coca: 2, 80
//         - fanta: 2, 80
//             - sprite: 2, 50
//                 - ice tea: 2, 90
//                     - eau plate: 2, 00
// #### plat
//     - riz curry: 10, 90
//         - steak frite: 15, 20
//             - pata bolo: 12, 00
//                 - pavé de saumon: 17, 00
//                     - panini: 8, 50
// #### dessert
//     - brownie: 3, 00
//         - cookie: 2, 90
//             - beignets: 2, 50
//                 - crepe: 2, 80
//                     - profiterole: 2, 90

// ## 9
// 1. créer une fonction qui demande la saisie d'une largeur  et d'une longueur differente affiche la surface du rectangle
// 2. si la longueur est semblable à la largeur, il doit alors renvoyer que c'est un carré, il doit donc entrer une nouvelle valeur afin qu'il devienne un rectangle tout en affichant sa surface en "cm"

// ## 10
//     - Creer un tableau avec diffrents elements dedans(String, integer, Boolean)
//         - Creer une fonction qui:
// - met la premier lettre des strings en majuscule et le reste en minuscule.(peu importe comment les noms sont ecris)
//     - retourne le carré des integers.
//     - retourne le contraire du boolean.

// ## 11
// // crée un programme qui demande à l'utilisateur de classer différent type de personne en fonction de leurs salaires
// // crée un tableau pour savoir de qui on parle
// // crée trois autres tableaux avec comme nom "en dessous de la moyenne"(<1600 euro), "dans la moyenne"(entre 1600 et 1800 euro) et "au dessus de la moyenne"(>1800)
// // tant que la personne n'indique pas de salaire en chiffre recommence la boucle
// // trie les prénoms des personnes en fonction des salaires
// // affiche les différents noms dans les différents tableaux avec une petite phrase

// ## 12
// 1. créer un tableau: concert(vide).
// 2. rajoutter des prénoms dans le tableau(vous décidez de la limite).
// 3. si la personne a moins de 18 ans, elle ne peut pas rentrer. 
// 4. dans un console.log, mettre la 1e lettre de tous les prénoms en majuscule et le reste en minuscule.

// ## 13
// Créer un programme qui permet à un utilisateur de pouvoir encoder les prénoms des élèves et une côte pour chaque élève.
// Vous avez besoin de 3 tableaux différents(prénom des élèves, côte des élèves, concatener les prénoms et les côtes des élèves).
// Il peut rajouter un élève par la suite et il peut aussi arrêter le programme à la fin en lui posant la question(Oui ou Non).

/*----- Déjà fais ----- */

// ## 14
// Créer un tableau avec plusieurs humains et gobelins(8 element max)
// Créer une fonction pistolet qui permet de tuer et qui tramsforme l'element "humain" en "humain mort" et "Gobelins" en "Gobelins mort".
// créer une fonction vue qui permet de voir chaque element du tableau mais que vous avez 1 chance sur 2 de "ne pas bien voir" l'element (car vous êtes borgne) et que ce lui ci devient un "element invisible".
// dans la fonction vue faite appelle à Pistolet pour commencer la purge.
// Une fois la purge faite allez chercher vos cartouches en comptant(faites un compteur) le nbr de gobelins mort et le nbr d'humains mort. Si vous avez tué tout les humains mettez une alert assasin par contre si ce sont tout les gobelins qui sont mort mettez une alert Heros par contrre si vous tuez tout le monde alors une alert vous êtes un psycopathe devrait faire son appaition
// Bonus: faire un tableau qui se mélange(Un randomizer).

// ## 15
//     - Cree une fonction pour une maison medicale(peux prendre max 10personne) ou les utilisateur rentre leurs données(nom, prenom, age, raison d'admission et genre). 
//         - A la fin toute les information / tableau(homme, femme, tout le monde ensemble) doivent s'afficher dans le console.log

// ## 16
// 1. créer un progamme qui va mettre deux chiffres introduit par l'utilisateur cote à cote et dire si le chiffre obtenu est divisble par 2.
// 2. s'il est divisble par deux une alert arrive et dis (" chiffre divisible par 2)
// 3. s'il n'est pas divisble par 2 une alert arrive et dis "chiffre non divisible par 2.
// 4. si le chiffre est divisble par 2, le mettre dans le tableau[divi].s'il n'est pas divisble le mettre dans le tableau[pasDivi]