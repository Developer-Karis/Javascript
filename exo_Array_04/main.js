// Créer une variable qui reçois un array avec 3 éléments -> ex: coding 11, coding 12, coding 13
let myArray = ["coding 11", "coding 12", "coding 13"];

// Afficher les éléments de l'array
console.log(myArray);

// Ajouter et afficher votre prenom a l'array
myArray.push("Karis");
console.log(myArray);

// Remplacer et afficher un élément de l'array par autre chose
myArray[myArray.indexOf("Karis")] = "Alexis";
console.log(myArray.indexOf("Alexis"));
console.log(myArray);

// Effacer un élément de l'array

myArray.splice(1, 1);

// Afficher le contenu le d'array
console.log(myArray);