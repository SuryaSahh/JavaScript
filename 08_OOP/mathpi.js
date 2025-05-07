const descripter = Object.getOwnPropertyDescriptor(Math, "PI")   //(math is object, PI is properties): PI is the properties of the math object
// console.log(descripter) 

// console.log(Math.PI); // 3.141592653589793
// Math.PI = 5;   //Math.PI cannot be overwritten : Math.PI is a read-only property of the built-in Math object
// console.log(Math.PI); // Still 3.141592653589793

// Note************
// It's defined as a non-writable, non-enumerable, and non-configurable property. That means:
// You cannot change its value.
// It won't show up in loops like for...in.
// You cannot delete it or redefine its descriptor.

const chai = {
    name : 'ginger chai',
    price : 235,
    isAvailable : true,

    orderChai : function(){
        console.log("chai nahi bani")
    }
}

Object.defineProperty(chai,'name',{
    // writable : false,
    enumerable : false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for(let [key,value] of Object.entries(chai)){
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`)
    }
}