// Primitive

// 7 types : String, Number, Boolean , null, undefined, symbol, BigInt 

const score = 100
const scorevalue=100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

console.log(id === anotherId)
 
const bigNumber = 43321641484194626461649n
console.log(typeof(bigNumber))
// Reference(Non-Primitive)
// Array, Objects, Functions

const heros = ["Shaktimaan", "Iron Man", "Superman"];
let myObj={
    name :"Akash",
    Age : 22,
    Course : "CSE"
}

const myFunction = function(){
    console.log("Hello World!")
}
console.log(typeof myFunction)
console.log(typeof myObj)
myFunction()



// *************************************************************************************************************************
// Stack and Heap Memory
// Stack (Primitive) , Heap (Non-Primitive)
// stack gives copy of original values and you change value in the copied content not in the original content
// Heap gives the references of original content so when you change the another value it changes the original content 

let myYoutubeChannelName = "Akashvohragmaildotcom"
let anothername = myYoutubeChannelName
anothername = "Amanvohragmail"
console.log(myYoutubeChannelName);
console.log(anothername);


let userOne = {
    email :"akash123@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email ="akash@gndec.ac.in"

console.log(userOne.email);
console.log(userTwo.email);