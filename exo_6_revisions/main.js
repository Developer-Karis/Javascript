// ## Exo 4(boucle for et forEach,condition)
// let leTableau = [4, "true", true, "bonjour", 511, "coding school", {}, 2020, 1, "maryam", false, [], 13, ["salut", 13, false],
//     "les tartines c'est délicieux", "true et false", 1070, 478, "hello", "top", 4000, 99, "codeur", 45,
//     "javascript", 399, "autodidacte", "oui", 1000, 1001, "brainstorming", "lol"];

// // **Attention ce tableau reste toujours rempli, on ne le vide pas pour les exercices ci-dessous**

// let lesIntegers = [];
// let lesStrings = [];
// let lesAutres = [];

// let lesGrandsIntegers = [];
// let lesPetitsIntegers = [];
// let lesPetitsStrings = [];
// let lesGrandsString = [];

// leTableau.forEach(element => {
//     // 1. Créer un programme qui va afficher le type de chaque élément du tableau avec une phrase tel que : l'element ... est de type ...
//     console.log("L'element " + element + " est de type : " + typeof element);
//     // 2. Créer trois tableaux "lesIntegers", "lesStrings", "lesAutres" dans les quels vous allez stocker 
//     // grace a une boucle forEach chaque élément du tableau, afffichez le contenu de chaque tableau avec un console.log
//     if (typeof element == "number") {
//         lesIntegers.push(element);
//     } else if (typeof element == "string") {
//         lesStrings.push(element);
//     } else {
//         lesAutres.push(element);
//     }

//     if (typeof element == "number" && element < 100) {
//         lesPetitsIntegers.push(element);
//     } else if (typeof element == "number" && element > 100) {
//         lesGrandsIntegers.push(element);
//     } else if (typeof element == "string" && element.length < 6) {
//         lesPetitsStrings.push(element);
//     } else {
//         lesGrandsString.push(element);
//     }
// });
// console.log(lesIntegers);
// console.log(lesStrings);
// console.log(lesAutres);
// console.log();
// console.log(JSON.stringify(lesPetitsIntegers));
// console.log(JSON.stringify(lesGrandsIntegers));
// console.log(JSON.stringify(lesPetitsStrings));
// console.log(JSON.stringify(lesGrandsString));

// 3. Créer quatre tableaux "lesGrandsIntegers", "lesPetitsIntegers" ,"lesPetitsStrings", "lesGrandsString" dans les quels vous allez 
// ranger les éléments du tableau "leTableau", pour lesPetitsIntegers ce sont ceux plus petits que 100 et lesGrandsIntegers ce sont ceux 
// plus grand que 100, pour lesPetitsStrings ce sont les mots plus petits que 6 lettres et 
// pour lesGrandsString ce sont ceux qui sont plus grand que 6 lettres

// 4. Créer un programme qui permet a l'utilisateur de stocker des 11 nombres dans deux pots différents, 
// si le nombre est inférieur/égal a 100 il va dans le premier pot et si c'est supérieur à 100 il va dans le second pot, 
// si l'utilisateur rentre des nombres à virgule ils doivent devenir des nombres entier et si le nombre entier est inférieur à 0 alors 
// il recoit une annonce pour lui dire que son chiffre est trop petit et qu'il doit en entrer un autre.

// let tab1 = [];
// let tab2 = [];
// let nombre;

// for (let i = 0; i < 11; i++) {
//     nombre = Math.round(parseInt(prompt("Entrez un nombre : ")));
//     while (nombre < 0 || isNaN(nombre)) {
//         nombre = Math.round(parseInt(prompt("Votre chiffre est trop petit. Entrez un nombre : ")));
//     }
//     if (nombre <= 100) {
//         tab1.push(nombre);
//     } else {
//         tab2.push(nombre);
//     }
// }
// console.log(tab1);
// console.log(tab2);

// 5. **PARTIE 1** : Créer un programme qui permet a l'utilisateur de remplir un tableau "panier" avec des fruits et des légumes 
// environs 4 fruits et 4 légumes.**PARTIE 2** : Avec un forEach il faut redistribuer chaque élément dans un bac de fruit et un bac de légumes, 
// trouvez une astuces pour faire se trie

// let fruitLegumes;
// let fruitOuLeg;
// let panier = [];
// let panierFruits = [];
// let panierLegumes = [];

// for (let i = 0; i < 8; i++) {
//     fruitLegumes = prompt("Entrez des fruits et des légumes : ").toLowerCase();
//     fruitOuLeg = prompt("Fruit(0) ou Légume (1) ? ");
//     fruitLegumes += fruitOuLeg;
//     panier.push(fruitLegumes);
// }
// panier.forEach(element => {
//     if (element.slice(-1) == "0") {
//         element = element.slice(0, -1);
//         panierFruits.push(element);
//     } else if (element.slice(-1) == "1") {
//         element = element.slice(0, -1);
//         panierLegumes.push(element);
//     }
// });
// console.log(panier);
// console.log(panierFruits);
// console.log(panierLegumes);

// 6. Créer un programme qui permet a l'utilisateur de choisir dans quel tiroirs 'sousVetements','vetements','chaussures', 
// ranger chaque éléments de ce tableau

let vetements = ['chaussure classique', 't-shirt super héro', 'pull col roulé', 'basket de sport', 'chaussettes blanches', 'pentalon noir',
    'soutien-gorge', 'pull rayé', 't-shirt soleil souriant', 'caleçon blanc'];

let rangement;
let tiroirSousVetements = [];
let tiroirVetements = [];
let tiroirChaussures = [];

for (let i = 0; i < vetements.length; i++) {
    rangement = prompt("Choisir dans quel tiroirs tu veux ranger tes vetements : "
        + "\n" + "\n" + "Voici la liste : " + vetements[i] + "\n" + "\n" + "Votre choix ? sous-vetements, vetements, chaussures. ");
    while (rangement != "sous-vetements" && rangement != "vetements" && rangement != "chaussures") {
        alert("Tiroir non reconnu ! ");
        rangement = prompt("Choisir dans quel tiroirs tu veux ranger tes vetements : "
            + "\n" + "\n" + "Voici la liste : " + vetements[i] + "\n" + "\n" + "Votre choix ? sous-vetements, vetements, chaussures. ");
    }
    if (rangement == "sous-vetements") {
        tiroirSousVetements.push(vetements[i]);
    } else if (rangement == "vetements") {
        tiroirVetements.push(vetements[i]);
    } else {
        tiroirChaussures.push(vetements[i]);
    }
}
console.log(vetements);
console.log(tiroirSousVetements);
console.log(tiroirVetements);
console.log(tiroirChaussures);