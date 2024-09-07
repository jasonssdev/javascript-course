//  for

let songsList = ['Billie', 'Hannah', 'Marea', 'Roze']

for (let i = 0; i < songsList.length; i++) {
    console.log(songsList[i])
}

// For of
// iterable objects such as: arrays, strings

for (song of songsList) {
    console.log(song)
}

// for in
// iterable on objects (key:values)

const songDuration = {
    Billie: '3:17',
    Hannah: '3:16',
    Marea: '4:45',
    Roze: '3:49'
}

for (song in songDuration) {
    console.log(song)
}

for (song in songDuration) {
    console.log(`${song}......${songDuration[song]}`)
}

// While

let counter = 0

while ( counter < 10) {
    console.log(counter)
    counter ++
}

// Do While

let counter2 = 0


do {
    console.log(counter2)
    counter2++
} while (counter2 < 10)
