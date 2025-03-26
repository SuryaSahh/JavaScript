// Reduce //using while shoppingCart

const arr=[1,2,3,4,5,6,7,8,9]
const total = arr.reduce(function(acc,curr){
    console.log(`accumulator : ${acc} & currentval : ${curr}`)  // 1st accumulator takes 0
    return acc+curr   
},0)   //0 is initial value
console.log(total)

// using arrowfunction
const total2 = arr.reduce((acc,curr) => acc+curr,0)
console.log(total2)


// ***********example shoppingCart**********

const shoppingCart=[
    {
        itemName : "js course",
        price : 1999
    },
    {
        itemName : "py course",
        price : 999
    },
    {
        itemName : "dataScience course",
        price : 5999
    }
]
const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(priceToPay)