// # Exo 1
// - Créer une class objet "Personnage" avec 4 propriété : nom, prenom, age, argent
// - Créer trois instances de "Personnage"
// ajoute lui une méthode qui va se présenter lui même et présenter les deux  autre personne

class Personnage {
    constructor(nom, prenom, age, argent) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.argent = argent;
    }

    get presentation() {
        return this.nom + " " + this.prenom + " " + this.age + " " + this.argent;
    }
}
let personnage1 = new Personnage("Papadopoulos", "Karis", 23, 300);
let personnage2 = new Personnage("Monge Lopez", "Alexis", 19, 1500);
let personnage3 = new Personnage("Papadopoulos", "Alexandre", 13, 1000);
console.log(personnage1.presentation);
console.log(personnage2.presentation);
console.log(personnage3.presentation);

// # Exo 2
// - Créer une class objet "Molengeek" avec 3 propriété : nom, prenom, grade.
// - Créer 3 instances (trois personnes de l'équipe)
// - Créer une méthode qui permet à une personne de grade "admin" de changer les rôles des autres personnes.
// sinon tu lui répond via une console.log "vous n'avez pas les droits" en précisant son 

class Molengeek {
    constructor(nom, prenom, grade) {
        this.nom = nom;
        this.prenom = prenom;
        this.grade = grade;
    }

    get role() {
        if (this.grade == "admin") {
            return "Vous avez les droits admins : " + this.nom + " " + this.prenom;
        } else {
            return "Vous n'avez pas les droits : " + this.nom + " " + this.prenom;
        }
    }
}
let equipe1 = new Molengeek("Papadopoulos", "Karis", "admin");
let equipe2 = new Molengeek("Kbib", "Abderrahim ", "admin");
let equipe3 = new Molengeek("Hunin", "Fanny ", "coachino");
console.log(equipe1.role);
console.log(equipe2.role);
console.log(equipe3.role);

// # Exo 3
// - Créer une class objet "Enfant" qui prend comme propriété : prenom, argent, humeur(neutre), sac(array vide)
// - Créer deux instances de "Enfant" (deux enfants).
// - Créer une autre classe "Magasin" qui prend comme propriété : produit, prix.
// - Créer trois instances de magasin (trois produits)
// - Les enfants auront une méthode qui permet de payer le produit et la stocker dans leurs sacs. 
// - Créer une instance maison qui prend une méthode. La méthode va devoir rendre l'humeur des enfants soit positif, soit négatif via un random.
// - Créer une méthode dans l'objet "Enfant". La méthode se base sur l'humeur de l'enfant. Si l'humeur de l'enfant est positif, 
// la méthode renverra via une console.log " enfant1 est hereux, il cuisine pour toute la famille. 
// - Sinon il renverra via une console.log "enfant1 n'est pas en forme, il ne cuisinera pas"
// - Le récit prendra cette forme : 
//     - L'enfant1 a acheter produitA,
//     - L'enfant2 a acheter produitB,
//     - L'enfant1 a est d'humeur positif ou negatif
//     - L'enfant2 a est d'humeur positif ou negatif
//     - L'enfant1 veut bien cuisiner ou non
//     - L'enfant2 veut bien cuisiner ou non

class Enfant {
    constructor(prenom, argent, humeur, sac) {
        this.prenom = prenom;
        this.argent = argent;
        this.humeur = humeur;
        this.sac = sac;
    }

    get result() {
        this.changerHumeur();
        return this.randomHumeur();
    }

    payerEtSotcker() {

    }

    randomHumeur() {
        let random = Math.round(Math.random() * 1);
        return random;
    }

    changerHumeur() {
        if (this.humeur == "positif") {
            return this.nom + " est heureux, il cuisine pour toute la famille. ";
        } else {
            return this.nom + " n'est pas en forme, il ne cuisinera pas";
        }
    }
}
let enfant1 = new Enfant("Alexandre", 1000, "positif", []);
let enfant2 = new Enfant("Alexis", 400, "neutre", []);

class Magasin {
    constructor(produit, prix) {
        this.produit = produit;
        this.prix = prix;
    }
}
let produit1 = new Magasin("Ordinateur", 300);
let produit2 = new Magasin("Clavier", 50);
let produit3 = new Magasin("Souris", 30);

console.log(enfant1.result);
console.log(enfant1.result);

// # Exo 4
// - Créer une class "LeeGofGeek" avec 4 propriété : le nom du personnage, son pouvoir, dégats qu'il produit, santé et bonus
// - Créer 2 instances (2personnages). Chaque personnage à ses propriété bien défini. C-à-d que son pouvoir a un nom spécifique, 
// les dégats sont précis(max 15points). Leurs santé est a 100 points par défaut.

// - Créer une méthode dans l'objet nommé attaqueBasic. Une fois appelé, il consite a lancé des dégats par défaut sur l'autre personnage. 
// - Créer une méthode attaqueSpecial qui consiste à mettre des dégats +- important sur l'autre personnage. (-25point). Par contre cette attaque enleve egalement 
// -15point a son utilisateur.
// - Créer une méthode auto-save, qui une fois lancé permet de rajouter 35 points de vie à son utilisateur mais il pert l'acces à sa méthode "joker"
// - Créer une méthode joker. Cette méthode est trés particuliere, elle sera utilisable que si le point de vie de l'utilisateur est a < 15 point 
// et vous perdez l'utilisation de votre méthode autoSave.
// - Donc c'est soit la méthode "joker" soit la méthode "autoSave"
// - La méthode "joker", consiste d'appeler un bonus aléatoire prédéfinis dans un array "bonus". Dans ces bonus il y'a "VieFull" qui permet de revenir à 100 points de vie. 
// il y'a une attaque nommé "dead" qui permet d'eliminer l'ennemie du 1er coup. Il y'a un bonus nommé "null" qui donne aucun pouvoir.

// - Une fois que la vie d'un des personnages tombe à zero, un alert s'affiche pour dire que la partie est terminé.