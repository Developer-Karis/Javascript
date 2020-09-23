//Methode 1
let myObject = {
    nom: 'nicolas',
    age: 18,
}
let myDiv = document.querySelector('div#object').children;

Object.keys(myObject).forEach((element, index) => {
    myDiv[index].innerText = myObject[element];
});