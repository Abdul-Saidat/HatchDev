interface Human {
    name: string;
    age: number;
    race: string;
}

abstract class Person implements Human {
    name: string;
    age: number;
    race: string;
    alive: boolean = true

    // mortality() {
    //     this.alive = !this.alive
    //     console.log('Mortality spell has been casted');

    // }

    constructor(name: string, age: number, race: string) {
        this.name = name
        this.age = age
        this.race = race
    }
}

class Nigerian extends Person {

    mortality() {
        this.alive = !this.alive
        console.log('Mortality spell has been casted');

    }
    constructor(name: string, age: number) {
        super(name, age, "Black")
    }
}

class American extends Person {
    constructor(name: string, age: number) {
        super(name, age, "White")
    }
}

let Jeff = new Nigerian("Jeff", 20)
console.log(Jeff.alive)
Jeff.mortality()
console.log(Jeff.alive);

console.log(typeof(undefined) ? true : false);

