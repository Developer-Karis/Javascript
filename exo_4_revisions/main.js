// ## Exo 3(boucle forEach) Partie 2
// 1. Créer un tableau avec 9 prénoms

let tab = ["andré", "karis", "maxime", "cactus", "kadri", "martin", "jordano", "imad", "sergen"];

tab.forEach((element, index) => {
    // 2. Affiche tous les prénoms dont l'indice est impair en majuscule
    if (index % 2 != 0) {
        console.log(element.toUpperCase());
        // 4. Affiche les prénoms impair ET plus long que 4caractères
        if (element.length > 4) {
            console.log("Plus long que 4 caractères : " + element);
        }
    } else if ((element.charAt(0) == 'a' || element.charAt(0) == 'e' || element.charAt(0) == 'm'
        || element.charAt(0) == 'f' || element.charAt(0) == 'y' || element.charAt(0) == 'n') || (element.length > 5)) {
        // 7. Affiche tous les prénoms plus long que 5 caractères et commencant par (a,e,m,f,y,n)
        // 6. Affiche tous les prénoms commencant par (a,e,m,f,y,n) mais pas les autres !
        console.log("Les prénoms qui commencent par (a,e,m,f,y,n) : " + element);
    } else {
        // 3. Affiche tous les prénoms dont l'indice est pair avec la premiere lettre en majuscule
        console.log(element.charAt(0).toUpperCase());
        // 5. Affiche les prénoms pair et plus long que 4caractères avec uniquement leur premiere lettre 
        // et en plus en majuscule (il n'y aura qu'une lettre en majuscule par mot)
        if (element.length > 4) {
            console.log(element.charAt(0).toUpperCase());
        }
    }
});