class User {
    constructor(username ) {
        this.username= username
    }
    logme () {
        console.log(`username ${this.username}`)
    }
   static createId() {
        return `123`
    }
}

const hitesh = new User("hitesh")
console.log(hitesh.createId()) // 123 dega w/o static 

// ab har baar hum nhi chahte ki humari method har instance ke pass ho 
// isiliye hum static keyword lga dete h 

class Teacher extends User {
    constructor (email, username) {
        this.email= email
        super(username)
    }
}

const iphone = new Teacher ("iphone ", "something@gmail.com ")
iphone.logme() // iphone print krega

console.log(iphone.createId) // error dega static keyword ke karan