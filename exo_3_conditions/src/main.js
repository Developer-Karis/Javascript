// Exo 1 
let nb1 = parseInt(prompt("Entrez un premier nombre : "));
let nb2 = parseInt(prompt("Entrez un second nombre : "));
let nb3 = parseInt(prompt("Entrez un dernier nombre : "));

let somme = (nb1 + nb2);
let multiplication = (nb2 * nb3);

// Version 1
console.log("Somme des 2 premiers = " + somme);
console.log("Multiplication des 2 derniers = " + multiplication);

// Version 2
console.log("Somme de " + nb1 + " et " + nb2 + " vaut " + somme);
console.log("Multiplication de " + nb2 + " et " + nb3 + " vaut " + multiplication);

// Version 3
console.log(nb1 + " + " + nb2 + " = " + somme);
console.log(nb2 + " * " + nb3 + " = " + multiplication);

// Exo 2

let a = 3;
let b = 2;
let c = 1;
let d = 5;
let e = 8;

console.log(a, b, c, d, e);

let temp = a;
a = b;
b = c;
c = d;
d = e;
e = temp;

console.log(a, b, c, d, e);

