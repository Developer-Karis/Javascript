let div = document.querySelector("div");
div.style.height = "400px";
div.style.width = "400px";
div.style.border = "3px solid black";

div.addEventListener('click', () => {
    div.style.animation = "myMove";
    div.animate([
        // keyframes
        { borderRadius: '100%' },
    ], {
        // timing options
        duration: 2000,
    });
    div.addEventListener('click', () => {
        div.style.backgroundColor = "red";
    })
    console.log(div);
})