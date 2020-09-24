let myH1 = document.querySelector("h1");
console.log(myH1);

let changeColor = () => {
    myH1.style.color = "blue";
}

myH1.addEventListener("click", changeColor);