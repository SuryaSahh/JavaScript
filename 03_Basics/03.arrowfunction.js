// ***************interview**************
// this refers to the global object
// global objects like:
// window => in browser environment
// global => in node.js

const user={
    name : "surya",
    age : 23,
    welcome : function(){
        console.log(`${this.name}, welcome to my website`) //this => use to access properties of current context
        console.log(this) // current context
    }
}
user.welcome()
user.name="fire"
user.welcome()
console.log(this) //this => has no current context so output = {}


// ************ways to define function*************
// 1st 
function chai(){
    let user="surya"
    console.log(this.name)  //undefined  => only work in object not in function 
}
chai()

// 2nd
const chai2=function(){
    let name = "surya"
    console.log(this.name) //undefined
}
chai2()

// 3rd
const chai3=()=> {
    let name = "surya"
    console.log(this.username) //undefined
}
chai3()