function Setname(username) {
    this.username = username
    console.log("Called")
}

function createUser (username , email , password) {
    
    Setname.call(this, username) // func ke andar func likhne ke liye this pass krna padta h nhi to 
    // this ka context call kiye gy func m nhi aayga global context aayga

    this.email = email
    this.password = password

}
const Chai = new createUser("chai" , "chai12@fb.com" , "123" )
console.log(Chai)