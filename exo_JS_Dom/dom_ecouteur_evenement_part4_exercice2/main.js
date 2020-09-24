// 1
let myH1 = document.querySelector("h1");
console.log(myH1);

myH1.addEventListener("dblclick", () => {
    myH1.style.backgroundColor = "red";
    myH1.style.color = "white";
})

// 2
let myH3 = document.querySelector("h3");
console.log(myH3);

myH3.addEventListener("mouseover", () => {
    myH3.innerHTML = myH3.innerHTML.slice(0, -1);
});

// 3
let p = document.querySelector("p");
console.log(p);

p.addEventListener("click", () => {
    if (p.style.backgroundColor == "" && p.style.color == "") {
        p.style.backgroundColor = "blue";
        p.style.color = "gold";
    } else {
        p.style = "";
    }
});