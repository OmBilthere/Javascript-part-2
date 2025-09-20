// class User {
//     constructor (email , password ) {
//         this.email = email
//         this.password = password

//     }
    // isme get ka kaam ye ki database m to value hi store ho rhi h but jab bhi 
    // user password ki demand krta h use modified pass milta h jaise yaha eg ke liye humne 
    // use uppercase m badal liya h

    // get password () {
    //     return this._password.toUpperCase() 
    // }
   
    // set password (value) {
    //     this._password = value 
        
        // ab upar constructor m bhi password set ho rha h aur neeche bhi esi condition m overflow ho jata h
        // isi problm ko solve krne ke liye underscore laga dete h aur set m lgaya to get m bhi lga dete h 

    // } 

//     set email (value) {
//         this._email = value
//     }
//      get email () {
//         return this._email.toUpperCase() 
//     }
// } 
// const om = new User ("om@fb.com" , "abcdefg")
// console.log(om.password , om.email)



//  neeche purana tarika h jb class nhi thi

// function User (email , password) {
//     this._email = email 
//     this._password = password
//     Object.defineProperty(this , 'email' , {

//         get: function () {
//             return this._email.toUpperCase()
//         },

//         set: function(value) {
//             this._email = value
//         }
//     })



//     Object.defineProperty(this , 'password' , {

//         get: function () {
//             return this._password.toUpperCase()
//         },

//         set: function(value) {
//             this._password = value
//         }
//     })
// }


// const chai = new User("om@123.gmail.com" , "xyz")
// console.log(chai.password)


// object based getter setter  ye bhut rare use hota h ab
const User = {
    _email: 'ombilthere@gmail.com' ,
    _password: "abc" ,
    

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }

     
}
const tea = Object.create(User) 
console.log(tea.email)

