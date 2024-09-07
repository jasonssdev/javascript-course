const container = document.querySelector(".container")
console.log(container)

const button = document.querySelector("button")
console.log(button)

// add event lisetener is a method with 2 parameters, the event + code

container.addEventListener("mouseover", () => {
    container.style.backgroundColor = 'blue'
})

container.addEventListener("mouseout", () => {
    container.style.backgroundColor = 'red'
})

// button.addEventListener("click", () => {
//     alert('Button clicked')
// })

const buttonClickCallback = () => {
    alert("Button clicked")
}

button.addEventListener("click", buttonClickCallback)

setTimeout(() => {
    button.removeEventListener("click", buttonClickCallback)
}, 2000)