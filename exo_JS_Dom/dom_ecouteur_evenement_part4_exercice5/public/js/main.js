// Exercice 01 - focus

let premierInput = document.getElementsByTagName("input")[0];

premierInput.addEventListener("focus", () => {
    premierInput.style.backgroundColor = "blue";
})

// Exercice 02 - "focus" la suite

let secondInput = document.getElementsByTagName("input")[1];

secondInput.addEventListener("focus", () => {
    secondInput.style.backgroundColor = "blue";
    secondInput.addEventListener("focusout", () => {
        secondInput.style.backgroundColor = "";
    })
})

// Exercice 03 - Copier

let p1 = document.getElementsByClassName("premierParagraphe")[0];
let p2 = document.getElementsByClassName("secondParagraphe")[0];
let p3 = document.getElementsByClassName("dernierParagraphe")[0];
let buttonExo3 = document.getElementsByClassName("buttonExo")[0];

buttonExo3.addEventListener("click", () => {
    p1.innerText = p2.innerText;
    p3.innerText = p2.innerText;
})

let divExo3 = document.querySelectorAll(".box-body")[2];
console.log(divExo3);

let createButton = document.createElement("button");
divExo3.appendChild(createButton);
createButton.className = "buttonExo btn btn-primary";
createButton.innerText = "Reset";

let valueP1 = p1.innerText;
let valueP3 = p3.innerText;

createButton.addEventListener("click", () => {
    p1.innerText = valueP1;
    p3.innerText = valueP3;
})
// Exercice 04 - Renommer

let pExo4 = document.getElementById("exo4");
let inputRenommer = document.getElementsByClassName("form-control")[0];
let buttonExo4 = document.getElementsByClassName("buttonExo")[2];

buttonExo4.addEventListener("click", () => {
    pExo4.innerText = inputRenommer.value;
})

// Exercice 05 - L'image

let btnExo5 = document.getElementsByClassName("btn")[3];
let imgResponsiveExo5 = document.getElementsByClassName("img-responsive")[0];

btnExo5.addEventListener("click", () => {
    imgResponsiveExo5.src = "./src/image/tartine.png";
})

// Exercice 06 - Tartinashi la tartine voleuse

let imgResponsiveExo6 = document.getElementsByClassName("img-responsive")[1];
let mettrePhoto = document.getElementsByClassName("img-responsive")[2];
let recupSrc;

imgResponsiveExo6.addEventListener("click", () => {
    recupSrc = imgResponsiveExo6.src;
})

mettrePhoto.addEventListener("click", () => {
    mettrePhoto.src = recupSrc;
})

// Exercice 07

let pExo7 = document.querySelectorAll(".box-body")[6].children[1];
let buttonExo7 = document.querySelectorAll(".box-body")[6].children[2];
let p2Exo7 = document.querySelectorAll(".box-body")[6].children[3];

let temp;
buttonExo7.addEventListener("click", () => {
    temp = pExo7.innerText;
    pExo7.innerText = p2Exo7.innerText;
    p2Exo7.innerText = temp;
})
