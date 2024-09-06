// Integer & Float

const songsQty = 16
const timeDuration = 3.5

console.log(typeof songsQty, typeof timeDuration)
// There is not difference between Integers and Floats

// Scientics 
const scientificNotation = 5e2

// NaN

const infnumber  = Infinity
const noNumber = NaN

// Operators

const additionOperator =  10 + 5
const subtractionOperator =  10 - 5 
const multiplicationOperator =  10 * 5 
const divisionOperator =  10 / 5 
const moduleOperator =  10 % 3
const exponentialOperator =  10 ** 3

// Acurate issues
const result = 0.1 + 0.2
console.log(result)
// 0.30000000000000004
console.log(result.toFixed(1))
// 0.3
// comparations
console.log(result === 0.3)
// false

const squarRoot = Math.sqrt(16)
const absoluteValue = Math.abs(-16)
const randomNumber = Math.random()
console.log(squarRoot, absoluteValue, randomNumber) 





