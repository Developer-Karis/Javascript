// Variables temporaires

// let a = 1; // 2
// let b = 2; // 3
// let c = 3; // 1
// let temp = a;

// a = b;
// b = c;
// c = temp;

// console.log("a = " + a);
// console.log("b = " + b);
// console.log("c = " + c);

// Exo 1

// Afficher 4, 3, 2, 1
// let a = 1; // 4d
// let b = 2; // 3c
// let c = 3; // 2b
// let d = 4; // 1a

// let temp = b;

// console.log(d + ", " + c + ", " + b + ", " + a);

// b = c; // 2 = 3 --> 3
// c = temp; // 3 = 2 --> 2
// temp = a; // 2 = 1 --> 1
// a = d; // 1 = 4 --> 4
// d = temp; // 4 = 1 --> 1

// // Afficher le changement des variables
// console.log(a + "d, " + b + "c, " + c + "b, " + d + "a");

// Exo 2
// let a = 1; // 2b
// let b = 2; // 3c
// let c = 3; // 4d
// let d = 4; // 1a

// let temp = a; // 1

// a = b; // 1 = 2 --> 2
// b = c; // 2 = 3 --> 3
// c = d; // 3 = 4 --> 4
// d = temp; // 4 = 1 --> 1

// // Afficher le changement des variables
// console.log(a + "b, " + b + "c, " + c + "d, " + d + "a");

// Exo 3
// Afficher 4, 3, 2, 1 avec une variable temporaire
// let tableau = [1, 2, 3, 4];
// let temp;

// console.log(tableau);

// temp = tableau[0]; // 1
// tableau[0] = tableau[3]; // 1 = 4 -->  index 0 vaut 4
// tableau[3] = temp; // 4 = 1 --> index 3 vaut 1
// temp = tableau[1]; // 1 = 2 --> 2
// tableau[1] = tableau[2]; // 2 = 3 --> index 1 vaut 3
// tableau[2] = temp; // 3 = 2 --> 2 index 2 vaut 2;

// // 4, 3, 2, 1

// console.log(tableau);

// Exo 4
let a = 1 // 4
let b = 2 // 5
let c = 3 // 1
let d = 4 // 2
let e = 5 // 6
let f = 6 // 3

let temp = a;

console.log(a, b, c, d, e, f);

a = d;
d = b;
b = e;
e = f;
f = c;
c = temp;

// Afficher le changement des variables

console.log(a, b, c, d, e, f);