// 1
let div = document.getElementById("content");
let myEvent = (e) => {
    console.log(e);
    console.log(e.target);
    e.target.style.border = "3px solid red";
}
div.addEventListener("click", myEvent);