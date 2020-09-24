// 1

let h1 = document.querySelector("h1");
console.log(h1);
h1.addEventListener("click", () => {
    h1.classList.add("text-blue");
})

// 2

let h3 = document.querySelector("h3");
console.log(h3);
h3.addEventListener("dblclick", () => {
    h3.classList.add("text-error");
})

// 3

let p = document.querySelector("p");
console.log(p);
p.addEventListener("click", () => {
    p.classList.toggle('text-style');
})

// 4 
let mySpan1 = document.querySelectorAll('span')[0]
let mySpan2 = document.querySelectorAll('span')[1]
let mySpan3 = document.querySelectorAll('span')[2]

mySpan1.addEventListener('click', () => {
    mySpan1.classList.toggle('bolder');
});
mySpan2.addEventListener('click', () => {
    mySpan2.classList.toggle('bolder');
});
mySpan3.addEventListener('click', () => {
    mySpan3.classList.toggle('bolder');
});

// 5
let mySpan4 = document.querySelectorAll('span')[3]
let mySpan5 = document.querySelectorAll('span')[4]
let mySpan6 = document.querySelectorAll('span')[5]

mySpan4.addEventListener('click', () => {
    mySpan4.classList.toggle('bolder-red');
    mySpan5.className = "";
    mySpan6.className = "";
});
mySpan5.addEventListener('click', () => {
    mySpan5.classList.toggle('bolder-red');
    mySpan4.className = "";
    mySpan6.className = "";
});
mySpan6.addEventListener('click', () => {
    mySpan6.classList.toggle('bolder-red');
    mySpan4.className = "";
    mySpan5.className = "";
});



