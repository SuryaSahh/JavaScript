// Data is stored and accessed in the memory in two ways

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


// ********************* Memory *****************
// stack(primitive)=> copy
// Heap(non-primitive)=> reference

// stack : copy of the data
let name="surya"
let anothername=name
anothername = "fire"
console.log(name)
console.log(anothername)

// heap : reference of the data
let userone={
    email : "123@gmail.com",
    age : 23
}
let usertwo = userone
usertwo.email="abc@gmail.com"
console.log(userone.email)
console.log(usertwo.email)