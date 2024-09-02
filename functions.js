/*
// Syntaxis
function calculateDiscountedPrice(price, discountPercentage) {
    const priceWithDiscount = price * (1 - discountPercentage / 100);
    return priceWithDiscount;
}

const originalPrice = 1500;
const discountPercentage = 20;
const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage);

console.log(finalPrice);

// Callbacks -> Functions as a function arguments
function a () {}
function b (a) {}
b(a)

// Returns other funtions 
function a () {
    function b () {}
    return b
}

// assign functions to variable
const a = function() {}

// Properties and Methods
function a () {}
const obj = {}
a.call(obj)

// nested functions
function a () {
    function b () {
        function c () {

        }
        c()
    }
    b()
}
a()


// functions within a object
const djSet = {
    djName: 'Fred Again',
    genre: 'Electro-pop',
    venue: 'The Venue',
    startSet: function startSet () {
        console.log(`${this.djName} is playing ${this.genre} in ${this.venue}`)
    }
}
djSet.startSet()

// Pure functions & Impure functions
// Pure
// Side Effects
// 1. change global variables
// 2. edit parameters
// 3. HTTP request
// 4. print messages
// 5. DOM Manipulation
// 6. Get current time

function add(a, b) {
    return a + b
}

// Impure functions
// 4. print messages
function add(a, b) {
    console.log('A: ', a)
    return a + b
}
// 1. change global variables
let total = 0
function addWithSideEffect(a) {
    total += a
    return total
}

// Pure
function square(x) {
    return x * x
}

function addTen (y) {
    return y + 10
}

const number = 2
const finalResult = addTen(square(number))
console.log(finalResult)

*/

// Normal funcion within a const
const greeting = function (name) {
    return `Hi, ${name}`
}
console.log(greeting)

// Arrow functions explicit return
const newGreetingExplicit = (name) => {
    return `Hi, ${name}`
}
console.log(newGreetingExplicit)

// Arrow functions implicit return
const newGreetingImplicit = (name) => {`Hi, ${name}`}
console.log(newGreetingImplicit)

// lexical binding
const djSet = {
    djName: 'Fred Again',
    genre: 'Electro-pop',
    venue: 'The Venue',
    startSetNormalFunction: function startSet (message) {
        console.log(`${this.djName} is playing ${this.genre} in ${this.venue} and say ${message}`)
    },
    startSetArrowFunction: (message) => {
        console.log(`${this.djName} is playing ${this.genre} in ${this.venue} and say ${message}`)
    }
}
djSet.startSetNormalFunction('well done with a normal function')
// Fred Again is playing Electro-pop in The Venue and say well done with a normal function
djSet.startSetArrowFunction('bad done with an arrow function')
// undefined is playing undefined in undefined and say bad done with an arrow function


