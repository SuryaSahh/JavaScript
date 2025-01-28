const no = 400;
console.log(no)

const no1=new Number(100)
console.log(no1)

console.log(no.toString().length)
console.log(no.toFixed(2))

const no2= 234.927
console.log(no2.toPrecision(3))
console.log(no2.toPrecision(4))

const money = 100000000
console.log(money.toLocaleString()) 
console.log(money.toLocaleString('en-IN')) 


// ***************Maths**************
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(3.5))
console.log(Math.ceil(3.2))
console.log(Math.floor(3.9))
console.log(Math.min(3,5,2,7))
console.log(Math.max(2,9,4,2))

console.log(Math.random()) /*range (0-1)*/
console.log(Math.floor(Math.random()*10)+1) /*range(1-10)*/

const min=10
const max=20
console.log(Math.floor(Math.random(max-min)+1)+min)