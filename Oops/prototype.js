

let myhero = [ "thor " , "spiderman"]
let power = {
    thor: "hammer" ,
    spiderman: "sling" ,
    getSpiderPower: function () {
      //  console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.Om = function () {
  //  console.log("Humne object m hi bna diya isiliye sab jgh available ho jayga")

}
power.Om()


// array ke andar inject krke dekhte h new property

Array.prototype.heyOm = function () {
    //console.log("Hii Om")

}

// myhero.heyOm()   --> ise mil jayga
// power.heyOm() --> object ko nhi milega ye  


// Inheritance 

const user = { 
    username : "Om" , 
    Email: "Ombilthere953@gmail.com"
}
const Teacher = {

    makevideo: true
}
const TeachingSupport = {

 isavailable : false

}
const TAsupport = {
    makeAssignment: 'JS assignment',
    fulltime: true ,
    __proto__ :TeachingSupport //prototypal inheritance
}

Teacher.__proto__ = user // prototypal inheritance

// modern syntex

Object.setPrototypeOf(TeachingSupport , Teacher) 

let mychannel  = "chai      "
// console.log(mychannel.trueLength)
// we want to get only charactor not space

String.prototype.truelength = function (){
   console.log(`${this}`) // mychannel ne call kiya to wohi this hoga
   console.log(`True length is : ${this.trim().length}`)
}

mychannel.truelength()