// # Exercice 1
// - Demande l'âge de l'utilisateur via un prompt.
// Si l'utilisateur indique 18, tu lui réponds via une console.log "tu es majeur". 
// S'il donne 25, tu lui réponds, "Un quart de siècle ça se  fête". S'il donne 50, tu lui réponds "1/2 siècle c'est quelque chose". 

let age = parseInt(prompt("Entrez votre âge : "));
console.log("Exo 1 : ");

switch (age) {
    case 18:
        console.log("Tu es majeur ! ");
        break;
    case 25:
        console.log("Un quart de siècle ça se fête. ");
        break;
    case 50:
        console.log("1/2 siècle c'est quelque chose. ");
        break;
    default:
        console.log("La valeur est incorrecte ! ");
        break;
}

// # Exercice 2 pas adapté pour un switch. Mieux pour une fonction
// - Demande à l'utilisateu d'indiquer un mot via un prompt. 
// Si le mot est de type string tu lui répond via une console.log "La valeur indiquez est un string".
// Si le mot est de type nombre, tu lui répond "La valeur indiquez est un nombre"

let mot = Number(prompt("Entrez un mot : "));
console.log("Exo 2 : ");

let typePrompt = () => {
    if (typeof mot == "string") {
        console.log("La valeur indiquez est un string. ");
    } else if (typeof mot == "number") {
        console.log("La valeur indiquez est un nombre. ");
    }
}
typePrompt();

// # Exercice 3
// - Stock la date d'aujourd'hui dans une variable const. 
// (Attention utilise la méthode date). Une fois la date stockée, fais un swtich qui va nous renvoyez le jour de la semaine que nous sommes

console.log("Exo 3 : ");
const date = new Date();

var options = { weekday: 'long' }
const jourSemaine = new Intl.DateTimeFormat('en-US', options).format(date);
console.log(jourSemaine);

switch (jourSemaine) {
    case "Monday":
        console.log("Nous sommes Lundi ! ");
        break;
    case "Tuesday":
        console.log("Nous sommes Mardi ! ");
        break;
    case "Wednesday":
        console.log("Nous sommes Mercredi ! ");
        break;
    case "Thursday":
        console.log("Nous sommes Jeudi ! ");
        break;
    case "Friday":
        console.log("Nous sommes Vendredi ! ");
        break;
    case "Saturday":
        console.log("Nous sommes Samedi ! ");
        break;
    case "Sunday":
        console.log("Nous sommes Dimanche ! ");
        break;
    default:
        break;
}

// # Exercice 4 
// - Stock un mdp dans une variable via un prompt. Via un swtich vérifie si le mdp est le bon. Si oui tu renvoies "Connecté", sinon "Erreur"

let mdp = prompt("Entrez votre mot de passe : ");

switch (mdp) {
    case "karis":
        console.log("Connecté ! ");
        break;
    default:
        console.log("Erreur ! ");
        break;
}

// # Exercice 5 
// - Stock une variable qui selon toi défini TON niveau en coding. (Une note sur 100). Via un switch, vérifie sur le nombre est égale ou supérieur à 90. 
// Si oui tu lui répond "Tu as un niveau de coach".
// Si le le nombre est = ou > à 70, tu lui répond "Tu peux mieux faire !". 
// Si le nombre est = ou > 50, tu lui répond "Attention, faut plus travailler ! ". 
// Sinon tu lui répond "Pas bon dutout, à travailler d'avantage ! "

let niveau = 95;

switch (true) {
    case (niveau == 90 || niveau > 90):
        console.log("Tu as un niveau de coach ! ");
        break;
    case (niveau == 70 || niveau > 70):
        console.log("Tu peux mieux faire ! ");
        break;
    case (niveau == 50 || niveau > 50):
        console.log("Attention, faut plus travailler ! ");
        break;
    default:
        console.log("Pas bon dutout, à travailler d'avantage ! ");
        break;
}

// # Exercice 6
// - Créer un programme qui va demander via un prompt le résultat d'un test scolaire. (La notation est celui inspiré du systeme Americain. Ex: A,B,C,..)
// Par rapport a la notation, vous repondez via une console.log une appréciation du résultat.
// Ex: Si l'étudiant a eu un B, tu lui réponds via une console.log "Bravo, belle côte"

let resultat = prompt("Résultat du test : ").toUpperCase();

switch (resultat) {
    case "A":
        console.log("Excellent Travail ! ");
        break;
    case "B":
        console.log("Bravo, belle côte ! ");
        break;
    case "C":
        console.log("Bien ! ");
        break;
    default:
        console.log("Peut mieux faire ! ");
        break;
}