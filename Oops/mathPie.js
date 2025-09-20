const descripter = Object.getOwnPropertyDescriptor(Math)
 console.log(Math.PI)

// Math.PI= 5
// console.log(Math.PI) // remains same not change


const chai = {
    name: "ginger chai" , 
    price: 250 ,
    isAvailable: true ,
    orderchai: function() {
        console.log("chai nahi bni")
    }
}
console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai , "name"))


//changing property  of above chai object

Object.defineProperty(chai , 'name' , {
    writable: false , 
    enumerable: false
})


// object pe nhi lgta for of lekin neeche jaise diy h vaisa krke lga skte h

for (const [key , val] of Object.entries(chai)) {
    if(typeof val != 'function')
    console.log( `key: ${key} val: ${val}`)
}