function User(email, password){
    this._email = email;
    this._password = password;

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email.toUpperCase()
        },
        set : function(value){
            this._email = value
        }
    })
}
const surya = new User("surya@gmail.com","abc")
// console.log(surya.password)
console.log(surya.email)