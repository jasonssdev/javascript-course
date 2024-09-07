
// Get the parent element by ID
const parent = document.getElementById("parent")
console.log(parent)

// Get the child element by children method
const children = parent.children
console.log(children)

// Get the first child by Fisrt Element Child method
const firstChild = parent.firstElementChild
console.log(firstChild)

// Get the last child by last element child method
const lastChild = parent.lastElementChild
console.log(lastChild)

const previousSibling = parent.previousElementSibling
console.log(previousSibling)

const nextSibling = parent.nextElementSibling
console.log(nextSibling)


const child2 = document.querySelector('li')
console.log('child2',child2)

const parent2 = child2.parentNode
console.log('parent2',parent2)

const grandParent = child2.parentElement
console.log('grand parent',grandParent)

const grandGrandParent = child2.closest("menu")
console.log('grandGrandParent',grandGrandParent)








