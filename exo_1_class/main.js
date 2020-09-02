class Personne {
    constructor(prenom, nom, age, taille) {
        this.prenom = prenom;
        this.nom = nom;
        this.age = age;
        this.taille = taille;
    }

    get message() {
        return `Je m'appelle ${this.prenom} ${this.nom}. J'ai ${this.age} ans. Ma taille est ${this.taille} m.`;
    }
}

let karis = new Personne("Karis", "Papadopoulos", 23, 1.76);
console.log(karis.message);

let andre = new Personne("Santos", "André", 24, 1.78);
console.log(andre.message);

let cactus = new Personne("Boy", "Cactus", 24, 1.75);
console.log(cactus.message);