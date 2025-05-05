class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username : ${this.username}`)
    }
    static createId(){  //you must call it using the class name, not an instance of the class.
        return `123`
    }
}

const surya = new User('surya')
console.log(User.createId())

class teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}
const iphone = new teacher("iphone", "i@phone.com")
iphone.logMe()
console.log(teacher.createId())  //Since static methods are inherited by subclasses, you can call them