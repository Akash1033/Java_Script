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