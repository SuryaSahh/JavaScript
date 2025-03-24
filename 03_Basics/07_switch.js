const month = 3
switch(month){
    case 1 : console.log("jan");
    break;
    case 2 : console.log("feb");
    break;
    case 3 : console.log("march");
    break;
    default :
    console.log("default");
    break;
}   //if break isnot given then it matches all the cases from the given key value except default.


// falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values: "0", 'false', " ", [], {}, function(){}


// note: "" or ''  both are same
// false==0 => true
// false=='' => true
// false=='' => true