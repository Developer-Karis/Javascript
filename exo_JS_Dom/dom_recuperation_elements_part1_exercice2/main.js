// 1
let myBody = document.getElementsByTagName("body")[0];
console.log(myBody);

// 2
let firstElementBody = myBody.firstElementChild;
console.log(firstElementBody);

// 3
let lastElementBody = myBody.lastElementChild;
console.log(lastElementBody);

// 4
let myDivs = document.getElementsByTagName("div");
let exo4 = myDivs[0].children;
console.log(exo4);

// 5
let liAll = document.getElementsByTagName("li");
let firstLi = liAll[0];
console.log(firstLi);

let secondLi = firstLi.nextElementSibling;
console.log(secondLi);

// 6

let previousElement = secondLi.previousElementSibling;
console.log(previousElement);