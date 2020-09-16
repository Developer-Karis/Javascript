// # Exo 1
// - Créé un objet avec plusieurs propriétés (nom, prenom, age, mail) dont un est un objet avec ses propres propriétés

let obj = {
    nom: "Karis",
    prenom: "Papadopoulos",
    age: 23,
    mail: { monMail: "papadopouloskaris@gmail.com" },
}
console.log("Exo 1 : ");
console.log(obj);

// # Exo 2 
// - Crée un objet avec un nom, un age et une méthode
// - La méthode de votre objet lance un prompt permetant de changer son age
// - Une alert renvoi l'age de votre objet avec la phrase "Vous avez x ans"

let obj2 = {
    nom: "Alexis",
    age: 19,
    lancePrompt() {
        let changeAge = parseInt(prompt("Entrez votre âge : "));
        this.age = changeAge;
        return "Vous avez " + this.age + " ans. ";
    }
}
console.log("Exo 2 : ");
console.log(obj2.lancePrompt());

// # Exo 3
// - Créé un Personnage avec plusieurs propriétés ( nom, prenom, argent)
// - Créé un objet du nom de 'Article'. Il prendra plusieurs propriétés (nomProduit, prix, stock)
// - Créé une méthode propre au personnage qui va permettre d'acheter l'article. (Attention à l'argent et le stock)

let obj3 = {
    nom: "Alexis",
    prenom: "Monge Lopez",
    argent: 300,
    article: { nomProduit: "Ordinateur", prix: 200, stock: "oui" },
    acheter() {
        return this.nom + " " + this.prenom + " a " + this.argent
            + " euros et achète un " + this.article.nomProduit + " à " + this.article.prix + " €. "
            + "Le produit est en stock : " + this.article.stock + ". "
            + "Il lui reste " + (this.argent - this.article.prix) + " € sur son compte. ";
    }
}
console.log("Exo 3 : ");
console.log(obj3.acheter());

// # Exo 4
// - Créé un objet du nom de 'Article'. Il prendra plusieurs propriétés. (nomProduit, prixHT)
// - Créé une méthode propre à l'objet qui va calculer le prix du produit avec TVA (la TVA vaut 1.196)

let article = {
    nomProduit: "Clavier",
    prixHT: 200,
    prixTVAC() {
        const TVA = 1.196;
        return "Voici le prix TVA comprise : " + (this.prixHT * TVA) + " € ";
    }
}
console.log("Exo 4 : ");
console.log(article.prixTVAC());

// # Exo 5
// - Créé un objet VIDE. Ajoute des propriétés (produit, prix, stock, réputation) à ton objet.
// - Supprime 'réputation' de l'objet et affiche l'objet via une console.log

let obj5 = {};
obj5.produit = "Clavier";
obj5.prix = 100;
obj5.stock = "oui";
obj5.reputation = "bien";

console.log("Exo 5 : ");
console.log(obj5);
delete obj5.reputation;
console.log(obj5);

// # Exo 6
// - Créé un objet pour une marque de voiture. Déclare plusieurs propriétés (marque, model, type, color, prix)
// - Créé une méthode qui va retourner une phrase du style : "Ma audi a6 est de type break. Elle est grise et vaut 20.000€"

let marqueVoiture = {
    marque: "BMW",
    model: "Série 1",
    type: "break",
    color: "blue",
    prix: 15000,
    message() {
        return "Ma " + this.marque + " " + this.model + " est de type "
            + this.type + ". Elle est " + this.color + " et vaut " + this.prix + " €. ";
    }
}
console.log("Exo 6 : ");
console.log(marqueVoiture.message());

// # Exo 7 
// - Crée un objet qui représente MolenGeek. Il prendra plusieurs propriétés -> 
// nombre d'employés = nombre au choix, 
// patron:{nom, prenom}, 
// newEmploye = [],
// - Créer une méthode "addEmploye" qui permet d'ajouter des employes dans le array newEmploye et une méthode "DelEmploye" de supprimer des employes. 
// - Créer une méthode "Felicitation" qui va sélectionner au hasard(random) un des nouveaux employés et va se faire féliciter via une console.log par le patron. 
// (Ex: nom du patron félicite l'employé)
// Pour finir, via une console.log, afficher moi le nombre d'employés!

let molengeek = {
    nombreEmployes: 10,
    patron: { nom: "Papadopoulos", prenom: "Karis" },
    newEmploye: [],
    addEmploye() {
        let ajoutEmploye;
        for (let i = 0; i < 5; i++) {
            ajoutEmploye = prompt("Ajouter un employé : ");
            this.newEmploye.push(ajoutEmploye);
        }
        return this.newEmploye;
    },
    delEmploye() {
        let supprimer = prompt("Supprimer un employé : ");
        this.newEmploye.splice(this.newEmploye.indexOf(supprimer), 1);
        return this.newEmploye;
    },
    felicitation() {
        let random = Math.round(Math.random() * this.newEmploye.length - 1);
        return this.patron.nom + " félicite " + this.newEmploye[random];
    }
}
console.log("Exo 7 : ");
console.log(molengeek.addEmploye());
console.log(molengeek.delEmploye());
console.log(molengeek.felicitation());
console.log("Nombre d'employés : " + molengeek.nombreEmployes);

// # Exo 8
// - Crée un objet avec un méthode "calcule". Cette méthode appliquera les opérations simple (Plus, addition, soustraction, division).
// - La méthode prendra 3 paramètres. (Nb1, opérateurs, nb2)
// - Assigne à l'objet une propriété "nom" avec comme valeur "mathématique"

let calcule = {
    nom: 'mathématique',
    operateurs(nb1, operateurs, nb2) {
        let result;
        if (operateurs == "+") {
            result = nb1 + nb2;
        } else if (operateurs == "-") {
            result = nb1 - nb2;
        } else if (operateurs == "/") {
            result = nb1 / nb2;
        } else {
            result = nb1 * nb2;
        }
        return "Le résultat " + this.nom + " est : " + result;
    }
}
console.log("Exo 8 : ");
console.log(calcule.operateurs(7, "+", 2));

// # Exo 9
// - Création d'un récit (Faite en sorte que les méthodes et les actions ressemblent à une histoire via des consoles.log) : 
// - Crée un objet du nom de "Bruxelles". Il prendra comme propriété : nombre de communes(19), popularité(normal), communePreferer(bruxelles). 
// Il prendra également un array vide du nom de "projet" et un objet nommé "ministre" avec comme propriété {nom, prenom et argent}.
// - Vous êtes dans le personnage du ministre et vous voulez ramener une fraicheur dans la ville bruxelles.
// - L'objet contient plusieurs méthodes. Une méthode qui va permettre de créer une nouvelle commune. Celle-ci s'ajoutera dans l'array vide "futuriste". 
// faite attention aux frais du minsitre et à la proprieté 'nombre de commune'. 
// - Vous répétez l'action 3 fois. Au bout de la 3ème, la popularité de Bruxelles change en "ville luxueuse"
// - Une fois réalisée, vous créez une méthode du nom de "random". Elle va vous permettre de choisir une commune aléatoire entre les trois nouvelles communes. 
// Vous assignez cette nouvelle commune autant que la nouvelle communePreferer

// - Affichez via une console.log la nouvelle ville de Bruxelles.

let bruxelles = {
    nombreDeCommunes: 19,
    popularite: "normal",
    communePreferer: "bruxelles",
    projet: [],
    ministre: { nom: " ", prenom: " ", argent: " " },
    futuriste: [],
    creerCommune() {
        for (let i = 0; i < 3; i++) {
            let nouvelleCommune = prompt("Ajouter une nouvelle commune : ");
            this.futuriste.push(nouvelleCommune);
            if (i == 2) {
                this.popularite = "ville lixueuse";
            }
        }
        return this.futuriste;
    },
    randomCommune() {
        let random = Math.round(Math.random() * this.futuriste.length);
        return this.communePreferer = this.futuriste[random];
    }
}
console.log("Exo 9 : ");
console.log(bruxelles.creerCommune());
console.log("Commune préférer : " + bruxelles.randomCommune());
console.log(bruxelles);

// # Exo 10 Bonus (objet, condition, boucle, function)
// - Créé un objet Personnage avec des propriétés(idendite:{nom, prenom}, argent, lieu, humeur)
// une méthode propre à l'objet qui va changer son humeur aléatoirement.(Soit positif, soit négatif)
// - Créer une fonction qui va permettre au personnage de changer son lieu. Par défaut il est chez lui, pour la fonction il se déplacera à son lieu de tavail.
// - Créer une autre fonction qui va lui permettre de gagner de l'argent. Il gagnera 10€ pour 8 heure si son humeur est négatif. 
// Par contre il gagnera 15€ pour 8heures si son humeur est positif. (Une itération  vaut 1 heure).
// - (Bonus dans le bonnus :faite en sorte qu'une tération se fasse tous les 2sec)
// - Pour la fonction qui lui permet de gagner de l'argent, si son humeur est positif, tous les 2 heures, 
// il dira via une console.log : "J'aime mon travail", mais par contre si son humeur est négatif, il dira "je préfére mon lit"

let personnage = {
    idendite: { nom: " ", prenom: " " },
    argent: 0,
    lieu: "chez moi",
    humeur: "negatif",
}

function changerLieu() {
    personnage.lieu = "Travail";
    return "Lieu : " + personnage.lieu;
}

function gagnerArgent() {
    let message;
    for (let i = 0; i < 8; i++) {
        if (personnage.humeur == "negatif") {
            personnage.argent += 10;
            console.log("Argent : " + personnage.argent + " € ");
        } else {
            personnage.argent += 15;
            console.log("Argent : " + personnage.argent + " € ");
        }
    }
    if (personnage.argent == 120) {
        message = "J'aime mon travail ! ";
    } else {
        message = "Je préfère mon lit ! ";
    }
    return message;
}
console.log("Exo 10 : ");
console.log(changerLieu());
console.log(gagnerArgent());

