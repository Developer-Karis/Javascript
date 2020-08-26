// ## Exo 3(boucle forEach) Partie 3
// 1. Créer un tableau avec 9 prénoms

let tab = ["andré", "karis", "max", "cactus", "kadri", "martin", "ordano", "ima", "sergen", "fanny"];
let letter1 = ["a", "e", "m", "f", "y", "n"];
let letter2 = ["k", "c", "m", "f", "y", "n", "a", "e", "p", "o"];
let letter3 = ["k", "m", "f", "y", "n", "a", "e", "o"];
let str = "";

tab.forEach((element, index) => {
    // 2. Affiche tous les prénoms plus court que 5 caractère commencant par (a,e,m,f,y,n) avec leur première lettre en majuscule
    letter1.forEach(letter1 => {
        if (element.length < 5 && letter1 == element.charAt(0)) {
            console.log(element.charAt(0).toUpperCase());
        }
    });
    // 3. Affiche tous les prénoms plus long que 4 caractères commencant par (k,c,m,f,y,n,a,e,p,o) et qui sont impaire dans la liste
    letter2.forEach(letter2 => {
        if (element.length > 4 && letter2 == element.charAt(0) && index % 2 != 0) {
            console.log("Indice impair : " + element);
        } else if (element.length > 5 && letter2 == element.charAt(0) && index % 2 == 0) {
            // 4. Affiche tous les prénoms plus long que 5 caractères commencant par (k,c,m,f,y,n,a,e,p,o) 
            // et qui sont pair dans la liste avec leur premiere lettre en minuscule,leur seconde et derniere lettre en majuscule
            console.log("Indice pair : " + element.charAt(0).toLowerCase()
                + element.charAt(1).toLowerCase() + element.slice(-1).toUpperCase());
        }
    });
    letter3.forEach(letter3 => {
        // 5. Affiche tous les prénoms plus court que 7 caractères commencant par (k,m,f,y,n,a,e,o) 
        // et qui sont pair dans la liste mais uniquement leur deux premieres lettres concaténé les uns aux aures 
        // dont la premiere lettre et en majuscule et la seconde en majuscule, 
        // exemple : karima,fanny,nicolas,elisa qui donnera KaFaNiEl
        if (element.length < 7 && letter3 == element.charAt(0) && index % 2 == 0) {
            str += element.charAt(0).toUpperCase() + element.charAt(1).toLowerCase();
        }
    });
});
console.log("Last exo : " + str);