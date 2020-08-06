let jourDeLaSemaine = prompt("Entrez le jour de la semaine : ");

switch (jourDeLaSemaine) {
    case "Lundi":
        console.log("On est Lundi");
        break;
    case "Mardi":
        console.log("On est Mardi");
        break;
    case "Mercredi":
        console.log("On est Mercredi");
        break;
    case "Jeudi":
        console.log("On est Jeudi");
        break;
    case "Vendredi":
        console.log("On est Vendredi");
        break;
    case "Samedi":
    case "Dimanche":
        console.log("On est le Week-End !");
        break;
    default:
        console.log("Entrez un jour de la semaine !");
}
