let div = document.querySelector("div");
div.style.height = "400px";
div.style.width = "400px";
div.style.border = "3px solid black";

let rond = () => {
    div.style.borderRadius = '100%'
    div.style.transition = '2s'
}

let rouge = () => {
    div.style.backgroundColor = 'red'
}

let normale = () => {
    div.style.borderRadius = ''
    div.style.backgroundColor = ''
}

div.addEventListener('click', () => {
    if (div.style.borderRadius == '100%' && div.style.backgroundColor == 'red') {
        normale()
    } else if (div.style.borderRadius == '100%') {
        rouge()
    } else if (div.style.borderRadius == '') {
        rond()
    }
    console.log(div);
})