/* 
Promise

State:
1. pending
2. fullfilled
3. rejected

Callbacks:
1. resolve
2. reject

Method:
then()
catch()
*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let operationuSuccesfull = true
        if (operationuSuccesfull) {
            resolve('Succesfull Operation')
        } else {
            reject('Operation failed')
        }
    }, 2000)
})

promise
    .then((successMessage) => {
        console.log(successMessage)
    })
    .catch((errorMessage) => {
        console.log(errorMessage)
    })
