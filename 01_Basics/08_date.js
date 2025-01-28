let date = new Date()

console.log(typeof date)   /* Object */

console.log(date) /*not readable so lets optimize*/
console.log(date.toString())
console.log(date.toDateString())
console.log(date.toISOString())
console.log(date.toJSON())
console.log(date.toLocaleDateString())
console.log(date.toLocaleString())

// Note : if month assign like array then it starts from '0' in javasript , '0' is index
let mydate = new Date(2025,0,28)
console.log(mydate.toDateString())

// we can also assign like date and time
let mydate2 = new Date(2025,0,28,7,56)
console.log(mydate2.toLocaleString())

// also assign like
let mydate3= new Date("01-28-2025")
console.log(mydate3.toLocaleString())


// *****************TimeStamp******************

let timeStamp = Date.now()
console.log(timeStamp) //1738074770155 => in milisecond of now calculated from jan 1,1970
console.log(mydate3.getTime()); //1738022400000 =>milisec of 01-28-2025 from jan 1,1970

// converting from milisec to second
console.log(Date.now()) //milisecond
console.log(Math.floor(Date.now()/1000)) //second

// also get specific month and time
let date3= new Date();
console.log(date3)
console.log(date3.getMonth())
console.log(date3.getDay())

console.log(date3.toLocaleString('default',{
    weekday : "long"
}))