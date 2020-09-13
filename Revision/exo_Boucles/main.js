// # Exercice 1
// - Demander un nombre maximal et afficher de 0 au nombre maximal (while)

let nombreExo1 = prompt("Entrez un nombre : ");
console.log("Exo 1 : ");

let i = 0;
while (i <= nombreExo1) {
    console.log(i);
    i++;
}

// # exercice 2
// - Demander un nombre maximal et afficher de 2 en 2 de 0 au nombre maximal (for)

let nombreExo2 = prompt("Entrez un nombre : ");
console.log("Exo 2 : ");

for (let i = 0; i <= nombreExo2; i += 2) {
    console.log(i);
}

// # Exercice 3
// - Demander un nombre maximal et afficher si le nombre est paire de 0 au nombre maximal(for)
// - Ex: `Le nombre x est paire`

let nombreExo3 = prompt("Entrez un nombre : ");
console.log("Exo 3 : ");

for (let i = 0; i <= nombreExo2; i++) {
    if (i % 2 == 0) {
        console.log("Le nombre " + i + " est paire. ");
    } else {
        console.log("Le nombre " + i + " est impair. ");
    }
}

// # Exercice 4
// - A molengeek, la classe est vide et les etudiants arrivent. Entrez 5 etudiants dans la classe (do ... while)

let classe = [];
console.log("Exo 4 : ");
console.log(classe);

do {
    classe.push("Karis", "Martin", "Jordano", "Alexis", "Maxime");
} while (classe.length == 0);
console.log(classe);

// # Exercice 5
// - Dans la classe de la coding 13 il y a Martin, Maxime, Jordano, Yasmina, Kawtar, Valentin, Oussama, Cactus, Fanny, Sergen, Karis, Kadri, Piere, Zidane, Imad, Abdel.
// - Affichez les prenoms des etudiants et si leurs index est paire ou impaire.
// - Afficher a la fin touts les etudiants qui avaient des index paires ou impaires (forEach)

let coding13 = ["Martin", "Maxime", "Jordano", "Yasmina", "Kawtar", "Valentin", "Oussama", "Cactus", "Fanny", "Sergen", "Karis", "Kadri", "Piere", "Zidane", "Imad", "Abdel"];
console.log("Exo 5 : ");

coding13.forEach((element, index) => {
    if (index % 2 == 0) {
        console.log(element + " : index pair. ");
    } else {
        console.log(element + " : index impair. ");
    }
});


