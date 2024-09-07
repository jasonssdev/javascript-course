// Conditionals

// if

let userName = 'James'

if (userName === 'Fred') {
    console.log(`Hi ${userName}`)
} else if ( typeof userName === 'number' ) {
    console.log(`Hey ${userName}, you are a number`)
} else { 
    console.log(`hey ${userName}, Who are you?`)
}

const readlineSync = require('readline-sync');

const secretNumber = Math.floor(Math.random() * 10 + 1)
const playerNumber = parseInt(readlineSync.question("Guess the secret number from 1 to 10: "));

console.log(`your number is: ${playerNumber}`)
console.log(`secret number is: ${secretNumber}`)


if (playerNumber === secretNumber) {
    console.log(`Well done ${userName}, the secret number is ${secretNumber}`)
} else {
    console.log(`${playerNumber} is not right`)
}

// Switch

let fredSong = 'Hannah'

switch(fredSong) {
    case "Billie":
        console.log('Billie is the song')
        break
    case 'Marea':
        console.log('Marea is the song')
        break
    case 'Hannah':
        console.log('Hannah is the song')
        break
    default:
        console.log("Sorry")
}