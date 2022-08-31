
class Ninja {

    constructor(name) {
        this.name = name;
        this.health = 0;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}`)
    }

    drinkSake() {
        this.health += 10
    }
}

// const ninja1 = new Ninja('johnny')
// ninja1.sayName()
// ninja1.showStats()
// ninja1.drinkSake()
// ninja1.showStats()


class Sensei extends Ninja{

    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake()
        console.log('What one programmer can do in one month, two programmers can do in two months.')
    }
}

const superSensei1 = new Sensei("Master Johnny")
superSensei1.showStats()
superSensei1.speakWisdom()
superSensei1.showStats()
console.log(superSensei1.wisdom)
