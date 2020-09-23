let body = document.getElementsByTagName("body")[0];
console.log(body);

// 1

console.log("Exo 1 : ");
let exo1 = document.querySelector("h1");
exo1.innerText = "Les attributs class et id";
console.log(exo1.innerText);

// 2

console.log("Exo 2 : ");
let exo2 = document.querySelector("h2");
exo2.innerText = "Exercice 2 partie A";
console.log(exo2.innerText);

// 3

console.log("Exo 3 : ");
let exo3 = document.querySelectorAll("h2")[1];
exo3.innerHTML = "Exercice 2 partie B";
console.log(exo3.innerText);

// 4

console.log("Exo 4 : ");
let exo4 = document.querySelector("p");
exo4.innerHTML = "L'ajout de class et d'ID est assez simple, il suffit de connaitre les methodes <b> par coeur </b>";
console.log(exo4);

// 5

console.log("Exo 5 : ");
let exo5 = document.querySelectorAll("p")[1];
exo5.innerHTML = "La manipulation de l'attribut Style peut-être une <i> solution </i> rapide";
console.log(exo5);

// 6

console.log("Exo 6 : ");
exo1.setAttribute("id", "bigTitle");
console.log(exo1);

// 7

console.log("Exo 7 : ");
let exo7 = document.querySelector("div");
exo7.setAttribute("class", "container");
console.log(exo7);

// 8

console.log("Exo 8 : ");
let h2All = document.querySelectorAll("h2");
h2All = Array.from(h2All);

h2All.forEach(element => {
    element.setAttribute("class", "title");
    console.log(element);
});

// 9

console.log("Exo 9 : ");
let pAll = document.querySelectorAll("p");
pAll = Array.from(pAll);

pAll.forEach(element => {
    element.setAttribute("class", "text");
    console.log(element);
});

// 10

console.log("Exo 10 : ");
let exo10 = document.querySelector("section");
exo10.setAttribute("class", "margin-bottom border-black padding");
console.log(exo10);

// 11

console.log("Exo 11 : ");
let exo11 = exo10.nextElementSibling;
exo11.setAttribute("class", "margin-top border-black padding");
console.log(exo11);

// 12

console.log("Exo 12 : ");
let myDiv = exo11.querySelector("div");
myDiv.style.backgroundColor = "blue";
myDiv.style.border = "3px solid red";
myDiv.style.height = "20px";
myDiv.style.width = "20px";
console.log(myDiv);