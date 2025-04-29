// Dates

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(myDate.toJSON());

console.log(typeof myDate)

// let myCreateDate = new Date(2025,0,2)
// let myCreateDate = new Date(2025,0,2,4,0)
// let myCreateDate = new Date("2005-01-02")
let myCreatedDate = new Date("02-01-2005")
console.log(myCreatedDate.toLocaleString())


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now()/1000));



let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMilliseconds());
console.log(newDate.getMonth()+1);


console.log(newDate.toLocaleString('default' , {
    weekday :"long"
}))
