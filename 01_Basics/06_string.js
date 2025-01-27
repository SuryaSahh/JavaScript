// string is defined 
// way-1
const name="surya"
const roll = 21053331
console.log(name +"_"+ roll) /*avoid this process*/
console.log(`My name is ${name} and my roll number is ${roll}`)

// way-2
// stack
const str=new String('surya narayan sah')
// treat as a object of string
// contain many methods
console.log(str.split('_'))
console.log(str.length)
console.log(str[1])
console.log(str.toUpperCase())
console.log(str.charAt(2))
console.log(str.indexOf('n'))
console.log(str.substring(0,4)) /*-ve not included*/
console.log(str.slice(-8,4)) /*-ve included*/

const str2= "   surya%20sah@gmail.com   "
console.log(str2.trim())
console.log(str2.replace('%20','_'))
console.log(str2.includes('surya'))
