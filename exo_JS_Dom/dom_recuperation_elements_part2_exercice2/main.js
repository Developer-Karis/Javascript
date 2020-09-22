// 1 
console.log("Exo 1 : ");
let premierEnfant = document.getElementsByTagName("div")[0];
console.log(premierEnfant.firstElementChild);

// 2
let titreNiv3 = document.getElementsByTagName("h3")[1];
console.log("Exo 2 : ");
console.log(titreNiv3);

// 3
console.log("Exo 3 : ");
let titre3 = titreNiv3.previousElementSibling;
console.log(titre3);

// 4
let petitParagraphe = document.getElementsByTagName("p")[1];
console.log("Exo 4 : ");
console.log(petitParagraphe.nextElementSibling);

// 5
let elementParent = document.getElementsByClassName("important")[0].parentElement;
console.log("Exo 5 : ");
console.log(elementParent);

// 6 
console.log("Exo 6 : ");
let myListElement = document.getElementById("listElements").parentElement;
let premierListElement = myListElement.firstElementChild;
console.log(premierListElement);

// 7
console.log("Exo 7 : ");
let exo7 = document.getElementsByClassName("important");
console.log(exo7[exo7.length - 1].nextElementSibling);

// 8
let paraGeneral = document.getElementById("textGeneral").nextElementSibling.nextElementSibling;
console.log("Exo 8 : ");
console.log(paraGeneral);

// 9
console.log("Exo 9 : ");
let spanNom = document.getElementsByTagName("span")[1];
let spanParent = spanNom.parentElement;
let mySpanPrenom = spanParent.nextElementSibling;
console.log(mySpanPrenom);

// 10
console.log("Exo 10 : ");
let nicolas = document.getElementsByTagName("b")[2];
let primo = nicolas.parentElement.parentElement.previousElementSibling
    .firstElementChild.firstElementChild.innerText;
console.log(nicolas);
console.log(primo);

// 11
let recupPara = document.querySelector(".grandParagraphe");
console.log("Exo 11 : ");
console.log(recupPara);

// 12
let liAll = document.querySelectorAll("li");
console.log("Exo 12 : ");
liAll = Array.from(liAll);

liAll.forEach(element => {
    console.log(element.innerText);
});
