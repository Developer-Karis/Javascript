// 1. Déclarer un tableau (array)

let test = 0;
let tabExo = ["Karis", test, 5, 7, false];
console.log(tabExo);

// 2. Length
console.log(tabExo.length);

// 3.
tabExo.pop();
console.log(tabExo);

// 4.
tabExo.shift();
console.log(tabExo);

// 5
tabExo.push(7, "salut");
console.log(tabExo);

// 6
tabExo.unshift("ajout 1", "ajout 2", "ajout 3");
console.log(tabExo);

// 7
tabExo.reverse();
console.log(tabExo);

// 8
console.log("----- Exo 8 Nico -----");
let nico = [];
nico.push("objet 1");
nico.push("objet 1");
console.log(nico);
nico.unshift("objet 3");
console.log(nico);
nico.push("objet 4", "objet 5", "objet 6");
console.log(nico);
nico.splice(0, 3);
console.log(nico);
nico.push("objet 7");
console.log(nico.length);
console.log(nico);
nico.splice(2, 2);
console.log(nico);
nico.splice(0, 2);
console.log(nico);