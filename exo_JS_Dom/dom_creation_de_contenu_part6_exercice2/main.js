// 1
let myUlChildren = document.querySelector("ul");
let arr = Array.from(myUlChildren.children);

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
    myUlChildren.removeChild(arr[random]);
})


let myUlAll = document.querySelectorAll("ul")[1].children;

let myNewLi = document.createElement("li");
myNewLi.innerText = "Remplacer mon Li";

console.log(document.body);
let myReplaceInput = document.querySelectorAll("input")[3];
let mySecondDiv = document.querySelectorAll("div")[1];
mySecondDiv.appendChild(myNewLi);

let temp;
myReplaceInput.addEventListener("click", () => {
    temp = myUlAll[1].innerText;
    myUlAll[1].innerText = myNewLi.innerText;
    myNewLi.innerText = temp;
})
