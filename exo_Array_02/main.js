let myArray = ["coding 11", "coding 12", "coding 13"];
console.log(myArray);

myArray.push("Karis");
console.log(myArray);

myArray.slice(1, 0, "valeur");
console.log(myArray);

console.log(myArray[myArray.indexOf("Karis")]);

myArray[myArray.indexOf("Karis")] = "Alexis";
console.log(myArray);