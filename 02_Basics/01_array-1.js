// Resizable
// mix of different dataTypes
// array copy operations create shallow copies =>  means that only the references (or memory addresses) of the elements are copied, not the actual data. Consequently, changes to the elements in the copied array can affect the original array

const arr=[0,1,2,3,4,5]
const heros=["saktimaan","naagraj"]
const arr2=new Array(1,2,3,4)

console.log(arr)
console.log(arr[2])

// ************Array Methods***************
// push and pop
arr.push(9) //insert 9 after last index [0,1,2,3,4,5,9]
arr.pop()   //Delete last index [0,1,2,3,4,5]
console.log(arr)

// unshift and shift
arr.unshift(9) //insert 9 at first index [9,0,1,2,3,4,5]
arr.shift()   //Delete first index [0,1,2,3,4,5]

console.log(arr.includes(10)) //false
console.log(arr.indexOf(10)) // -1 if not present
console.log(arr.indexOf(3)) // 3

const arr3 = arr.join() //convert array into string seperated by comma ','
console.log(arr3) //0,1,2,3,4,5   
console.log(typeof arr3) //string

// ******important for interview ***********
// slice & splice
// slice : no change in original array
// splice : Array manipulation => delete portion from original array

console.log("A ", arr) // [0,1,2,3,4,5]
const na1=arr.slice(1,3) // not include 3rd index element
console.log(na1) // [1,2]
console.log("B ", arr) // [0,1,2,3,4,5]

const na2=arr.splice(1,3) // Array manipulation
console.log(na2) // [1,2,3] include 3rd index element
console.log("C ", arr) //[0,4,5]  splice element is deleted