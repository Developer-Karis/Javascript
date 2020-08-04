// 1. Les Tableaux
let myArray = ["Cactus", "Kadri", "André", "Karis"];
console.log(myArray);

console.log(myArray[3]);

console.log(myArray.length);

// 2. Les Tableaux : Rajoutez du contenu
let myName = ["Karis"];
console.log(myName);

myName.push("Alexis");
console.log(myName);

// 3. Exercice : C'est le bordel
console.log("---------- Exo 3 Bordell ----------");


let classeCoding13 = [];

classeCoding13.push("André");
console.log(classeCoding13[classeCoding13.indexOf("André")]
    + " arrive en classe");

console.log(classeCoding13);

classeCoding13.push("Valentin");
console.log(classeCoding13[classeCoding13.indexOf("Valentin")]
    + " allume son PC et commence à mettre à jour ses notes");

console.log(classeCoding13);

classeCoding13.push("Abdel", "Cactus");
console.log(classeCoding13[classeCoding13.indexOf("Abdel")]
    + " et " + classeCoding13[classeCoding13.indexOf("Cactus")]
    + " rejoignent la classe");

console.log(classeCoding13);

classeCoding13.push("Fanny", "Kawtar");
console.log(classeCoding13[classeCoding13.indexOf("Fanny")]
    + " et " + classeCoding13[classeCoding13.indexOf("Kawtar")]
    + " voyent Dalanda passer devant la porte, et décident de la rejoindre");

console.log(classeCoding13);

classeCoding13.push("Pierre", "Imad");
console.log(classeCoding13[classeCoding13.indexOf("Pierre")]
    + " et " + classeCoding13[classeCoding13.indexOf("Imad")]
    + " rentrent en classe en faisant un maximum de bruit");

console.log(classeCoding13);

classeCoding13.push("Karis");
console.log(classeCoding13[classeCoding13.indexOf("Karis")]
    + " descend prendre sa tasse de café");

console.log(classeCoding13);

classeCoding13.push("Nico maître des tartines incontesté");
console.log(classeCoding13[classeCoding13.indexOf("Nico maître des tartines incontesté")]
    + " rentre en classe et salue tout le monde avec un bon format de tartine céréals complet");

console.log(classeCoding13);

classeCoding13.push("Oussama");
console.log(classeCoding13[classeCoding13.indexOf("Oussama")]
    + " rentre tranquil et observe tout le monde");

console.log(classeCoding13);

classeCoding13.push("Maxime", "Jordano");
console.log(classeCoding13[classeCoding13.indexOf("Maxime")]
    + " et " + classeCoding13[classeCoding13.indexOf("Jordano")]
    + " rentrent et observent Cactus qui à l'air d'être tranquilleeee");

console.log(classeCoding13);

classeCoding13.push("Martin");
console.log(classeCoding13[classeCoding13.indexOf("Martin")]
    + " rentre en classe avec sa tasse de café");

console.log(classeCoding13);

classeCoding13.push("Sergen", "Kadri");
console.log(classeCoding13[classeCoding13.indexOf("Sergen")]
    + " et " + classeCoding13[classeCoding13.indexOf("Kadri")]
    + " rentrent en classe tous contents de n'être que 5 minutes en retard, "
    + classeCoding13[classeCoding13.indexOf("Nico maître des tartines incontesté")]
    + "Nico leur dit qu'ils sont en retard et puis ils sortent");

classeCoding13.splice(classeCoding13.indexOf("Nico maître des tartines incontesté"), 1);

console.log(classeCoding13);

classeCoding13.push("Zidane");
console.log(classeCoding13[classeCoding13.indexOf("Zidane")]
    + " rentre avec sa petite tasse de café et son mac, tout content et souriant");

console.log(classeCoding13);

classeCoding13.push("Yasmina");
console.log(classeCoding13[classeCoding13.indexOf("Yasmina")]
    + " rentre en faisant le minimum de bruit possible mais toute la classe la regarde.");

console.log(classeCoding13);

// Bonus
console.log("------ Bonus ------");
let tabBonus = ["a", "b", "c"];
tabBonus.forEach(element => {
    console.log(element);
});