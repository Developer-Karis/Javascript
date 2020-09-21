// 1
let myDivs = document.getElementsByTagName("div")[2];
console.log(myDivs);

let premierEnfant = myDivs.firstElementChild;
console.log("Exo 1 : ");
console.log(premierEnfant);

// 2
let dernierEnfant = myDivs.lastElementChild;
console.log("Exo 2 : ");
console.log(dernierEnfant);

// 3
let elementItalique = myDivs.children[1].firstElementChild;
console.log("Exo 3 : ");
console.log(elementItalique);

// 4
let elementBold = myDivs.children[2].firstElementChild;
console.log("Exo 4 : ");
console.log(elementBold);

// 5
let parentItalique = elementItalique.parentElement;
console.log("Exo 5 : ");
console.log(parentItalique);

// 6
let parentBold = elementBold.parentElement;
console.log("Exo 6 : ");
console.log(parentBold);

// 7
let secondChild = parentItalique.innerText;
console.log("Exo 7 : ");
console.log(secondChild);