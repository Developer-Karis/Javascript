// 1

let secondH1 = document.getElementsByTagName("h1")[1].innerText;
console.log(secondH1);

// 2
let dernierLi = document.getElementsByTagName("ul")[0].lastElementChild.innerText;
console.log(dernierLi);

// 3
let premierP = document.getElementsByTagName("p")[0].innerText.toUpperCase();
console.log(premierP);

// 4
let ulAll = document.getElementsByTagName("ul")[0].children;
ulAll = Array.from(ulAll);

ulAll.forEach(element => {
    console.log(element.innerText.toUpperCase());
});