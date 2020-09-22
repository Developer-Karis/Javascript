let body = document.getElementsByTagName("body")[0];
console.log(body);

// 1

console.log("Exo 1 : ");
let div = document.querySelector("#content");
console.log(div);

// 2

console.log("Exo 2 : ");
let divAll = document.querySelectorAll("#content");
console.log(divAll);

// 3

console.log("Exo 3 : ");
let li = document.querySelector(".important");
console.log(li);

// 4

console.log("Exo 4 : ");
let liAll = document.querySelectorAll(".important");
console.log(liAll);

// 5

console.log("Exo 5 : ");
liAll = Array.from(liAll);

liAll.forEach(element => {
    let mot = element.innerText;
    let motCutter = mot.slice(0, mot.length - 1);
    let lastLetter = mot.charAt(mot.length - 1).toUpperCase();
    let result = motCutter + lastLetter;
    console.log(result);
});

// 6

console.log("Exo 6 : ");
let myDiv = document.getElementById("content");
let p = myDiv.getElementsByClassName("grandParagraphe")[0];
console.log(p);