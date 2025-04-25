const user={
    username : "Surya",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`User ${this.username} has logged in ${this.loginCount} times`);
        console.log(this)
    }
} 
// console.log(user.username);
// console.log(user.getUserDetails());

// const promise1 = new Promise() //new is constructor function => allow to create multiple instances of the same object
// const date = new Date() 

function User(username, loginCount, signedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Hello ${this.username}`);
    }
    return this
}
// const user1 =  User("Surya", 8, true) // this will return the object
// const user2 = User("John", 5, false) // this overwrites the previous object
const user1 = new User("Surya", 8, true)
const user2 = new User("John", 5, false)
console.log(user1.constructor)
console.log(user1)
console.log(user2)
// "new" create the empty object called instance and return it
// new keyword does the following things
// step1 : create an empty object
// step2 : set the prototype of the object to the constructor function's prototype
// step3 : bind the this keyword to the new object
// step4 : return the new object

