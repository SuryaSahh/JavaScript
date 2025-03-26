// call back function doesn't have name

// for each loop => highly order function
const coding = ["js","ruby","java","python"]
coding.forEach(function(item){
    console.log(item)
})

// using arrow function
coding.forEach((item)=>{
    console.log(item)
})

// using name function 
coding.forEach(function print(item){
    console.log(item)
})

// interesting******************************
coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})


// Array of object
const coding1=[
    {
        name : "javascript",
        fname : "js"
    },
    {
        name : "java",
        fname : "java"
    },
    {
        name : "python",
        fname : "py"
    }
]

coding1.forEach((item)=>{
    console.log(item.name)
})

// {} => item

// const values=coding1.forEach((item)=>{
//     return item
// })
// console.log(values)   //undefined => forEach doesnt return value