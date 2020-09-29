let myInputOne = document.querySelectorAll('input')[2];

let myOption = document.querySelector("select");

let myInputTwo = document.querySelectorAll("input")[3];

let myButtonOne = document.querySelectorAll("button")[1];

let mySpanOne = document.getElementById("response2");

myButtonOne.addEventListener("click", () => {
    if (myOption.value == "+") {
        mySpanOne.innerText = parseInt(myInputOne.value) + parseInt(myInputTwo.value);
    } else if (myOption.value == "-") {
        mySpanOne.innerText = parseInt(myInputOne.value) - parseInt(myInputTwo.value);
    } else if (myOption.value == "/") {
        mySpanOne.innerText = parseInt(myInputOne.value) / parseInt(myInputTwo.value);
    } else {
        mySpanOne.innerText = parseInt(myInputOne.value) * parseInt(myInputTwo.value);
    }
})