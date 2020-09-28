// 1 

let myDiv = document.getElementById("content");
console.log(myDiv);

myDiv.appendChild(document.createElement("h2"));
let myH2 = document.querySelector("h2");
myH2.innerText = "Part 6 - Exercice 1";

// 2

let myNewPara = document.createElement("p");
myNewPara.innerText = "lorem ipsum";
myDiv.appendChild(myNewPara);

// 3

let myNewH1 = document.createElement("h1");
myNewH1.innerText = "Le DOM - Création de HTML";
myDiv.prepend(myNewH1);

// 4

let arr = Array.from(myDiv.cloneNode(true).children);
let myDiv2 = document.getElementById("secondaire");
console.log(myDiv2);

arr.forEach(element => {
    myDiv2.appendChild(element);
});
myDiv2.firstElementChild.nextElementSibling.innerText = `Part 6 - Exercice 1 
par Exercice 2`;

// 5

let myNewDiv = document.createElement("div");
let myScript = document.querySelector("script");

document.body.insertBefore(myNewDiv, myScript);
myNewDiv.setAttribute("id", "matiere");

let myNewUl = document.createElement("ul");
myNewDiv.appendChild(myNewUl);

arr.forEach(element => {
    let myNewList = document.createElement("li");
    myNewUl.appendChild(myNewList);
    myNewList.innerText = element.innerText;
});

console.log(myNewDiv);
console.log(document.body);