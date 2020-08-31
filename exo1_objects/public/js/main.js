// ## Exo 1
// 1. Créer un objet du nom de "personnage" avec 3 clefs "nom","age","taille"
// 2. Attribue en dehors de l'objet un nom, un age et une taille à ton objet Personnage

let personnage = {
    nom: "",
    age: "",
    taille: ""
}
personnage["nom"] = "Papadopoulos";
personnage["age"] = "23 ans";
personnage["taille"] = "1m76";

// ## Exo 2
// 1. Créer un objet "personnage2" sans clefs
// 2. Attribue en dehors de l'objet une clef "nom"
// 3. Attribue en dehors une valeur a la clef nom

let personnage2 = new Object();
personnage2.nom;
personnage2.nom = "Papadopoulos";

// ## Exo 3
// 1. Créer un objet "personnage3"  avec minimum 3 clefs "prenom","age","taille"
// 2. Créer un tableau avec 3 valeurs "Salma", 21, 160
// 3. Associe les valeurs du tableaux au bonnes clefs de lobjet*
// 4. Affiche une alert avec comme message : Personnage3 se prénome Salma, elle est agée de 21ans et mesure 160cm

let personnage3 = {
    prenom: "",
    age: "",
    taille: ""
}

let tab = ["Salma", 21, 160];
personnage3.prenom = tab[0];
personnage3.age = tab[1];
personnage3.taille = tab[2];
alert("Personnage3 se prénome " + personnage3.prenom + ", elle est agée de " + personnage3.age + "ans et mesure " + personnage3.taille + " cm.");