let body = document.getElementsByTagName("body")[0];
console.log(body);

// 1
console.log("Exo 1 : ");
let h2 = document.querySelector("h2");
console.log(h2.innerText);

// 2
console.log("Exo 2 : ");
h2.innerHTML = "Exercice 1";
console.log(h2.innerText);

// 3
console.log("Exo 3 : ");
let p = document.querySelector("p").innerHTML = h2.innerHTML;
console.log(p);

// 4
console.log("Exo 4 : ");
let recupSection = document.querySelector("section");
console.log(recupSection.id);

// 5
console.log("Exo 5 : ");
let h1 = document.querySelector("h1");
console.log(h1.className);
let version2h1 = document.getElementsByClassName("text-warning");
console.log(version2h1);

// 6
console.log("Exo 6 : ");
let h1All = document.querySelectorAll("h1");
h1All = Array.from(h1All);

h1All.forEach(element => {
    console.log(element.className);
});

// 7
console.log("Exo 7 : ");
let input = document.querySelector("input");
console.log(input.attributes);

// 8
console.log("Exo 8 : ");
console.log(input.attributes.type);

// 9
console.log("Exo 9 : ");
let inputPassword = document.getElementById("inputPassword3");
inputPassword.setAttribute("type", "password");
console.log(inputPassword);

// 10
console.log("Exo 10 : ");
input.setAttribute("type", "color");
console.log(input);
