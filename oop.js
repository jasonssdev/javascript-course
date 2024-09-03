// Object oriented programing

const producer = {
    name: 'Fred Again',
    age: 31,
    born: {
        city: 'London',
        country: 'England'
    },
    greet() {
        console.log(`Hi, this is ${this.name} and I am ${this.age} old`)
    }


}

console.log(producer)
producer.greet()

producer.genre = 'Electro-pop'

producer.play = () => {
    console.log(`${producer.name} is playing`)
}

console.log(producer)
producer.play()

delete producer.genre
delete producer.play

console.log(producer)

// Building constructor

function Producer(name, age, genre) {
    this.name = name
    this.age = age
    this.genre = genre
}

const producer1 = new Producer("James", 34, 'Tech-house')
console.log(producer1)

const producer2 = new Producer("Tiesto", 55, 'Trance')
console.log(producer2)

// Prototype method
// add new property

Producer.prototype.isDj = true

producer1.city = 'london'

Producer.prototype.play = function () {
    console.log(`hi, this is ${this.name} and I am playing ${this.genre}`)
}

console.log(producer1)
console.log(producer2)

producer1.play()
producer2.play()


