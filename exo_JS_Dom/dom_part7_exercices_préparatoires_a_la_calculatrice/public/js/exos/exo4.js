let myInputOne = document.querySelectorAll('input')[6];
myInputOne.setAttribute("isFocused", "false");

let myInputTwo = document.querySelectorAll("input")[7];
myInputTwo.setAttribute("isFocused", "false");

let myButtonOne = document.querySelectorAll("button")[7];

let mySpanOne = document.getElementById("response4");

// Récupérer les buttons

let buttonAddition = document.getElementsByClassName("m-1 btn")[14];
let buttonSoustraction = document.getElementsByClassName("m-1 btn")[15];
let buttonMultiplication = document.getElementsByClassName("m-1 btn")[16];
let buttonDivision = document.getElementsByClassName("m-1 btn")[17];

let changeSpan = document.querySelectorAll("span")[5].firstElementChild;

let operateur = " ";

buttonAddition.addEventListener("click", () => {
    operateur = "+";
    changeSpan.setAttribute("class", 'fas fa-plus');
})

buttonSoustraction.addEventListener("click", () => {
    operateur = "-";
    changeSpan.setAttribute("class", 'fas fa-minus');
})

buttonMultiplication.addEventListener("click", () => {
    operateur = "*";
    changeSpan.setAttribute("class", 'fas fa-times');
})

buttonDivision.addEventListener("click", () => {
    operateur = "/";
    changeSpan.setAttribute("class", 'fas fa-divide');
})

// Mettre les nombres dans les inputs

let divNumbers = document.querySelector("#numbersExo4").children;
let arr = Array.from(divNumbers);

let choix;

myInputOne.addEventListener("focus", () => {
    choix = true;
});

myInputTwo.addEventListener("focus", () => {
    choix = false;
})

arr.forEach(element => {
    element.addEventListener("click", () => {
        if (choix) {
            myInputOne.value += element.innerText;
        } else {
            myInputTwo.value += element.innerText;
        }
    })
});

// Afficher le résultat

myButtonOne.addEventListener("click", () => {
    mySpanOne.innerText = parseInt(myInputOne.value) + parseInt(myInputTwo.value);
    if (operateur == "+") {
        mySpanOne.innerText = parseInt(myInputOne.value) + parseInt(myInputTwo.value);
    } else if (operateur == "-") {
        mySpanOne.innerText = parseInt(myInputOne.value) - parseInt(myInputTwo.value);
    } else if (operateur == "/") {
        mySpanOne.innerText = parseInt(myInputOne.value) / parseInt(myInputTwo.value);
    } else if (operateur == "*") {
        mySpanOne.innerText = parseInt(myInputOne.value) * parseInt(myInputTwo.value);
    }
})