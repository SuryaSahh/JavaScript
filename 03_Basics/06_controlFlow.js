// if
// if(true){  //if true enter, if false no enter
// }
// == only compare value
// === compare value as well as dataType

// usable => const & let
// var => completely global

// Implicity 
const balance = 1000
if(balance>500) console.log("test"), console.log("test2");  //not proper way to define

// syntex:
// if(){
// } elseif(){
// } else{
// }



// proper way to use it in real life
// ex 1:
const userLoggedIn = true
const debitCard = true
if(userLoggedIn && debitCard){
    console.log("Allow to buy")
}

// ex 2:
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}