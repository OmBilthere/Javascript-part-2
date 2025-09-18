const user = {
    username: "Om" , 
    loginCnt: 10 , 
    signedIn: true ,
    getUserInfo: ()=>{
        console.log("Got user detail from Database")
        // console.log(`Username : ${username}`) ye undefined hi dega 
        console.log(`username : $ {this.username}`) // since username is not the variable but it is a 
        //  element of a object so we need to tell we are demanding username from this context
        //  console.log(this)// ye poora current context de dega
    }
}    
    // console.log(user.getUserInfo())

    //  console.log(this) global context m this ki value  empty paranthesis aati h
    // jabki browser m global context window object hota h isiliye bhut saari cheeje mil jaati h



// constructor
// const promise = new Promise ()
// new keyword hi constructor h jo ki naya instance create kr deta h


 function myuser( username , loginCnt , signedIn){
    this.username = username
    this.loginCnt = loginCnt 
    this.signedIn = signedIn
    // this keyword btata h ki jo this ke saath likha h wo variable h aur jo right side m 
    // likha h wo value assign krni h
    
     // return this
     // Note : ye without new keyword ke return krna hi pdega (return whole this) nhi to undefined dega
     // aur new keyword ke saath return kro chahe na kro koi farak nhi padta


    
 }
 
//  const userOne = myuser("Om" , 20 , true)
//  const userTwo = myuser("MaharajOm" , 25 , false)
//  console.log(userOne) // yha hum dekhta h ki userTwo ne one ko overwrite kr liye 
 // ye ek hi instance ke karan hua isi prblm ko avoid krne ke liye hum new keyword
 // use krte h

//   const userOne =  new myuser("Om" , 20 , true)
//  const userTwo =new  myuser("MaharajOm" , 25 , false)
//  console.log(userOne) // ab sahi print krega

