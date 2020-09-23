let myObject = {
    nom: "nico",
    age: 18
}

let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");

Object.entries(myObject).forEach((element, index) => {
    h1.innerHTML = Object.values(element);
});