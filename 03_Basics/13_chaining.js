const nums=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const newnums=nums
.map((value)=>value*10) 
.map((value)=>value+1)  // passed updated
.filter((value)=>value>=40) // passed updated

console.log(newnums)