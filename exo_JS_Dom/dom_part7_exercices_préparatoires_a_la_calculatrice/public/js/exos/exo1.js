let myInputOne = document.querySelector('input');

let myInputTwo = document.querySelectorAll("input")[1];

let myButtonOne = document.querySelectorAll("button")[0];

let mySpanOne = document.getElementById("response1");

myButtonOne.addEventListener("click", () => {
    mySpanOne.innerText = parseInt(myInputOne.value) + parseInt(myInputTwo.value);
})
