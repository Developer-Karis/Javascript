let chevalier = {
    nom: {
        prenom: "Nicolas",
        nom_de_famille: "Primo",
    },
    age: "15ans",
}

let nomDuChevalier = chevalier.nom.nom_de_famille;
console.log(nomDuChevalier);


// # Exo 1
// - Stockez dans une variable "taille_nom_guerrier" la longueur du nom du guerrier
// - Stockez dans une variable "troiseme_index_arme_guerrier" l'index 3 de l'arme du guerrier
// - Stockez dans une variable "morceau_arme_mage" le nom de l'arme du mage à partir de l'index 2
// - Stockez dans une variable "fusion_noms_silvie_nico" le nom du guerrier concaténé au nom du paysan

let guerrier = {
    nom: "nico",
    age: 18,
    taille: 180,
    arme: "hache",
};

let taille_nom_guerrier = guerrier.nom.length;
console.log(taille_nom_guerrier);

let troiseme_index_arme_guerrier = Object.values(guerrier)[3];
console.log(troiseme_index_arme_guerrier);

let mage = {
    nom: "hajar",
    age: 20,
    taille: 160,
    arme: "baton",
};

let morceau_arme_mage = mage.arme.slice(2);
console.log(morceau_arme_mage);

let paysan = {
    nom: "sylvie",
    age: 17,
    taille: 165,
    arme: "fourche",
};

let fusion_noms_silvie_nico = guerrier.nom + " " + paysan.nom;
console.log(fusion_noms_silvie_nico);

// # Exo 2
// - Créez une variable objet du nom de perso2 avec comme proprietées un nom et un age
// - Créez une variable objet du nom de perso1 avec comme propriété un nom, un age et comme method "usurpation"
// - Il doit pouvoir usurper l'identité du perso2

let perso2 = {
    nom: "Maxime",
    age: 23
}

let perso1 = {
    nom: "Alexis",
    age: 18,
    usurpation() {
        perso1.nom = perso2.nom;
        return perso2.nom;
    }
}
console.log();
console.log(perso2.nom);
console.log(perso1.nom);
console.log(perso1.usurpation());

// # Exo 3
// - Créer un objet avec un nom et une method
// - La method de votre objet lance un prompt permetant de changer son age
// - Une alert renvoi l"age de votre objet avec la phrase "Vous avez x ans"

// let askAge;
// let age = {
//     monAge: 15,
//     changerAge() {
//         askAge = prompt("Entrez votre âge : ");
//         age.monAge = askAge;
//         return askAge;
//     }

// }
// console.log("Avant : " + age.monAge);
// alert("Vous avez " + age.changerAge() + " ans. ");
// console.log("Après : " + age.monAge);

// # Exo 4
// - Créer deux personnages du nom de François et Sergio
// - Créer deux variables panier_francois et panier_sergio contenant tous deux des ingrédients du super marché, par exemple huile,tomate,pain etc..
// - Rajouter à François la method derober, faites en sorte que François dérobe 2 aliments à Sergio 
// - Ecrivez tout le code ici dessous.

let personnage1 = {
    nom: "François",
    derober() {
        panier_francois.magasin.push(panier_sergio.magasin[0], panier_sergio.magasin[1]);
        panier_sergio.magasin.splice(0, 2);
        return panier_francois.magasin;
    }
}

let personnage2 = {
    nom: "Sergio",
}

let panier_francois = {
    magasin: ["paprika", "concombre", "patate"],
}

let panier_sergio = {
    magasin: ["huile", "tomate", "pain"],
}

console.log(personnage1.derober());
console.log(panier_sergio.magasin);

// # Exo 5
// - Créer un objet "vieille_dame" avec une propriété "age" assez élevée une propriété "nom" contenant un "prenom" et un "nom de famille", une dernière propriété "moral" avec comme valeur "mal"
// - une propriété "objet" par exemple une canne 
// - une method se_plaindre qui selon son moral fait une alert différente, si son moral = mal alors elle dira "Vous me dérangez", si son moral = bien alors elle dira bonjour monsieur + le nom du vieil_homme



// # Exo 5 B
// - Rajouter une method "se_promener" à la vieille_dame, qui change la valeur de l'objet à perdu 


// # Exo 6
// - Rajouter a vieil_homme une propriété "age","prenom" et une method saluer qui dira bonjour "le prenom de la vieille_dame + son nom de famille" et juste après lancera la fonction se_plaindre de la vieille dame 
// - Rajoutez égalment une method adoucir, cette method changera le moral de la vieille_dame en "bien" -->