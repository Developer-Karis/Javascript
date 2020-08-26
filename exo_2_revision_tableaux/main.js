// # Exo 2(les tableaux)
// 1. Créer un tableau avec 5 éléments, affiche dans la console le 3 eme élément

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[2]);

// 2. Affiche dans la console le 1er élément et le dernier élément

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[0]);
// console.log(tab[tab.length - 1]);

// 3. Affiche dans la console le 2eme élémént avec toutes ses lettres en majuscule saufe la derniere 

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[1].slice(0, -1).toUpperCase() + tab[1].slice(-1).toLowerCase());

// 4. Affiche dans la console le 4eme élément du tableau mais uniquement sa première lettre

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[3].charAt(0));

// 5. Affiche dans la console le 5eme élément du tableau mais sans sa première lettre

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[tab.length - 1].charAt(0));

// 6. Affiche dans la console le seulement les 2 premiereres lettres du 1er element, 
// la premiere que tu mettras en minuscule et la seconde en majuscule

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[0].charAt(0).toLowerCase() + tab[0].slice(1, 2).toUpperCase());

// 7. Affiche dans la console la concaténation du premier élément avec le 3eme élément

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[1].concat(" " + tab[2]));

// 8. Affiche dans la console la premiere moitié du 2eme élément avec la seconde moitié du dernier élément

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[1].slice(0, tab[1].length / 2) + tab[tab.length - 1].slice(tab[tab.length - 1].length / 2));

// 9. Affiche dans la console les deux première lettre du 3eme élément en majuscule avec tout le 5eme élément en minuscule

// let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
// console.log(tab[2].slice(0, 2).toUpperCase() + tab[tab.length - 1].toLowerCase());

// 10. Affiche dans la console la concaténation des deux premieres lettre de chaque élément 
// du tableau dont la premiere lettre sera en minuscule et la seconde sera en majuscule

let tab = ["Martin", "Karis", "Kadri", "Cactus", "Maxime"];
let ajout = "";

tab.forEach((valeur, index) => {
    ajout += valeur.charAt(0).toLowerCase() + valeur.charAt(1).toUpperCase();
    console.log(ajout);
    console.log(valeur);
    console.log(index);
});