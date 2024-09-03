class Producer {
    constructor(name, age, genre, country) {
        this.name = name
        this.age = age
        this.genre = genre
        this.country = country
    }
    greet() {
        console.log(`This is ${this.name} and I am ${this.age} from ${this.country}`)
    }
}

const producer1 = new Producer('Fred Again', 30, 'Electro-pop', 'London')
console.log(producer1)

// Inheritance

class Animal {
    constructor(name, type) {
        this.name = name
        this.type = type
    }
    sound() {
        console.log('Animal sounds')
    }
}

class Dog extends Animal {
    constructor(name, type, race) {
        super(name, type)
        this.race = race
    }
    sound() {
        console.log('Dog barks')
    }
    run() {
        console.log(`${this.name} runs fast`)
    }
}

const dog1 = new Dog('Jaja', 'dog', 'quiltro')
console.log(dog1)
dog1.run()
dog1.sound()


