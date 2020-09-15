// # Bouilloire
// - Remplire avec de l'eau.
// - Chauffer jusqu'a 100°C.
// - Chaque second la temperature augmente de 20°C.
// - Si la temperature est egal a 100°C la bouilloire s'etaint.

import Bouilloire from "./class/bouilloire.js";

let test = new Bouilloire("vide", 0);
console.log(test.temperatureAugmente());