class User {
    constructor(username) {
        this.username= username
    } 
    logme() {
        console.log(`username is ${this.username}`)

    }
    
}


class Teacher extends User {
    constructor(username , email , password) {
        super(username) // ye parent class m jake name set krdega aur this ko bhi apne hi saath le jayga
      // hume kuch nhi likhna is baar (myclass.js m alg tha)   
        this.email = email
        this.password = password
    }

    addCourse () {
        console.log(`A new course created by ${this.username}`)
    }
}


const chai = new Teacher("chai" , "chai@gmail.com" , "123")
chai.addCourse()
const masalachai = new User("masalachai")
