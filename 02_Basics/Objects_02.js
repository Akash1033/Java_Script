// const tinderUser = new Object()  //Singleton Object
const tinderUser = {}

tinderUser.id ="123abc"
tinderUser.name = "Akash"
tinderUser.isLoggedIn = false


// console.log(tinderUser)
const regularUser = {
    email :"abc@123gmail.com",
    fullname:{
        userfullname :{
            firstname : "Akash ",
            lastname :  "Vohra"

        }
    }
}
console.log(regularUser.email)
console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {
    1 : "A", 2 : "B", 3 : "C"
}
const obj2 = {
    4 : "D" , 5 : "E"
}

// const obj3  = { obj1 , obj2}
const obj3 = Object.assign( obj1,obj2)
console.log()
console.log(obj3)