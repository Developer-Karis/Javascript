// 1
let myUlChildren = document.querySelector("ul");

let myFirstInput = document.querySelectorAll("input")[0];
let mySecondInput = document.querySelectorAll("input")[1];
let myThirdInput = document.querySelectorAll("input")[2];

myFirstInput.addEventListener("click", () => {
    myUlChildren.removeChild(myUlChildren.firstElementChild);
})

// 2
mySecondInput.addEventListener("click", () => {
    myUlChildren.removeChild(myUlChildren.lastElementChild);
})

// 3
myThirdInput.addEventListener("click", () => {
    let random = Math.floor(Math.random() * myUlChildren.children.length);
    console.log(random);
    let display = myUlChildren.removeChild(myUlChildren.children[random]);
    console.log(display);
})

// 4 

let myUl = document.querySelectorAll("ul")[1];
let liTwo = document.querySelectorAll("ul")[1].children[1];

let myNewLi = document.createElement("li");
myNewLi.innerText = "Remplacer mon Li";

console.log(document.body);
let myReplaceInput = document.querySelectorAll("input")[3];
let mySecondDiv = document.querySelectorAll("div")[1].children[2];
mySecondDiv.appendChild(myNewLi);

myReplaceInput.addEventListener("click", () => {
    let exo4Result = myUl.replaceChild(myNewLi, liTwo);
    console.log(exo4Result);
})

// 5

let inputReplaceLi = document.getElementById("replaceValue");
let lastInput = document.querySelectorAll("input")[5];

lastInput.addEventListener("click", () => {
    let myNewLi2 = document.createElement("li");
    myNewLi2.innerText = inputReplaceLi.value;
    let exo5Result = myUl.replaceChild(myNewLi2, myUl.children[2]);
    console.log(exo5Result);
})
