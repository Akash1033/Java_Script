const user ={
    username : "Akash",
    price :999,

    welcomeMessage : function(){
        console.log(`${this.username} , Welcome to Website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "Aman Vohra"
// user.welcomeMessage()

// console.log(this)


// function chai (){
//     let username = "Akash"
//     console.log(this.username);
// }
// chai()

// const  chai = function(){
//     let username = "Akash"
//    console.log(this.username);
// }
const  chai = () => {
    let username = "Akash"
   console.log(this);
}
// chai()

// const addTwo = (num1, num2)=>{
//     return num1 + num2
// }
// const addTwo = (num1, num2)=> num1 + num2
const addTwo = (num1, num2)=> (num1 + num2)

console.log(addTwo(3,4))


// const myArray= [1,2,3,4,5]
// myArray.forEach(()=>())
    