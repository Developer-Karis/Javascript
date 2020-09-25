// 1
let myBody = document.querySelector("body");
let pInDiv = document.querySelector("div > p");

let createStyle = (e) => {
    if (e.target.nodeName == "H2") {
        e.target.innerText = e.target.innerText.slice(0, -1);
    } else if (e.target.nodeName == "DIV") {
        e.target.style.border = "3px solid black";
    } else if (e.target == pInDiv) {
        e.target.style.color = "red";
        e.target.style.fontWeight = "bold";
    } else if (e.target.nodeName == "H1") {
        e.target.style.backgroundColor = "yellow";
        e.target.style.width = "max-content";
    }
    console.log(e.target.tagName);
}
myBody.addEventListener("click", createStyle);

// 2
let mySection = document.querySelector("section");
let pInsideSection = mySection.firstElementChild;

let exo2 = `Il est possible de passer des parametres 
dans la function utilisé dans l'écouteur d'événement 
et nous verrons ça dans le prochain exercice!`;

mySection.style.height = "100px";

mySection.addEventListener("mouseover", () => {
    pInsideSection.innerText = exo2;
    mySection.addEventListener("mouseout", () => {
        pInsideSection.innerText = "";
    })
})
