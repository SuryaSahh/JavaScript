const user={
    username : "Surya",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`User ${this.username} has logged in ${this.loginCount} times`);
        console.log(this)
    }
} 
console.log(user.username);
console.log(user.getUserDetails());
