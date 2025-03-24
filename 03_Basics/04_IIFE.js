// function defination
function one(){
    console.log(`DB connected`)
}
one()   //execution call 

// Using IIFE
// () => Means block
(function chai() {
    console.log(`DB connected to chai`);
})();   //envoked function doesnot know where to end so need to use ';' to end 


// (function defination)(execution call)


// *************Interview****************
// Due to have problem from global scope pollution & to remove global scope variables or any declaration pollution we are using 'IIFE'


// IIFE using Arrowfunction
(function two (){    //named IIFE
    console.log(`DB connected two`);
})();


(()=>{    //unnamed IIFE
    console.log(`DB connected three`)
})();


// also pass argument
((name)=>{    //unnamed IIFE
    console.log(`DB connected four ${name}`)
})(surya);