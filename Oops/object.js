function multiply (num) {
    return num*5
}

multiply.power = 2
// hum yaha function m . lga rhe h aur function ko object jaise behave krwa rhe h
console.log(multiply.power) // 2 print krega hum yaha function ko object jaise treat kr rhe h
console.log(multiply.prototype) // {} print krega maanlo upar wale function ki koi property hoti jaise this to wo
// isi prototype ke andar aati  h
// JS m sabhi cheeje at the end object hi h ek function function bhi h aur object bhi h

function createUser(username , score) {
    this.username = username
    this.score = score

}
// ab agar function ek object h aur object m .lgake function hote h
// to kya hum function ke liye function bana skte h jo humne define kiye ho 
// answer is yes 
// eg-
createUser.prototype.increment = function(){
    this.score++
     //agar this nhi lagayenge to nhi pta chal payga ki kiska score badhana h

}

createUser.prototype.printMe = function () {
    console.log(`price is ${this.score}`)
}


const chai = new createUser("Chai", 25)
const tea = new createUser("tea" , 30)
chai.printMe()  // ab isme direct likh skte h .prototype lgane ki jaroorat nhi h jaise doosre object pe direct lga 
// dete h vaise hi yaha bhi chlega

// ab upar likhe code m new keyword lgana hi padega nhi to error dega 
// ab hua ye h ki createuser m new properties (like function jo kiye h) add hui h isiliye hume new oject bnana padega jisme ye properties bhi hogi


