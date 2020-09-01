// # Exo 1
// - Créer un exercice ou une personne rentre dans un magasin avec une somme d'argent et a la fin il faut soustraire l'argent depensé
// ex: je rentre dans un magasin, j'ai 30€, j'achete un chocolat qui coute 2€, et une tartine qui coute 3,50€.
// Au final, j'ai 24,50€ 

let argent = () => {
    let out = true;
    let argentDePoche = parseInt(prompt("Quelle est votre somme d'argent ? "));
    let magasin = {
        liste: {
            chocolat: 2,
            tartine: 3.50,
            pomme: 1.50,
            ananas: 1.75
        },
    }
    while (out == true) {
        acheterAliment = prompt("Quel aliment voulez-vous acheter ? " + Object.keys(magasin.liste).join(", "));
        argentDePoche -= magasin.liste[acheterAliment];
        console.log("Argent restant : " + argentDePoche + " €. ");
        delete magasin.liste[acheterAliment];
        fin = prompt("Voulez-vous arrêter le programme ? (oui ou non) ");
        if (Object.keys(magasin.liste).length == 0) {
            alert("Vous avez tout acheter. Le programme s'arrête. ");
            out = false;
        } else if (fin == "oui") {
            out = false;
        }
    }
}
argent();