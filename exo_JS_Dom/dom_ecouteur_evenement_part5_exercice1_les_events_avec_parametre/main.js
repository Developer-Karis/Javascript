// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = `Il est possible de passer des parametres 
dans la function utilisé dans l'écouteur d'événement !`;

// 1

let myBtn = document.querySelector("button");
let myP = document.querySelector("p");

let myFunc = (p, text) => {
    p.innerText += text;
}

myBtn.addEventListener("click", () => {
    myFunc(myP, pContent);
})

// 2

let myH1 = document.querySelector("h1");

let myNewFunction = (background, color) => {
    myH1.style.backgroundColor = background;
    myH1.style.color = color;
}

myH1.addEventListener("click", () => {
    myNewFunction(theBackground, theColor);
})