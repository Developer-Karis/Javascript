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

    presentation() {
        return this.nom + " " + this.prenom + " " + this.age + " " + this.argent;
    }
}
let personnage1 = new Personnage("Papadopoulos", "Karis", 23, 300);
let personnage2 = new Personnage("Monge Lopez", "Alexis", 19, 1500);
let personnage3 = new Personnage("Papadopoulos", "Alexandre", 13, 1000);
console.log(personnage1.presentation());
console.log(personnage2.presentation());
console.log(personnage3.presentation());

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

    role() {
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
console.log(equipe1.role());
console.log(equipe2.role());
console.log(equipe3.role());

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
        this.sac = [sac];
    }

    payerEtStocker() {
        this.argent -= this.sac[0].prix;
        if (this.argent < 0) {
            return `Vous n'avez pas assez d'argent ! `;
        } else {
            return `${this.prenom} a acheter un(e) ${this.sac[0].produit}.`;
        }
    }

    randomHumeur() {
        let humeur = ["positif", "negatif"];
        let random = Math.floor(Math.random() * humeur.length);
        if (random == 0) {
            this.humeur = "positif";
            return `${this.prenom} est d'humeur ${this.humeur}. `;
        } else {
            this.humeur = "negatif";
            return `${this.prenom} est d'humeur ${this.humeur}. `;
        }
    }

    changerHumeur() {
        if (this.humeur == "positif") {
            return this.prenom + " est heureux, il cuisine pour toute la famille. ";
        } else {
            return this.prenom + " n'est pas en forme, il ne cuisinera pas. ";
        }
    }
}

class Magasin {
    constructor(produit, prix) {
        this.produit = produit;
        this.prix = prix;
    }
}

let produit1 = new Magasin("Ordinateur", 300);
let produit2 = new Magasin("Clavier", 50);
let produit3 = new Magasin("Souris", 30);

let enfant1 = new Enfant("Alexandre", 500, "neutre", produit1);
let enfant2 = new Enfant("Alexis", 400, "neutre", produit2);

console.log(enfant1.payerEtStocker());
console.log(enfant2.payerEtStocker());

console.log(enfant1.randomHumeur());
console.log(enfant2.randomHumeur());

console.log(enfant1.changerHumeur());
console.log(enfant2.changerHumeur());


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

class LeeGofGeek {
    constructor(nom, pouvoir, degats, sante, bonus) {
        this.nom = nom;
        this.pouvoir = pouvoir;
        this.degats = degats;
        this.sante = sante;
        this.bonus = bonus;
    }

    attaqueBasic(perso) {
        perso.sante -= this.degats;
        return "Santé : " + perso.sante;
    }

    attaqueSpecial(perso) {
        perso.sante -= 25;
        this.sante -= 15;
        return "Santé : " + perso.sante;
    }

    autoSave(perso) {
        perso.bonus = "null";
        perso.sante += 35;
        return "Santé : " + perso.sante;
    }

    joker(perso) {
        if (perso.sante < 15) {
            if (perso.bonus == "VieFull") {
                perso.sante == 100;
            } else if (useBonus.bonus == "dead") {
                perso.sante -= 100;
            }
        }
        return "Santé : " + perso.sante;
    }
}

let personnageGeek1 = new LeeGofGeek("Nicolas", "eclair", 15, 100, "dead");
let personnageGeek2 = new LeeGofGeek("Alexandre", "voler", 15, 100, "VieFull");

console.log(personnageGeek1.attaqueBasic(personnageGeek2));
console.log(personnageGeek1.attaqueSpecial(personnageGeek2));
console.log(personnageGeek1.autoSave(personnageGeek2));
console.log(personnageGeek1.joker(personnageGeek2));
console.log(personnageGeek1.attaqueSpecial(personnageGeek2));
console.log(personnageGeek1.attaqueSpecial(personnageGeek2));
console.log(personnageGeek1.attaqueBasic(personnageGeek2));
console.log(personnageGeek1.attaqueBasic(personnageGeek2));
console.log(personnageGeek1.attaqueBasic(personnageGeek2));

if (personnageGeek1.sante <= 0 || personnageGeek2.sante <= 0) {
    alert("La partie est terminé ! ");
}

console.log(personnageGeek1);
console.log(personnageGeek2);