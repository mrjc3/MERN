class Card {

    constructor(name="", cost=0) {
        this.name = name;
        this.cost = cost;
    }
}

export class Unit extends Card {

    constructor(name="", cost, power, resilience) {
        super(name, cost)
        this.power = power;
        this.resilience = resilience;
    }

    attack(target) {
        target.resilience -= this.power;
    }

    alterAttribute() {
        
    }
}

export class Effect extends Card {

    constructor(name="", cost, text="", stat="", magnitude) {
        super(name, cost)
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }

    playEffect(target) {
        if (this.stat === "resilience") {
            target.resilience += this.magnitude
        }
        else if (this.stat === "power") {
            target.power += this.magnitude
        }
    }
}





