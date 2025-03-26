// loops:
// 1. for(){}
// 2. while(){}
// 3. do{}while();
// 4. for of loop     // Array specific loop
//["","",""]
// [{},{},{}]
// eg: for(const iteration of object){
// }



// break and continue
for(let i = 0; i<=10;i++){
    if(i==5){
        console.log(`detected 5`)
        continue //break
    }
    console.log(`value of i is ${i}`)
}
// break: output  => directly come outside
// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// detected 5

// continue : output  =>  skipped one value ie 5 skipped
// value of i is 0
// value of i is 1
// value of i is 2
// value of i is 3
// value of i is 4
// detected 5
// value of i is 6
// value of i is 7
// value of i is 8
// value of i is 9
// value of i is 10