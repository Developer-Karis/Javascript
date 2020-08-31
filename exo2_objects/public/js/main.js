// # Exo 1
// - Créez un objet avec vos valeurs

let obj = {
    prenom: "Karis",
    nom: "Papadopoulos",
    age: 23,
    taille: 176,
}

// # Exo 2 
// - Créez un second avec valeurs et un troiseme personnage sans valeurs

let obj2 = {
    nom: "Alexis",
    race: "bouldog",
}

let obj3 = {};

// # Exo 3
// - Remplir via la console les propriétées de personnage_3
// - Son nom doit valoir le nom de personnage_1
// - Son age doit valoir celui de personnage_2
// - Et sa taille doit être rempli avec la valeur que vous souhaitez

obj3.nom = obj.nom;
obj3.age = obj.age;
obj3.taille = 150;
console.log(obj3);

// # Exo 4
// - Créez une propriété au personnage_3 qui a comme valeur une fonction qui affiche bonjour + nom du personnage
// - Via la console,lancez la method coucou de personnage_4 qui dira "Coucou" leNomDePersonnage2

obj3.myFunc = (str) => {
    if (str == "Coucou") {
        return str + " " + obj2.nom;
    }
    return "Bonjour " + obj2.nom;
}
console.log(obj3.myFunc());

console.log(obj3.myFunc("Coucou"));
