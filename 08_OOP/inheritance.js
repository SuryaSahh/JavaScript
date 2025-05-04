class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends User{
    constructor(username, email, password){
        super(username)
        // 'super' calls the constructor of the parent class 'User'
        // This initializes the 'username' property inherited from 'User'
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`)
    }
}

const surya =new teacher("surya", "surya@gmail.com", "1234")
surya.addCourse()
surya.logMe()
const masalaChai = new User('masalachai')
// masalaChai.addCourse()  //no access
masalaChai.logMe()

// checking
console.log(surya instanceof teacher)
console.log(surya instanceof User)
console.log(masalaChai instanceof User)
