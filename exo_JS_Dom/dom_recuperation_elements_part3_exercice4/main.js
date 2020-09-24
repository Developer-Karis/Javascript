let competences = {
    HTML: '71%',
    CSS: '95%',
    JS: '50%',
    React: '18%',
    Laravel: '100%'
}

console.log("Exo 1 : ");
let elements = document.querySelectorAll("div#liste-competences>h2");
console.log(elements);

elements = Array.from(elements);

let i = 0;

console.log("Exo 2 : ");
for (let prop in competences) {
    console.log(competences[prop]);
    elements[i].innerHTML += ' : ' + competences[prop];

    if (parseInt(competences[prop]) == 50) {
        elements[i].style.backgroundColor = "";
    } else if (parseInt(competences[prop]) == 100) {
        elements[i].style.backgroundColor = "gold";
        elements[i].style.color = "black";
    } else if (parseInt(competences[prop]) < 50) {
        elements[i].style.backgroundColor = "red";
    } else if (parseInt(competences[prop]) > 50) {
        elements[i].style.backgroundColor = "green";
        elements[i].style.color = "white";
    }
    i++;
}