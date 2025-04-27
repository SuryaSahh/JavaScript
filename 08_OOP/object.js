function multi(val){
    return val*2
}
// multi.power=2;
console.log(multi(5))
console.log(multi.power=2)
console.log(multi.prototype)

// function  is also treated as a object
// everything inside the javascript is object
// everything => object => null

function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++
}

createuser.prototype.printMe = function(){
    console.log(`price is ${this.score}`)
}

const chai = new createuser("chai", 24)
const tea = createuser("tea", 234)
chai.printMe()