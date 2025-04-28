// let myName = "surya     "
// // console.log(myName.trim().length) // 5
// // console.log(myName.length) // 10
// let mychannel = "chai     "
// console.log(myName.truelength)

let myHeros = ["thor", "spiderman", "ironman"]

let herosPower = {
    thor: "hammer",
    spiderman: "swing",
    ironman: "suit",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.surya = function(){
    console.log(`surya is present in all objects`)
}
// herosPower.surya() //surya is present in all objects
// myHeros.surya() //surya is present in all objects

Array.prototype.heySurya = function(){
    console.log(`surya says hi`)
}

myHeros.heySurya() //surya says hi
// herosPower.heySurya()  // only have power to array not object

// ************inheritance************
const User = {
    name : "surya",
    age : 22
}

const teacher = {
    Mekevideo : true
}

const teachingSuppot ={
    isAvailable : false
}

const TASupport ={
    makeAssignment : 'Js assignment',
    fullTime : true,
    __proto__ : teachingSuppot  // inheritance
}

teacher.__proto__ = User // inheritance

// modern way of inheritance
Object.setPrototypeOf(teachingSuppot, User) // inheritance

let anotherUser = "suryasah     "
String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`true length is ${this.trim().length}`)
}
anotherUser.truelength()
"surya".truelength()
"iceTea".truelength()