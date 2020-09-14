// # Exercice 1
// - Créer un programme qui va permettre de filter le type d'un mot. Le programme va prendre un paramètre qui sera le mot à tester.
// C - à - d que si le mot indruit est un string, il renvoit "Le type du mot introduit est un string", ect. 

let filtrerTypeMot = (mot) => {
    if (typeof mot == "string") {
        console.log("Le type du mot introduit est un string ! ");
    } else if (typeof mot == "number") {
        console.log("Le type du mot introduit est un number ! ");
    } else if (typeof mot == "boolean") {
        console.log("Le type du mot introduit est un booléen ! ");
    } else {
        console.log("Le type du mot introduit est undefined ! ");
    }
}
console.log("Exo 1 : ");
let mot = true;
filtrerTypeMot(mot);


// # Exercice 2
// - Créer un programme qui va convertir la premiere lettre d'un mot en majuscule et qui va afficher la longueur de ce mot via une console.log

let convertir = (motConvertir) => {
    motConvertir = motConvertir.charAt(0).toUpperCase() + motConvertir.slice(1);
    console.log(motConvertir);
    console.log(motConvertir.length);
}
console.log("Exo 2 : ");
let motConvertir = "karis";
convertir(motConvertir);

// # Exercice 3 
// - Créer un programme qui va nous afficher la date d'aujourd'hui avec le format jj/dd/aaaa

let afficherDate = () => {
    const date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    console.log(dd + "/" + mm + "/" + yyyy);
}
console.log("Exo 3 : ");
afficherDate();

// # Exercice 4
// - Créer un programme qui va prendre un paramètre. Le programme consiste a attribué un nombre de classe et de les remplir. 
// - Après avoir reçu l'information, vous crée ces classes (array) via une boucle. (Ex: si le paramètre est de 7, vous créer 7 classe.)
// - Placer des étudiants dans une seul classe. Une classe peut prendre 20 élèves. (Attention, à cause du covid, ils peuvent en prendre que la moitié

let createClass = (remplir) => {
    let remplirClasse = new Array(remplir);
    for (let i = 0; i < 20 / 2; i++) {
        remplirClasse[i] = new Array("Karis");
    }
    console.log(remplirClasse);
}
console.log("Exo 4 : ");
let nombreRemplir = prompt("Combien de classe voulez-vous créer ? ");
createClass(nombreRemplir);

// # Exercice 5
// - Créer un programme qui prend deux paramètres. 
// Un nom et un résultat. Si le résultat est supérieur à 90, vous placé le personnage dans un array nommé "Réussite". 
// Si le résultat est égal ou supérieur à 50, vous les placer dans un array nommé "Remediation". 
// Sinon vous le placer dans un tableau nommé "Echec". 
// Pour les étudiants qui font partie du groupe "Remediation", vous faites en sortes qu'ils viennent 7 jours pour une remediation (boucle) 
// et le prouver avec une console.log "personnage s'est présenter à l'école".

let personnage = (nom, resultat) => {
    if (resultat > 90) {
        reussite.push(nom);
    } else if (resultat >= 50) {
        remediation.push(nom);
        for (let i = 1; i <= 7; i++) {
            console.log("Jour " + i + " " + nom + " s'est présenter à l'école. ");
        }
    } else {
        echec.push(nom);
    }
    console.log(reussite);
    console.log(remediation);
    console.log(echec);
}
console.log("Exo 5 : ");
let reussite = [];
let remediation = [];
let echec = [];
personnage("Papadopoulos", 65);

// # Exercice 6 
// - Créer un programme qui va prendre les présence. Il prendra deux paramètres, nom et la présence.
// - Si l'étudiant est présent, vous le placé dans une classe. 
// - Sinon vous le placé dans un array "Absent". 
// - Retournez le résultat via une console.log, affiché chaque personne absente avec une phrase du style "L'eleve x a été absent"

let verifPresence = (nom, presence) => {
    if (presence == "non") {
        classe.push(nom);
    } else {
        absent.push(nom);
        console.log("L'eleve " + nom + " a été absent ! ");
    }
    console.log(classe);
    console.log(absent);
}
console.log("Exo 6 : ");
let classe = [];
let absent = [];
verifPresence("Papadopoulos", "oui");

// # Exercice 7
// - Créer un programme qui une fois déclenché, va nous renvoyer une alert de warning "Attention un virus a été détecté" tout les deux secondes.

let timer = () => {
    setTimeout(timer, 2000);
    alert("Attention un virus a été détecté ! ");
}
console.log("Exo 7 : ");
// timer();

// # Exercice 8
// - Créer une fonction qui doit donner ce résultat "BoNjOuR à ToUs". C-à-d mettre une lettre en majuscule une fois sur deux

let unMotSurDeux = (monMot) => {
    let str = "";
    for (let i = 0; i < monMot.length; i++) {
        if (i % 2 == 0) {
            str += monMot.charAt(i).toUpperCase();
        } else {
            str += monMot.charAt(i).toLowerCase();
        }
    }
    console.log(str);
}
console.log("Exo 8 : ");
let monMot = "Bonjour à tous";
unMotSurDeux(monMot);

// # Exercice 9
// - Créer un programme qui calcule le prix du produit avec TVA (la TVA vaut 1.196). 
// - Le programme prendra deux paramètres, le nom du produit et le prix du produit HTV.
// - Retourner le résultat via un console.log "le produit x vaut x € avec TVA"

let prixTVa = (nom, prix) => {
    const tva = 1.196;
    let result = prix * tva;
    console.log("Le produit " + nom + " coûte " + result + " € TVA comprise. ");
}
console.log("Exo 9 : ");
prixTVa("Ordinateur", 130);

// # Exercice 10
// - Créer un programme qui va trier des produits et leurs produits par rapport a leur marque. 
// - Vous travaillez pour 4 grosses entreprises: Nivea, Oreal, Dove, Garnier.
// - Le programme prendra deux paramètres. Le nom de l'entreprise et son produit (Ex: nivea, crème visage).
// - e programme va trier et stocker le produit dans des tableaux par rapport a sa marque. 
// (Ex: si vous lancez la méthode avec la marque granier, vous stocker le produit liée dans un array produitGranier.)
// - Faite en sorte d'afficher chaque nom de produit via une console.log en mettant la 1er lettre en majuscule

let trierMarque = (nom, produit) => {
    if (nom == "nivea") {
        produitNivea.push(produit);
        produitNivea[produitNivea.indexOf(produit)] = produitNivea[0].charAt(0).toUpperCase() + produitNivea[0].slice(1).toLowerCase();
    } else if (nom == "oreal") {
        produitOreal.push(produit);
        produitOreal[produitOreal.indexOf(produit)] = produitOreal[0].charAt(0).toUpperCase() + produitOreal[0].slice(1).toLowerCase();
    } else if (nom == "dove") {
        produitDove.push(produit);
        produitDove[produitDove.indexOf(produit)] = produitDove[0].charAt(0).toUpperCase() + produitDove[0].slice(1).toLowerCase();
    } else {
        produitGarnier.push(produit);
        produitGarnier[produitGarnier.indexOf(produit)] = produitGarnier[0].charAt(0).toUpperCase() + produitGarnier[0].slice(1).toLowerCase();
    }
    console.log(produitNivea);
    console.log(produitOreal);
    console.log(produitDove);
    console.log(produitGarnier);
}
console.log("Exo 10 : ");
let produitNivea = [];
let produitOreal = [];
let produitDove = [];
let produitGarnier = [];
trierMarque("nivea", "crème visage");