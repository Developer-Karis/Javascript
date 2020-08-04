"use strict";

// 1
let phrase = 'Bonjour tout le monde     ';

// 2
console.log(phrase.length);

// 3
phrase = phrase.trim();
console.log(phrase);

// 4
console.log(phrase, phrase.length);

// 5
console.log(phrase.charAt(phrase.length - 1));
console.log(phrase.substr(-1, 1));

// 6 
phrase = phrase.replace("Bonjour", "");
console.log(phrase);

// 7
let bonjour = "Bonjour";

// 8
phrase = bonjour.concat(phrase);
console.log(phrase);

// 9
phrase = phrase.substr(0, phrase.length - 14);
// phrase.slice(0, 8);
console.log(phrase);

// 10
let phrase2 = "Ceci est une variable de type number !";

// 11
console.log(phrase2.replace("number", "string"));




