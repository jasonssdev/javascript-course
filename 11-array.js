// How to create an array

// New Array
const songs = Array('Hannah', 'Roze', 'Billie', 'Marea')
console.log(songs)
console.log(typeof songs)

const justOneNumber = Array(12)
console.log(justOneNumber)

// Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)



// Accessing

const firstSong = songs[0]
console.log(firstSong)

// length property
const numberOfSongs = songs.length
console.log(numberOfSongs)

// Mutability

songs.push('adore')
console.log(songs)

// Inmutability

const newSongs = songs.concat(['ten', 'plcaes to be'])
console.log(newSongs)
console.log(songs)

// checking arrays

const isArray = Array.isArray(songs)
console.log(isArray)

// Exercise

const numbers = Array(0,1,2,3,4,5,6,7,8,9)
let add = 0

for (let i = 0; i < numbers.length; i++) {
    add += numbers[i]
}
console.log(add)

// Change Array (Mutability)
// Push
const genre = ['Electro-pop', 'Tech-house', 'Bigroom', 'Organic-house']
const newGenres = genre.push('Deep-house', 'Techno')

console.log(genre)
console.log('new length',newGenres)
// Pop
const removeGenre = genre.pop()
console.log(genre)
console.log('remove',removeGenre)

// Iterate
// Map -> return new array

const numberList = [1,2,3,4,5,6,7,8,9]
const SquaredNumbers = numberList.map(num => num * num)

console.log(numberList)
console.log(SquaredNumbers)

const cities = ['Tulum', 'Ibiza', 'Miami', 'Mikonos']

// ForEach -> not return new array
const djAges = [18, 34, 55, 23, 17, 30, 27, 25, 47, 60]
console.log(djAges)

let sumDjAges = 0
djAges.forEach(num => {
    sumDjAges += num
})
console.log(djAges)
console.log(sumDjAges)


// Exercise

const tempInFahrenheit = [50, 500, 95, 102, 87, 10]
const tempInCelcius = tempInFahrenheit.map( f => 5/9 * (f - 32))
console.log(tempInFahrenheit)
console.log(tempInCelcius)

// Method that DO NOT modify the original array (Inmutability)

//  Filter
const importantYears = [1990, 1993, 1997, 2000, 2004, 2008, 2012, 2014, 2017, 2018, 2021, 2023]

const evenYears = importantYears.filter(year => year % 2 === 0)
console.log(evenYears)

const oddYears = importantYears.filter(year => year % 2 !== 0)
console.log(oddYears)

// Reduce
const numberRuduce = [1,2,3,4,5,6,7,8,9]
const sumReduce = numberRuduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0)

console.log(numberRuduce)
console.log(sumReduce)

const festivals = ['Creamfields', 'Defqon', 'Creamfields', 'Dreambeach', 'Sensation', 'Dreambeach', 'Ultra', 'Ultra', 'Ultra', 'Tomorrowland']

const festivalAttendence = festivals.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue] ++

    } else {
        accumulator[currentValue] = 1
    }
    return accumulator
}, {})

console.log(festivalAttendence)

// Find and FindIndex -> return the first value within array

const years = [1990, 1993, 1997, 2000, 2004, 2008, 2012, 2014, 2017, 2018, 2021, 2023]

const findGreaterThan2001 = years.find(year => year > 2001)
const findIndexGreaterThan2001 = years.findIndex(year => year > 2001)


console.log(years)
console.log(findGreaterThan2001)
console.log(findIndexGreaterThan2001)

// Slice

const producers = ['Fred Again', 'Tiesto', 'Armin', 'David Guetta', 'Martin Garrix', 'Kygo']

console.log(producers.slice(2))
console.log(producers.slice(2,6,2))
console.log(producers.slice(-2))

// Spread Operation

// copying an Array

const originalArray = [1,2,3,4,5,6]
const copyArray = [...originalArray]
console.log(originalArray)
console.log(copyArray)

const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [...array1, ...array2]

console.log(array1)
console.log(array2)
console.log(array3)

// arrays as parameters

function sum (a, b, c) {
    return a + b + c
}

const array4 = [1,2,3]
const result1 = sum(...array4)
console.log(result1)





















