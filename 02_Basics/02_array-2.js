const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// *******Methods of merging of arrays**********
// 1st method - not usable
marvel.push(dc)  //work in existing array
console.log(marvel) // one array in to another 
console.log(marvel[3][1])  // flash => type is string

// 2nd method - not usually use
const newHeros = marvel.concat(dc)
console.log(newHeros)

// 3rd method - must used
// spread method
const allheros = [...marvel,...dc]
console.log(allheros)

// complex - rarely come
const anotherArr=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realArr= anotherArr.flat(Infinity)
console.log(realArr) //All elements in single array


// **********Ask and convert in Array***********
// Ask
console.log(Array.isArray("surya"))  // false
// convert string into array
console.log(Array.from("surya"))

// **********interview qst************
console.log(Array.from({name : "surya"}))  // [] => not iterable object so not able to convert
//name=>Key and surya => value

// Array.of() creates an array from individual arguments
// Array.from() converts iterable or array-like objects 

// Array.of()
let s1=100
let s2=200
let s3=300
console.log(Array.of(s1,s2,s3))