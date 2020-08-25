alert("Bienvenue au jeu de la roulette. " + "\n" + "Le premier tour est gratuit ! ");
let euros = 0;
let couleurs = ["rouge", "noir"];
let random;

do {
    let roulette = prompt("Choissisez une couleur : ").toLowerCase();
    random = Math.round(Math.random());
    while (roulette != couleurs[0] && roulette != couleurs[1]) {
        roulette = prompt("La couleur n'est pas correcte ! "
            + "\n" + "Rouge ou Noir ?").toLowerCase();
    }
    if (roulette == couleurs[random]) {
        euros += 2;
        alert("Vous avez gagné ! ");
        if (confirm("Voulez-vous arrêter de jouer ? ") == true) {
            break;
        }
    } else {
        if (euros >= 2) {
            euros -= 2;
        }
        alert("Vous avez perdu ! ");
    }
    alert("Votre solde du compte est de : " + euros + " €. ");
} while (euros != 0);