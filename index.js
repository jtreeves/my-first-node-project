const { beBasic, add, subtract } = require('./myModule')

// THIS SHOULD WORK AS A REPLACEMENT FOR THE ABOVE, BUT IT DOESN'T
// const myModule = require('./myModule.js')

let name = 'Jackson Reeves'
console.log(name)

function printName(person) {
    return `Hello, ${person}`
}

console.log(printName(name))

console.log(beBasic())

console.log(add(5, 50))

console.log(subtract(5, 50))