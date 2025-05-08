class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value;
    }
    get password(){     //return password 
        // return this._password.toUpperCase()
        return `${this._password.toUpperCase()}surya`
    }
    set password(value){     //store password in a private variable (_password)
        this._password = value;
    }
}

const surya = new User("surya@gmail.com","abc")
console.log(surya.password)
console.log(surya.email)