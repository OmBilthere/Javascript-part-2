// Promise ka type object hota
// const PromiseOne = new Promise((resolve , reject) =>{
//     setInterval(() => {
//         console.log("Async Task 1")
//         resolve()
//     }, 1000);

// })

// PromiseOne.then(()=>{
//     console.log("Async 1 resolved")
// })


// 2nd promise

// new Promise((resolve , reject) =>{
//     setInterval(() => {
//         console.log("Async 2 resolved")
//     }, 1000);
// }).then(()=>{
//     console.log("Async 2 resolved")
// })

// 3rd promise
//  const promiseThree = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve({username: "Om" , Email : "Ombilthere953@gmail.com"})
//     }, 1000);
//  })
// // resolve ka seedha connection then se hota h resolve m pass ki hui
// values the m aati h jaise resolve m jo name aur email h wo then receive krega user m
// ese hi aage reject se related bhi then ke jaisa catch() aayga

//  promiseThree.then((user)=>{
//     console.log(user) 
//  })

 //4th promise
//  const promise = new Promise((resolve, reject)=>{
//     setInterval(() => {
//         let error = true// toggle krne se then catch execute honge
//         if(!error) {
//             resolve({username: "Om" , password: "12345"})
//         }
//         else {
//             reject('ERROR: Something is Wrong')
//         }
//     }, 1000);
//  })
// promise.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=> {
//     console.log(error)
// }).finally(()=>{
//     console.log("ye hamesa hi execute hoga btane ke liye ki promise ka aakhir hua kya")
// })
// upar chaining use ki h isme return krne wala aage wale ko value args ke jaise 
// bhej deta h agar sab condition ke hisab se chlta h to then execute hoga nhi to
// catch chelga error ke time

// 5th promise 
// const promiseFive = new Promise((resolve, reject)=>{
//    setTimeout(() => {
//       let error = true
//         if(!error) {
//             resolve({username: "JS" , password: "143"})
//         }
//         else {
//             reject('ERROR: Js is Wrong')
//         }
//    }, 1000);
// })

// async function consumePromiseFive() {
//   try  {
//     const response = await promiseFive
//     console.log(response)
//     }
//     catch(error) {
//         console.log(error)
//     }
// }
// consumePromiseFive()



//  fetching
// async function getaAllUsers() {

//     try {
//   const response =  await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json() // response json m badlega to bhi time lega isliye await krna padega

//    console.log(data) 

//  }

//    catch(error) {

//     console.log("Not fetched" , error)

//   }
// }
// getaAllUsers()

// fetching by-   .then  & .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
   return response.json()
})
.then((res)=>{
    console.log(res)
})
.catch( function (error) { 
    console.log("Something is Wrong" , error)
})