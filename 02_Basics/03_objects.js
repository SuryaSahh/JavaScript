// singleton => single object created from constructor (object.create)

// Multipal object from literals
// object literals
// const user = {} => object

// ****************interview****************
// checking how to access different object
// symbol should be defined before
const symbol =Symbol("key")

const user={
    name : "surya",  //name is an identifier, treats it as a string ("name" internally)
    "fullName" : "surya sah",    //"fullName" is explicitly a string key
    age : 23,
    email : "sahsurya09@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"],
    // symbol
    symbol : "mykey",   //not treated as symbol, it is string key
    [symbol] : "mykey2"  // symbol key
}
// ways to access
console.log(user.name) // direct access by dot
console.log(user["name"]) //also by this method

console.log(user["fullName"])  //only accessed by this method
console.log(user.lastLoginDays[1]) //values in array

// **********interview qst => how the symbol is accessed****************
console.log(user.symbol)   //not symbol, it is string
console.log(user[symbol])  // symbol is accessed like this

// change value of object
user.email = "123@gmail.com"  // change the original value

// *******freeze object********
Object.freeze(user)  //object becomes immutable,cannot modify, add, or delete its properties
user.email ="432@gmail.com" //won't change
console.log(user)


// *************function***************
// create
user.greeting = function(){
    console.log("hello user")
}
user.greeting2 = function(){
    console.log(`hello user, ${this.name}`) //this is the refrence of same object => access all properties
}

// call
user.greeting()
user.greeting2()