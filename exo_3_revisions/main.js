// ## Exo 3(boucle forEach) Partie 1
// 1. Créer un tableau avec 9 prénoms

let tab = ["andré", "karis", "maxime", "cactus", "kadri", "martin", "jordano", "imad", "sergen"];

// 2. Affiche chaque élément dans un console log

tab.forEach((element, index) => {
    console.log(element);
    // 3. Affiche chaque premiere lettre de chaque élément dans un console log
    console.log("Première lettre : " + element.charAt(0));
    // 4. Affiche chaque seconde lettre de chaque élément dans un console log
    console.log("Deuxième lettre : " + element.charAt(1));
    // 5. Affiche chaque seconde lettre de chaque élément concaténé a tout le mot lui meme exemple : 
    // si le mot et bonjour alors on devra affiché obonjour
    console.log("5. " + element.charAt(1) + element.slice(0));
    // 6. Affiche tous les prénoms dans un console log dont l'indice est pair 
    if (index % 2 == 0) {
        console.log("Indice pair : " + element);
    }
});
