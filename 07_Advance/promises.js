const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network call
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()  //now .then connect with resolve
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
}) //.then has direct connection with resolve


// 2nd promise : Direct method************

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 is resolved")
})


// 3rd promise
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"surya",
            email : "surya@example.com"
        })
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})

// 4th promise 
const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "surya",
                password : "123"
            })
        }else{
                reject('ERROR : something went wrong')
        }
    },1000)
})

// chaining method value of return from first .then is passes to another .then and so on
promiseFour
.then((user)=>{
    console.log(user)
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("Promise is either resolved or rejected"))  // final always execute


// 5th promise //handle using async await
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "js",
                password : "647"
            })
        }else{
                reject('ERROR : JS went wrong')
        }
    },1000)
})
// Async functions cannot handle errors directly; 
// they need to be gracefully managed using try...catch.
async function consumePromiseFive(){
    try{
    const response = await promiseFive
    console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// 6th
// from api
// async function getAllUsers(){
//     try{
//         const response = await fetch('https://randomuser.me/api/')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log('E:', error)
//     }
// }
// getAllUsers()

fetch('https://randomuser.me/api/')
.then((response)={
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))



