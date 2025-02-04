// {} => scope
if(true){
    let a=0
    const b=20
    var c=30
}
// console.log(a)  //a,b not available outside which is good 
// console.log(b)
console.log(c) // 30 => c is available which is problem so 'var' is not usable

// **********interview question************8
// In 'Browser' and 'Code environment with node'   =>   Global scope acts differently


// ******Nested scope***********
function one(){      //parent function
    const name = "surya"
    function two(){     //child function
        const age=23
        console.log(name)
        console.log(age)
    }
    // console.log(age)  cant access
    two()
}
one()


// **************interestion**********
function addone(num){
    return num+1
}
// addone(5)
console.log(addone(5))

const addtwo=function(num){   //addtwo is expression here
    return num+2
}
console.log(addtwo(5))

