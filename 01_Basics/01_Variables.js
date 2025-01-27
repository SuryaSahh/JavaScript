const accountId=23522
let accountEmail="sahsurya09@gmail.com"
var accountPassword="12345"
accountCity="biratnagar";
let accountState;

// accountId=2  not allowed
accountEmail="abc12@gmail.com"
accountPassword="54321"
accountCity="KTM"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// prefere not to use var because issur in block scope and functional scope