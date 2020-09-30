let divRectangle = document.querySelector("div#rendu-rectangle");
console.log(divRectangle);

document.body.addEventListener("click", (e) => {
    if (e.target.innerText == "W") {
        divRectangle.style.backgroundColor = "white";
    } else if (e.target.innerText == "R") {
        divRectangle.style.backgroundColor = "red";
    } else if (e.target.innerText == "G") {
        divRectangle.style.backgroundColor = "green";
    } else if (e.target.innerText == "B") {
        divRectangle.style.backgroundColor = "blue";
    } else if (e.target.id == "solid") {
        divRectangle.style.border = "3px solid black";
    } else if (e.target.id == "dashed") {
        divRectangle.style.border = "3px dashed black";
    } else if (e.target.id == "dotted") {
        divRectangle.style.border = "3px dotted black";
    } else if (e.target.id == "border-top-1") {
        divRectangle.style.borderTop = "none";
    } else if (e.target.id == "border-top-2") {
        if (divRectangle.style.borderBottom == "3px solid black"
            || divRectangle.style.borderBottom == "") {
            divRectangle.style.borderTop = "3px solid black";
        } else if (divRectangle.style.borderBottom == "3px dashed black") {
            divRectangle.style.borderTop = "3px dashed black";
        } else if (divRectangle.style.borderBottom == "3px dotted black") {
            divRectangle.style.borderTop = "3px dotted black";
        }
    } else if (e.target.id == "border-top-3") {
        if (divRectangle.style.borderBottom == "3px solid black"
            || divRectangle.style.borderBottom == "") {
            divRectangle.style.borderTop = "10px solid black";
        } else if (divRectangle.style.borderBottom == "3px dashed black") {
            divRectangle.style.borderTop = "10px dashed black";
        } else if (divRectangle.style.borderBottom == "3px dotted black") {
            divRectangle.style.borderTop = "10px dotted black";
        }
    } else if (e.target.type == "color") {
        e.target.addEventListener("input", () => {
            divRectangle.style.backgroundColor = e.target.value;
        });
    }
})

