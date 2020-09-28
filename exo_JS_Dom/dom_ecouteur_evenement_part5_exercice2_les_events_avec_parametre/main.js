// Pour l'exercice 2
let pContent = `Il est possible de passer des parametres 
dans la function utilisé dans l'écouteur d'événement !`;

// 1

let myDiv = document.querySelector("div");
let myAllChildrenDiv = Array.from(myDiv.children);

myAllChildrenDiv.forEach(element => {
    element.addEventListener("click", () => {
        console.log(element);
    })
});

// 2

myDiv.addEventListener("dblclick", (e) => {
    e.target.innerText = e.target.innerText.toUpperCase();
})

// 3

let myInput = document.querySelector("input");
let styleHasard = ["border: 1px solid gold;", "background-color: blue;",
    "background-color: red;", "border: 5px dotted gold;"];

let random = Math.floor(Math.random() * styleHasard.length);

myAllChildrenDiv.forEach(element => {
    myInput.addEventListener("click", () => {
        element.style = styleHasard[random];
    })
});
