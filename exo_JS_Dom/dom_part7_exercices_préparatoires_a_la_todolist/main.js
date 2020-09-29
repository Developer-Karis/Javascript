// 1

let liAllOne = document.querySelectorAll("ul")[0];
let arr = Array.from(liAllOne.children);

arr.forEach((element) => {
    element.children[0].addEventListener("click", (e) => {
        liAllOne.removeChild(e.target.parentElement);
    })
});

// 2

let liAllTwo = document.querySelectorAll("ul")[1];
let arr2 = Array.from(liAllTwo.children);

arr2.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerText == "red") {
            element.style.color = "red";
            element.removeChild(element.children[0]);
            element.removeChild(element.children[0]);
            element.appendChild(document.createElement('span'));
            element.children[0].innerText = "annulé";
        } else if (e.target.innerText == "blue") {
            element.style.color = "blue";
            element.removeChild(element.children[0]);
            element.removeChild(element.children[0]);
            element.appendChild(document.createElement('span'));
            element.children[0].innerText = "annulé";
            element.children[0].style.color = "blue";
            element.children[0].style.border = "1px solid blue";
        } else if (e.target.innerText == "annulé") {
            element.removeChild(element.children[0]);
            element.appendChild(document.createElement('span'));
            element.appendChild(document.createElement('span'));
            element.children[0].innerText = "red";
            element.children[1].innerText = "blue";
            element.style.color = "black";
            element.children[0].style.marginRight = "4px";
        }
    })
});

// 3

let liAllThree = document.querySelectorAll("div#exo3")[0];
let arr3 = Array.from(liAllThree.children);

let firstPara = document.getElementById("premierePara");
let secondPara = document.getElementById("secondePara");

arr3.forEach(element => {
    element.addEventListener("click", (e) => {
        if (e.target.innerText == "Page 1") {
            element.style.backgroundColor = "yellow";
            firstPara.style.display = "block";
            firstPara.style.backgroundColor = "yellow";
            firstPara.style.width = "max-content";
            secondPara.style.display = "none";
            secondPara.style.backgroundColor = "";
            liAllThree.children[2].style.backgroundColor = "";
        } else if (e.target.innerText == "Page 2") {
            liAllThree.children[1].style.backgroundColor = "";
            firstPara.style.display = "none";
            firstPara.style.backgroundColor = "";
            element.style.backgroundColor = "yellow";
            secondPara.style.display = "block";
            secondPara.style.backgroundColor = "yellow";
            secondPara.style.width = "max-content";
        }
    })
});


