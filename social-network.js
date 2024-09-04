/*
Requirements

1. as a User should be able to enter user and password
2. the system should be able to validate the user and password 
3. The system should be able to show a welcome message and displays the timeline if the user and password are right
4. the system should be able to show a error message and time should not be displayed if the user and password are wrong.

*/

const readlineSync = require('readline-sync');

const usersDatabase = [
    {
        username: 'Fred',
        password: '123'
    },
    {
        username: 'James',
        password: '456'
    },
    {
        username: 'Tiesto',
        password: '789'
    }
]

const userTimeline = [
    {
        username: 'Kygo',
        timeline: 'This is Tropical House'
    },
    {
        username: 'Armin',
        timeline: 'This is Trance'
    },
    {
        username: 'Tiesto',
        timeline: 'This is Trance'
    },
    {
        username: 'Fred',
        timeline: 'This is Pop'
    }
]


const username = readlineSync.question("username: ")
console.log('Your user name:',username)

const password = readlineSync.question("password: ")
console.log('Your password:',password)

function validUser(username, password) {
    for (let user of usersDatabase) {
        if (user.username === username && user.password === password){
            return true
        } 
    }
    return false
}

function singIn(username, password) {
    if (validUser(username, password)) {
        console.log(`user: ${username} has been valid`)
        printTimeline(username)
    } else {
        console.log(`user: ${username} has not been found`)
    }
}

function printTimeline(username) {
    const isThereTimeline = userTimeline.find(timeline => timeline.username === username)
    if (isThereTimeline) {
        console.log(`User: ${username} told us` , isThereTimeline.timeline)
    } else {
        console.log(`User: ${username} without timline`)
    }
}

singIn(username, password)



