function setUser(username) {
    // complex DB calls
  this.username = username;
  console.log(`called`)
}

function createUser(username, email, password) {
  setUser.call(this, username)
  this.email = email;
  this.password = password;
}

const user = new createUser('surya', 'sah123@gmail.com', '123')
console.log(user)
