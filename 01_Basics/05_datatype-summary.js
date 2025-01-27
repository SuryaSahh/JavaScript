// Data is stored and accessed in the momory in two ways

// 1. Primitive : call by value(change in the copy of data)
// 7 types : string, Number, Boolean, null, undefined, symbol, BigInt
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId) /*false*/
const bigNumber= 2421543634465235n /*BigInt*/


// Reference(Non-primitive):
// Array, Objects, Functions

const heros = ["saktimaan", "naagraj", "doga"]/* Array */
let myObj = {
    name: "surya", 
    age: 23
}

const myFunction = function () {
    console.log("Hello World")
}

console.log(typeof heros) // "object"
console.log(typeof myObj) // "object"
console.log(typeof myFunction) // "function"
