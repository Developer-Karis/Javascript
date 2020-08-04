// 1°

let monTab = ['pomme', 'fraise', 'melon', 'citron'];
console.log(monTab);

monTab.pop();
console.log(monTab);

monTab.shift();
console.log(monTab);

monTab.push("test 1");
console.log(monTab);

monTab.unshift("test 2");
console.log(monTab);

monTab[1] = monTab[1].toUpperCase();
console.log(monTab);

monTab.reverse();
console.log(monTab);

// 2
let chiffres = [4, 5, 2, 1, 3];
console.log(chiffres);

chiffres.sort();
console.log(chiffres);

chiffres = chiffres.join('-');
console.log(chiffres);

chiffres = chiffres.split('-');
console.log(chiffres);

// 3
console.log("----- Exo 3 -----");

var valentin = [];
console.log(valentin);

valentin.push(1, 11, 7, 8, 2, 4, 5, 10, 3, 9);
console.log(valentin);
console.log(valentin.length);

console.log(valentin.indexOf(1),
    valentin.indexOf(11),
    valentin.indexOf(7),
    valentin.indexOf(8),
    valentin.indexOf(2),
    valentin.indexOf(4),
    valentin.indexOf(5),
    valentin.indexOf(10),
    valentin.indexOf(3),
    valentin.indexOf(9));

var valentin = ['objet 1', 'objet 2', 'objet 3', 'objet 4', 'objet 5'];
valentin.splice(valentin.indexOf('objet 2'), 1);
console.log(valentin);