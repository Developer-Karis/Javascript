export default class Bouilloire {
    constructor(eau, temperature) {
        this.eau = eau;
        this.temperature = temperature;
    }

    temperatureAugmente() {
        if (this.temperature < 100) {
            setTimeout(() => {
                this.temperature += 20;
                console.log(this.temperature);
                this.temperatureAugmente();
            }, 1000);
        } else {
            clearTimeout();
            console.log("La bouilloire s'est éteint ! ");
        }
        return this.temperature;
    }
}

