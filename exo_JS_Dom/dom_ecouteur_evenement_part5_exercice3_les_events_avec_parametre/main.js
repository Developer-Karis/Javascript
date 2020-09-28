// 1

let myUl = document.querySelector("ul");
let liAll = document.querySelectorAll("li");
liAll = Array.from(liAll);

let sayMyName = (e) => {
    console.log(e.target.innerText);
}

myUl.addEventListener("click", sayMyName);

// 2
let modifContentLi = () => {
    let ask = prompt("Ajoutez un texte : ");
    liAll.forEach(element => {
        element.innerText = ask;
    });
}

myUl.addEventListener("dblclick", modifContentLi);

// 3

let myInput1 = document.getElementById("li-one");
let myInput2 = document.getElementById("li-two");
let myButton = document.querySelectorAll("input")[2];

let inversion = (a, b) => {
    let mot = a.textContent;
    a.textContent = b.textContent;
    b.textContent = mot;
}

myButton.addEventListener('click', () => {
    liAll.forEach(element => {
        if (element.innerText == myInput1.value) {
            premier = element;
        } else if (element.innerText == myInput2.value) {
            deuxieme = element;
        }
    });
    inversion(premier, deuxieme);
})
