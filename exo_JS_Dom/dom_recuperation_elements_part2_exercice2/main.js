let premierEnfant = document.getElementById("content");
console.log(premierEnfant);

// 1 
console.log("Exo 1 : ");
console.log(premierEnfant.children[0]);

// 2
let titreNiv3 = document.getElementById("titreNiv3");
console.log("Exo 2 : ");
console.log(titreNiv3);

// 3
console.log("Exo 3 : ");
console.log(titreNiv3.nextElementSibling);

// 4
let petitParagraphe = document.getElementsByClassName("petitParagraphe")[0];
console.log("Exo 4 : ");
console.log(petitParagraphe.nextElementSibling);

// 5
let elementParent = document.getElementsByClassName("important");
console.log("Exo 5 : ");
elementParent = Array.from(elementParent);

elementParent.forEach(element => {
    console.log(element.parentElement);
});

// 6 
console.log("Exo 6 : ");
console.log(elementParent[0]);

// 7
console.log("Exo 7 : ");
console.log(elementParent[elementParent.length - 1].nextElementSibling);

// 8
let paraGeneral = document.getElementById("textGeneral");
console.log("Exo 8 : ");
console.log(paraGeneral.nextElementSibling.nextElementSibling);

// 9
console.log("Exo 9 : ");
let spanNom = document.getElementsByTagName("p");
console.log(spanNom[6].firstElementChild);
console.log(spanNom[spanNom.length - 1].firstElementChild);

// 10
console.log("Exo 10 : ");
console.log(spanNom[spanNom.length - 1].firstElementChild.firstElementChild);
console.log(spanNom[6].firstElementChild.firstElementChild);

// 11
let recupPara = document.getElementsByTagName("p")[1];
var AttributeNode = recupPara.getAttribute("class");
console.log("Exo 11 : ");
console.log(AttributeNode);

// 12
let liAll = document.getElementsByTagName("li");
console.log("Exo 12 : ");
liAll = Array.from(liAll);

liAll.forEach(element => {
    console.log(element);
});
