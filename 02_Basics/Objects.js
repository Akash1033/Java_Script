// Singleton

// Object literals
// Object.create  // constructor method to make an object

const mysym  = Symbol("key1")

const jsUser = {
    name : "Akash",
    "Full name" :"Akash vohra",
    [mysym]:"key1",
    Age : 20,
    location : "Punjab",
    email : "akashvohra@gmail.com", 
    isLoggedIn :false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["Full name"])
console.log(jsUser["email"])
console.log(jsUser["name"])
console.log(jsUser[mysym])

console.log(jsUser)

jsUser.email = "akash@google.com"
jsUser.isLoggedIn = true
// Object.freeze(jsUser)
jsUser.email= "abc@gmail.com"

console.log(jsUser);


jsUser.greeting = function(){
    console.log("Hello JS Users")
}
console.log(jsUser.greeting());
