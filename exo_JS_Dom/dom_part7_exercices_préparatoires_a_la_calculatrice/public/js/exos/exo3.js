let myInputOne = document.querySelectorAll('input')[4];

let myInputTwo = document.querySelectorAll("input")[5];

let myButtonOne = document.querySelectorAll("button")[2];

let mySpanOne = document.getElementById("response3");

// Récupérer les buttons

let buttonAddition = document.getElementsByClassName("m-1 btn")[0];
let buttonSoustraction = document.getElementsByClassName("m-1 btn")[1];
let buttonMultiplication = document.getElementsByClassName("m-1 btn")[2];
let buttonDivision = document.getElementsByClassName("m-1 btn")[3];

let changeSpan = document.querySelectorAll("span")[3].firstElementChild;

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