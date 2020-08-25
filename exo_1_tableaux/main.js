// 1. Créer un tableau, avec les prénoms des students, pour chaque personne affichez Bonjour cher "son prénom" dans une alert

// let students = ["Maxime", "Karis", "Cactus", "Kadri"];

// students.forEach(element => {
//     alert("Bonjour cher " + element);
// });

// 2. Créer deux tableaux, l'un avec les prénoms des students de votre table et l'un vide, supprimer les students du premier tableau pour les mettres dans le second

// let students = ["Maxime", "Karis", "Cactus", "Kadri"];
// let tab = [];

// students.forEach(element => {
//     // 1. envoyer l'élement dans le tableau transfert
//     tab.push(element);
//     // 2. retrouver l'index de l'element en cours dans le tableau students

//     // 3. supprimer l'index dont on a trouvé l'index dans la ligne précédente
// });
// students.splice(0);
// console.log(students);
// console.log(tab);

// let students = ["Maxime", "Karis", "Cactus", "Kadri"];
// let tab = [];

// for (let i = 0; i < students.length; i++) {
//     tab.push(students[i]);
//     students.splice(0, 1);
// }
// console.log(students);
// console.log(tab);

// 3. Créer un troiseme tableau dans le quel vous copiez le contenu du second tableau et chaque students a sa premiere lettre de prénom écrit en majuscule

// let tab1 = ["karis", "andré", "maxime"];
// let tab2 = [];

// tab1.forEach(element => {
//     tab2.push(element.charAt(0).toUpperCase() + element.slice(1));
// });
// console.log(tab2);

// 4. Créer un tableau avec 5 prénoms, pour chaque prénom plus petit que 6 caractères rajoutez y : "LITTLE" devant chaque prénom

let tab1 = ["karis", "andré", "maxime", "nicolas", "martin"];

tab1.forEach(element => {
    if (element.length < 6) {
        tab1[tab1.indexOf(element)] = ("LITTLE " + tab1[tab1.indexOf(element)]);
    }
});
console.log(tab1);

// 5. Créer ce tableau aRanger = ['bonjour',6,'nico','molengeek',[],18,777,'conding',{},'school','coach','tartine',103,true,51]
// -Créez trois autres tableau "lesNombres", "lesString", "leReste"
// -Pour chaque élément du tableau aRanger affichez son type dans un console log
// -Dans chaque tableau mettez respectivement l'élément dans son bon compartiment, les strings dans "lesString", les integer dans "lesNombres" et le reste dans "leReste", le tableau aRanger doit finir vide
// -Affichez propremen dans une alerte le contenu de chaque tableau