function name(){
    console.log("s"),
    console.log("u"),
    console.log("r"),
    console.log("y"),
    console.log("a")
}
name()   // name is reference and name() is execution

// *******sum*********
function sum(n1,n2){  //n1,n2 is parameters
    return n1+n2
}
const result=sum(2,5) //2,3 is arguments
console.log(result)

// Note => if no argument is passed then it returns undefined


// *********if statement*************
function user(username = "salen") { 
    // The default value "salen" will be used if no argument is provided.

    // Check if the username is explicitly empty, null, or undefined
    if (username === null || username === "") {  // (!username)
        console.log("Please enter a valid username");
        return;
    }

    // If an argument is provided, it overrides the default value
    return `${username} just logged in`;
}

// ***** Function Calls *****
console.log(user());          // Output: "salen just logged in"
console.log(user("Surya"));   // Output: "Surya just logged in"
console.log(user(null));      // Output: "Please enter a valid username"
console.log(user(""));        // Output: "Please enter a valid username"
console.log(user(undefined)); // Still uses default "salen" → Output: "salen just logged in"



// ***************Multipal argument is passed******************
function calculateCartPrice(n1,n2,...nums){ //n1=>100, n2=>200 ,n3=>remaining
    return nums
}
console.log(calculateCartPrice(100,200,300,400,500,600)) //output => [300,400,500,600] , using ...parameter means result will be in array


// ******************pass object in function***************
const user2={
    name : "surya",
    age : 23
}
function handleobject(anyobject){
    console.log(`user name is ${user2.name} and age is ${user2.age}`)
}
handleobject(user2)  //we can also pass object directly as a argument


// ****************pass Array in function*****************
const newArray = [100,200,300,400,500]
function secondValue(getArray){
    return getArray[1]
}
console.log(secondValue(newArray))  //also pass array directly as argument
