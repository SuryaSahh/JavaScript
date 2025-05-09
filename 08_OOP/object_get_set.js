const User = {
    _email : 'surya@gmail.com',  //'_' is used by convention to indicate a private field (not truly private; still accessible)
    _password : "abc",

    get email(){   // 'email' is an accessor property, not a method; it's defined using getter and setter

        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)  // 'tea' inherits from 'User' via prototype
console.log(tea.email)