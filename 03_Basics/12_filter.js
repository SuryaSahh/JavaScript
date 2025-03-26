// filter => for each element also given condition

const num=[1,2,3,4,5,6]
// 1
// num.filter(())=> //call back function
let newnum= num.filter((value)=>value<4)
console.log(newnum)

// 2
const newnum2= num.filter((value)=>{
    return value<4
})
console.log(newnum2)

// forEach
const num2=[]
num.forEach((value)=>{
    if(value<4){
        num2.push(value)
    }
})
console.log(num2)