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
// const obj3 = Object.assign( {},obj1,obj2)

const obj3 = { ...obj1, ...obj2}
console.log(obj1)
console.log(obj3)


const User = [
    {
        id:"akash123"
    },
    {
        id:"akash123"
    },
    {
        id:"akash123"
    }
]

User[1].id
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course  = {
    coursename: "JAVA MASTERY",
    price : 999,
    courseInstructor : "Akash"
}

// course.courseInstructor
const {courseInstructor :Teacher} = course

console.log(Teacher);