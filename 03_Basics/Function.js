function Add(a,b){
    // let result = a+b
    // return result
    return a+b
}

// Add(5,"4")
// Add(5,"a")
// Add(5,null)

const result =  Add(5,3)
console.log(`Result is : ${result}`)

function loginUserMessage(username = "Sam"){
    // if (username === undefined){
    //     console.log("plz enter a username");
    //     return 
    // }
    if (!username){
        console.log("plz enter a username");
        return 
    }
    return `${username} just logged In`
}

// console.log(loginUserMessage("Akash"))
// console.log(loginUserMessage("Aman"))



function calculateCartPrice (val1, val2,...num1){  //... rest operator which helps to take multiple parameters
    return num1
}
// console.log(calculateCartPrice(200, 400 , 500,700))

const user = {
    username : "Akash",
    price :199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and Price is ${anyobject.price}`)
}

// handleobject(user)
handleobject({
    username : "Aman Vohra",
    price: 199
})

const myNewArray  = [200,400,60,800,1000]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,300,500]))
