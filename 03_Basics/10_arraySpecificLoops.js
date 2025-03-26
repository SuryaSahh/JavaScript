// for of loop
// ["","",""]  string
// [{},{},{}]  object

// syntax
// for(const iterator of object){
// }

// eg:
const arr = [1,2,3,4,5]
for(const num of arr){
    console.log(num);
}

const str="surya"
for(const i of str){
    console.log(`${i}`)
}


// ************Maps => object********** //hold key-value pairs, unique value and also in order
// [key,value]
const map = new Map();
map.set('IN',"india")
map.set('USA',"America")
map.set('Fr',"france")
console.log(map)

for(const[key,value] of map){
    console.log(key,':-',value)
}

// object => for in loop
const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb : 'ruby',
    swift : "swift by app"
}
for(const key in myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


