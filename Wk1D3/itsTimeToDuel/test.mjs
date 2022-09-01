import {Unit, Effect} from "./index.mjs"

const Unit1 = new Unit('Red Belt Ninja', 3, 3, 4);
const effect1 = new Effect("Hard Algorithm", 2, "increase targets resilience by 3", "resilience", 3);
console.log(effect1);

effect1.playEffect(Unit1);
console.log(Unit1);

const Unit2 = new Unit('Black Belt Ninja', 4, 5, 4);
const effect2 = new Effect("Unhandled Promise Rejection", 1, "reduce targets resilience by 2", "resilience", -2); 

effect2.playEffect(Unit1)
console.log(Unit1)


const effect3 = new Effect("Pair Programmin", 3, "increase targets power by 2", "power", 2); 

